export interface IProject {
    id: number;
    title: string;
    description: string;
    githubUrl: string;
    visitUrl: string;
    tags: ITag[];
    category: string;
    imageUrl: string;
}

interface ITag {
    id: number;
    tag: string;
}

export const featuredProjects: IProject[] = [
    {
        id: 1,
        title: "Bookclub",
        description:
            "A community/discussion-first approach to discussing books that allows connects readers",
        githubUrl: "https://github.com/JrFelix540/bookclub-web",
        visitUrl: "https://bookclub-web.vercel.app",
        tags: [
            { id: 1, tag: "Node" },
            { id: 2, tag: "React" },
            { id: 3, tag: "Express" },
            { id: 4, tag: "GraphQL" }
        ],
        imageUrl: "./img/bookclub-screenshot.png",
        category: "Featured"
    },
    {
        id: 2,
        title: "E-Commerce Storefront",
        description: "An Ecommerce Storefront built in React/NextJs",
        githubUrl: "https://github.com/JrFelix540/ecommerce-store",
        visitUrl: "https://ecommerce-store-omega.vercel.app/",
        tags: [
            { id: 1, tag: "React" },
            { id: 2, tag: "NextJs" },
            { id: 3, tag: "Context API" }
        ],
        imageUrl: "./img/ecommerce-screenshot.png",
        category: "Featured"
    },
    {
        id: 3,
        title: "Trivia Game",
        description:
            "A fun game you can test how knowledgeable you are in various topics, such as computers, celebrities, movies. It uses questions from the Open Trivia Database ",
        githubUrl: "https://github.com/JrFelix540/my-react-quiz",
        visitUrl: "https://itstriviatime.netlify.app/",
        tags: [
            { id: 1, tag: "React" },
            { id: 2, tag: "CRA" },
            { id: 3, tag: "Open Trivia DB API" }
        ],
        imageUrl: "./img/trivia-screenshot.png",
        category: "Featured"
    }
];

export const archivedProjects = [
    {
        id: 1,
        title: "Github Issue Finder",
        description:
            "An application that allows you to search for issues based on a user's repository. ",
        githubUrl: "https://github.com/JrFelix540/github-issue-tracker",
        visitUrl: "https://github-issue-finder.vercel.app/",
        tags: [
            { id: 1, tag: "React" },
            { id: 2, tag: "NextJs" },
            { id: 3, tag: "Github API" }
        ],
        imageUrl: "./img/github-issues-screenshot.png",
        category: "Archive"
    },
    {
        id: 2,
        title: "Clothing Store",
        description:
            "An e-commerce store built on React that uses Redux for state management.",
        githubUrl: "",
        visitUrl: "https://ecom-trial-87.herokuapp.com/",
        tags: [
            { id: 1, tag: "React" },
            { id: 2, tag: "CRA" },
            { id: 3, tag: "Redux" }
        ],
        imageUrl: "./img/github-issues-screenshot.png",
        category: "Archive"
    },

    {
        id: 3,
        title: "Simple Task Board",
        description:
            "A simple react project that makes use of a react dnd library.",
        githubUrl: "https://github.com/JrFelix540/simple-task-board",
        visitUrl: "https://simple-task.netlify.app/",
        tags: [
            { id: 1, tag: "React" },
            { id: 2, tag: "CRA" },
            { id: 3, tag: "React-Beautiful-dnd" }
        ],
        imageUrl: "",
        category: "Archive"
    }
];
