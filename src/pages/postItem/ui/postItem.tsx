import { PostCard } from "../../../entities/ui/postCard";
import { useEffect, useState } from "react";
import { api } from "../../../shared/api";
import { useParams } from "react-router-dom";

export const PostItem = () => {
  const { id } = useParams();

  const [cardInfo, setCardInfo] = useState({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { title, body } = cardInfo;

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

  return <>{isLoading ? "Loading..." : <PostCard title={title} body={body} measureRef={null} />}</>;
};
