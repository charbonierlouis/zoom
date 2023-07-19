'use client';

import { useZoom } from '@/hook/useZoom';
import { AssetInfo } from '@/types/assets';
import Image from 'next/image';

interface Props {
  assetInfo: AssetInfo;
}

export default function Zoom({ assetInfo }: Props) {
  const {
    containerRef,
    cursorRef,
    imageRef,
  } = useZoom();

  return (
    <div
      ref={containerRef}
      className="imagecontainer"
    >
      <div
        ref={cursorRef}
        className="hidden cursor-zoom"
        style={{
          backgroundImage: `url(${assetInfo.path})`,
        }}
      />
      <Image
        src={assetInfo.path}
        alt={assetInfo.name}
        width={300}
        height={300}
        ref={imageRef}
        priority
      />
    </div>
  );
}
