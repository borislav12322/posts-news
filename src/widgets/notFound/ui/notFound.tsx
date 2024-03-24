import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div>Страница не найдена</div>
      <Link to="/">Главная страница</Link>
    </>
  );
};
