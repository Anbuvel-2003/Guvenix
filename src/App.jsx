import { useEffect, useRef, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Footer from "./pages/footer";
import Navbar from "./pages/navbar";
import Homepage from "./pages/homepage";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Aboutus from "./pages/aboutus";
import Contactus from "./pages/contactus";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,

    });
  }, []);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/Services",
      element: <Services />,
    },
    {
      path: "/Portfolio",
      element: <Portfolio />,
    },
    {
      path: "/Aboutus",
      element: <Aboutus />,
    },
    {
      path: "/Contactus",
      element: <Contactus />,
    }
  ]);
  return (
    <div>
      <Navbar />
      <div className="relative">
        <RouterProvider router={router} />
        <Footer />
        {showTopBtn && (
          <div
            onClick={scrollToTop}
            className="fixed right-10 bottom-50 cursor-pointer !grid items-center transform -rotate-90 origin-bottom-right group z-50"
          >
            <span className="text-xs text-[#8c8c8c] tracking-widest font-medium uppercase mb-2">
              <span className="w-14 h-0.5 bg-[#8c8c8c] transition-all duration-500 group-hover:w-0 group-hover:opacity-0"></span>
              Back to Top
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;