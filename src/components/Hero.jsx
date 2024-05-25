import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {TypeAnimation} from 'react-type-animation';
import Profile from '../assets/backgrounds/Profile.jpg';






const Hero = () => {
  return (
    <>
    
     <section className="lg:py-16 mt-20 ml-10">
       <div className="grid grid-cols-1 sm:grid-cols-12">
         <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-orange-500 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Utsav",
                1000,
                "Web Developer",
                1000,
                "Data Analyst",
                1000,
                "Java Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white  text-2xl mt-2 mb-4">
            Let's get to know more about me in an interactive way!
          </p>
          <div className='mt-10'>
          <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs p-5 rounded-full bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:bg-white hover:text-black hover:border-red-500 hover:border-4 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                  type="button"
                  data-ripple-light="true"
                  onClick={() => window.location.href = '#contact'}                   // Inline function for download
                >
                  Hire me
                </button>
            {/* https://drive.google.com/file/d/1UhCgjtGHeYHArkRcOmjRZiHgEjzcKolN/view?usp=drive_link */}
            <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs p-5 rounded-full bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:bg-white hover:text-black hover:border-red-500 hover:border-4 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ml-10"
                  type="button"
                  data-ripple-light="true"
                  onClick={() => window.open('https://drive.google.com/file/d/1ZgOnYPNj-LneKNqf3-wFk00l0NdkyzvH/view?usp=drive_link', '_blank')} // Inline function for download
                >
                  Download Resume
                </button>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className='mr-25'>

            <img
              src={Profile} 
              alt="Your Profile Image"
              className="profile-image rounded-full" 
            
              />
              </div>
          
          
         

                   
        </motion.div>
      </div>
    </section>
       
    </>
  );
};



// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import {Link} from "react-router-dom";
// import { Profile } from '../assets';
// import Image from 'next/image';

// const Hero = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             <TypeAnimation
//               sequence={[
//                 "Judy",
//                 1000,
//                 "Web Developer",
//                 1000,
//                 "Mobile Developer",
//                 1000,
//                 "UI/UX Designer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//             voluptuous.
//           </p>
//           <div>
//             <Link
//               href="/#contact"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
//             >
//               Hire Me
//             </Link>
//             <Link
//               href="/"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
         

//                     <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//                       <Image
//                         src={Profile}
//                         alt="hero image"
//                         className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                         width={300}
//                         height={300}
//                       />
//                     </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };


export default Hero;
