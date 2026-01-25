import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

interface Props {
  sourceLink: string;
  wFull: boolean;
}

const Code = ({ sourceLink, wFull }: Props) => {
  return (
    <a
      href={sourceLink}
      target="_blank"
      className={cn(
        "flex gap-2 py-3 px-4 border border-primary text-primary justify-center rounded-md hover:border-primary/80 hover:text-primary/80 duration-150",
        wFull ? "w-full" : "",
      )}
    >
      <Github className="~md:~size-4/5" /> <span>Code</span>
    </a>
  );
};

export default Code;
