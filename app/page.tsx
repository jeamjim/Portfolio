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
    <section className="relative w-full overflow-hidden px-6 py-45">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">

          {/* Image/Card */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-up"
          >
            <DecayCard
              width={550}
              height={550}
              image="/meme.jpg"
            >
              <h2><br /></h2>
            </DecayCard>
          </div>

          {/* Text Content */}
          <div
            className="w-full lg:w-1/2 flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="150"
          >

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
              HI! I'M <span className="text-yellow-600">JAMES</span>, <br />
              I LOVE MAKING THINGS <br />
              THAT HELP PEOPLE DO <br />
              THEIR THING.
            </h1>

            <div className="max-w-md flex flex-col gap-4 text-gray-300 text-base">
              <p>
                I am a creative designer and a self taught graphic designer based in
                the Philippines. I specialize in interactive, engaging designs.
              </p>

              <p>
                As an IT graduate I am more than willing to discover things unknown to
                me and be of purpose to someone's company or business.
              </p>

              <a
                href="/more-about-me"
                className="font-bold uppercase text-white hover:text-orange-500 transition"
              >
                More About Me →
              </a>
            </div>

          </div>
        </div>
</section>



{/* graphics Section */}
  <section className=" relative w-full overflow-hidden px-6 py-55">

    {/* Background Heading */}
    <h1
      className={`${bebas.className} absolute top-0 left-1/2 -translate-x-1/2 text-[4rem] sm:text-[7rem] lg:text-[12rem] tracking-tighter font-extrabold text-gray-500/10 leading-none pointer-events-none select-none whitespace-nowrap`}
      data-aos="fade-up">
      WHAT I DO
    </h1>

    <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-16">
      {/* Floating Title */}
      <div
      className="flex flex-col items-center text-center gap-4"
      data-aos="fade-up"
    >
      <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 font-semibold">
        Graphic Design
      </p>

      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
        Graphics that  <br />
        tells a story
      </h2>

      {/* <p className="max-w-2xl text-gray-400 text-sm md:text-base">
        A collection of motion design projects showcasing animated visuals,
        transitions, branding, and engaging digital storytelling.
      </p> */}
    </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">

        {[
          graphic_1,
          graphic_2,
          graphic_3,
          graphic_8,
          graphic_5,
          graphic_6,
          graphic_7,
          graphic_9,
          graphic_10,
          graphic_11,
          graphic_12,
          graphic_13,
          graphic_14,
          graphic_15,
          graphic_16,
        ].map((graphic, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={graphic}
                alt={`Design ${index + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>
        ))}

      </div>
    </div>
</section>


{/* Motion Section */}
<section className="relative w-full overflow-hidden px-6 py-24">
  <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
    
    {/* Section Header */}
    <div
      className="flex flex-col items-center text-center gap-4"
      data-aos="fade-up"
    >
      <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 font-semibold">
        Motion Design
      </p>

      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
        Bringing Ideas To Life <br />
        Through Motion
      </h2>
    </div>

    {/* Large Centered Video */}
    <div className="flex justify-center w-full">
      {["/videos/mainvideo.mp4"].map((video, index) => (
        <div
          key={index}
          className="group w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="relative aspect-video overflow-hidden">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      ))}
    </div>

  </div>
</section>





{/* Web Section */}
<section className="relative w-full overflow-hidden px-6 py-24">

  <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">

    {/* Section Header */}
    <div
      className="flex flex-col items-center text-center gap-4"
      data-aos="fade-up"
    >
      <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 font-semibold">
        Web Design
      </p>

      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Designing Modern <br />
        Digital Experiences
      </h2>

      {/* <p className="max-w-2xl text-gray-400 text-sm md:text-base">
        A showcase of website designs focused on clean interfaces,
        responsive layouts, user experience, and visually engaging interactions.
      </p> */}
    </div>

    {/* Carousel */}
    <div
      className="w-full flex justify-center"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div className="w-full max-w-6xl">
        <Carousel
          baseWidth={1200}
          baseHeight={700}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </div>

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
