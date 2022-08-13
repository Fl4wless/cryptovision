export interface IAssetsListResponse {
  data: IAssetData[];
}

export interface IAssetData {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}