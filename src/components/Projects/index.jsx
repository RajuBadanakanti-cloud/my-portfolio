import { useState, useEffect } from "react"
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa"

const TABS = [
    {
        id:1,
        label:"All",

    },
    {
        id:2,
        label:"Web Development",

    },
    {
        id:3,
        label:"Frontend UX/UI",

    },
    {
        id:4,
        label:"Design",
    }

]


const PROJECTSLIST = [
    {
        id:1,
        category:"Web Development",
        title:"To-Do App",
        description: "myTodos is a responsive to-do list web app designed to simplify task management. With a clean design, intuitive interface, and smooth interactions, it helps users stay organized and productive, making daily task tracking effortless and efficient.",
        techStack:["HTML", "CSS", "JavaScript", "React", "LocalStorage"],
        gitRepoLink:"https://github.com/RajuBadanakanti-cloud/my-todos-app.git",
        liveLink:"https://rbcloud-mytodos-app.netlify.app/",
        coverImgURL:"https://images.pexels.com/photos/3680904/pexels-photo-3680904.jpeg",
    },
    {
        id:2,
        category:"Frontend UX/UI",
        title:"Interactive Quiz",
        description:"Interactive Quiz is a dynamic, engaging web app that lets users test their knowledge across multiple topics. With instant feedback, clean UI, and user-friendly flow, it’s built to make learning fun and interactive—perfect for expanding skills and challenging yourself.",
        techStack:["HTML", "CSS", "JavaScript", "React"],
        gitRepoLink:"https://github.com/RajuBadanakanti-cloud/interactive-quiz.git",
        liveLink:"https://rbcloud-interactive-quiz.netlify.app/",
        coverImgURL:"https://res.cloudinary.com/dnh9hnjbx/image/upload/v1755676261/todo-bg-image_pseqy9.png",
    },
    {
        id:3,
        category:"Web Development",
        title:"Recipe Book",
        description:"RecipeBook is a clean, responsive web app that helps users discover, view, and organize recipes. Featuring intuitive navigation, beautiful layout, and simple interactions, it’s crafted to inspire home cooks and make finding new dishes fast and enjoyable.",
        techStack:["HTML", "CSS", "JavaScript", "React","Context", "LocalStorage"],
        gitRepoLink:"https://github.com/RajuBadanakanti-cloud/recipe-book.git",
        liveLink:"https://rbcloud-recipebook.netlify.app/",
        coverImgURL:"https://res.cloudinary.com/dnh9hnjbx/image/upload/v1755676261/todo-bg-image_pseqy9.png",
    },
    {
        id:4,
        category:"Web Development",
        title:"Personal Portfolio",
        description:"A personal portfolio showcasing my projects, skills, and design philosophy. Clean layout, fast performance, and intuitive navigation combine to highlight my strengths as a developer and designer, offering a polished view of my work and capabilities.",
        techStack:["HTML", "CSS", "JavaScript", "React", "APIcalls", "Node + Nodemail"],
        gitRepoLink:"https://github.com/RajuBadanakanti-cloud/personal-portfolio.git",
        liveLink:"https://rbcloud-portfolio.netlify.app/",
        coverImgURL:"https://images.pexels.com/photos/3680904/pexels-photo-3680904.jpeg",
    },
    {
        id:5,
        category:"Web Development",
        title:"NXTTreadz eCommerce Clone",
        description:"NXT Trendz App is a modern, responsive web application showcasing trending content with intuitive design. Users can explore categories, view dynamic listings, and enjoy smooth navigation. Built to offer both style and usability in one seamless experience.",
        techStack:["HTML", "CSS", "JavaScript", "React", "APIcalls","Authentication", "JWTToken"],
        gitRepoLink:"https://github.com/RajuBadanakanti-cloud/NXTTrendz-eCommerce-website.git",
        liveLink:"https://rjnxttrendzapp.ccbp.tech/",
        coverImgURL:"https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg",
    },
    {
        id:6,
        category:"Web Development",
        title:"NXTTreadz eCommerce Clone",
        description:"NXT Trendz App is a modern, responsive web application showcasing trending content with intuitive design. Users can explore categories, view dynamic listings, and enjoy smooth navigation. Built to offer both style and usability in one seamless experience.",
        techStack:["HTML", "CSS", "JavaScript", "React", "APIcalls","Authentication", "JWTToken"],
        gitRepoLink:"https://github.com/RajuBadanakanti-cloud/NXTTrendz-eCommerce-website.git",
        liveLink:"https://rjnxttrendzapp.ccbp.tech/",
        coverImgURL:"https://res.cloudinary.com/dnh9hnjbx/image/upload/v1755676261/todo-bg-image_pseqy9.png",
    }



]


