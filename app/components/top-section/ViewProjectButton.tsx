import { ArrowRight } from "lucide-react";

const ViewProjectButton = () => {
  return (
    <button className="~text-xs/sm px-4 py-3 flex items-center gap-1 rounded-md bg-primary text-black border border-primary hover:bg-transparent duration-150 hover:text-primary">
      <span>View Project</span> <ArrowRight className="size-3.5" />
    </button>
  );
};

export default ViewProjectButton;
