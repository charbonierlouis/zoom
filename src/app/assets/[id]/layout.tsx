import Header from '@/components/header';
import { findAssetById } from '@/helpers/assets';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  params: {
    id: string;
  }
}

export default function AssetLayout({
  children,
  params: {
    id,
  },
}: Props) {
  const assetInfo = findAssetById(id);

  if (!assetInfo) {
    notFound();
  }
  return (
    <>
      <Header title={assetInfo.name} />
      <main className="p-5">
        {children}
      </main>
    </>
  );
}
