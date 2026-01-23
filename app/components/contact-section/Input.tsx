import { cn } from "@/lib/utils";

interface Props {
  label: string;
  placeholder: string;
  textarea?: boolean;
}

const Input = ({ label, placeholder, textarea }: Props) => {
  return (
    <div className="w-full">
      <label htmlFor={label}>{label}</label>
      <input
        autoComplete="off"
        id={label}
        className={cn(
          "bg-surface outline-none placeholder:text-secondary mt-2 py-3 px-4 rounded-md w-full border border-border focus:border-primary/50 duration-150",
          textarea && "hidden",
        )}
        placeholder={placeholder}
        type="text"
        disabled={textarea}
      />
      <textarea
        autoComplete="off"
        disabled={!textarea}
        id={label}
        className={cn(
          "bg-surface outline-none placeholder:text-secondary mt-2 py-3 px-4 rounded-md w-full border border-border focus:border-primary/50 duration-150 resize-none",
          !textarea && "hidden",
        )}
        placeholder={placeholder}
        rows={10}
      />
    </div>
  );
};

export default Input;
