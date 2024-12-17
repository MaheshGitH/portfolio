import React from "react";

const Logo = () => {
  return (
    <svg width="36" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="17.668"
        y="5.052"
        width="23.296"
        height="5.936"
        rx="2.968"
        transform="rotate(36.687 17.668 5.052)"
        fill="url(#a)"
        stroke="#32B621"
        strokeWidth=".5"
      />

      <rect
        x="-.257"
        y="-.243"
        width="27.687"
        height="5.937"
        rx="2.969"
        transform="scale(1 -1) rotate(-88.31 6.303 -16.454)"
        fill="#0B0A0D"
        stroke="#5615A5"
        strokeWidth=".5"
      />
      <rect
        x="12.476"
        y=".723"
        width="27.687"
        height="5.937"
        rx="2.969"
        transform="rotate(87.69 12.476 .723)"
        fill="#0B0A0D"
        stroke="#32B621"
        strokeWidth=".5"
      />
      <rect
        x="-.051"
        y=".35"
        width="23.296"
        height="5.936"
        rx="2.968"
        transform="scale(1 -1) rotate(36.687 37.43 -6.642)"
        fill="url(#b)"
        stroke="#5615A5"
        strokeWidth=".5"
      />
      <defs>
        <linearGradient
          id="a"
          x1="6.69"
          y1="-.614"
          x2="55.421"
          y2="29.294"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".011" stopColor="#231848" />
          <stop offset=".503" stopColor="#0C1A1D" />
          <stop offset=".741" stopColor="#11282D" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="-11.03"
          y1="-6.016"
          x2="37.702"
          y2="23.892"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".011" stopColor="#231848" />
          <stop offset=".503" stopColor="#0C1A1D" />
          <stop offset=".741" stopColor="#11282D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
