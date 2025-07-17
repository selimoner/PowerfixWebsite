import { useEffect } from "react";
import { useLocation } from "wouter";

const ScrollToTop: React.FC = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return null;
};

export default ScrollToTop;