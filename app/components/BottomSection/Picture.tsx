import React from "react";

const Picture = () => {
  return (
    <div className="relative ~sml/lg:~w-40/64 ~sml/lg:~h-60/96 bg-primary/[0.07] rounded-2xl ml-14">
      <div className="absolute bottom-12 right-12 ~sml/lg:~w-40/64 ~sml/lg:~h-60/96 bg-primary/10 rounded-2xl border-primary border-2"></div>
    </div>
  );
};

export default Picture;
