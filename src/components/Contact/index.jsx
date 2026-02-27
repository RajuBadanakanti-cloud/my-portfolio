import { useState, useRef } from 'react'

import {FaEnvelope,FaMapMarkerAlt, FaPhone} from 'react-icons/fa'
import {FaLinkedin, FaGithub, FaRegEnvelope, FaPaperPlane} from 'react-icons/fa'
import {Loader2} from 'lucide-react'
import emailjs from "emailjs-com"; // emailJs service


const Contact = () => {
const [isLoadigShown, setIsLoadigShown]= useState(false)
 const [isLoading, setLoading] = useState(false)

 const [name, setName] = useState("") // name from recruiters (inputs)
 const [email, setEmail] = useState("") // email from recruiters
 const [subject, setSubject] = useState("") // subject from recruiters
 const [message, setMessage] = useState("") // message from recruiters

 // Name Input
 const onNameInput = (event) =>{
    setName(event.target.value)
 }
  // Name Input
 const onEmailInput = (event) =>{
    setEmail(event.target.value)
 }
  // Name Input
 const onSubjectInput = (event) =>{
    setSubject(event.target.value)
 }
  // Message Input
 const onMessageInput = (event) =>{
    setMessage(event.target.value)
 }


// FORM DATA HANDLEING >>>
  // ✅ Create a form reference for EmailJS
  const form = useRef();
// Validation
  const formDataValidation = () => {
    if (
      name.trim().length > 2 &&
      email.trim().length > 2 &&
      subject.trim().length > 2 &&
      message.trim().length > 2
    ) {
      return true;
    } else {
      alert("Enter valid details (at least 3 characters each).");
      return false;
    }
  };

  // ✅ Handle EmailJS Submission
  const handleFormData = (event) => {
    event.preventDefault();

    if (formDataValidation()) {
      setIsLoadigShown(true);

      emailjs
        .sendForm(
          "service_6kb6cd5", // your EmailJS service ID
          "template_n47nhxc", // your EmailJS template ID
          form.current,
          "geHZzF0d_wWL9gaPi" // your EmailJS public key
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("✅ Message sent successfully!");
            setIsLoadigShown(false);
            setLoading(true); // show thank you message
            form.current.reset(); // reset form inputs
          },
          (error) => {
            console.error(error.text);
            alert("❌ Failed to send message. Please try again later.");
            setIsLoadigShown(false);
          }
        );
    } else {
      console.log("Invalid form data");
    }
  };

 console.log(subject, message)
