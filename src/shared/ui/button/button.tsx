import s from "./button.module.css";
import React, { FC } from "react";

interface IButton {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
export const Button: FC<IButton> = ({ text, onClick, disabled }) => {
  return (
    <button className={s["button"]} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
