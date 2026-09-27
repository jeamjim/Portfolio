"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";


// COMPONENTS
import ClickSpark from './components/ClickSpark';
import FlowingMenu from './components/FlowingMenu'
import TechText from './components/TechText';
import FoldText from './components/FoldText';
import Masonry from './components/Masonry';
import ScrollExpand from './components/ScrollExpand';

// MASONRY
const itemss = [
  {
    id: "1",
    img: "/Graphic1.png",
    height: 400,  
  },
  {
    id: "2",
    img: "/New7.webp",
    height: 550,
  },
  {
    id: "3",
    img: "/New.webp",
    height: 600,
  },
  {
    id: "4",
    img: "/New3.webp",
    height: 550,
  },
  {
    id: "5",
    img: "/Graphic2.png",
    height: 380,
  },
  {
    id: "6",
    img: "/1737957731776.jpeg",
    height: 550,
  },
  {
    id: "7",
    img: "/1737957750205.jpeg",
    height: 500,
  },
  {
    id: "8",
    img: "/New2.webp",
    height: 600,
  },
  {
    id: "9",
    img: "nre4.webp",
    height: 450,
  },
  {
    id: "10",
    img: "/sabbath.webp",
    height: 550,
  },
  {
    id: "11",
    img: "/New1.webp",
    height: 550,
  },
   {
    id: "12",
    img: "/New6.webp",
    height: 550,
  },
    {
    id: "13",
    img: "/Graphic4.png",
    height: 400,  
  },
  {
    id: "14",
    img: "/Graphic3.png",
    height: 400,  
  },
  {
    id: "15",
    img: "/New9.webp",
    height: 600,  
  },
  {
    id: "16",
    img: "/Graphic5.png",
    height: 400,  
  },
  {
    id: "17",
    img: "/Graphic6.png",
    height: 400,  
  },
  {
    id: "18",
    img: "/Graphic7.png",
    height: 400,  
  },];

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


// ACCORDION
const items = [
  { image: '/New (9).webp', label: 'Graphic'},
  { image: '/New (8).webp', label: 'Graphic'},
  { image: '/New.webp', label: 'Graphic'},
  { image: '/New (3).webp', label: 'Image manipulation'},
  { image: '/New (7).webp', label: 'Graphic'},
  { image: '/1737957731776.jpeg', label: 'Graphic'},
  { image: '/1737957750205.jpeg', label: 'Graphic'}, 
  { image: '/New (2).webp', label: 'Graphic'}, 
  { image: '/New (4).webp', label: 'Image manipulation'},
  { image: '/sabbath.webp', label: 'Graphic'},
];


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

<div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col px-6 md:px-12 py-6 relative overflow-hidden text-white">

  {/* Background Grid */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundSize: "90px 90px",
      backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)
      `,
      maskImage:
        "radial-gradient(circle at center, rgba(0,0,0,1) -500%, transparent 100%)",
      WebkitMaskImage:
        "radial-gradient(circle at center, rgba(0,0,0,1) -500%, transparent 100%)",
    }}
  />

  {/* Top Navigation Bar */}
  <header className="w-full flex justify-between items-center relative z-10 mb-0.01">
    <div className="font-bold text-lg tracking-wider">
      <FoldText
        text="JAMES PALER LIM"
        splitBy="char"
        hinge="top"
        trigger="mount"
        duration={1.5}
        stagger={0.045}
        ease="power3.out"
        perspective={700}
        creaseShading={1.55}
        fontSize={20}
        fontWeight={800}
        color="#f7f2e8"
      />
    </div>
  </header>

  {/* Main Hero Section */}
  <main className="w-full flex items-center relative z-10 flex-1">
    <div className="flex flex-col lg:flex-row justify-between items-start w-full ">
      
      {/* Large Main Typography using a single TechText component scaled cleanly to fill the left side */}
      <div className="w-full">
        <TechText
          text={`MAKING THINGS 
