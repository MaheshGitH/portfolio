import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import congratsAnimation from "./congrats.json";

interface Props {
  congrats: boolean;
}

export default function Congrats({ congrats }: Props) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  useEffect(() => {
    lottieRef.current.stop();
    if (congrats) {
      lottieRef.current.play();
    }
  }, [congrats]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={congratsAnimation}
      loop={false}
      className="h-screen overflow-clip -z-30"
    />
  );
}
