import { PostCard } from "Entities/ui/postCard";
import { useEffect, useState } from "react";
import { api } from "Shared/api";
import { useParams } from "react-router-dom";

// Страница поста
export const PostItem = () => {
  const { id } = useParams();

  const [cardInfo, setCardInfo] = useState({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { title, body } = cardInfo;

  // Запрос поста
  useEffect(() => {
    setIsLoading(true);
    void api
      .getPost(Number(id))
      .then((res) => {
        setCardInfo(() => ({
          title: res.title,
          body: res.body,
        }));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return <>{isLoading ? "Загрузка..." : <PostCard title={title} body={body} measureRef={null} />}</>;
};
