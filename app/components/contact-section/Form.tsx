import SendButton from "./SendButton";
import FormInput from "./FormInput";

const Form = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center ~text-xs/sm ">
      <FormInput id="name" label="Name" placeholder="Your name" />
      <FormInput
        id="email"
        label="Email"
        placeholder="your.email@example.com"
      />
      <FormInput
        textarea
        id="message"
        label="Message"
        placeholder="Tell me about your project or opportunity..."
      />

      <div className="self-end max-md:w-full">
        <SendButton />
      </div>
    </div>
  );
};

export default Form;
