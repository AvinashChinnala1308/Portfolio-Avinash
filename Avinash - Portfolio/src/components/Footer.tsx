import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="z-50 bg-[#0F0F0F] text-[#F1F1F1] py-5 w-full border-t border-white">
      <h1 className="text-center">
        Designed & Built with{" "}
        <span>
          <FaHeart className="inline text-red-500" />
        </span>{" "}
        by Avinash Chinnala
        <br />
        <span className="text-xs text-gray-400">
          {" "}
          © 2025 Avinash Chalam Chinnala. All rights reserved.
        </span>
      </h1>
    </div>
  );
};
