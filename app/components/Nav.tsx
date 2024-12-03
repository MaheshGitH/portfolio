import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "contact", href: "/contact" },
  ];
  const liRef = useRef<HTMLLIElement>(null);
  const [selectedPage, setSelectedPage] = useState<string>("Home");

  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
    top: 100,
  });

  useEffect(() => {
    if (liRef.current) {
      setUnderlineStyle({
        width: 0,
        left: liRef.current.getBoundingClientRect().left,
        top: liRef.current.getBoundingClientRect().top + 40,
      });
    }
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget.getBoundingClientRect();
    setUnderlineStyle({
      width: target.width,
      left: target.left,
      top: target.top + 36,
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setSelectedPage(e.currentTarget.textContent);
  };

  return (
    <>
      <ul className="flex max-md:absolute -bottom-10 right-1/2 max-md:translate-x-1/2">
        {menuItems.map((item, index) => (
          <li ref={index === 0 ? liRef : null} key={index}>
            <Link
              href={item.href}
              className={`px-4 py-2 border-b-2  ${
                selectedPage === item.name
                  ? " border-secondary "
                  : " border-none "
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() =>
                setUnderlineStyle({
                  width: 0,
                  left: underlineStyle.left,
                  top: underlineStyle.top,
                })
              }
              onClick={handleClick}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={`fixed bottom-0 h-[2px] rounded-full bg-secondary/40 transition-all duration-300`}
        style={{
          width: `${underlineStyle.width}px`,
          left: `${underlineStyle.left}px`,
          top: `${underlineStyle.top}px`,
        }}
      />
    </>
  );
};

export default Nav;
