import tripleten from "../assets/Tripleten.png";
import responsive from "../assets/Responsive.png";
import js from "../assets/JS.png";

export const certifications = [
  {
    id: 1,
    title: "FreeCodeCamp - Responsive Web Design",
    description: (
      <>
        Built multiple responsive web interfaces using semantic{" "}
        <span className="text-blue-500 dark:text-blue-500 font-bold">HTML</span>
        ,{" "}
        <span className="text-blue-500 dark:text-blue-500 font-bold">CSS</span>,
        and accessibility best practices.
      </>
    ),
    image: responsive,
    link: "https://www.freecodecamp.org/certification/fcc284cc7d6-ddcd-425b-8ba5-c4f3c38f26c7/responsive-web-design",
    issuedBy: "FreeCodeCamp",
    issueDate: "August 2025",
  },
  {
    id: 2,
    title: "FreeCodeCamp - JavaScript Algorithms and Data Structures",
    description: (
      <>
        Developed algorithmic problem-solving skills and deep understanding of{" "}
        <span className="text-blue-500 dark:text-blue-500 font-bold">
          JavaScript ES6+
        </span>
        , including arrays, objects, and recursion.
      </>
    ),

    image: js,
    link: "https://www.freecodecamp.org/certification/fcc284cc7d6-ddcd-425b-8ba5-c4f3c38f26c7/javascript-algorithms-and-data-structures-v8",
    issuedBy: "FreeCodeCamp",
    issueDate: "September 2025",
  },
  {
    id: 3,
    title: "Tripleten - Full Stack Web Development",
    description: (
      <>
        Completed an intensive full-stack program focused on the{" "}
        <span className="text-blue-500 dark:text-blue-500 font-bold">
          MERN stack
        </span>{" "}
        (MongoDB, Express, React, Node.js), building and deploying real-world
        applications.
      </>
    ),
    image: tripleten,
    link: "https://www.linkedin.com/in/lenin-miranda-0b74b4288/details/certifications/",
    issuedBy: "Tripleten",
    issueDate: "August 2025",
  },
];
