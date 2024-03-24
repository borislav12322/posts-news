import s from "./wrapper.module.css";
import { Outlet } from "react-router-dom";
export const Wrapper = () => {
  return (
    <div className={s["wrapper"]}>
      <header className={s["header"]}>
        <h1 className={s["title"]}>Посты</h1>
      </header>
      <div className={s["content"]}>
        <Outlet />
      </div>
    </div>
  );
};
