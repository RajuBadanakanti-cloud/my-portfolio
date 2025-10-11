import { useEffect, useState } from "react";


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


 

    return (
    <div  className={`h-20 w-full fixed top-0 left-0 z-50 transition-all duration-300 flex flex-col justify-center items-center
       ${
        scrolled ? "backdrop-blur-md bg-stone-50/95 shadow-md h-[70px]" : "bg-gradient-to-r from-white to-sky-50"
      }`}>
      <section className="w-4/5 flex flex-row justify-between items-center">
        <a className="text-2xl font-montserrat font-bold text-blue-600 border-none outline-none mr-10"
         href="#home" rel="noopener noreferrer">Portfolio</a>

      <ul className="flex flex-row justify-center items-center">
        {navigationTabList.map(eachTab => {
        const isActive = activeTab ===  eachTab.tabId ? "text-blue-800 font-bold" : "text-gray-500 font-normal"
         return (
          <li key={eachTab.tabId} className="mr-6">
            <a href={eachTab.tabLink} onClick={() => setActiveTab(eachTab.tabId)} className={`text-lg font-roboto hover:text-blue-800 ${isActive}`}>
              {eachTab.tabLabel}</a>
          </li>
         )
})}
      </ul>

      </section>
    </div>
)
}

export default Header