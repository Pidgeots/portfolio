import { useEffect, useRef } from "react";

function usePrevious<T>(val: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}

export default usePrevious;
