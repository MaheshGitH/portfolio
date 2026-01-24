"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textArea?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, textArea, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #00e0e0,
          transparent 50%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-md p-px transition duration-300 w-full"
      >
        {!textArea && (
          <input
            type={type}
            className={cn(
              `flex w-full rounded-md border border-border bg-background px-4 py-3 text-white transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary focus-visible:ring-[1px] focus-visible:border-primary/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
              className,
            )}
            ref={ref}
            {...props}
          />
        )}
        {textArea && (
          <textarea
            className={cn(
              `flex w-full rounded-md border border-border bg-background px-4 py-3 text-white transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary focus-visible:ring-[1px] focus-visible:border-primary/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none`,
              className,
            )}
            id="message"
            placeholder="Tell me about your project or opportunity..."
            rows={10}
            name="message"
          />
        )}
      </motion.div>
    );
  },
);
Input.displayName = "Input";

export { Input };
