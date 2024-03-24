import s from "./postCard.module.css";
import { FC } from "react";

interface IPostCard {
  title: string;
  body: string;
  measureRef: ((node: Element) => void) | null;
}
export const PostCard: FC<IPostCard> = ({ title, body, measureRef }) => {
  return (
    <div className={s["card"]} ref={measureRef}>
      <div className={s["wrapper"]}>
        <h2 className={s["title"]}>{title}</h2>
        <p className={s["body"]}>{body}</p>
      </div>
    </div>
  );
};
