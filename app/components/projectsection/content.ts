import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "YT-stats",
    description:
      "Get any YouTube channel's stats with their username/channel ID.",
    link: "https://yt-stats.netlify.app",
    image: {
      src1: "/yt-stats-overview.webp",
      src2: "/yt-stats-home.webp",
      src3: "/yt-stats-stats.webp",
    },
    position: {
      pos1: "object-bottom",
      pos2: "object-top",
      pos3: "object-bottom",
    },
    bgColor: "drop-shadow-[0px_30px_250px_#E5383B]",
  },

  {
    name: "Circlchat",
    description: "Create groups, invite friends, and chat",
    link: "no link",
    image: {
      src1: "/circlchat-invite.webp",
      src2: "/circlchat-home.webp",
      src3: "/circlchat-chat.webp",
    },
    position: {
      pos1: "object-center",
      pos2: "object-top",
      pos3: "object-top",
    },
    bgColor: "drop-shadow-[0px_30px_250px_#9757FF]",
  },

  {
    name: "Algopad",
    description: "Learning Data Structures and Algorithms made easy.",
    link: "no link",
    image: {
      src1: "/algopad-trackpad.webp",
      src2: "/algopad-home.webp",
      src3: "/algopad-canva.webp",
    },
    position: {
      pos1: "object-top",
      pos2: "object-top",
      pos3: "object-top",
    },
    bgColor: "drop-shadow-[0px_30px_250px_#9E18EB]",
  },
];
