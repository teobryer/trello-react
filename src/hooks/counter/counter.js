import { useEffect, useState } from "react";

function useDocumentTitleCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const newTitle = `(${count}) - Mon Application`;
    document.title = newTitle;
  }, [count]);

  return { count, setCount, increment };
}

export default useDocumentTitleCounter;
