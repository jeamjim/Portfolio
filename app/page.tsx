"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import MagicBento from './components/MagicBento'

//images 
import graphic_1 from "../public/1737957750205.jpeg"
import graphic_2 from "../public/1737957731776.jpeg"
import graphic_3 from "../public/New (1).webp"
import graphic_4 from "../public/New (2).webp"
import graphic_5 from "../public/New (3).webp"
import graphic_6 from "../public/New (4).webp"
import graphic_7 from "../public/New (5).webp"
import graphic_8 from "../public/New (6).webp"
import graphic_9 from "../public/New (7).webp"
import graphic_10 from "../public/New (8).webp"
import graphic_11 from "../public/New (9).webp"
import graphic_12 from "../public/New.webp"
import graphic_13 from "../public/prophecy.webp"

import graphic_14 from "../public/jmigs_1.png"
import graphic_15 from "../public/jmigs_2.png"
import graphic_16 from "../public/jmigs_3.png"



// COMPONENTS
import CircularText from "./components/CircularText";
import ScrambledText from './components/ScrambledText';
import Cubes from './components/Cubes'
import TiltedCard from './components/TiltedCard';
import ClickSpark from './components/ClickSpark';
import ScrollVelocity from './components/ScrollVelocity';
import FlowingMenu from './components/FlowingMenu'
import ScrollFloat from './components/ScrollFloat';
import Masonry from './components/Masonry';
import ScrollReveal from './components/ScrollReveal';
import TrueFocus from './components/TrueFocus';
import DecayCard from './components/DecayCard';
import Carousel from './components/Carousel';



const images = [
  "/me2.jpg",
  "/meme.jpg",
  "/me.jpg",
  "/me3.jpg",
];

// FONTS
import {
  Bebas_Neue, 
  Playfair_Display, 
  Dancing_Script, 
  Great_Vibes, 
  Pacifico, 
  Lato, 
  Montserrat, 
  Roboto,
  Geist, 
  Geist_Mono,
  Monoton,
  Righteous
} from "next/font/google";


// FONTS FUNCTIONS
const montserrat = Montserrat({weight: "400",subsets: ["latin"],});
const righteous = Righteous({weight: "400",subsets: ["latin"],});
const monoton = Monoton({weight: "400",subsets: ["latin"],});   //viable
const geist = Geist({weight: "400",subsets: ["latin"],});
const geist_mono = Geist_Mono({weight: "400",subsets: ["latin"],})
const roboto = Roboto({weight: "400",subsets: ["latin"],});
const bebas = Bebas_Neue({weight: "400",subsets: ["latin"],});
const lato = Lato({weight: "400",subsets: ["latin"],});
const playfair = Playfair_Display({ weight: ["400", "700"], subsets: ["latin"] });
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: ["400",], subsets: ["latin"] });
const dancing_Script = Dancing_Script({ weight: ["400", "700"], subsets: ["latin"] });





//flowing menu images
import mee from '../public/me2.jpg'


// FLOWING MENU
const demoItems = [
  { link: 'https://www.facebook.com/share/14GPy5T84Ks/', 
    text: 'FaceBook', 
    image: '/me2.jpg',
  },

  { link: 'https://www.instagram.com/po_chiso?igsh=MXJmZjZkOGtpemc1Yw==', 
    text: 'Instagram', 
    image: '/meme.jpg',
  },

  { link: 'https://github.com/jeamjim', 
    text: 'Github', 
    image: '/me.jpg',
  },

  { link: 'https://mail.google.com/mail/u/0/#inbox', 
    text: 'Email', 
    image: '/me3.jpg',
  }
];


