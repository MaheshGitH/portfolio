import { Loader, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  isPending: boolean;
}

const SendButton = ({ isPending }: Props) => {
  return (
    <button
      type="submit"
      className="px-[4.25rem] py-3 max-md:w-full bg-primary rounded-md text-center text-black flex gap-2 justify-center items-center border border-primary-faded hover:bg-primary/80 duration-150"
    >
      <AnimatePresence mode="wait">
        {isPending ? (
          <motion.div
            key="loader"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Loader className="size-4/5 animate-spin" />
          </motion.div>
        ) : (
          <motion.div
            key="send"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <Send className="size-4/5" />
          </motion.div>
        )}
      </AnimatePresence>

      <span>Send Message</span>
    </button>
  );
};

export default SendButton;
