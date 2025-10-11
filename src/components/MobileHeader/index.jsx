import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



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

const [scrolled, setScrolled] = useState(false); // scrolling tuggele

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



  // Mobile Navbar View >>>>>>>>>>>>>
  const [isShown , setIsShown] = useState(false)



    return (
    <>
    <div  className={`h-16 w-full fixed top-0 left-0 z-50 transition-all duration-300 flex flex-col justify-center items-center
       ${
        scrolled ? "backdrop-blur-md bg-stone-50 shadow-md h-[70px]" : "bg-gradient-to-r from-white to-sky-50 opacity-100"
      }`}>
        <section className="w-11/12 flex flex-row justify-between items-center">
        <a className="text-lg font-montserrat font-bold text-blue-600 border-none outline-none mr-10"
         href="#home" rel="noopener noreferrer">Portfolio</a>
        {isShown ? <button type="button" className="border-none bg-transparent text-lg hover:text-blue-500" onClick={() => setIsShown(prev => !prev)}><FaTimes/></button> : 
        <button type="button" className="border-none bg-transparent text-lg hover:text-blue-500" onClick={() => setIsShown(prev => !prev)}><FaBars/></button>
        }
         </section>
        
        </div>
        {isShown &&
         <div className="min-h-[200px] w-full bg-stone-50 top-16 fixed z-50 shadow-md overflow-hidden transition-all duration-300 rounded-b-md">
          <ul className="w-5/6 flex flex-col justify-start items-center p-5">
          {navigationTabList.map(each => (
            <li key={each.tabId} className="w-5/6 mb-5">
              <a href={each.tabLink} rel="noopener noreferrer" onClick={() => setIsShown(false)} className="text-gray-800 font-semibold hover:text-blue-500">{each.tabLabel}</a>
            </li>
          ))}

          </ul>
          </div>}
        </>
    )
}

export default MobileHeader