import { useEffect } from "react";

export default function useUpdateLogMine(key, value) {
  useEffect(() => {
    console.log(key, ": ", value);
  }, [key, value]);
}
