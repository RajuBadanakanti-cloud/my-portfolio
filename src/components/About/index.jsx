import {FaLaptopCode,FaServer, FaPenNib} from 'react-icons/fa'
import {FaGlobe ,FaPencilRuler, FaPalette} from 'react-icons/fa'

  const skillsList = [{
      id:"0",
      skillType:"Frontend",
      skillsIcon:<FaLaptopCode className='mr-2 mt-[2px] text-blue-600 dark:text-blue-400'/>,
      skills:["HTML", "CSS/Tailwind", "JavaScript", "React"]
    },
    {
      id:"1",
      skillType:"Backend",
      skillsIcon:<FaServer className='mr-2 mt-[2px] text-blue-600 dark:text-blue-400'/>,
      skills:["NodeJs", "ExpressJs", "Python", "MongoDb", "SQLite"]
    },
    {
      id:"2",
      skillType:"Design",
      skillsIcon:<FaPenNib className='mr-2 mt-[2px] text-blue-600 dark:text-blue-400'/>,
      skills:["Canva", "Figma"]
    }
  ]

  const serviceList = [{
    id:0,
    serviceType:"Web Development",
    serviceIcon:<FaGlobe className='mr-2 text-blue-600 dark:text-blue-400'/>,
    description:"I build fast, responsive, and scalable websites tailored to your needs. From sleek front-end designs to strong back-end functionality, I deliver complete web solutions."
  },
  {
    id:1,
    serviceType:"UI/UX Design",
    serviceIcon:<FaPencilRuler className='mr-2 text-blue-600 dark:text-blue-400'/>,
    description:"I craft clean, engaging, and intuitive interfaces that improve user journeys. My focus is on creating designs that are both visually appealing and user-friendly."
  },
    {
    id:2,
    serviceType:"Creative Digital Design Service",
    serviceIcon:<FaPalette className='mr-2 text-blue-600 dark:text-blue-400'/>,
    description:"I design modern graphics, thumbnails, and social media visuals using Canva. From posters to presentations, I bring ideas to life with a creative and professional touch."
  }
]


