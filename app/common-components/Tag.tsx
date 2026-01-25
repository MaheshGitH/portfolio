import { cn } from "@/lib/utils";

interface Props {
  name: string;
  reducePadding?: boolean;
}

const Tag = ({ name, reducePadding }: Props) => {
  return (
    <span
      className={cn(
        "~text-xs/sm w-fit bg-surface border border-border duration-150 rounded-md",
        reducePadding ? " p-2 " : " p-3 ",
      )}
    >
      {name}
    </span>
  );
};

export default Tag;
