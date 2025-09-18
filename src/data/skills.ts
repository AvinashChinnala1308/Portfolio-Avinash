import { IconType } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";

export interface ISkill {
  name: string;
  icon: IconType;
}

export const skills: ISkill[] = [
  {
    name: "HTML",
    icon: AiFillHtml5
  },
  {
    name: "CSS",
    icon: BiLogoCss3
  },
  {
    name: "JAVASCRIPT",
    icon: RiJavascriptLine
  },
  {
    name: "TYPESCRIPT",
    icon: TbBrandTypescript
  },
  {
    name: "REACT",
    icon: GrReactjs
  },
  {
    name: "NODE JS",
    icon: FaNode
  },
  {
    name: "TAILWIND CSS",
    icon: SiTailwindcss
  },
  {
    name: "GIT",
    icon: BsGit
  }
];
