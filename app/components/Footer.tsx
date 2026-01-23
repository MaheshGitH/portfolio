import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-2 py-9 bg-surface mt-44">
      <Copyright className="text-primary ~size-4/[1.125rem]" />
      <span className="text-secondary ~text-[0.625rem]/xs">
        2026 Mahesh Krishnan. Built with Next.js, React, and Tailwind CSS.
      </span>
    </div>
  );
};

export default Footer;
