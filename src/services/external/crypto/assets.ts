import { IAssetsListResponse } from '@/types/assets.types';
import axios from 'axios';

export const getAssetsList = async () => {
  return await axios.get<IAssetsListResponse>(`${process.env.NEXT_PUBLIC_COIN_CAP_URL}/assets`);
};
