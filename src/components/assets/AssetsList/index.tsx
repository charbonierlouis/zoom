import { assets } from '@/config/assets';
import Image from 'next/image';
import Link from 'next/link';

export default function AssetsList() {
  return (
    <div className="flex flex-wrap gap-5 p-5">
      {assets.map((asset) => (
        <Link
          key={asset.id}
          href={`/assets/${asset.id}`}
          className="w-full md:w-fit"
        >
          <div
            className="card shadow-xl image-full hover:scale-105 transition-all"
          >
            <figure>
              <Image
                src={asset.path}
                alt={asset.name}
                width={250}
                height={250}
                priority
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
