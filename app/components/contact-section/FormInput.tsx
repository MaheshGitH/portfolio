import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  label: string;
  placeholder: string;
  id: string;
  textarea?: boolean;
}

const FormInput = ({ id, label, placeholder, textarea }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={id}>{label}</Label>
      <Input textArea={textarea} id={id} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
