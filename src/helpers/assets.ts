import { assets } from '@/config/assets';
import { AssetInfo } from '@/types/assets';

export const findAssetById = (
  id: AssetInfo['id'],
): AssetInfo | null => assets.find((asset) => asset.id === id) || null;
