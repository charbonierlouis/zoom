import Zoom from '@/components/zoom';
import { findAssetById } from '@/helpers/assets';

interface Props {
  params: {
    id: string;
  }
}

export default function AssetPage({
  params: {
    id,
  },
}: Props) {
  const assetInfo = findAssetById(id);

  if (!assetInfo) {
    return null;
  }

  return (
    <Zoom assetInfo={assetInfo} />
  );
}
