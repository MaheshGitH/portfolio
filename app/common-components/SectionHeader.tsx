import HoverEffectContainer from "./HoverEffectContainer";

interface Props {
  section: "01." | "02." | "03." | "04.";
  title: string;
}

const SectionHeader = ({ section, title }: Props) => {
  return (
    <div className="flex items-center gap-4 mb-[4.5rem]">
      <div className="~text-2xl/[2rem] font-bold flex gap-2">
        <span className="text-primary">{section}</span>

        <p>{title}</p>
      </div>
      <HoverEffectContainer>
        <span className="h-px bg-border w-full" />
      </HoverEffectContainer>
    </div>
  );
};

export default SectionHeader;
