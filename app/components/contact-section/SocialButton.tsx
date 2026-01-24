import HoverEffectContainer from "@/app/common-components/HoverEffectContainer";
import { LucideIcon } from "lucide-react";

interface Props {
  Icon: LucideIcon;
  href: string;
}

const SocialButton = ({ Icon, href }: Props) => {
  return (
    <HoverEffectContainer className="rounded-lg">
      <a
        href={href}
        target="_blank"
        className="p-3 block bg-background rounded-lg border border-border hover:text-primary duration-150"
      >
        <Icon className="size-6" />
      </a>
    </HoverEffectContainer>
  );
};

export default SocialButton;
