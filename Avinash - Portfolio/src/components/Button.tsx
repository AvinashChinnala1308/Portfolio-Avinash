import { FC } from "react";
import resume from "../assets/Avinash_Resume.pdf";

type TButton = {
  label: string;
  handleClick: () => void;
  style: string;
};
export const Button: FC<TButton> = ({ label, handleClick, style }) => {
  const onClickButton = () => {
    handleClick();
  };
  return (
    <a download href={resume}>
      <button
        onClick={() => onClickButton()}
        className={`px-4 py-3 rounded-lg cursor-pointer ${style}`}
      >
        {label}
      </button>
    </a>
  );
};
