import ContactButton from "./ContactButton";
import OpenToOpportunities from "./OpenToOpportunities";
import Paragraph from "./Paragraph";
import Title from "./Title";
import ViewProjectButton from "./ViewProjectButton";

const TopSection = () => {
  return (
    <div className="h-screen flex flex-col gap-20 justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <OpenToOpportunities />
        <Title />
        <Paragraph />
      </div>
      <div className="flex gap-4">
        <ViewProjectButton />
        <ContactButton />
      </div>
    </div>
  );
};

export default TopSection;
