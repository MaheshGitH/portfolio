export const introduction = {
  name: "Hi, I'm Mahesh",

  quote:
    "“Welcome to my portfolio. Here, you can see a brief journey of how I became a software engineer from scratch. The portfolio highlights the tools learned along the way and demonstrates their use in building fully functional, production-grade applications.”",
};

export const brieJourney = {
  heading: "A Brief Journey of Mine",

  first: {
    monthYear: "NOV / 2022",
    description: `"Watching a tutorial on YouTube about <span class="text-white underline">Python.</span>"`,
  },

  second: {
    monthYear: "JAN / 2023",
    description: `"Bought a computer and <span class="text-white underline">continued learning Python</span>."`,
  },
  third: {
    monthYear: "APR / 2023",
    description: `"Decided to study <span class="text-white underline">web development</span> and started with <span class="text-white underline">HTML and CSS</span>."`,
  },
  fourth: {
    monthYear: "JUL / 2023",
    description: `"Built a dummy website using HTML and CSS, then continued learning.<span class="text-white underline"> JavaScript and React</span>"`,
  },
  fifth: {
    monthYear: "JAN / 2024",
    description: `"Built a React app called <span class="text-white underline">'YT-Stats'</span> and then continued learning Next.js."`,
  },
  sixth: {
    monthYear: "JUN / 2024",
    description: `"Built a Next.js app called <span class="text-white underline">'Circlchat'</span> and then continued to learn other technologies."`,
  },
};

export const projects = [
  {
    name: "Something I Like",
    techStack: ["HTML", "CSS"],
    projectOverview: `"This is my first website, built with plain HTML and CSS. It's not a real-world project, but this is where my journey as a web developer started. It is a single-page site."`,
    iconFolder: "front-end",

    links: {
      website: "Not yet",
    },
  },

  {
    name: "YT - Stats",
    techStack: ["Typescript", "React"],
    projectOverview: `"This is a React app that displays the stats of a specific YouTube channel using the YouTube API. It is a single-page site where you can view channel information from YouTube."`,
    iconFolder: "front-end",

    links: {
      website: "https://yt-stats.netlify.app",
      blog: "Not yet",
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

    links: {
      website: "Not yet",
      blog: "Not yet",
    },
  },
];
