import { startTransition, useEffect, useState } from "react";
import s from "./postsList.module.css";
import React from "react";
import { IPosts } from "../../../shared/models/posts";
import { api } from "../../../shared/api";
import { PostCard } from "../../../entities/ui/postCard";
import { useHandleViewPort } from "../../../shared/hooks/handleViewPort";
import { Button } from "../../../shared/ui/button";
import pageData from "./postsList.json";
import { useSearchParams } from "react-router-dom";
// Компонент списка постов
export const PostsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParamPart = searchParams.get("part");
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [queryOptions, setQueryOptions] = useState({
    limit: pageData.common_limit * Number(queryParamPart) || pageData.common_limit,
    page: 1,
    part: Number(queryParamPart) || 1,
  });

  const setPartQuery = () => {
    setQueryOptions((oldValue) => {
      return { ...oldValue, part: oldValue.part + 1 };
    });
  };

  // Получение дополнительных постов
  const getMorePosts = (count: number = 10) => {
    setPartQuery();
    setQueryOptions((oldValue) => ({ ...oldValue, limit: count * oldValue.part }));
    setSearchParams(() => ({ part: String(queryOptions.part + 1) }));
  };

  // Запрос постов с сервера
  useEffect(() => {
    setIsLoading(true);

    void api
      .getPostsList(queryOptions)
      .then((res) => {
        startTransition(() => {
          setPosts(() => res);
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [queryOptions]);

  const { measureRef, isIntersecting, observer } = useHandleViewPort();

  // Отслеживание скролла
  useEffect(() => {
    if (isIntersecting && queryOptions.limit < pageData.scroll_limit) {
      getMorePosts();
      observer?.disconnect();
    }
  }, [isIntersecting]);

  // Функция нажатия для запроса дополнительных постов
  const onClickHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getMorePosts();
  };

  // Защита query параметров от невалидных значений
  useEffect(() => {
    if (Number(queryParamPart) <= 0) {
      setSearchParams({ part: "1" });
      return;
    }

    if (Number(queryParamPart) >= 10) {
      setSearchParams({ part: "10" });
      return;
    }
    if (isNaN(Number(queryParamPart))) {
      setSearchParams({ part: "1" });
      return;
    }
  }, [searchParams]);

  return (
    <>
      <div className={s["list"]}>
        {posts.map((post, index, array) => {
          return (
            <PostCard
              id={post.id}
              key={post.id}
              title={post.title}
              body={post.body}
              measureRef={array.length - 1 === index ? measureRef : null}
            />
          );
        })}

        {!isLoading && queryOptions.limit >= pageData.scroll_limit && queryOptions.limit < 100 && (
          <Button text={pageData.button_text} onClick={onClickHandle} disabled={isLoading} />
        )}
      </div>

      {isLoading ? <span>...Загрузка</span> : null}
    </>
  );
};
