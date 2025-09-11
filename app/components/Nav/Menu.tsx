import React, { useEffect, useState } from "react";
import MenuOption from "./MenuOption";

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
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex gap-2 items-center"
      >
        <div className="~sm/xl:~h-[0.625rem]/[0.812rem] ~sm/xl:~w-5/6">
          <svg
            viewBox="0 0 22 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-primary"
              d="M1 1H21M1 11H21"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
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
