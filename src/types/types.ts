export type Asset = {
    active:                           boolean;
    antiWhale:                        null | string;
    aprDaily:                         number;
    aprWeekly:                        number;
    aprYearly:                        number;
    apyYearly:                        number;
    asset:                            string;
    assetAddress:                     null | string;
    assetId:                          string;
    assetLockup?:                     boolean;
    assetPopupMessage?:               null;
    assetPrice?:                      number;
    auditInfo?:                       null | string;
    blockchain:                       string;
    category?:                        null;
    collateralLockPeriod?:            null;
    d_active_reason?:                 null;
    dateAdded?:                       Date | null;
    dateEnding?:                      null;
    dateStarted?:                     null;
    dateUpdated:                      Date;
    daysRemaining?:                   null;
    depositFee:                       null | string;
    exchangeName?:                    null | string;
    exchangePicture?:                 null;
    exchangeUrl:                      null;
    exchangeVersion?:                 null;
    farm:                             string;
    farmId:                           string;
    farmImage?:                       null;
    farmName?:                        string;
    farmType?:                        null;
    feeAprYearly:                     number | null;
    harvestLockup?:                   null;
    harvestLockupInfo?:               null;
    impermanentLoss?:                 null;
    impermanentLoss30d?:              null;
    info?:                            null;
    investmentLink?:                  null | string;
    manuallyCalculatedAPR?:           boolean;
    maxPoolCap?:                      null;
    multiplier?:                      null;
    nativeToken?:                     null;
    nativeTokenAddress?:              null;
    nativeTokenInvestLink?:           null;
    nativeTokenMarketCap?:            number;
    nativeTokenPrice?:                number;
    new_asset?:                       boolean;
    otherFees?:                       null;
    otherPoolEconomicsInfo?:          null;
    pid?:                             number;
    poolAlreadyFilled?:               boolean;
    priceCorrelation_30d?:            null;
    rewardTokenA?:                    null | string;
    rewardTokenAAddress?:             null;
    rewardTokenAAprYearly:            number;
    rewardTokenAAprYearlyMaxBoosted?: number;
    rewardTokenAPrice?:               number;
    rewardTokenAWeeklyAmount?:        number;
    rewardTokenAWeeklyDollarAmount?:  number;
    rewardTokenB?:                    null | string;
    rewardTokenBAddress?:             null;
    rewardTokenBAprYearly:            number;
    rewardTokenBAprYearlyMaxBoosted?: number;
    rewardTokenBPrice?:               number;
    rewardTokenBWeeklyAmount?:        number;
    rewardTokenBWeeklyDollarAmount?:  number;
    scam?:                            boolean;
    scamInfo?:                        null;
    selected_farm:                    SelectedFarm[];
    stakingAddress?:                  null;
    stakingLink?:                     null | string;
    status?:                          Status;
    tokenA:                           null | string;
    tokenAAddress:                    null | string;
    tokenABacking?:                   number;
    tokenAHolders?:                   number;
    tokenAHoldersHistory?:            History[];
    tokenAPicture?:                   null;
    tokenAPrice?:                     number;
    tokenAPriceHistory?:              History[];
    tokenB:                           null;
    tokenBAddress:                    null;
    tokenBBacking?:                   number;
    tokenBHolders?:                   number;
    tokenBPicture?:                   null;
    tokenBPrice?:                     number;
    tokenC?:                          null;
    tokenCAddress?:                   null;
    tokenCBacking?:                   number;
    tokenCHolders?:                   number;
    tokenCPicture?:                   null;
    tokenCPrice?:                     number;
    tokenD?:                          null;
    tokenDAddress?:                   null;
    tokenDBacking?:                   number;
    tokenDHolders?:                   number;
    tokenDPicture?:                   null;
    tokenDPrice?:                     number;
    tokenE?:                          null;
    tokenEAddress?:                   null;
    tokenEBacking?:                   number;
    tokenEHolders?:                   number;
    tokenEPicture?:                   null;
    tokenEPrice?:                     number;
    transferTax?:                     null;
    transferTaxInfo?:                 null;
    tvlChange24h:                     string;
    tvlChange24hValue?:               number;
    tvlExchange:                      number;
    tvlFarm?:                         number;
    tvlStaked:                        number;
    underlyingFarm?:                  null;
    url?:                             null;
    vaultAddress?:                    null;
    volume_24h?:                      null;
    weight?:                          null;
    withdrawalFee?:                   null;
    yearlyTokenRewardPool?:           number;
    yieldType:                        YieldType;
    dataQuality?:                     boolean;
    customAprYearly?:                 number;
    fees?:                            Fees;
    stakingUrl?:                      string;
    token_info?:                      TokenInfo[];
    withdrawFee?:                     string;
}

