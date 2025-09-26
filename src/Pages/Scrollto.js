import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const smoothScrollToTop = (duration = 800) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); 
    window.scrollTo(0, start * (1 - ease));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    smoothScrollToTop(1200); 
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;