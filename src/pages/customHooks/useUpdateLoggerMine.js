import { useEffect } from "react";

export default function useUpdateLoggerMine(key, value) {
  useEffect(() => {
    console.log(key, ": ", value);
  }, [key, value]);
}
