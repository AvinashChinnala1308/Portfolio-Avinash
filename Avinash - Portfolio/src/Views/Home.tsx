import profile from "../assets/profilev2.jpg";
import { TypeAnimation } from "react-type-animation";
import { links } from "../data/biodata";
import { motion } from "framer-motion";

export interface ILink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export const Home = () => {
  return (
    <div className="dark:text-[#0F0F0F] flex justify-around mx-12 max-xl:flex-col max-xl:items-center max-xl:mx-3 max-2xl:flex-col max-2xl:items-center max-2xl:mx-3 min-h-[95vh]">
      <div
        id="welcome"
        className=" pt-36 text-center flex flex-col justify-start items-center gap-3 lg:gap-8 w-3/5 mb-8 max-lg:p-18 max-lg:w-3/4 max-lg:pb-0 max-2xl:p-18 max-2xl:w-1/2 max-2xl:pb-0"
      >
        <div className="w-1/2 hover:scale-110 duration-500 cursor-none max-xl:w-3/4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <img
              src={profile}
              alt=""
              style={{
                borderRadius: "100%",
              }}
            />
          </motion.div>
        </div>
        <div className="text-3xl font-semibold lg:text-4xl max-xl:text-2xl max-xl:pt-8 max-xl:font-bold">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Hi, I’m Avinash Chinnala",
              1000,
              "A passionate Software Engineer",
              1000,
            ]}
            speed={10}
            repeat={Infinity}
          />
        </div>
      </div>
      <div
        id="introducing"
        className="w-4/5 p-4 pr-12 text-center gap-2 lg:gap-6 font-semibold flex flex-col items-center justify-start pt-36 max-xl:w-full max-xl:items-center max-xl:py-4 max-xl:p-0 max-xl:mt-0"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <h1 className="text-2xl font-semibold lg:text-4xl text-center">
            Software Engineer |{" "}
            <span className="text-[#AAEEC4] dark:text-[#32B280] font-bold">
              Java , JavaScript ,React , Angular and .NET
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg pt-3 ">
            I design and develop full-stack web applications using{" "}
            <span className="font-bold text-[#AAEEC4] dark:text-[#32B280]">
              Java , React , Angular JS and .NET Framework
            </span>{" "}
            with a strong focus on performance, maintainability, and clean
            architecture. My backend systems are powered by{" "}
            <span className="font-bold text-[#AAEEC4] dark:text-[#32B280]">
              SQL Server, PostgreSQL, KAFKA
            </span>{" "}
            and built to scale.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
          <div className="flex flex-col items-center gap-3 mt-16">
            <p className="text-base lg:text-3xl ">
              Feel free to connect with me
            </p>
            <div className="flex gap-3 text-4xl lg:text-6xl text-[#AAEEC4] dark:text-[#32B280]">
              {links.map((item: ILink) => (
                <motion.div whileHover={{ scale: 1.1 }}>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};
