import { assets } from '@/config/assets';
import Image from 'next/image';
import Link from 'next/link';

export default function AssetsList() {
  return (
    <div className="flex flex-wrap gap-5 p-5">
      {assets.map((asset) => (
        <Link href={`/assets/${asset.id}`}>
          <div
            key={asset.id}
            className="card shadow-xl w-fit image-full hover:scale-105 transition-all"
          >
            <figure>
              <Image
                src={asset.path}
                alt={asset.name}
                width={250}
                height={250}
              />
            </figure>
            <div className="card-body items-center justify-center">
              <h3 className="text-xl">{asset.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
