import Zoom from '@/components/zoom';
import { assets } from '@/config/assets';
import { findAssetById } from '@/helpers/assets';

interface Props {
  params: {
    id: string;
  }
}

export function generateStaticParams() {
  return assets.map((asset) => asset.id);
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
