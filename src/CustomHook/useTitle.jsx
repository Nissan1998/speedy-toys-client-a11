import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Speedy-Toys | ${title}`;
  }, [title]);
};
export default useTitle;
