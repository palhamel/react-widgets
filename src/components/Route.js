import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  // to update Route:
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // route handler for click event:
  useEffect(() => {
    const onLocationChange = () => {
      console.log("location change:");
      setCurrentPath(window.location.pathname)
    };

    window.addEventListener("popstate", onLocationChange);

    // cleanup event listener:
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
