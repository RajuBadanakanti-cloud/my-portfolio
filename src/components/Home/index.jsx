import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // or any arrow icon
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"
import './index.css'

const profileImgURL = "https://res.cloudinary.com/dnh9hnjbx/image/upload/v1757773090/My%20Personals/4KProfile-3-3_IMG_PhotoGrid_fn4dgc.png"


const TypingFadeText = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // smooth letter-by-letter delay
      },
    },
  };

  const letterAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.h1
      className="text-[30px] md:text-6xl font-roboto font-bold text-slate-900 flex flex-wrap mb-1 md:mb-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wIndex) => (
        <span key={wIndex} className="inline-block mr-2">
          {word.split("").map((char, cIndex) => (
            <motion.span key={cIndex} variants={letterAnim}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
};



  const Home = () => (
  <div id="home" className="min-h-screen w-full bg-gradient-to-r from-white to-sky-50 pt-20 pb-10 flex flex-col justify-center items-center">
    <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row justify-center md:justify-between items-center mt-10 md:mt-20">
    {/* Text intro Section */}
    <section className="w-full md:w-1/2 flex flex-col justify-center md:justify-start items-center md:items-start mr-0 md:mr-5 order-2 md:order-1">
    <TypingFadeText text="Creative Developer & Designer"/>
      <motion.p 
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
        className="text-sm/6 md:text-base/8 
        text-slate-800 mt-4 md:mt-5 tracking-wide"
      >
        I design and build high-performance digital experiences that are responsive, intuitive, and visually striking. 
        Let’s collaborate to bring your vision to life with precision and creativity.
      </motion.p>
      <div className="w-full flex flex-col md:flex-row md:items-center mt-8 md:mt-10">
        {/*  Explore Projects navigation >> */}
            <a className="bg-blue-600 outline-none h-12 w-full md:h-12  md:w-44 text-gray-50 font-medium text-base
            rounded-md md:rounded-lg mb-4 md:mb-0 md:mr-5 hover:bg-blue-800 duration-200 flex flex-col justify-center items-center" 
            href="#projects" rel="noopener noreferrer">
            Explore My Projects </a>
     
        {/*  Contacts Button >> */}
            <a className="bg-transparent text-blue-600 font-medium h-12 w-full md:h-12 md:w-40 outline-none border-2
            border-blue-600 rounded-lg hover:bg-sky-100 transition-colors duration-200 flex flex-col justify-center items-center"
            href="#contact" rel="noopener noreferrer">
            Contacts Me
            </a>
 
      </div>

      {/* Navigation Links container */}
      <div className="w-full flex flex-row justify-start md:items-center ml-1 mt-6 md:mt-5">
        {/* GitHub */}
        <a
         href="https://github.com/RajuBadanakanti-cloud"
         target="_blank"
         rel="noopener noreferrer"
         className="text-xl md:text-2xl text-gray-600 hover:text-blue-800 transition-colors duration-300 mr-8 md:mr-5"
        >
         <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
         href="https://www.linkedin.com/in/raju-badanakanti-491705259/"
         target="_blank"
         rel="noopener noreferrer"
         className="text-xl md:text-2xl text-gray-600 hover:text-blue-800 transition-colors duration-300 mr-8 md:mr-5"
        >
        <FaLinkedin />
        </a>


        {/* EMail */}
        <a
         href="mailto:rajubadanakanti7@gmail.com"
         target="_blank"
         rel="noopener noreferrer"
         className="text-xl md:text-2xl text-gray-600 hover:text-blue-800 transition-colors duration-300 mr-8 md:mr-5"
        >
        < FaEnvelope />
        </a>

      </div>



    </section>

    {/* Image Profile Section */}
    <section className="w-1/2 flex flex-col justify-center items-center md:items-end text-center order-1 md:order-2 mb-5 md:mb-0">
      <div className="bg-slate-200 h-[250px] w-[250px] md:h-[300px] md:w-[300px] border-4 border-slate-900  rounded-full m-2 relative shadow-xl">
        <img src={profileImgURL} alt="profile" className="w-full absolute rounded-full"/>
      </div>
    </section>

    </div>

    <a href="#contact" rel="noopener noreferror">
      <ChevronDown className="w-7 h-7 md:w-8 md:h-8 text-gray-600 fade-down mt-16 md:mt-20 bg-gray-100 rounded-full p-1 cursor-pointer" />
    </a> 

  </div>
  )
 
export default Home