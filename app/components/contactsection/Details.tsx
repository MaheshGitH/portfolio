import Link from "next/link";
import React from "react";

const Details = () => {
  return (
    <div>
      <p>
        Let's talk!. You can reach me at{" "}
        <a
          href="mailto:maheshkrishnan1242@gmail.com"
          title="Send me an email"
          className="text-primary hover:text-primary/70 underline underline-offset-4 duration-200"
        >
          MaheshKrishnan1242@gmail.com.
        </a>{" "}
        For more details, view my{" "}
        <a
          href="/resume.pdf"
          download="MaheshKrishnan_Resume.pdf"
          className="text-secondary hover:text-secondary/70 underline underline-offset-4 duration-200"
        >
          resume.
        </a>
      </p>
    </div>
  );
};

export default Details;
