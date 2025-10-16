import {FaRegEnvelope,FaGithub,FaLinkedin } from 'react-icons/fa'

const Footer = () => (
        <div className="min-h-[300px] w-full bg-gray-900 dark:bg-gray-950 flex flex-col justify-start items-center text-center pt-10 pb-5 md:pb-10">
            <div className="w-11/12 md:w-4/5 flex flex-col lg:flex-row justify-center items-start" >
            {/* Copy rights  */}
            <section className="w-full lg:w-1/2 flex flex-col justify-start items-start md:flex-wrap lg:flex-nowrap mb-8 lg:mb-0 md:mr-10">
                <h1 className="text-gray-50 font-roboto font-bold text-xl mb-3">Portfolio</h1>
                <p className="text-gray-400 font-roboto text-left text-sm md:text-base">This portfolio reflects my professional work, expertise, and commitment to excellence.</p>
                <p className="text-gray-400 font-roboto text-left text-sm md:text-base mt-3">© 2025 Raju Badanakanti Portfolio,<br/> All rights reserved.</p>
            </section>

            {/* Quick Links  */}
            <section className="w-full md:w-1/3 flex flex-col justify-start items-start mb-8 lg:mb-0 md:mr-10">
                <h1 className="text-gray-50 font-roboto font-bold text-xl mb-3">Quick Links</h1>
                <a href="#home" rel="noopener norelerror" className="text-gray-400 text-left font-roboto text-sm md:text-base hover:text-blue-500 mb-3 md:mb-2">Home</a>
                <a href="#about" rel="noopener norelerror" className="text-gray-400 text-left  font-roboto text-sm md:text-base hover:text-blue-500 mb-3 md:mb-2">About</a>
                <a href="#projects" rel="noopener norelerror" className="text-gray-400 text-left font-roboto text-sm md:text-base hover:text-blue-500 mb-3 md:mb-2">Projects</a>
                <a href="#contact" rel="noopener norelerror" className="text-gray-400 text-left font-roboto text-sm md:text-base hover:text-blue-500 mb-3 md:mb-2">Contact</a>
            </section>

            {/* Let's Connect  */}
            <section className="w-full md:w-1/3 flex flex-col justify-center items-start mb-8 lg:mb-0 md:mr-10">
                <h1 className="text-gray-50 font-roboto font-bold text-xl mb-3">Let's Connect</h1>

                <div className='flex flex-row justify-start items-start mb-5'>
                    {/* Gmail >> */}
                    <a href="mailto:rajubadanakanti7@gmail.com" target="_blank" rel="noopener noreferrer" 
                    className='bg-gray-800 p-3 rounded-full mr-5 text-gray-400  hover:bg-blue-800 dark:hover:bg-blue-400 hover:text-gray-100
                    transition-colors duration-300 cursor-pointer'>
                        <FaRegEnvelope className='text-base md:text-lg'/></a> 
                    {/* GitHub >> */}
                    <a href="https://github.com/RajuBadanakanti-cloud" target="_blank" rel="noopener noreferrer"
                     className='bg-gray-800 p-3 rounded-full mr-5 text-gray-400  hover:bg-blue-800 dark:hover:bg-blue-400 hover:text-gray-100 
                    transition-colors duration-300 cursor-pointer'>
                        <FaGithub className='text-base md:text-lg'/></a>
                    {/* Linkedin >> */}
                    <a href="https://www.linkedin.com/in/raju-badanakanti-491705259/" target="_blank" rel="noopener noreferrer" 
                    className='bg-gray-800 p-3 rounded-full mr-5 text-gray-400 hover:bg-blue-800 dark:hover:bg-blue-400 hover:text-gray-100 
                    transition-colors duration-300 cursor-pointer' >
                        <FaLinkedin className='text-base md:text-lg'/></a>
                </div>

                <p className="text-gray-400 text-left font-roboto mb-2">Email:
                     <a href="mailto:rajubadanakanti7@gmail.com" target="_blank" rel="noopener noreferrer" className=' hover:text-blue-500 text-sm md:text-base' > rajubadanakanti7@gmail.com</a>
                </p>
            </section>

            </div>
        </div>
    )

export default Footer



