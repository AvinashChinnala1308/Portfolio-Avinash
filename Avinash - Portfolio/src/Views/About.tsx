import { cores, educations, IEducate, ISkill, skills } from "../data/biodata";
import { useState } from "react";
import { Popup } from "../components/Popup";
import { Button } from "../components/Button";
import profil from "../assets/profilev2.jpg";
import { links } from "../data/biodata";
import { ILink } from "./Home";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Education from "../components/Education"; 


export const About = () => {
  const nav = useNavigate();
  const handleNavigate = (path: string) => {
    nav(path);
  };
  const [cv, setCv] = useState<boolean>(false);
  return (
    <div className="max-lg:w-full">
      <div className="text-center mx-12 pt-32 flex gap-8 justify-around bg-[#0F0F0F] dark:bg-[#F1F1F1] dark:text-[#0F0F0F] pb-10 max-lg:flex-col max-lg:items-center mx-lg:px-0 max-lg:w-full max-lg:mx-0 max-lg:pt-0">
        <div
          id="About Me"
          className="flex flex-col pt-8 gap-3 lg:gap-8 lg:text-3xl font-semibold w-4/6 max-lg:w-full max-lg:items-center max-lg:pt-32"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            exit={{ y: -20, opacity: 0 }}
          >
            <h1 className="text-3xl lg:text-5xl">About Me</h1>
          </motion.div>

          <p className="text-xl px-20 max-lg:px-8 max-lg:text-base">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              exit={{ x: -100, opacity: 0 }}
            >
              <span>
                Hello! I'm{" "}
                <span className="text-[#32B280] font-bold">
                  Avinash Chinnala,
                </span>{" "}
                a passionate Software Engineer with a strong foundation in
                computer science and a deep enthusiasm for building clean,
                efficient, and user-focused applications. My journey in tech
                began with curiosity and grew into a commitment to lifelong
                learning and innovation. I take pride in writing code that not
                only works, but is scalable, maintainable, and impactful. <br />
              </span>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              exit={{ x: 100, opacity: 0 }}
            >
              <span>
                <br /> I enjoy working in collaborative teams where ideas flow
                freely, and I’m always ready to dive into new challenges—whether
                it’s designing a system from scratch or optimizing an existing
                one. Let’s build something meaningful, together.
              </span>
            </motion.div>
          </p>
          <div className="my-8 w-full">
          <Education />
          </div>

          <div className="max-lg:w-full">
            <h1 className="m-4 text-[#32B280] font-extrabold max-lg:text-2xl">
              Tech
            </h1>
            <div className="flex flex-col gap-8 items-center max-lg:w-full">
              {skills.map((i: ISkill) => {
                return (
                  <div className="w-full max-lg:w-full">
                    <h2 className="text-xl max-lg:text-lg">{i.name}</h2>
                    <div>
                      <ul className="w-full justify-center flex flex-wrap gap-4 p-4 max-lg:gap-3">
                        {i.icons.map((i, index) => {
                          return (
                            <motion.div
                              initial={{
                                y: index % 2 == 0 ? -100 : 100,
                                opacity: 0,
                              }}
                              whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 0.5 },
                              }}
                              exit={{
                                y: index % 2 ? 100 : -100,
                                opacity: 0,
                              }}
                            >
                              <li className="bg-[#32B280] rounded-2xl text-base p-4 text-white flex flex-col items-center gap-2 w-36 hover:bg-[#f1f1f1] hover:text-black duration-500 max-lg:w-24 h-24">
                                {" "}
                                <h1 className="text-sm max-lg:text-[10px]">
                                  {i.name}
                                </h1>
                                <i.icon size={30} className="" />
                              </li>
                            </motion.div>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <h1 className="m-4 text-[#0F0F0F] text-xl">Core Competencies</h1>
            <div className="flex gap-4 items-center justify-center max-lg:w-full max-lg:flex-wrap max-lg:gap-2 max-lg:p-4">
              {cores.map((item: string) => {
                return (
                  <div className="text-lg border border-white dark:border-[#0F0F0F] px-3 py-2 rounded-3xl hover:bg-white hover:text-black duration-500 max-xl:text-sm">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-2/6 bg-[#F5F5F5] rounded-3xl border border-[#0F0F0F] border-b-8 border-r-8 flex flex-col max-lg:w-10/12">
          <div className="pt-10 pb-8 flex justify-center items-center">
            <div className="w-1/2  hover:scale-110 duration-500 cursor-none">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 4 } }}
                exit={{ opacity: 0 }}
              >
                <img
                  src={profil}
                  alt=""
                  style={{
                    borderRadius: "100%",
                  }}
                />
              </motion.div>
            </div>
          </div>
          <h1 className="pb-10 text-3xl text-black font-bold">Experience</h1>
          <div className="m-8 my-2 flex flex-col gap-8">
            {educations.reverse().map((item: IEducate) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 2 } }}
                  exit={{ opacity: 0 }}
                >
                  {" "}
                  <div
                    key={item.time}
                    className=" bg-white rounded-xl border border-black border-b-8 border-r-8 p-4"
                  >
                    <h1 className="text-black font-extrabold text-lg m-4">
                      {item.title}
                    </h1>
                    <p className="text-sm text-black">{item.subtitle}</p>
                    <p className="font-bold text-black">{item.time}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0 }}
          >
            {" "}
            <div className="m-4 flex justify-center gap-8 items-center h-full">
              <Button
                handleClick={() => {
                  handleNavigate("/projects");
                }}
                label="My Creations"
                style="bg-[#32B280] text-white px-3 py-2 font-bold rounded-lg hover:scale-105 duration-500"
              />
              <a
                href="C:\Users\avina\Desktop\portfolio-master\portfolio-master\src\assets\Avinash_Resume.pdf"
                download={"Avinash_Resume.pdf"}
                className="px-4 py-3 rounded-lg cursor-pointer bg-black text-white border border-black px-3 py-2 font-bold rounded-lg hover:scale-105 duration-500 hover:bg-white hover:text-black"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {cv && <Popup handleClose={() => setCv(false)} />}
      </div>
      <div className="w-full flex flex-col items-center mt-16 max-lg:mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <h1 className="text-3xl font-bold p-8">Get In Touch</h1>
        </motion.div>

        <p className=" text-lg w-5/12 text-center font-bold max-lg:w-10/12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0 }}
          >
            {" "}
            I'm currently open to new{" "}
            <span className="text-[#32B280]">
              opportunities and collaborations
            </span>
            . Whether you have a project in mind, a question, or just want to
            say hi, my inbox is always open.{" "}
            <span className="text-[#32B280]">
              I'll try my best to get back to you!
            </span>
          </motion.div>
        </p>
        <div className="w-full flex justify-center h-24 items-end">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, y: -200 }}
          >
            <a
              href="mailto:avinashchinnala1325@gmail.com"
              target="_blank"
              className=" cursor-pointer mt-16 bg-[#32B280] text-white border border-black px-3 py-2 font-bold rounded-lg hover:scale-105 duration-500 hover:bg-white hover:text-black max-lg:mt-6"
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mt-16 p-8 max-lg:mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <p className="text-base lg:text-3xl ">Feel free to connect with me</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0 }}
        >
          {" "}
          <div className="flex gap-3 text-4xl lg:text-6xl text-[#32B280]">
            {links.map((item: ILink) => (
              <motion.div whileHover={{ scale: 1.1 }}>
                {" "}
                <a
                  className="cursor-pointer"
                  key={item.name}
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <item.icon />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
