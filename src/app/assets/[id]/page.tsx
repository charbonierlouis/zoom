import { findAssetById } from '@/helpers/assets';
import { notFound } from 'next/navigation';

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
    notFound();
  }

  return (
    <div>
      <div className="w-full bg-base-200 p-10">
        <h1 className="text-xl font-bold">{assetInfo.name}</h1>
      </div>
    </div>
  );
}
