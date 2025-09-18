import { IconType } from "react-icons";
import { SiTailwindcss } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import {
  FaJava,
  FaReact,
  FaSquareGithub,
  FaSquareInstagram,
} from "react-icons/fa6";
import { BiLogoJavascript } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import {
  SiApachekafka,
  SiC,
  SiGit,
  SiJetbrains,
  SiJquery,
  SiMicrosoftsqlserver,
  SiSpring,
  SiSwagger,
  SiVisualstudio,
  SiVisualstudiocode,
  SiRedux,
  SiJenkins,
} from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";

export interface Idata {
  label: string;
  value: string;
}

export interface IEducate {
  title: string;
  subtitle: string;
  time: string;
}

interface Iicon {
  name: string;
  icon: IconType;
}

export interface ISkill {
  name: string;
  icons: Iicon[];
}

interface ILink {
  name: string;
  icon: IconType;
  url: string;
}

export const skills: ISkill[] = [
  {
    name: "Languages",
    icons: [
      { name: "Java", icon: FaJava },
      { name: "Javascript", icon: BiLogoJavascript },
      { name: "C#", icon: SiC },
      { name: "SQL", icon: PiFileSql },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icons: [
      { name: "React JS", icon: FaReact },
      { name: "Spring", icon: SiSpring },
      { name: ".Net", icon: SiDotnet },
      { name: "Angular JS", icon: FaAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Kafka", icon: SiApachekafka },
      { name: "JQuery", icon: SiJquery },
      { name: "Swagger", icon: SiSwagger },
      { name: "Redux", icon: SiRedux },
      { name: "Jenkins", icon: SiJenkins },
    ],
  },
  {
    name: "Tools & Platforms",
    icons: [
      { name: "Jetbrains IDEA", icon: SiJetbrains },
      { name: "Visual Studio Code", icon: SiVisualstudiocode },
      { name: "Microsoft Visual Studio", icon: SiVisualstudio },
      { name: "SQL Server Studio", icon: SiMicrosoftsqlserver },
      { name: "GIT", icon: SiGit },
    ],
  },
];


export const education: IEducate[] = [
  {
    title: "Northwest Missouri State University",
    subtitle:
      "Master of Science in Computer Science, GPA: 3.80/4.0",
    time: "Aug 2023 - Dec 2024",
  },
  {
    title: "Geethanjali College of Engineering and Technology",
    subtitle:
      "Bachelor of Technology in Computer Science Engineering, GPA: 7.67/10.0",
    time: "Aug 2018 - May 2022",
  },
];


export const educations: IEducate[] = [
  {
title: "A3 Tech Solutions",
    subtitle:
      "Worked as a Java Developer, building scalable web applications using Angular, Spring Boot, RESTful APIs, and Oracle/DB2 databases. Collaborated with cross-functional teams and mentored junior developers.",
    time: "Jan 2025 - Present",
  },
  {
    title: "Northwest Missouri State University",
    subtitle:
      "Served as a Software Developer (Apprenticeship), developing full-stack applications such as Timeclock and Online Textbook System using Spring Boot, Angular, .NET Core, and MySQL. Optimized SQL queries and supported research platforms.",
    time: "Oct 2023 - Dec 2024",
  },
  {
    title: "Bosch Global Software Technologies",
    subtitle:
      "Worked as an Associate Software Engineer, creating microservices with Java, Spring Boot, and Hibernate. Built SPAs with Angular, integrated REST APIs, and deployed apps with Docker, Jenkins, and AWS Lambda.",
    time: "Jul 2022 - Aug 2023",
  },
  {
    title: "AGL Technologies",
    subtitle:
      "Worked as a Project Engineer, developing applications with Angular, React, and Java REST APIs. Managed CI/CD pipelines using Jenkins, deployed Dockerized apps, wrote SQL queries for ETL, and automated workflows with Python scripts.",
    time: "Oct 2021 - Jun 2022",
  },
  {
    title: "Epam Systems",
    subtitle:
      "Completed a PEP Apprenticeship, practicing full-stack development with Java, HTML, CSS, JavaScript, and Spring Boot. Built REST APIs, designed UIs, and applied SOLID principles in projects.",
    time: "Sep 2020 - Jun 2021",
  },
];

export const links: ILink[] = [
  {
    name: "linkedin",
    icon: RxLinkedinLogo,
    url: "https://www.linkedin.com/in/avinash-chalam-chinnala-8300501b3/",
  },
  {
    name: "github",
    icon: FaSquareGithub,
    url: "https://github.com/AvinashChinnala1308",
  },
  {
    name: "instagram",
    icon: FaSquareInstagram,
    url: "https://www.linkedin.com/in/avinash-chalam-chinnala-8300501b3/",
  },
];

export const cores: string[] = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Agile Methodology",
];

export const datas: Idata[] = [
  {
    label: "Full Name",
    value: "Avinash Chinnala",
  },
  {
    label: "Age",
    value: "25 years old",
  },
  {
    label: "Address",
    value: "California, USA",
  },
  {
    label: "Status",
    value: "Single",
  },
];
