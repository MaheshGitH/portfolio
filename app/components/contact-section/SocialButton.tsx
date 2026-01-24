import HoverEffectContainer from "@/app/common-components/HoverEffectContainer";
import { LucideIcon } from "lucide-react";

interface Props {
  Icon: LucideIcon;
}

const SocialButton = ({ Icon }: Props) => {
  return (
    <HoverEffectContainer className="rounded-lg">
      <button className="p-3 bg-background rounded-lg border border-border hover:text-primary duration-150">
        <Icon className="size-6" />
      </button>
    </HoverEffectContainer>
  );
};

export default SocialButton;
