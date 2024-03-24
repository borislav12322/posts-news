import { useCallback, useState } from "react";

export const useHandleViewPort = (
  options: {
    root: Element | Document | null;
    rootMargin: string;
    threshold: number;
  } = { root: null, rootMargin: "0px", threshold: 0 },
) => {
  const { root, rootMargin, threshold } = options;

  const [observer, setOserver] = useState<IntersectionObserver | null>(null);
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  const measureRef = useCallback(
    (node: Element) => {
      if (node) {
        const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(node);
        setOserver(observer);
      }
    },
    [root, rootMargin, threshold],
  );

  return { measureRef, isIntersecting, observer };
};
