// https://gist.github.com/yarastqt/a35261d77d723d14f6d1945dd8130b94
import { nanoid } from "nanoid/non-secure";

import {
  EffectCallback,
  DependencyList,
  useLayoutEffect,
  useState,
  useEffect,
  useMemo,
} from "react";

// lib/canUseDOM
const canUseDOM = (): boolean => {
  return (
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
  );
};

// lib/useIsomorphicLayoutEffect
function useIsomorphicLayoutEffect(
  fn: EffectCallback,
  deps: DependencyList
): void {
  return canUseDOM() ? useLayoutEffect(fn, deps) : useEffect(fn, deps);
}

let isClientEnv = false;
let id = 0;

export default function useUniqId(): string | undefined {
  const idRef = useMemo(() => (isClientEnv ? nanoid() : undefined), []);
  const [id, setId] = useState(idRef);

  useIsomorphicLayoutEffect(() => {
    if (id === undefined) {
      setId(nanoid());
    }
  }, []);

  useEffect(() => {
    if (!isClientEnv) {
      isClientEnv = true;
    }
  }, []);

  return id;
}