const About = () => {


return (
<div id="about" className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col justify-start items-center pt-20 md:pt-24 pb-5">
  <h1 className="text-2xl md:text-4xl text-gray-950 dark:text-gray-50 font-poppins font-bold inline-block border-b-4 border-blue-600 pb-1 md:pb-2">About Me</h1>
  <div className="w-11/12 md:w-4/5 flex flex-col justify-center items-center mt-6 md:mt-10">
  {/* intro section */}
  <section className='w-full md:w-[90%] min-h-20 bg-white dark:bg-black rounded-lg text-center shadow-sm p-5 mb-10'>
    <p className='text-base/7 md:text-lg/8 text-gray-950 dark:text-gray-50'>I am a passionate Web Developer and Designer with proven experience in building responsive, user-friendly, 
      and performance-driven websites. My expertise lies in developing modern web applications that combine aesthetic design with robust functionality. 
      With a strong foundation in the MERN stack and a sharp eye for design, I focus on creating digital solutions that are fast, 
      accessible, and impactful — delivering exceptional user experiences that meet both business goals and user needs.</p>
  </section>

    {/* Skills and service container */}
    <div className='w-full bg-white dark:bg-black shadow-sm rounded-lg flex flex-col lg:flex-row justify-between items-start mb-6 md:mb-10'>
      {/* Skills Section */}
      <section className='flex flex-col justify-start items-start p-8 md:p-10'>
        <h1 className='text-gray-950 dark:text-gray-50 text-xl md:text-3xl font-roboto font-bold mb-5'>My Skills</h1>
        {/* Skills List >> */}
        <ul className='w-full flex flex-col justify-start items-start'>
          {skillsList.map(eachItem => (
            <li key={eachItem.id} className='w-full flex flex-col justify-start items-start mb-5'>
              {/* Skill Type */}
              <h1 className='text-gray-800 dark:text-gray-200  text-[16px] md:text-xl font-semibold flex flex-row justify-center items-center mb-2'>{eachItem.skillsIcon} {eachItem.skillType}</h1>
            <div className='w-full flex flex-row justify-start items-start flex-wrap'  >
              {/* evrey Skill >> */}
              {eachItem.skills.map(eachSkill => (
              <div key={eachSkill} className= 'flex flex-row justify-center items-center bg-slate-100 dark:bg-slate-900  px-4 pt-[2px] pb-[3px] mr-4 ml-1 mt-2 mb-2 rounded-2xl'>
                <p className='text-gray-800 dark:text-gray-200 text-sm md:text-base font-openSans'>{eachSkill}</p></div>
            ))}
            </div>
            </li>
          ))}
        </ul>
      </section>
      {/* Services Section */}
      <section className='w-full lg:w-1/2 flex flex-col justify-start lg:justify-end items-start p-8 md:p-10'>
        <h1 className='text-gray-950 dark:text-gray-50  text-xl md:text-3xl font-roboto font-bold'>Services</h1>
        {/* Services List >> */}
        <ul className='w-full flex flex-col justify-start items-start mt-5'>
          {serviceList.map(eachItem => (
            <li key={eachItem.id} className='w-full flex flex-col justify-start items-start mb-6'>
              {/* Skill Type */}
              <h1 className='text-gray-800 dark:text-gray-200 text-[16px] md:text-xl font-semibold flex flex-row justify-center items-center mb-2'>{eachItem.serviceIcon}{eachItem.serviceType}</h1>
              <p className='text-gray-700 dark:text-gray-400 tracking-wide text-sm/6 md:text-base ml-1'>{eachItem.description}</p>
            </li>
          ))}
        </ul>
      </section>


    </div>

  {/* My Journey section */}
  <div className='bg-slate-50 dark:bg-slate-950 shadow-sm w-full flex flex-col justify-center items-start md:items-center rounded-lg p-8 md:p-10 mb-10'>
    <h1 className='text-gray-950 dark:text-gray-50  font-roboto font-bold text-xl md:text-3xl'>My Journey</h1>
    
  {/* Web Development-Internship */}
    <div className='min-h-[100px] w-full border-l-2 border-blue-600 dark:border-blue-400 px-1 md:px-4 relative mt-10 mb-5'>
      <div className='bg-blue-600 dark:bg-blue-400 h-3 w-3 md:h-4 md:w-4 top-0 left-0 rounded-full absolute -ml-[7px] md:-ml-2'></div>
      <section className='ml-5 md:ml-10 -mt-1'>
        <h1 className='text-gray-900 dark:text-gray-100 font-roboto font-bold text-[16px] md:text-xl'>Web Development Internship</h1>
        <p className='text-blue-600 dark:text-blue-400  font-roboto mt-1 text-[12px] md:text-base'>Jun 2025 - Sept 2025</p>
        <p className='text-gray-800 dark:text-gray-300 text-sm/6 md:text-base font-roboto mt-3 tracking-wide'>I build real-world projects and websites, continuously refining my expertise in UX/UI design, problem-solving, and modern web development practices.</p>
      </section>
    </div>

    {/* NXTwave CCBP4.o - (MERN) */}
    <div className='min-h-[100px] w-full border-l-2 border-blue-600 dark:border-blue-400  px-1 md:px-4 relative mt-10 mb-5'>
      <div className='bg-blue-600 dark:bg-blue-400 h-3 w-3 md:h-4 md:w-4 top-0 left-0 rounded-full absolute -ml-[7px] md:-ml-2'></div>
      <section className='ml-5 md:ml-10 -mt-1'>
        <h1 className='text-gray-900 dark:text-gray-100 font-roboto font-bold text-[16px] md:text-xl'>NXTWave CCBP4.O (Full-Stack development)</h1>
        <p className='text-blue-600 dark:text-blue-400 font-roboto mt-1 text-[12px] md:text-base'>Nov 2022 - Jan 2025</p>
        <p className='text-gray-800 dark:text-gray-300 text-sm/6 md:text-base font-roboto mt-3 tracking-wide'>
          Enrolled in NxtWave CCBP 4.O to build software skills. Though COVID and financial issues caused a gap,
          I resumed learning, completed certifications, gained hands-experience in full-stack development, and 
          improved both technical and communication skills through projects and training.
        </p>
      </section>
    </div>
    <div className='min-h-[100px] w-full border-l-2 border-blue-600 dark:border-blue-400  px-1 md:px-4  relative mt-10 mb-5'>
      <div className='bg-blue-600 dark:bg-blue-400 h-3 w-3 md:h-4 md:w-4 top-0 left-0 rounded-full absolute -ml-[7px] md:-ml-2'></div>
      <section className='ml-5 md:ml-10 -mt-1'>
        <h1 className='text-gray-900 dark:text-gray-100 font-roboto font-bold text-[16px] md:text-xl'>BSc - Computer Science</h1>
        <p className='text-blue-600 dark:text-blue-400 font-roboto mt-1 text-[12px] md:text-base'>July 2019 - Nov 2022</p>
        <p className='text-gray-800 dark:text-gray-300  text-sm/6 md:text-base font-roboto mt-3 tracking-wide'>Graduated with a focus on software, developed basic programming skills and an understanding of technology, and motivated to learn and grow in software roles.</p>
      </section>
    </div>
  </div>

  </div>
</div>
)
}

export default About