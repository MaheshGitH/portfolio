export const introduction = {
  name: "Hi, I'm Mahesh",

  quote:
    "“Welcome to my portfolio. Here, you can see a brief journey of how I became a software engineer from scratch. The portfolio highlights the tools learned along the way and demonstrates their use in building fully functional, production-grade applications.”",
};

export const brieJourney = {
  heading: "A Brief Journey of Mine",

  first: {
    monthYear: "NOV / 2022",
    description: `"Started studying Python on YouTube because it was easy to understand. The straightforward syntax made it a great starting point for me."`,
  },

  second: {
    monthYear: "JAN / 2023",
    description: `"I bought my first computer and continued learning Python. This allowed me to gain hands-on experience with programming languages."`,
  },
  third: {
    monthYear: "APR / 2023",
    description: `"I decided to study web development and started with HTML and CSS. It was the foundation for my journey into front-end development."`,
  },
  fourth: {
    monthYear: "JUL / 2023",
    description: `"I built my first website, 'Something I Like,' using plain HTML and CSS. After that, I continued learning JavaScript and React."`,
  },
  fifth: {
    monthYear: "JAN / 2024",
    description: `"My first project in React was called 'YT-Stats,' using the YouTube API. After that, I continued learning Next.js."`,
  },
  sixth: {
    monthYear: "JUN / 2024",
    description: `"I built a full-stack app called 'CirclChat' using Next.js, which supports real-time communication. After that, I continued exploring more technologies."`,
  },
};

export const projects = [
  {
    name: "Something I Like",
    techStack: ["HTML", "CSS"],
    projectOverview: `"This is my first website, built with plain HTML and CSS. It's not a real-world project, but this is where my journey as a web developer started. It is a single-page site."`,
    iconFolder: "front-end",
    customHeight: "max-h-[850px]",
    links: {
      website: "https://somethingilike.com",
    },
  },

  {
    name: "YT - Stats",
    techStack: ["Typescript", "React"],
    projectOverview: `"This is a React app that displays the stats of a specific YouTube channel using the YouTube API. It is a single-page site where you can view channel information from YouTube."`,
    iconFolder: "front-end",
    customHeight: "max-h-[850px]",
    links: {
      website: "https://yt-stats.com",
      blog: "https://yt-stats.com/blog",
    },
  },

  {
    name: "Circlchat",
    techStack: [
      "Typescript",
      "Next",
      "MongoDB",
      "Socket io",
      "Prisma",
      "Auth js",
    ],
    projectOverview: `"This project features real-time communication focused solely on group discussions. It is multi-paged, and users can invite others and sign in using Google, GitHub, or passwordless login."`,
    iconFolder: "circlchat",
    customHeight: "max-h-[1000px]",
    links: {
      website: "https://circlchat.com",
      blog: "https://circlchat.com/blog",
    },
  },
];
