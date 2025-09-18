import { FC } from "react";
import { Button } from "./Button";
import { IoCloseCircleOutline } from "react-icons/io5";

type TPopup = {
  handleClose: () => void;
};

export const Popup: FC<TPopup> = ({ handleClose }) => {
  const handleClickClose = () => {
    handleClose();
  };
  return (
    <div className="fixed w-[100vw] h-screen bg-black bg-opacity-50 flex items-center justify-center z-[99] top-0 right-0">
      <div className="bg-white rounded-lg p-20 opacity-100  flex gap-8 text-[#010138] relative">
        <Button
          label="Download"
          handleClick={() => {}}
          style="text-white bg-[#010138]"
        />
        <div
          onClick={() => handleClickClose()}
          className="absolute top-3 right-3 text-2xl cursor-pointer"
        >
          <IoCloseCircleOutline />
        </div>
      </div>
    </div>
  );
};
