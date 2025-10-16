import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const navigationTabList = [{
  tabId:1,
  tabLabel:"Home",
  tabLink:"#home"
},
{
  tabId:2,
  tabLabel:"About",
  tabLink:"#about"
},
{
  tabId:3,
  tabLabel:"Projects",
  tabLink:"#projects"
},
{
  tabId:4,
  tabLabel:"Contact",
  tabLink:"#contact"
},
]



const Header = () => {
const [activeTab , setActiveTab] = useState(navigationTabList[0].tabId)

const [scrolled, setScrolled] = useState(false); // scrolling tuggele


useEffect(() => {
  const sections = document.querySelectorAll("#home, #about, #projects, #contact");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSection = navigationTabList.find(
            (tab) => tab.tabLink === `#${entry.target.id}`
          );
          if (activeSection) {
            setActiveTab(activeSection.tabId);
          }
        }
      });
    },
    { threshold: 0.4 } // 60% visible
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, []);




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 ) {   // adjust scroll value
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // adding event lisner
    return () => window.removeEventListener("scroll", handleScroll);  // remove event lisner
  }, []);


 // Dark or Light Theme mode truggle >>>>>>>>>>>
   const [darkMode, setDarkMode] = useState(false);

  // add a class="dark" for html tag in index.html
  // Load theme from localStorage or system preference 

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; 
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Function to toggle the mode
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };


    return (
    <div  className={`h-20 w-full fixed top-0 left-0 z-50 transition-all duration-300 flex flex-col justify-center items-center
       ${
        scrolled ? "backdrop-blur-md bg-stone-50/95 dark:bg-stone-950/95 shadow-md h-[70px]" : "bg-gradient-to-r from-white to-sky-50 dark:from-black dark:to-sky-950"
      }`}>
      <section className="w-4/5 flex flex-row justify-between items-center">
        <a className="text-2xl font-montserrat font-bold text-blue-600 dark:text-blue-400 border-none outline-none mr-10"
         href="#home" rel="noopener noreferrer">Portfolio</a>

      <ul className="flex flex-row justify-center items-center">
        {navigationTabList.map(eachTab => {
        const isActive = activeTab ===  eachTab.tabId ? "text-blue-800 font-bold dark:text-blue-600" : "text-gray-500 dark:text-gray-400 font-normal"
         return (
          <li key={eachTab.tabId} className="mr-6">
            <a href={eachTab.tabLink} onClick={() => setActiveTab(eachTab.tabId)} className={`text-lg font-roboto hover:text-blue-800 dark:hover:text-blue-200 ${isActive}`}>
              {eachTab.tabLabel}</a>
          </li>
         )
})}
      </ul>
    
    <button className=" dark:bg-slate-800 bg-slate-100 text-gray-800 dark:text-slate-200 p-2 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700" onClick={toggleTheme}>
      {darkMode? <Sun className="w-4 h-4 md:w-5 md:h-5"/>:<Moon className="w-4 h-4 md:w-5 md:h-5"/>} 
    </button>
      </section>
    </div>
)
}

export default Header