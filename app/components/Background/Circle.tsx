import React from "react";
import useTheme from "../customhook/useTheme";
import Congrats from "./EasterEgg/Congrats";

interface Props {
  congrats: boolean;
}

const Circle = ({ congrats }: Props) => {
  const theme = useTheme();
  return (
    <div className="absolute -left-1/2 lg:left-0 lg:duration-200 right-0 max-lg:w-screen h-screen flex justify-center items-center -z-40">
      <span className="absolute">
        <Congrats congrats={congrats} />
      </span>
      <svg
        width="776"
        height="774"
        viewBox="0 0 776 774"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M387.768 771.535C600.821 771.535 773.535 598.821 773.535 385.768C773.535 172.714 600.821 0 387.768 0C174.714 0 2 172.714 2 385.768C2 598.821 174.714 771.535 387.768 771.535Z"
          stroke="url(#1)"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M387.767 728.966C577.31 728.966 730.966 575.311 730.966 385.768C730.966 196.224 577.31 42.5691 387.767 42.5691C198.224 42.5691 44.5684 196.224 44.5684 385.768C44.5684 575.311 198.224 728.966 387.767 728.966Z"
          stroke="url(#2)"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M387.768 686.397C553.801 686.397 688.398 551.801 688.398 385.768C688.398 219.735 553.801 85.1382 387.768 85.1382C221.735 85.1382 87.1387 219.735 87.1387 385.768C87.1387 551.801 221.735 686.397 387.768 686.397Z"
          stroke="url(#3)"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M387.767 643.828C530.29 643.828 645.828 528.29 645.828 385.768C645.828 243.245 530.29 127.707 387.767 127.707C245.245 127.707 129.707 243.245 129.707 385.768C129.707 528.29 245.245 643.828 387.767 643.828Z"
          stroke="url(#4)"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M387.767 601.267C506.784 601.267 603.267 504.785 603.267 385.768C603.267 266.751 506.784 170.268 387.767 170.268C268.75 170.268 172.268 266.751 172.268 385.768C172.268 504.785 268.75 601.267 387.767 601.267Z"
          stroke="url(#5)"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M387.768 558.698C483.275 558.698 560.699 481.275 560.699 385.768C560.699 290.261 483.275 212.837 387.768 212.837C292.261 212.837 214.838 290.261 214.838 385.768C214.838 481.275 292.261 558.698 387.768 558.698Z"
          stroke="url(#6)"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M387.768 516.129C459.764 516.129 518.129 457.764 518.129 385.768C518.129 313.771 459.764 255.406 387.768 255.406C315.771 255.406 257.406 313.771 257.406 385.768C257.406 457.764 315.771 516.129 387.768 516.129Z"
          stroke="url(#7)"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <path
          d="M387.767 473.56C436.253 473.56 475.559 434.254 475.559 385.768C475.559 337.281 436.253 297.976 387.767 297.976C339.28 297.976 299.975 337.281 299.975 385.768C299.975 434.254 339.28 473.56 387.767 473.56Z"
          stroke="url(#8)"
          strokeWidth="4"
          strokeMiterlimit="10"
        />
        <defs>
          <linearGradient
            id="1"
            x1="387.768"
            y1="0"
            x2="387.768"
            y2="771.535"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor="#2373EB" stopOpacity="0.35" />
            <stop
              className="duration-200"
              offset="0.5"
              stopColor={theme === "light" ? "white" : "#121212"}
            />
            <stop offset="0.65" stopColor="#E7C027" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient
            id="2"
            x1="387.767"
            y1="42.5691"
            x2="387.767"
            y2="728.966"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor="#2373EB" stopOpacity="0.35" />
            <stop
              className="duration-200"
              offset="0.5"
              stopColor={theme === "light" ? "white" : "#121212"}
            />
            <stop offset="0.65" stopColor="#E7C028" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient
            id="3"
            x1="387.768"
            y1="85.1382"
            x2="387.768"
            y2="686.397"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.4" stopColor="#2373EB" stopOpacity="0.35" />
            <stop
              className="duration-200"
              offset="0.5"
              stopColor={theme === "light" ? "white" : "#121212"}
            />
            <stop offset="0.6" stopColor="#E7C028" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient
            id="4"
            x1="387.767"
            y1="127.707"
            x2="387.767"
            y2="643.828"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor="#2373EB" stopOpacity="0.35" />
            <stop
              className="duration-200"
              offset="0.5"
              stopColor={theme === "light" ? "white" : "#121212"}
            />
            <stop offset="0.65" stopColor="#E7C027" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient
            id="5"
            x1="387.767"
            y1="170.268"
            x2="387.767"
            y2="601.267"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.25" stopColor="#2373EB" stopOpacity="0.35" />
            <stop
              className="duration-200"
              offset="0.5"
              stopColor={theme === "light" ? "white" : "#121212"}
            />
            <stop offset="0.75" stopColor="#E6BF28" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient
            id="6"
            x1="387.768"
            y1="212.837"
            x2="387.768"
            y2="558.698"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor="#2373EB" stopOpacity="0.35" />
            <stop
              className="duration-200"
              offset="0.5"
              stopColor={theme === "light" ? "white" : "#121212"}
            />
            <stop offset="0.65" stopColor="#E7C028" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient
            id="7"
            x1="387.768"
            y1="255.406"
            x2="387.768"
            y2="516.129"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor="#2373EB" stopOpacity="0.35" />
            <stop
              className="duration-200"
              offset="0.55"
              stopColor={theme === "light" ? "white" : "#121212"}
            />
            <stop offset="0.75" stopColor="#E7C128" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient
            id="8"
            x1="387.767"
            y1="297.976"
            x2="387.767"
            y2="473.56"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3" stopColor="#2373EB" stopOpacity="0.35" />
            <stop
              className="duration-200"
              offset="0.5"
              stopColor={theme === "light" ? "white" : "#121212"}
            />
            <stop offset="0.8" stopColor="#E7C027" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Circle;
