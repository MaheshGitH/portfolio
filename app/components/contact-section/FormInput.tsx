import HoverEffectContainer from "@/app/common-components/HoverEffectContainer";

interface Props {
  label: string;
  placeholder: string;
  id: string;
  textarea?: boolean;
}

const FormInput = ({ id, label, placeholder, textarea }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>
      <HoverEffectContainer
        radius={textarea ? 200 : 100}
        className="rounded-md"
      >
        {textarea ? (
          <textarea
            id={id}
            autoComplete="off"
            placeholder={placeholder}
            className="flex outline-none w-full rounded-md border border-border bg-background px-4 py-3 text-white placeholder:text-secondary focus:border-primary/50 resize-none"
            rows={10}
          />
        ) : (
          <input
            id={id}
            autoComplete="off"
            placeholder={placeholder}
            className="outline-none w-full px-4 py-3 placeholder:text-secondary rounded-md bg-background border border-border focus:border-primary/50"
            type="text"
          />
        )}
      </HoverEffectContainer>
    </div>
  );
};

export default FormInput;
