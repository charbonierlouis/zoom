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
        <h1 className="text-xl font-bold">{title}</h1>
        <SelectAsset />
      </div>
    </header>
  );
}
