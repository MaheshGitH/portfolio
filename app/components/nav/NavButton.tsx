import { LucideIcon } from "lucide-react";

interface Props {
  Icon?: LucideIcon;
  name: string;
}

const NavButton = ({ Icon, name }: Props) => {
  return (
    <>
      <button className="w-full text-start p-4 rounded-md ~text-xs/sm flex gap-2 items-center md:hidden">
        {Icon && <Icon className="~size-4/5" />}
        <span className="-mb-1">{name}</span>
      </button>

      <button className="px-4 py-3 hover:bg-surface rounded-md ~text-xs/sm max-md:hidden">
        {name}
      </button>
    </>
  );
};

export default NavButton;