export default function Home() {

   const footerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Fade & slide up footer text
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
    }

    // Animate glowing line
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          transformOrigin: "center",
          delay: 0.6,
        }
      );

      gsap.to(lineRef.current, {
        boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)", // purple glow
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "sine.inOut",
      });
    }
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 950,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  

  return (

    <>

    <ClickSpark
      sparkColor='#fff'
      sparkSize={20}
      sparkRadius={17}
      sparkCount={8}
      duration={400}
    >

      <div className="min-h-screen min-w-full bg-gradient-to-b from-gray-900 bg-[#0a0a0a] flex justify-center items-center px-[10px] py-[10px] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundSize: "40px 40px", // grid spacing
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) -500%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) -500%, transparent 100%)",
          }}
        />

        {/* Content container */}
        <div className="w-full h-[calc(95vh-20px)] p-6 flex flex-col mt-[12px] mb-[10px] relative z-10">
          <section className="flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-left relative w-full h-full">
              <TrueFocus 
                sentence="STUNNING SOLUTIONS FOR CRITICAL PROBLEMS"
                animationDuration={0.4}
              />
          </section>
        </div>
      </div>
          
      

      {/* About Section */}
      <section
        className="relative max-w-full mx-auto min-h-[700px] mt-20 px-6 flex items-end justify-end overflow-hidden">
        {/* <h1 className={`${bebas.className} absolute top-0 left-0 text-[10rem] md:text-[20rem] tracking-tighter font-extrabold text-gray-500 opacity-10 leading-none pointer-events-none select-none`}>
          ABOUT <br/> ME
        </h1> */}

        <DecayCard width={600} height={600} image="/meme.jpg">
          <h2><br/></h2>
        </DecayCard>

        <div className="relative max-w-7xl flex items-start justify-between z-10"
          data-aos-delay="150"
          data-aos="fade-up">
          <div className="w-1/2">
            <h1 className="text-2xl md:text-1xl font-extrabold leading-none">
              HI! I'M <span className="text-yellow-400">JAMES</span>, <br />
              I LOVE MAKING THINGS <br />
              THAT HELP PEOPLE DO <br />
              THEIR THING.
            </h1>
          </div>

          <div className="w-1/3 flex flex-col gap-2 text-gray-300 text-sm md:text-[-1rem]">
            <p>
              I am a creative designer and a self taught graphic designer based in
              the Philippines. I specialize in interactive, engaging designs.
            </p>
            <p>
              As an IT graduate I am more than willing to discover things unknown to
              me and be of purpose to someone's company or business.
            </p>
            <a href="/more-about-me" className="font-bold uppercase text-white hover:text-orange-500 transition" > More About Me <span className="hover:text-rotate-20">→</span> </a>
          </div>
        </div>
      </section>



      {/* graphics Section */}
      <section
        className="relative max-w-full mx-auto min-h-[700px] mt-75 px-6 py-16 flex items-center justify-center overflow-hidden">
        <h1 className={`${bebas.className} absolute top-0 left-10 text-[8rem] md:text-[15rem] tracking-tighter font-extrabold text-gray-500 opacity-10 leading-none pointer-events-none select-none`}>
          What i do
        </h1>

        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Graphics
        </ScrollFloat>


        {/* Bento Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10 max-w-6xl mt-160 w-full">
          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="50"
          data-aos="fade-up">
            <Image
              src={graphic_1}
              className="w-full h-full object-scale-down"
              alt="Design 1"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="100"
          data-aos="fade-up">
            <Image
              src={graphic_2}
              alt="Design 2"
              className="w-full h-full object-contain"
            />
            </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="150"
          data-aos="fade-up">
            <Image
              src={graphic_3}
              alt="Design 3"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="200"
          data-aos="fade-up">
            <Image
              src={graphic_8}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="250"
          data-aos="fade-up">
            <Image
              src={graphic_5}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="300"
          data-aos="fade-up">
            <Image
              src={graphic_6}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="350"
          data-aos="fade-up">
            <Image
              src={graphic_7}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="400"
          data-aos="fade-up">
            <Image
              src={graphic_9}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="450"
          data-aos="fade-up">
            <Image
              src={graphic_10}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="500"
          data-aos="fade-up">
            <Image
              src={graphic_11}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="550"
          data-aos="fade-up">
            <Image
              src={graphic_12}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="600"
          data-aos="fade-up">
            <Image
              src={graphic_13}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="600"
          data-aos="fade-up">
            <Image
              src={graphic_14}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

           <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="600"
          data-aos="fade-up">
            <Image
              src={graphic_15}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>

           <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
          data-aos-delay="600"
          data-aos="fade-up">
            <Image
              src={graphic_16}
              alt="Design 4"
              className="w-full h-full object-contain"
            />
          </div>
          
        </div>
      </section>


  {/* Motion Section */}
      <section className="relative max-w-full mx-auto min-h-[700px] px-6 py-16 flex items-center justify-center overflow-hidden">
        

        {/* <h2 className={`${bebas.className} absolute top-30 left-184 text-[8rem] md:text-[6rem] tracking-tighter font-extrabold text-gray-500 opacity-10 leading-none pointer-events-none select-none`} >
            Motion Design
        </h2> */}


        <div className="w-full absolute top-0 left-20"> 
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            Motion
          </ScrollFloat>
        </div>
        

        {/* Bento Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10 max-w-6xl mt-160 w-full">
          <div
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
            data-aos-delay="150"
            data-aos="fade-up"
          >
            <video
              className="w-full h-full object-cover aspect-[9/16]"
              src="/videos/motion_1.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>


          <div
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
            data-aos-delay="150"
            data-aos="fade-up"
          >
            <video
              src="/videos/motion_2.mp4"
              poster="/images/motion_2.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover aspect-[9/16]"
            />
          </div>

          <div
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300 grayscale hover:grayscale-0"
            data-aos-delay="150"
            data-aos="fade-up"
          >
            <video
              src="/videos/motion_3.mp4"
              poster="/images/motion_2.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover aspect-[9/16]"
            />
          </div>
        </div>
      </section>





      {/* Web Section */}
      <section className=" relative max-w-full mx-auto min-h-[1400px] px-6 py-16 flex items-center justify-center overflow-hidden">

        {/* <h1 className={`${bebas.className} absolute top-0 left-10 text-[8rem] md:text-[10rem] tracking-tighter font-extrabold text-gray-500 opacity-10 leading-none pointer-events-none select-none`}>
          Web design
        </h1> */}

        <div className="w-full absolute top-0 right-27"> 
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            Web Design
          </ScrollFloat>
        </div>

          <div className="absolute top-75 right-0 " style={{ height: '600px', position: 'relative' }}>
            <Carousel
              baseWidth={1100}
              baseHeight={620}
              autoplay={false}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>  

        </section>


      


      {/* Contact Section */}
       <section
        className="max-w-full mx-auto px-6 text-center mt-40 py-10"
        data-aos="fade-up"
        data-aos-delay="350"
      >
      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-6">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>


      {/* Social Links */}
        <div style={{ height: '350px', position: 'relative' }}>
          <FlowingMenu items={demoItems} />
        </div>
    </section>


      <footer className="text-center text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} James P, Lim. All rights reserved.
      </footer>

      
</ClickSpark>
</>
  );
}
