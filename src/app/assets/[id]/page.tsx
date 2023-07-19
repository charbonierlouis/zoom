import { findAssetById } from '@/helpers/assets';
import Image from 'next/image';

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
    <Image
      src={assetInfo.path}
      alt={assetInfo.name}
      width={500}
      height={500}
      className="mx-auto"
    />
  );
}
