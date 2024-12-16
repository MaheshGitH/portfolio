import React from "react";

interface Props {
  navState: boolean;
  onClick: () => void;
  inView: string;
  children: string;
  varient?: boolean;
}

const NavLayout = ({ navState, onClick, inView, children, varient }: Props) => {
  return (
    <li
      className={` ${
        navState
          ? `${!varient ? " mt-0 " : ""} text-black dark:text-white`
          : `${!varient ? " -mt-14 " : ""} text-white/5`
      } duration-200 relative select-none w-fit group`}
    >
      <button onClick={onClick}>{children}</button>
      <span
        className={`absolute h-0.5 -bottom-1 group-hover:bg-secondary/35 group-hover:left-0 group-hover:right-0  ${
          inView === children && navState
            ? " left-0 right-0 bg-secondary "
            : "  left-1/2 right-1/2 "
        } duration-200`}
      />
    </li>
  );
};

export default NavLayout;
