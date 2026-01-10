import { Button } from "@/components/ui/button";
import { StatefulButtonDemo } from "./components/StatefulButtonDemo";

export default function Home() {
  return (
    <div className="">
      <StatefulButtonDemo />

      <Button className="text-green-400">Shadcn button</Button>
    </div>
  );
}
