import s from "./postCard.module.css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import routeNames from "App/router/routeNames.json";

interface IPostCard {
  id?: number;
  title: string;
  body: string;
  measureRef: ((node: Element) => void) | null;
}
// Карточка с информацией о посту
export const PostCard: FC<IPostCard> = ({ title, body, measureRef, id }) => {
  const navigate = useNavigate();
  // Функция для навигации на страницу поста
  const navigateItem = () => {
    if (id) {
      navigate(`${routeNames.posts}/${id}`);
    }
  };

  return (
    <div
      className={s["card"]}
      ref={measureRef}
      onClick={() => {
        navigateItem();
      }}
    >
      <div className={s["wrapper"]}>
        <h2 className={s["title"]}>{title}</h2>
        <p className={s["body"]}>{body}</p>
      </div>
    </div>
  );
};
