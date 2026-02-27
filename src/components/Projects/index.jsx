import { useState} from "react"
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa"
import PROJECTSLIST from "./ProjectData"

const TABS = [
    {
        id:1,
        label:"All",

    },
    {
        id:2,
        label:"Full-Stack Development",

    },
    {
        id:3,
        label:"Frontend Development",

    },
    {
        id:4,
        label:"Web Design",
    }

]




const Projects = () => {
    
    const [activeTab, setActiveTab] = useState(TABS[0].id) // active tab by default (All)
    const findingTab = TABS.find(eachT => eachT.id === activeTab)
    const projectsList = findingTab.label === "All"? PROJECTSLIST: PROJECTSLIST.filter(eachPro => eachPro.category === findingTab.label);

    return (
        <div id="projects" className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col justify-start items-center text-center pt-20 md:pt-24 pb-20">
            <div className="w-11/12 md:w-4/5 flex flex-col justify-center items-center mt-4 md:mt-10" >
            <h1 className="text-2xl md:text-4xl text-gray-950 dark:text-gray-50 font-poppins font-bold inline-block border-b-4 border-blue-600 pb-1 md:pb-2 mb-10">My Projects</h1>
            <p className="text-base/7 md:text-lg/8 text-gray-950 dark:text-gray-50">
                This section showcases my full-stack MERN projects, highlighting my ability to build responsive user interfaces,
                <br/>
                develop secure backend systems, and design efficient APIs — combining strong functionality with user-focused design.            
                </p>
            {/*  Tabs content  */}
            <ul className="w-full flex flex-row justify-center items-center flex-wrap mt-10">
            {TABS.map(eachTab => {
            const activeTabStyle = eachTab.id === activeTab ? "bg-blue-600 hover:bg-blue-700 text-gray-100 dark:bg-blue-400 dark:hover:bg-blue-300 dark:text-gray-900" 
            : "bg-slate-100 hover:bg-slate-200 text-gray-900 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-100"
            return (
            <li key={eachTab.id} className="flex flex-row justify-center items-center mr-8 md:mr-10 mb-5">
                <button type="button"
                value={activeTab}
                className={`shadow-md transition-colors duration-200 rounded-full border-none outline-none cursor-pointer
                text-sm md:text-base font-roboto font-medium px-3 md:px-4 py-2 ${activeTabStyle}`}
                onClick={() => setActiveTab(eachTab.id)}>
                {eachTab.label}
                </button>
            </li> )})
            }


            </ul>
            {/*  Cards content  */}
            <div className="w-full grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-5 mr-0 md:mr-2 ">
                {projectsList.map(eachPro => (
        
                    <div key={eachPro.id} className="group min-h-[300px] w-full md:w-[300px] lg:w-[400px] xl:w-[380px] bg-white dark:bg-black rounded-lg shadow-md overflow-hidden
                    transition-all duration-500 hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-100/30 dark:shadow-gray-900/90"
                    onClick={() => window.open(eachPro.liveLink)}>
                    {/* Img - text - container */}
                    <div className="relative w-full flex flex-col justify-start items-center overflow-hidden">
                    <img src={eachPro.coverImgURL} className="w-full h-48 md:h-52 object-cover bg-cover scall-100 group-hover:scale-105 overflow-hidden transition-all duration-500 cursor-pointer"/>
                    {/* layer >>> */}
                    <div className="absolute h-full w-full flex flex-row justify-between items-center p-4 opacity-0
                    bg-gradient-to-t from-black/75 dark:from-white/75 to-transparent group-hover:opacity-100 group-hover:overflow-hidden top-[70px] md:top-[75px]
                    transition-all duration-500  cursor-pointer" >
                        {/* navigations */}
                        <span className="bg-slate-100 dark:bg-slate-900 text-xs md:text-sm font-roboto text-gray-900 dark:text-gray-100 rounded-full px-3 md:px-3 py-[6px] md:py-1 opacity-80  cursor-text" onClick={(e) => e.stopPropagation()}>{eachPro.category}</span>
                        <div className="flex flex-row justify-center items-center space-x-4">
                        {/* Git */}
                            <a href={eachPro.gitRepoLink} rel="noopener noreferrer" target="_blank" onClick={(e) => e.stopPropagation()}
                             className="bg-gray-900 dark:bg-gray-100 text-gray-50 dark:text-gray-950 text-sm md:text-base p-2 rounded-full hover:bg-gray-600 dark:hover:bg-gray-400 transition-color duration-300" >
                            <FaGithub/>
                            </a>
                        {/* Live Link */}
                            <a  href={eachPro.liveLink} rel="noopener noreferrer"  target="_blank" 
                            className="bg-gray-900 dark:bg-gray-100 text-gray-50 dark:text-gray-950 text-sm md:text-base p-2 rounded-full hover:bg-gray-600 dark:hover:bg-gray-400 transition-color duration-300">
                            <FaExternalLinkAlt/></a>
                        </div>
                    </div>
                    </div>
                    {/* About your text content project */}
                    <div className="flex flex-col items-start text-left p-4 cursor-pointer">
                    <h1 className="text-gray-900 dark:text-gray-100 text-lg font-roboto font-bold mb-2">{eachPro.title}</h1>
                    <p  className="text-gray-600 dark:text-gray-400 text-[13px] md:text-sm font-roboto">{eachPro.description}</p>
                    </div>

                    {/* Tech Stock */}
                    <div className="flex flex-row justify-start items-center flex-wrap p-3 cursor-pointer">
                    {eachPro.techStack.map(skill => (
                        <p key={skill} className="bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200 text-xs md:text-sm rounded-md font-roboto px-2 py-[2px] mr-[10px] mb-4 cursor-text" onClick={(e) => e.stopPropagation()}>{skill}</p>
                    ))}
                    </div>
                         
                    </div>
                   


                ))}

            </div>
       
        </div>
         
        </div>
    )
}

export default Projects