import { Send } from "lucide-react";

const SendButton = () => {
  return (
    <button className="px-[4.25rem] py-3 max-md:w-full bg-primary rounded-md text-center text-black flex gap-2 justify-center items-center border border-primary-faded hover:bg-transparent hover:border-primary hover:text-primary duration-150">
      <Send className="~size-4/5" />
      <span>Send Message</span>
    </button>
  );
};

export default SendButton;