// Contact View >>
 const renderContactView = () => (
    <div id="contact" className="w-full min-h-screen bg-white dark:bg-black flex flex-col justify-start items-center text-center pt-20 md:pt-24 pb-20">
    <h1 className="text-2xl text-gray-950 dark:text-gray-50 md:text-4xl font-poppins font-bold inline-block border-b-4 border-blue-600 pb-1 md:pb-2 mb-10">Get In Touch</h1>
        <div className="w-11/12 md:w-4/5 flex flex-col justify-center items-center" >
            <p className="text-sm/6 md:text-base text-gray-900 dark:text-gray-100 ">If you are hiring for software development roles, 
            I’d be grateful for the opportunity to connect and discuss how I may contribute to your team.</p>
 
            <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mr-0 md:mr-4 mt-10'>
            {/* Contact Information >> */}
            <section  className='w-full md:w-2/5 flex flex-col justify-start items-start mr-0 md:mr-20'>
                <h1 className="text-gray-900 dark:text-gray-100 text-xl md:text-2xl font-roboto font-bold mb-5">Contact Information</h1>
                {/* EMAIL */}
                <div className='flex flex-row justify-start items-start mb-2 md:mb-3'>
                  <FaEnvelope className='text-base md:text-xl text-blue-600 dark:text-blue-400 mt-1 mr-4'/>
                  <div className='flex flex-col justify-start items-start mb-2'>
                  <h1 className='text-base text-gray-900 dark:text-gray-100 md:text-lg font-roboto font-semibold'>Email</h1>
                  <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4'>rajubadanakanti7@gmail.com</p>
                  </div>
                </div>
                {/* Phone */}
                <div className='flex flex-row justify-start items-start mb-2 md:mb-3'>
                  <FaPhone className='text-base md:text-xl text-blue-600 dark:text-blue-400  mt-1 mr-4'/>
                  <div className='flex flex-col justify-start items-start mb-2'>
                  <h1 className='text-base text-gray-900 dark:text-gray-100 md:text-lg font-roboto font-semibold'>Phone</h1>
                  <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4'>+91 7997812601</p>
                  </div>
                </div>
                {/* Location */}
                <div className='flex flex-row justify-start items-start mb-5 md:mb-6'>
                  <FaMapMarkerAlt className='text-base md:text-xl text-blue-600 dark:text-blue-400 mt-1 mr-4'/>
                  <div className='flex flex-col justify-start items-start mb-2'>
                  <h1 className='text-base text-gray-900 dark:text-gray-100 md:text-lg font-roboto font-semibold'>Location</h1>
                  <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4'>Hyderabad, India</p>
                  </div>
                </div>
                {/* Follow me  */}
                <h1 className="text-gray-900 dark:text-gray-100 text-xl md:text-2xl font-roboto font-bold mb-4">Follow Me</h1> 

                <div className='flex flex-row justify-start items-start'>
                {/* Mail >> */}
                    <a href="mailto:rajubadanakanti7@gmail.com" target="_blank" rel="noopener noreferrer"
                    className='bg-slate-200 dark:bg-slate-800 p-2 md:p-3 rounded-full mr-5 md:mr-4 hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-gray-100 
                    transition-colors duration-300 cursor-pointer'>
                        <FaRegEnvelope className='text-base text-gray-900 dark:text-gray-100 md:text-xl'/></a>

                {/* Git Hub >> */}
                    <a href="https://github.com/RajuBadanakanti-cloud" target="_blank" rel="noopener noreferrer"
                    className='bg-slate-200 dark:bg-slate-700 p-2 md:p-3 rounded-full mr-5 md:mr-4 hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-black 
                    transition-colors duration-300 cursor-pointer'>
                        <FaGithub className='text-base md:text-xl'/></a>
                {/* Linkedin >>  */}
                    <a href="https://www.linkedin.com/in/raju-badanakanti-491705259/" target="_blank" rel="noopener noreferrer" 
                    className='bg-slate-200 dark:bg-slate-800 p-2 md:p-3  rounded-full mr-5 md:mr-4 hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-gray-100
                    transition-colors duration-300 cursor-pointer' >
                        <FaLinkedin className='text-base text-gray-900 dark:text-gray-100 md:text-xl'/></a>
              </div>
      

            </section>
            {/* Form Card >>  */}
            <section className='w-full lg:w-4/6 bg-stone-50 dark:bg-slate-900 flex flex-col justify-start items-end rounded-lg shadow-md ml-0 md:ml-3 lg:ml-5 p-3 md:p-5 mt-10 md:mt-0'>
            <form id="contact-form" ref={form} className='w-full flex flex-col justify-start items-start p-2 lg:p-4' onSubmit={handleFormData}>
                {/* Name & Email inputs container */}
                <div className='w-full flex flex-col lg:flex-row mb-5'>
                    <section className='w-full flex flex-col justify-start items-start mb-5 lg:mb-0 md:mr-5'>
                    <label htmlFor="name" className='text-gray-900 dark:text-gray-100 text-sm md:text-base font-medium font-roboto mb-1'>Name</label>
                    <input id="name" type="text" name="from_name" placeholder="Your Name" value={name} onChange={onNameInput}
                     className='p-2 md:p-3 h-[45px] md:h-12 w-full border-2 font-roboto text-gray-900 dark:text-gray-100  bg-white dark:bg-black text-sm md:text-base border-slate-200 dark:border-slate-800 rounded-md  outline-blue-600 dark:outline-blue-400' required/>
                    </section>

                    <section className='w-full flex flex-col justify-start items-start'>
                    <label htmlFor='email' className='text-gray-900 dark:text-gray-100 text-sm md:text-base font-medium font-roboto mb-1'>Email</label>
                    <input id="email" type="email" name="from_email" placeholder="Your Email" value={email} onChange={onEmailInput}
                    className='p-2 md:p-3 h-[45px] md:h-12 w-full border-2  font-roboto text-gray-900 dark:text-gray-100  bg-white dark:bg-black text-sm md:text-base border-slate-200 dark:border-slate-800 rounded-md outline-blue-600 dark:outline-blue-400' required/>
                    </section>
                </div>
                {/* Subject  */}
                <section className='w-full flex flex-col justify-start items-start mb-5'>
                    <label htmlFor="subject" className='text-gray-900 dark:text-gray-100 text-sm md:text-base font-medium font-roboto mb-1'>Subject</label>
                    <input id="subject" type="text"  name="subject" placeholder="Enter your subject" value={subject} onChange={onSubjectInput}
                    className='p-2 md:p-3 h-[45px] md:h-12 w-full border-2 font-roboto text-gray-900 dark:text-gray-100  bg-white dark:bg-black text-sm md:text-base border-slate-200 dark:border-slate-800 rounded-md outline-blue-600 dark:outline-blue-400' required/>
                </section>

                <section className='w-full flex flex-col justify-start items-start mb-5'>
                    <label htmlFor="message" className='text-gray-900 dark:text-gray-100 text-sm md:text-base font-medium font-roboto mb-1'>Message</label>
                    {/* Message */}
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message or job details here..."
                    rows="6"
                    className="w-full p-2 md:p-3 border-2 font-roboto text-gray-900 dark:text-gray-100  bg-white dark:bg-black text-sm md:text-base border-slate-200 dark:border-slate-800 rounded-md outline-blue-600 dark:outline-blue-400 resize-none"
                    required
                    value={message}
                    onChange={onMessageInput}
                    />
                </section>

                {/* Submit/Send Message buttons  */}
                { isLoadigShown ? 
                                
                <button type="submit" className='h-[45px] md:h-12 w-full md:w-[160px] bg-blue-600 dark:bg-blue-400 rounded-md text-white dark:text-black text-base font-roboto font-medium
                flex justify-center items-center hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors duration-300 mb-4 md:mb-2'>
                <Loader2 className=' className="h-5 w-5 animate-spin stroke-[3] text-blue-100 drop-shadow-[0_0_6px_#10b981] mr-2' style={{ animationDuration: "2.5s" }} /> Sending...</button> :

                <button type="submit" className='h-[45px] md:h-12 w-full md:w-[160px] bg-blue-600 dark:bg-blue-400 rounded-md text-white dark:text-black font-roboto font-medium
                flex justify-center items-center hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors duration-300 mb-4 md:mb-2'>
                <FaPaperPlane className='text-base mr-2'/>
                    Send Message</button> }
          
            </form>
            </section>
            </div>
        </div>
    </div>
 )

// Contact Loading View >>
const renderMessageSentSucessView = () => (
    <div id="contact" className="min-h-300px bg-white dark:bg-black flex flex-col justify-start items-center text-center pt-24 pb-20">
        <div className="w-11/12 md:w-4/5 flex flex-col justify-center items-center" >
            <h1 className='text-2xl md:text-4xl font-roboto font-bold text-gray-900 dark:text-gray-100 mb-2'>Thank you!</h1>
            <p className='text-base md:text-lg font-roboto text-gray-600 dark:text-gray-400  tracking-wide'>Your message has been sent successfully.</p>
        </div>
    </div>
)

return (
        isLoading ? renderMessageSentSucessView() : renderContactView()
)
}

export default Contact