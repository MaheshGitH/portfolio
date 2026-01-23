import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface Props {
  liveLink?: string;
  hide: boolean;
}

const Live = ({ liveLink, hide }: Props) => {
  return (
    <button
      className={cn(
        "bg-primary text-black flex gap-2 py-3 w-full justify-center rounded-md hover:bg-primary/80 duration-150",
        hide ? "hidden" : "",
      )}
    >
      <ExternalLink className="~/md:~size-4/5" /> <span>Live</span>
    </button>
  );
};

export default Live;
