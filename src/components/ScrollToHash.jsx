import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      if (hash) {
        try {
          const decodedHash = decodeURIComponent(hash);
          const element = document.querySelector(decodedHash);

          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            console.warn(`Element not found for selector: ${decodedHash}`);
          }
        } catch (err) {
          console.error("Error scrolling to hash:", err);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [hash]);
  
  return null;
}
