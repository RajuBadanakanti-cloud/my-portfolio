import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // or any arrow-up icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show icon after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <a
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-2 md:p-3 bg-blue-600 text-gray-50 text-xs md:text-base rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ChevronUp />
      </a>
    )
  );
};

export default ScrollToTop;
