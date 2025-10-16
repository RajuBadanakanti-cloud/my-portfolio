import { useEffect, useState } from "react";
import { Sun, Moon, X, Menu } from "lucide-react";



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



const MobileHeader = () => {

const [scrolled, setScrolled] = useState(false) // scrolling tuggele
  const [isShown , setIsShown] = useState(false) // Mobile Navbar View >>>>>


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



// Theme Toggle >>>>>>>> 
const [darkMode, setDarkMode] = useState(false)


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

const toggleTheme = () =>{
  if(darkMode){
    document.documentElement.classList.remove("dark") // in-builted theme removed
    localStorage.setItem("theme", "light")
    setDarkMode(false)
  } else{
    document.documentElement.classList.add("dark") // in-builted added removed
    localStorage.setItem("theme", "dark")
    setDarkMode(true)
  }
}


    return (
    <>
    <div  className={`h-16 w-full fixed top-0 left-0 z-50 transition-all duration-300 flex flex-col justify-center items-center
       ${
        scrolled ? "backdrop-blur-md bg-stone-50/95 dark:bg-stone-950/95  shadow-md h-[70px]" :  "bg-gradient-to-r from-white to-sky-50 dark:from-black dark:to-sky-950"
      }`}>
        <section className="w-11/12 flex flex-row justify-between items-center">

        <a className="text-lg font-montserrat font-bold text-blue-600 dark:text-blue-400  border-none outline-none mr-10"
         href="#home" rel="noopener noreferrer">Portfolio</a>
        <div className="flex flex-row justify-center items-center">
        {/* Theme mode content */}
          <button className=" dark:bg-slate-800 bg-slate-100  text-slate-900 dark:text-slate-100 p-2 mr-5 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700" onClick={toggleTheme}>
          {darkMode? <Sun className="w-4 h-4 md:w-5 md:h-5"/>:<Moon className="w-4 h-4 md:w-5 md:h-5"/>} 
          </button>
        {/*Menu bar and close content */}
         {isShown ?
        <button type="button" className="border-none bg-transparent text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
         onClick={() => setIsShown(prev => !prev)}><X className="w-6 h-6"/></button> 
         : 
        <button type="button" className="border-none bg-transparent text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
         onClick={() => setIsShown(prev => !prev)}><Menu className="w-6 h-6"/> </button>
        }
        </div>
         </section>
        
        </div>
        {/* Menu bar open and navigation content  */}
        {isShown &&
         <div className="min-h-[200px] w-full bg-stone-50 dark:bg-slate-950 top-16 fixed z-50 shadow-md overflow-hidden transition-all duration-300 rounded-b-md">
          <ul className="w-5/6 flex flex-col justify-start items-center p-5">
          {navigationTabList.map(each => (
            <li key={each.tabId} className="w-5/6 mb-5">
              <a href={each.tabLink} rel="noopener noreferrer" onClick={() => setIsShown(false)} className="text-gray-800 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400">{each.tabLabel}</a>
            </li>
          ))}

          </ul>
          </div>}
        </>
    )
}

export default MobileHeader