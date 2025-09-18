import { IoMdMenu } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { RxMoon } from "react-icons/rx";
import { WiDaySunny } from "react-icons/wi";
import { FaComputer } from "react-icons/fa6";
import { useState } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { LoadingOverlay } from "./LoadingOverlay";
import logo from "../assets/Iogo.png";
import { motion } from "framer-motion";

interface IListName {
  name: string;
  url: string;
  icon: IconType;
}

export const Navbar = () => {
  const navigate = useNavigate();
  const [darkmode, setDarkmode] = useState<boolean>(true);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const listName: IListName[] = [
    {
      name: "HOME",
      url: "/",
      icon: IoHome,
    },
    {
      name: "ABOUT",
      url: "/about",
      icon: BsPersonVcard,
    },
    {
      name: "PROJECTS",
      url: "/projects",
      icon: FaComputer,
    },
  ];

  const handleClickList = (url: string) => {
    setNavList(false);
    setIsloading(true);
    setTimeout(() => {
      navigate(`${url}`);
      setIsloading(false);
    }, 200);
  };

  const handleClickMode = () => {
    setIsloading(true);
    setTimeout(() => {
      setDarkmode(!darkmode);
      const docs = document.documentElement.classList;

      if (docs.contains("dark")) {
        docs.remove("dark");
      } else {
        docs.add("dark");
      }
      setIsloading(false);
    }, 200);
  };

  window.addEventListener("scroll", () => {
    setNavList(false);
  });

  const [navList, setNavList] = useState<boolean>(false);
  return (
    <nav className="fixed z-50 top-0 text-white w-full bg-[#0F0F0F] dark:text-white border-b border-white">
      {isLoading && <LoadingOverlay />}
      <div className="lg:px-36 flex items-center justify-between max-lg:px-8">
        <img src={logo} className="w-44 h-20 relative" />
        <div className="flex items-center text-2xl gap-3 lg:gap-10">
          {/* lg navlist */}
          <ul className="flex items-center gap-10 max-lg:hidden cursor-pointer">
            {listName.map((item: IListName) => {
              return (
                <div
                  key={item.name}
                  className={`flex items-center gap-3 cursor-pointer  ${
                    location.pathname === item.url &&
                    "text-[#32B280] font-semibold"
                  }`}
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <item.icon
                      className="cursor-pointer"
                      onClick={() => handleClickList(item.url)}
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <a
                      className={``}
                      onClick={() => handleClickList(item.url)}
                      key={item.name}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                </div>
              );
            })}
          </ul>
          {darkmode ? (
            <motion.div whileHover={{ scale: 1.1 }}>
              {" "}
              <div
                className="text-4xl cursor-pointer"
                onClick={handleClickMode}
              >
                <WiDaySunny />
              </div>
            </motion.div>
          ) : (
            <motion.div whileHover={{ scale: 1.1 }}>
              {" "}
              <div className="mr-2 cursor-pointer" onClick={handleClickMode}>
                <RxMoon />
              </div>
            </motion.div>
          )}

          <span
            className="text-4xl cursor-pointer lg:hidden"
            onClick={() => setNavList(!navList)}
          >
            {navList ? <AiFillCloseCircle /> : <IoMdMenu />}
          </span>
        </div>
      </div>
      <ul
        className={`absolute w-screen flex flex-col items-center py-4 gap-4 bg-[#0F0F0F] text-[#F1F1F1] dark:bg-opacity-95 bg-opacity-95 duration-200 ${
          navList ? "" : "-translate-y-64"
        } dark:text-black dark:bg-[#F1F1F1]`}
      >
        {listName.map((item: IListName) => {
          return (
            <a
              key={item.name}
              className={`flex items-center gap-3 cursor-pointer ${
                location.pathname === item.url && "font-semibold text-[#32B280]"
              }`}
              onClick={() => handleClickList(item.url)}
            >
              <item.icon />
              {item.name}
            </a>
          );
        })}
      </ul>
    </nav>
  );
};
