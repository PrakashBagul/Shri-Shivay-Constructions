import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.jpeg";
import client2 from "../src/assets/client2.jpeg";
import client3 from "../src/assets/client3.jpeg";

export const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "Involves updating or altering existing structures to improve functionality or aesthetics.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "Building homes, apartments and other living spaces. Devloping office buildings, retail spaces and warehouses.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Architectural design, structural engineering and site planning are crucial for the successful execution of a project.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Clear agreements outlining project scope, costs, timelines and responsibilities to protect both parties.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Developing a cohesive design style that reflects the client's vision, including color schemes, furnishings and finishes.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "A dedicated support team should address concerns or problems quickly, whether related to delays, budgeting or quality.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "Involves planning, coordinating and construction projects to ensure they are completed on time and within budget.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Architectural design, structural engineering and site planning are crucial for the successful execution of a project.",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "Utilizes vairious methodologies, such as traditional building, prefabrication and sustainable construction practices.",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "Developing a cohesive design style that reflects the client's vision, including color schemes, furnishings and finishes.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Mr. Arun Mishra",
    about:
      "The team was professionals and efficient from start to finish. They communicated well throughout the project and delivered on time. Highly recommend. ",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Mr. Ashish Paliwal",
    about:
      "I was impressed with the attention to detail in my home renovation. They took my ideas and turned them into reality. I am very happy with the results.",
    post: "DBT Coordinator",
  },
  {
    image: client3,
    name: "Mr. Kuldeep Saxena",
    about:
      "Friendly staff and quality workmanship. They kept the site clean and safe. Which I really appreciated. I would definitely hire them again.",
    post: "Builder",
  },
];
