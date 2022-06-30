import React, { useEffect, useState } from 'react';
import './App.css';
import ChartTvl from './components/chartTvl';
import ChartApr from './components/chartApr';
import type { Asset, SelectedFarm, History } from "./types/types";
import useWindowDimensions from './components/hooks/getWindowDimensions';

function App() {
  const { height, width } = useWindowDimensions();
  const [isLoading, setLoading] = useState(true);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [asset, setAsset] = useState<Asset | undefined>();
  const [selectedFarm, setSelectedFarm] = useState<SelectedFarm | undefined>();
  const [tvl, setTvl] = useState<History[]>([]);

  const getDatas = async () => {
    try {
      const response = await fetch('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000');
      const json = await response.json();
      const assetData: Asset[] = await json.data;
      const oneAsset: Asset | undefined = assetData.find(item => item.assetId === "ETH_Aave__USDC");
      const farm: SelectedFarm | undefined = oneAsset?.selected_farm[0];
      setAssets(assetData);
      setAsset(oneAsset);
      setSelectedFarm(farm);
      if (farm) {
        const tvlData: History[] = farm?.tvlStakedHistory;
        setTvl(tvlData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="App">
      {isLoading ? <h1>Loading...</h1> : (
        <div className={'ChartBox' + (width < 1550 ? ' ChartFullWidth' : '')}>
          <ChartTvl data={tvl} />
          <ChartApr />
        </div>
      )}
    </div>
  );
}

export default App;

