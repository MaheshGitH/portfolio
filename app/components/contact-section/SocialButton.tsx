import { LucideIcon } from "lucide-react";

interface Props {
  Icon: LucideIcon;
}

const SocialButton = ({ Icon }: Props) => {
  return (
    <button className="p-3 bg-surface border border-primary-faded rounded-lg hover:text-primary duration-150">
      <Icon className="size-6" />
    </button>
  );
};

export default SocialButton;
