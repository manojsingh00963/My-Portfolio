import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import Dict from "../assets/img/Dict.jpg"
import Todo from "../assets/img/Todo.jpg"
// import BMI from "../assets/img/BMIcalculator.png"
// import Weather from "../assets/img/Weather.jpg"
import coder from "../assets/img/coder.jpg"
import Blog from "../assets/img/Blog.jpg"
// import ChatApp from "../assets/img/Chat.jpg"
// import Ecommerce from "../assets/img/Ecommers.jpg"
import Weather1 from "../assets/img/Final weather icon_.jpg"
import News from "../assets/img/NewsApp.jpg"
import FoodApp from "../assets/img/foodapp.png"
import Icode from '../assets/img/icodesave.avif'
import Jsproject from '../assets/img/jsprob.png'


// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { title } from "framer-motion/client";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#About" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Manoj Singh",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full-stack developer focused on building scalable and user-friendly web applications. With 1+ year of hands-on experience, I work with React, Next.js, Node.js, and MongoDB to create impactful digital products that deliver real value.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:"A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: coder,
    githubLink: "https://github.com/manojsingh00963/Web-Portfolio",
    livePrivew:"https://i-manoj-web-portfolio.vercel.app/"
  },
  {
    id: 2,
    name: "JavaScript Project's",
    description:"My JavaScript All Project BMI-Calculator, GuessNumber-Game Color-Changer and more.",
    image:Jsproject,
    githubLink: "https://github.com/manojsingh00963/JavaScript/tree/main/12_Project's",
    livePrivew:"https://stackblitz.com/edit/stackblitz-starters-wxujky?file=page2.html"
  },
  {
    id: 10,
    name: "Basic Project's",
    description:"Some of basic projects i built just for fun with HTML, CSS, and JavaScript.",
    image:Jsproject,
    githubLink: "https://github.com/manojsingh00963/Basic-Project-s",
    livePrivew:"https://manojsingh00963.github.io/Basic-Project-s/"
  },
  {
    id: 3,
    name: "Note taking app",
    description:
    "A FullStack Note taking app with React & context api for frontend and NodeJs ExpressJs and MongoDb for backend ",
    image: Todo,
    githubLink: "https://github.com/user/task-management-tool",
    livePrivew:"https://blog-app-psi-three-96.vercel.app/"
  },
  {
    id: 4,
    name: "Weather App",
    description:
    "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: Weather1,
    githubLink: "https://github.com/manojsingh00963/React_project/tree/main/My-Weather_App",
    livePrivew:"https://weatherfinder-three.vercel.app/"
  },
  {
    id: 5,
    name: "Dictionary App",
    description:
    "A weather application that utilizes the Dictionary API to retrieve and present current weather data and forecasts for diverse locations, developed using React and styled-components.",
    image: Dict,
    githubLink: "https://github.com/manojsingh00963/React_project/tree/main/Dictionary-App",
    livePrivew:"https://my-word-dictionary.vercel.app/"
  },
  {
    id: 6,
    name: "Blog App",
    description:
      "A blogging platform developed with react and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: Blog,
    githubLink: "https://github.com/manojsingh00963/Blog-app",
    livePrivew:"https://blog-app-psi-three-96.vercel.app/"
    
  },
  {
    id: 7,
    name: "News App",
    description:
    "RapidNews is a dynamic news application that delivers top global headlines in real-time. With intuitive search and category filters, it offers users quick access to the latest news across various topics.",
    image: News,
    githubLink: "https://github.com/manojsingh00963/React_project/tree/main/textutils",
    livePrivew:"https://github.com/manojsingh00963/React_project/tree/main/textutils"
  },
  {
    id: 8,
    name: "A Food Delivery App",
    description:
    "Responsive food delivery app built with the MERN stack, making it easy for users to browse menus, customize orders, and track deliveries in real-time. Enjoy a seamless experience for satisfying cravings anytime, anywhere.",
    image: FoodApp,
    githubLink: "https://github.com/manojsingh00963/React_project/tree/main/textutils",
    livePrivew:"https://mern-forntend-phi.vercel.app/"
  },
  {
    id: 9,
    name: " ICODESAVE ",
    description:
    "A note book for saving note, i made it for saving my some important notes concepts and mainly important code, and some code snipptes which i would be need again in the future so that i made this app it's amagazing feel free to use it ",
    image:Icode,
    githubLink: "https://github.com/manojsingh00963/ICODESAVE",
    livePrivew:"https://icodesave.vercel.app/"
  },
  // {
    //   id: 6,
    //   name: "Chat Application",
    //   description:
    //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    //   image: ChatApp,
    //   githubLink: "https://github.com/user/chat-application",
    // livePrivew:"https://blog-app-psi-three-96.vercel.app/"
  // },
];

// export const BIO = [
//   "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
//   "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
//   "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
// ];

export const BIO = [
  "I am a dedicated full-stack developer with a strong interest in building efficient and scalable web applications. With over a year of experience working with React, Next.js, Node.js, and MongoDB, I enjoy solving real-world problems through clean and maintainable code. I thrive in collaborative environments, continuously learn new technologies, and actively contribute to personal and open-source projects.",
];

// export const SKILLS = [
//   {
//     icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
//     name: "React",
//     experience: "2+ years",
//   },
//   {
//     icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
//     name: "Next.js",
//     experience: "1+ year",
//   },
//   {
//     icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
//     name: "MongoDB",
//     experience: "1.5+ years",
//   },
//   {
//     icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
//     name: "Redis",
//     experience: "1+ year",
//   },
//   {
//     icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
//     name: "Node.js",
//     experience: "2+ years",
//   },
//   {
//     icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
//     name: "PostgreSQL",
//     experience: "1+ year",
//   },
// ];

export const EXPERIENCES = [
  {
    title: "Full-Stack Training Intern",
    company: "GeeksforGeeks",
    duration: "July 2024 – October 2024",
    description:
      "Completed a 3-month MERN stack internship where I built real-world projects and strengthened my understanding of MongoDB, Express.js, React.js, and Node.js under industry mentorship.",
  },
  {
    title: "Frontend Developer Intern",
    company: "WS Mobility",
    duration: "November 2024 – January 2025",
    description:
      "Worked as a Frontend Developer Intern focusing on building responsive and user-friendly web interfaces using React, JavaScript, HTML, and CSS. Collaborated with the design and backend teams to convert UI/UX designs into functional components, optimize performance, and ensure cross-device compatibility.",
  },
  {
    title: "Freelance Web Developer",
    company: "IGYAIN AI",
    duration: "January 2025 – Present",
    description:
      "Worked as a freelance web developer on AI-based and business-focused web solutions. Developed responsive frontend components, integrated APIs, improved UI performance, and collaborated remotely with the AI team to deliver scalable and production-ready features using React and modern web technologies.",
  },
];
;

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Application ",
    institution: "Indira Gandhi National Open University",
    duration: "June 2022 - 2025",
    description:
      "Focused on programming, web development, and database management while building multiple real-world web applications.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/manojmani.rawat",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/channels/1291994352171876426/1291994352171876429",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/accounts/login/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/manojsingh10101",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/manojsingh00963",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/manoj-singh-4a4131280/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
