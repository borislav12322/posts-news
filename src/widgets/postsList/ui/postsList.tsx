import { useEffect, useState } from "react";
import s from "./postsList.module.css";
import React from "react";
import { IPosts } from "../../../shared/models/posts";
import { api } from "../../../shared/api";
import { PostCard } from "../../../entities/ui/postCard";
import { useHandleViewPort } from "../../../shared/hooks/handleViewPort";
import { Button } from "../../../shared/ui/button";

export const PostsList = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [queryOptions, setQueryOptions] = useState({
    limit: 10,
    page: 1,
  });

  useEffect(() => {
    void api
      .getPostsList(queryOptions)
      .then((res) => {
        setPosts(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [queryOptions]);

  const { measureRef, isIntersecting, observer } = useHandleViewPort();

  useEffect(() => {
    if (isIntersecting && queryOptions.limit < 35) {
      setQueryOptions((oldValue) => ({ ...oldValue, limit: oldValue.limit + 5 }));
      observer?.disconnect();
    }
  }, [isIntersecting]);

  return (
    <div>
      {isLoading ? (
        "...Loading"
      ) : (
        <div className={s["list"]}>
          {posts.map((post, index, array) => {
            return (
              <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                measureRef={array.length - 1 === index ? measureRef : null}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
