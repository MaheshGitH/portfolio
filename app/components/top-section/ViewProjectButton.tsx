import { ArrowRight } from "lucide-react";

const ViewProjectButton = () => {
  return (
    <button className="~text-xs/sm px-4 py-3 flex items-center gap-1 rounded-md bg-primary text-black border border-primary hover:bg-transparent duration-150 hover:text-primary group">
      <span>View Project</span>{" "}
      <ArrowRight className="size-3.5 group-hover:ml-1" />
    </button>
  );
};

export default ViewProjectButton;
