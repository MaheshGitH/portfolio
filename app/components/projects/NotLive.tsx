import React from "react";
import styles from "./styles.module.css";

const NotLive = () => {
  return (
    <div className="size-full flex flex-col gap-5 justify-center items-center bg-black">
      <span
        className={
          styles.textShadow +
          " text-4xl md:text-5xl lg:text-6xl font-semibold text-[#ffffff66]"
        }
      >
        4&nbsp;
        <span className={styles.flickeringLight + " font-normal"}>0</span>
        &nbsp;4
      </span>
      <span className=" text-lg xl:text-2xl text-white">
        This project is not live yet.
      </span>
    </div>
  );
};

export default NotLive;