const Projects = () => {
    
    const [activeTab, setActiveTab] = useState(TABS[0].id) // active tab by default (All)
    const findingTab = TABS.find(eachT => eachT.id === activeTab)
    const projectsList = findingTab.label === "All"? PROJECTSLIST: PROJECTSLIST.filter(eachPro => eachPro.category === findingTab.label);

    return (
        <div id="projects" className="min-h-screen bg-gray-50 flex flex-col justify-start items-center text-center pt-20 md:pt-24 pb-20">
            <div className="w-11/12 md:w-4/5 flex flex-col justify-center items-center mt-4 md:mt-10" >
            <h1 className="text-2xl md:text-4xl font-poppins font-bold inline-block border-b-4 border-blue-600 pb-1 md:pb-2 mb-10">My Projects</h1>
            <p className="text-base/7 md:text-lg/8">Here it is a showcase of projects that highlight my expertise in web development and UX/UI design,
                 blending functionality with user-focused design.</p>
            {/*  Tabs content  */}
            <ul className="w-full flex flex-row justify-center items-center flex-wrap mt-10">
            {TABS.map(eachTab => {
            const activeTabStyle = eachTab.id === activeTab ? "bg-blue-600 hover:bg-blue-700 text-gray-100" : "bg-slate-100 hover:bg-slate-200 text-gray-900"
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
        
                    <div key={eachPro.id} className="group min-h-[300px] w-full md:w-[300px] lg:w-[400px] xl:w-[360px] bg-white rounded-lg shadow-md overflow-hidden
                    transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                     onClick={() => window.open(eachPro.liveLink,"_blank")}>
                    {/* Img - text - container */}
                    <div className="relative w-full flex flex-col justify-start items-center overflow-hidden">
                    <img src={eachPro.coverImgURL} className="w-full h-48 md:h-52 object-cover bg-cover scall-100 group-hover:scale-105 overflow-hidden transition-all duration-500"/>
                    {/* layer >>> */}
                    <div className="absolute h-full w-full flex flex-row justify-between items-center p-4 opacity-0
                    bg-gradient-to-t from-black/75 to-transparent group-hover:opacity-100 group-hover:overflow-hidden top-[70px] md:top-20
                    transition-all duration-500">
                        {/* navigations */}
                        <span className="bg-blue-600 text-xs md:text-sm font-roboto text-slate-100 rounded-full px-3 md:px-3 py-[6px] md:py-1" >{eachPro.category}</span>
                        <div className="flex flex-row justify-center items-center space-x-4">
                        {/* Git */}
                            <a href={eachPro.gitRepoLink} rel="noopener noreferrer" target="_blank"
                             className="bg-gray-900 text-gray-50 text-sm md:text-base p-2 rounded-full hover:bg-gray-600 transition-color duration-300" 
                             onClick={(e) => e.stopPropagation()}>
                            <FaGithub/>
                            </a>
                        {/* Live Link */}
                            <a  href={eachPro.liveLink} rel="noopener noreferrer"  target="_blank" 
                            className="bg-gray-900 text-gray-50 text-sm md:text-base p-2 rounded-full hover:bg-gray-600 transition-color duration-300">
                            <FaExternalLinkAlt/></a>
                        </div>
                    </div>
                    </div>
                    {/* About your text content project */}
                    <div className="flex flex-col items-start text-left p-4">
                    <h1 className="text-gray-900 text-lg font-roboto font-bold mb-2">{eachPro.title}</h1>
                    <p  className="text-gray-600 text-[13px] md:text-sm font-roboto">{eachPro.description}</p>
                    </div>

                    {/* Tech Stock */}
                    <div className="flex flex-row justify-start items-center flex-wrap p-4">
                    {eachPro.techStack.map(skill => (
                        <p key={skill} className="bg-slate-100 text-gray-800 text-xs md:text-sm rounded-lg font-roboto px-2 mr-2 mb-4" >{skill}</p>
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