THAT HELP PEOPLE
DO THEIR THING.`}
          fontWeight={600}
          fontSize={110}
          reveal="letter"
          dashLength={5}
          dashGap={2}
          specks={15} 
          fontFamily="Righteous"
          color="#ffffff"
          accentColor="#ffffff"
          letterSpacing={-0.001}
          reach={300}
          softness={0.7}
          strokeWidth={1.5}
          speed={0.1}
          lineStyle="dashed"
          selection
          labels
          draggable
          sweep
        />
      </div>

      {/* Circular Image Placeholder (Blank for local asset) */}
      <div className="absolute right-0 top-2 lg:static flex justify-end pt-2">
  <div
    className="
      w-[140px]
      h-[140px]
      sm:w-[155px]
      sm:h-[155px]
      rounded-full
      overflow-hidden
      flex items-center justify-center
      shadow-lg
    "
  >
    <img
      src="/jim.png"
      alt="James"
      className="w-full h-full object-cover grayscale"
    />
  </div>
</div>

    </div>
  </main>

  {/* Bottom Info Section */}
  <footer className="w-full flex flex-col md:flex-row justify-between items-start md:items-end relative z-10">
    <div className="text-sm text-white/70">
      <a href="mailto:info@jamespalerlim.it" className="hover:text-white transition-colors">
        limj1674@gmail.com
      </a>
    </div>

    <div className="w-full md:w-[45%] max-w-[520px] text-[14px] md:text-[15px] leading-[1.5] text-white/80">
      I am a creative designer and a self taught graphic designer based in
      the Philippines. I specialize in interactive, engaging designs.
      As an IT graduate I am more than willing to discover things unknown to
      me and be of purpose to someone's company or business.
    </div>
    
  </footer>
</div>


{/* GRAPHICS */}
<section className="relative w-full px-6 md:px-12 py-24 md:py-32">
  <div
    className="relative z-10 w-full flex flex-col items-start gap-16"
    data-aos="fade-up"
  >
    <div className="flex flex-col items-start text-left gap-4 w-full">

      <div className="flex flex-col items-start w-full">

  <div className="flex items-center w-full gap-5">
    <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 font-semibold">
      Graphic Design /<br />
      Image Manipulation
    </p>

    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(to right, rgba(250,204,21,0.8), rgba(250,204,21,0))",
      }}
    />
  </div>

  <div className="w-full mt-6">
    <h2
      className="uppercase leading-[0.85] text-white"
      style={{
        fontSize: "clamp(4rem, 10vw, 10rem)",
        fontFamily: "Righteous, sans-serif",
        fontWeight: 600,
        letterSpacing: "-0.01em",
      }}
    >
      DESIGN
    </h2>
  </div>

</div>

      <div className="w-full">
        <Masonry
          items={itemss}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
          colorShiftOnHover={false}
        />
      </div>

    </div>
  </div>
</section>


{/* Motion Section */}
<section className="relative w-full px-6 md:px-12 py-24 md:py-32">
  <div className="relative z-10 w-full flex flex-col gap-12">

    {/* Section Header */}
    <div
      className="flex flex-col items-start text-left gap-4 w-full"
      data-aos="fade-up"
    >
      <div className="flex items-center w-full gap-5">
        <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 font-semibold">
          Motion Design
        </p>

        <div
          className="h-px flex-1"
          style={{
            background:
              "linear-gradient(to right, rgba(250,204,21,0.8), rgba(250,204,21,0))",
          }}
        />
      </div>
    </div>

    {/* Video + Description */}
    <div className="flex flex-col lg:flex-row items-center justify-start gap-10 lg:gap-16 w-full">

      {/* Video */}
      <div
        className="group w-full lg:w-[60%] rounded-3xl overflow-hidden shadow-2xl"
        data-aos="fade-up"
      >
        <div className="relative aspect-video overflow-hidden">
          <video
            src="/videos/mainvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Right Side Text */}
      <div
        className="w-full lg:w-[25%] flex flex-col items-start text-left"
        data-aos="fade-up"
      >
        <h3
          className="uppercase text-white leading-[0.9] mb-5"
          style={{
            fontSize: "clamp(2rem, 3vw, 3.5rem)",
            fontFamily: "Righteous, sans-serif",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Bringing Ideas
          <br />
          To Life
        </h3>

        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
          Motion design brings graphics, text, images, and visual
          elements to life through animation and movement. It combines
          creativity and storytelling to make ideas more engaging,
          dynamic, and visually memorable.
        </p>
      </div>

    </div>

  </div>
</section>

{/* AI CONTENT */}
<section className="relative w-full px-6 md:px-12 py-24 md:py-32">
  <div
    className="relative z-10 w-full flex flex-col items-start gap-16"
    data-aos="fade-up"
  >
    <div className="flex flex-col items-start text-left gap-4 w-full">

      <div className="flex flex-col items-start w-full">

  <div className="flex items-center w-full gap-5">
    <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 font-semibold">
      Video editing /<br />
      AI assisted videos
    </p>

    <div
      className="h-px flex-1"
      style={{
        background:
          "linear-gradient(to right, rgba(250,204,21,0.8), rgba(250,204,21,0))",
      }}
    />
  </div>

  <div className="w-full mt-6">
    <h2
      className="uppercase leading-[0.85] text-white"
      style={{
        fontSize: "clamp(4rem, 10vw, 10rem)",
        fontFamily: "Righteous, sans-serif",
        fontWeight: 600,
        letterSpacing: "-0.01em",
      }}
    >
      AI CONTENTS
    </h2>
  </div>

</div>

{/*  */}
    
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


  <footer className="text-center text-gray-500 py-6 ">
    <ScrollExpand
        src="/wolf.png"
        alt="Product hero"
        title="A Creative mind"
        textColor="#ffffff"
        scrollHint="Scroll inside the frame"
        useWindowScroll
      >
      <h2
  className="text-3xl md:text-4xl lg:text-5xl"
  style={{
    color: '#86B88A',
    fontFamily: 'Righteous, sans-serif',
  }}
>
  Always Thinking Beyond The Frame
</h2>

<p
  className="text-sm md:text-base lg:text-lg"
  style={{
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'Inter, sans-serif',
  }}
>
  Turning concepts into visual stories through design, motion,
  experimentation, and emerging technology.
</p>
    </ScrollExpand>
  </footer>

      
</ClickSpark>
</>
  );
}
