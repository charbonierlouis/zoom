import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import SelectAsset from '../assets/SelectAsset';

interface Props {
  title: string;
}

export default function Header({
  title,
}: Props) {
  return (
    <header>
      <div className=" sticky top-0 w-full bg-base-200 p-5 flex flex-col md:flex-row items-center justify-between">
        <div className="flex gap-2 items-center">
          <Link
            href="/"
            className="btn btn-ghost"
            aria-label="Accueil"
          >
            <HomeIcon className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <SelectAsset />
      </div>
    </header>
  );
}
