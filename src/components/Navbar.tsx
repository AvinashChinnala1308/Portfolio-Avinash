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
    <nav className="fixed z-50 top-0 w-full glass-card backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50">
      {isLoading && <LoadingOverlay />}
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <img src={logo} className="h-12 w-auto" alt="Avinash Chinnala" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {listName.map((item: IListName) => {
                const isActive = location.pathname === item.url;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <button
                      onClick={() => handleClickList(item.url)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 focus-ring ${
                        isActive
                          ? "text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30"
                          : "text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      }`}
                    >
                      <item.icon className="text-lg" />
                      {item.name}
                    </button>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right side - Theme toggle and mobile menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClickMode}
              className="p-3 glass-card rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 focus-ring"
            >
              {darkmode ? (
                <WiDaySunny className="text-xl text-warning" />
              ) : (
                <RxMoon className="text-xl text-info" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setNavList(!navList)}
              className="md:hidden p-3 glass-card rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 focus-ring"
            >
              {navList ? (
                <AiFillCloseCircle className="text-xl text-error" />
              ) : (
                <IoMdMenu className="text-xl text-muted-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: navList ? "auto" : 0,
          opacity: navList ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pt-2 pb-3 space-y-1 glass-card backdrop-blur-xl">
          {listName.map((item: IListName) => {
            const isActive = location.pathname === item.url;
            return (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleClickList(item.url)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 focus-ring ${
                  isActive
                    ? "text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                <item.icon className="text-lg" />
                {item.name}
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
};
