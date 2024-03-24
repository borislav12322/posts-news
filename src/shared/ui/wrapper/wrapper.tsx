import s from "./wrapper.module.css";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

// Wrapper для всего приложения
export const Wrapper = () => {
  return (
    <div className={s["wrapper"]}>
      <header className={s["header"]}>
        <h1 className={s["title"]}>Посты</h1>
      </header>
      <div className={s["content"]}>
        <Suspense fallback={"Загрузка..."}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
