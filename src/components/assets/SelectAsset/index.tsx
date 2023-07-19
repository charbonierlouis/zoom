import { assets } from '@/config/assets';
import Link from 'next/link';

interface Props {
  title?: string;
}

export default function SelectAsset({
  title = 'Choisir un asset',
}: Props) {
  return (
    <details className="dropdown dropdown-end">
      <summary className="m-1 btn">{title}</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {assets.map((asset) => (
          <li key={asset.id}>
            <Link
              href={`/assets/${asset.id}`}
              className="font-semibold"
            >
              {asset.name}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
