export interface ProjectCard {
  title: string;
  description: string;
  images: { image_1: string; alt_1: string; image_2?: string; alt_2?: string };
  tags: string[];
  links: {
    live: string;
    source: string;
  };
}

const ytStatsTag = ["TypeScript", "React", "REST API", "Figma", "Tailwind CSS"];
const circleChatTag = [
  "TypeScript",
  "Next.js",
  "Auth.js",
  "Prisma",
  "Socket.IO",
  "Tailwind CSS",
  "MongoDB",
  "Figma",
];
const expenseTrackerTag = [
  "TypeScript",
  "Next.js",
  "Zustand",
  "TanStack Table",
  "Figma",
  "Tailwind CSS",
];
const algopadTag = [
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Socket.IO",
  "Figma",
];

export const projectCard: ProjectCard[] = [
  {
    title: "YT-Stats",
    description:
      "A web application that fetches and displays YouTube channel statistics using a username or channel ID, with a clean UI for quick insights into channel performance.",
    images: {
      image_1: "yt-stats.webp",
      alt_1: "yt-stats overview",
      image_2: "yt-stats-2.webp",
      alt_2: "yt-stats statistics",
    },
    tags: ytStatsTag,
    links: {
      live: "https://yt-stats.netlify.app/",
      source: "https://github.com/MaheshGitH/yt-stats/",
    },
  },
  {
    title: "CircleChat",
    description:
      "A real-time group chat application that lets users create groups, invite members, and exchange messages instantly with live updates.",
    images: {
      image_1: "circlechat.webp",
      alt_1: "circlechat homepage",
      image_2: "circlechat-2.webp",
      alt_2: "circlechat chat page",
    },
    tags: circleChatTag,
    links: {
      live: "nolink",
      source: "https://github.com/MaheshGitH/circlechat/",
    },
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance application that tracks income and expenses with monthly insights, category-based filtering, and real-time state updates.",
    images: {
      image_1: "expense-tracker.webp",
      alt_1: "expense tracker dashboard page",
    },
    tags: expenseTrackerTag,
    links: {
      live: "https://money-overview.vercel.app/dashboard",
      source: "https://github.com/MaheshGitH/expense-tracker/",
    },
  },
  {
    title: "AlgoPad",
    description:
      "An interactive platform designed to practice and understand data structures and algorithms through structured, problem-focused content.",
    images: {
      image_1: "algopad.webp",
      alt_1: "algopad homepage",
      image_2: "algopad-2.webp",
      alt_2: "algopad canva page",
    },
    tags: algopadTag,
    links: {
      live: "nolink",
      source: "https://github.com/MaheshGitH/algopad/",
    },
  },
];
