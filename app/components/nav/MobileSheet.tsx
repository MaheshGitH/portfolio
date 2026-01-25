import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TextAlignJustify, X } from "lucide-react";
import NavButton from "./NavButton";
import { navButton } from "./NavBar";
import { useEffect, useState } from "react";
import HoverEffectContainer from "@/app/common-components/HoverEffectContainer";

export function MobileSheet() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <TextAlignJustify
          size={24}
          strokeWidth={2}
          className="text-white hover:text-primary duration-150"
        />
      </SheetTrigger>
      <SheetContent className="border-border md:hidden bg-background [&>button]:hidden p-4">
        <SheetHeader>
          <SheetTitle />
          <SheetClose asChild>
            <HoverEffectContainer className="w-fit self-end rounded-md">
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:text-primary duration-150 bg-background"
              >
                <X className="~size-4/5" />
              </button>
            </HoverEffectContainer>
          </SheetClose>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-1">
          {navButton.map((nb, index) => (
            <NavButton
              onClick={() => setOpen(false)}
              key={index}
              Icon={nb.icon}
              name={nb.name}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
