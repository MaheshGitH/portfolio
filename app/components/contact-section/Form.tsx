import Input from "./Input";
import SendButton from "./SendButton";

const Form = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center ~text-xs/sm ">
      <Input label="Name" placeholder="Your name" />
      <Input label="Email" placeholder="your.email@example.com" />
      <Input
        label="Message"
        placeholder="Tell me about your project or opportunity..."
        textarea
      />
      <div className="self-end max-md:w-full">
        <SendButton />
      </div>
    </div>
  );
};

export default Form;
