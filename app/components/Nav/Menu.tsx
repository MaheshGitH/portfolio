import React, { useEffect, useState } from "react";
import MenuOption from "./MenuOption";
import { TbMenu } from "react-icons/tb";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="flex items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex gap-2 items-center my-auto"
      >
        <TbMenu className="~sml/lg:~size-5/7 text-primary" />
        <span className="pt-1 text-secondary-light hover:text-primary-dark duration-200 ~/lg:~text-[1rem]/[1.5rem] ~/lg:~leading-[1rem]/[1.5rem]">
          Menu
        </span>
      </button>
      <div
        className={`fixed left-0 right-0 h-full bg-light dark:bg-dark ${
          isOpen ? " bottom-0 " : " bottom-full "
        } duration-150`}
      >
        <MenuOption Open={(value) => setIsOpen(value)} />
      </div>
    </div>
  );
};

export default Menu;
