import s from "./button.module.css";
import React, { FC } from "react";

interface IButton {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button: FC<IButton> = ({ text, onClick }) => {
  return (
    <button className={s["button"]} onClick={onClick}>
      {text}
    </button>
  );
};
