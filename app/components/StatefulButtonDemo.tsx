"use client";

import { Button } from "@/components/ui/stateful-button";

export function StatefulButtonDemo() {
  // dummy API call
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };
  return (
    <Button
      className="text-green-400 bg-transparent border border-green-300"
      onClick={handleClick}
    >
      Send message
    </Button>
  );
}
