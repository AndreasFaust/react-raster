import { useEffect, useRef, useState } from "react";

interface Props {
  ref?: React.MutableRefObject<HTMLElement>;
  root?: null | HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect?: (
    IntersectionObserverEntry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => void;
}

export default function onIntersect({
  ref,
  root = null,
  rootMargin,
  threshold = 0,
  onIntersect,
}: Props) {
  const observer = useRef(null);

  useEffect(() => {
    if (typeof onIntersect !== "function") return;

    observer.current = new IntersectionObserver(
      ([entry], observer) => onIntersect(entry, observer),
      {
        root,
        rootMargin,
        threshold,
      }
    );

    if (ref.current && observer.current) observer.current.observe(ref.current);
    return () => observer.current && observer.current.disconnect();
  }, []);
}
