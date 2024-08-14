export const introduction = {
  name: "Hi, I'm Mahesh",

  quote:
    "“Welcome to my portfolio. Here, you can see a brief journey of how I became a software engineer from scratch. The portfolio highlights the tools learned along the way and demonstrates their use in building fully functional, production-grade applications.”",
};

export const brieJourney = {
  heading: "A Brief Journey of Mine",

  first: {
    monthYear: "MAY / 2019",
    description: `"During the summer, I started exploring what the IT industry is all about, but didn't know where, when, or how to start."`,
  },

  second: {
    monthYear: "MAY / 2020",
    description: `"This is when I stumbled upon Python, so I started my programming journey with it because it was easy to understand."`,
  },
  third: {
    monthYear: "DEC / 2021",
    description: `"I started to analyze what best suited me in the IT industry and decided to become a web developer."`,
  },
  fourth: {
    monthYear: "JAN / 2022",
    description: `"I bought my first computer and started learning about web technologies: HTML, CSS, and JavaScript."`,
  },
  fifth: {
    monthYear: "AUG / 2022",
    description: `"After completing my studies of web technologies like HTML, CSS, and JavaScript, I started learning React and TypeScript."`,
  },
  sixth: {
    monthYear: "JAN / 2023",
    description: `"I built my first React app, 'Something I Like,' and then continued learning Next.js."`,
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