export type Fees = {
    anti_whale:          boolean;
    deposit_fee:         number;
    harvest_lockup:      boolean;
    harvest_lockup_info: string;
    transfer_tax:        boolean;
    transfer_tax_info:   string;
    withdraw_fee:        number;
}

export type SelectedFarm = {
    _locks?:           Lock[];
    active:            boolean;
    blockchain:        string;
    dateAdded:         Date;
    dateUpdated:       string;
    farmId:            string;
    farmName:          string;
    farmType:          string;
    lastFullUpdate:    Date;
    riskLevel?:        string;
    scam:              boolean;
    scamInfo:          string;
    tvlChange24h:      string;
    tvlChange24hValue: number;
    tvlStaked:         number;
    tvlStakedHistory:  History[];
    validated?:        boolean;
}

export enum Lock {
    Active = "active",
    FarmName = "farmName",
    TvlStaked = "tvlStaked",
}

export type History = {
    date:  string;
    value: number;
    value2?: number;
}

export enum DateEnum {
    The20220403 = "2022.04.03",
    The20220404 = "2022.04.04",
    The20220405 = "2022.04.05",
    The20220406 = "2022.04.06",
    The20220407 = "2022.04.07",
    The20220408 = "2022.04.08",
    The20220409 = "2022.04.09",
    The20220410 = "2022.04.10",
    The20220411 = "2022.04.11",
    The20220412 = "2022.04.12",
    The20220413 = "2022.04.13",
    The20220414 = "2022.04.14",
    The20220415 = "2022.04.15",
    The20220416 = "2022.04.16",
    The20220417 = "2022.04.17",
    The20220418 = "2022.04.18",
    The20220419 = "2022.04.19",
    The20220420 = "2022.04.20",
    The20220421 = "2022.04.21",
    The20220422 = "2022.04.22",
    The20220515 = "2022.05.15",
    The20220524 = "2022.05.24",
    The20220525 = "2022.05.25",
    The20220526 = "2022.05.26",
    The20220527 = "2022.05.27",
    The20220528 = "2022.05.28",
    The20220529 = "2022.05.29",
    The20220530 = "2022.05.30",
    The20220531 = "2022.05.31",
    The20220601 = "2022.06.01",
    The20220602 = "2022.06.02",
    The20220603 = "2022.06.03",
    The20220604 = "2022.06.04",
    The20220605 = "2022.06.05",
    The20220606 = "2022.06.06",
    The20220607 = "2022.06.07",
    The20220608 = "2022.06.08",
    The20220609 = "2022.06.09",
    The20220610 = "2022.06.10",
    The20220611 = "2022.06.11",
    The20220612 = "2022.06.12",
    The20220613 = "2022.06.13",
    The20220614 = "2022.06.14",
    The20220615 = "2022.06.15",
    The20220616 = "2022.06.16",
    The20220617 = "2022.06.17",
    The20220618 = "2022.06.18",
    The20220619 = "2022.06.19",
    The20220620 = "2022.06.20",
    The20220621 = "2022.06.21",
    The20220622 = "2022.06.22",
    The20220623 = "2022.06.23",
    The20220624 = "2022.06.24",
    The20220625 = "2022.06.25",
    The20220626 = "2022.06.26",
    The20220627 = "2022.06.27",
    The20220628 = "2022.06.28",
    The20220629 = "2022.06.29",
}

export enum Status {
    Success = "success",
}

export type TokenInfo = {
    address: string;
    name:    string;
    symbol:  string;
}

export enum YieldType {
    LPStake = "LP-Stake",
    Lending = "Lending",
    SingleStake = "Single-Stake",
}
