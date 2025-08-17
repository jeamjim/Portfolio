"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { animate } from 'animejs';


//BACKGROUNDS
import LightRays from './components/LightRays';

// COMPONENTS
import CircularText from "./components/CircularText";
import ShinyText from "./components/ShinyText";
import ScrambledText from './components/ScrambledText';
import Cubes from './components/Cubes'
import TiltedCard from './components/TiltedCard';
import ClickSpark from './components/ClickSpark';
import ScrollVelocity from './components/ScrollVelocity';
import FlowingMenu from './components/FlowingMenu'
import ScrollFloat from './components/ScrollFloat';
import TextPressure from './components/TextPressure';
import Masonry from './components/Masonry';


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



//masonry
const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 300,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 420,
    },

      {
      id: "7",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 620,
    },

];


// FLOWING MENU
const demoItems = [
  { link: 'https://www.facebook.com/share/14GPy5T84Ks/', 
    text: 'FaceBook', 
    image: 'https://picsum.photos/600/400?random=1' },

  { link: 'https://www.instagram.com/po_chiso?igsh=MXJmZjZkOGtpemc1Yw==', 
    text: 'Instagram', 
    image: 'https://picsum.photos/600/400?random=2' },

  { link: 'https://github.com/jeamjim', 
    text: 'Github', 
    image: 'https://picsum.photos/600/400?random=3' },

  { link: 'https://mail.google.com/mail/u/0/#inbox', 
    text: 'Email', 
    image: 'https://picsum.photos/600/400?random=4' }
];


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 950,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (

    <ClickSpark
      sparkColor='#fff'
      sparkSize={20}
      sparkRadius={17}
      sparkCount={8}
      duration={400}
    >

    {/* <div className="font-sans bg-gradient-to-b from-gray-900 to-black text-white"> */}
    
    {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div> */}

    {/* <div style={{ height: '90px', position: 'relative' }}>
          <Cubes 
            gridSize={5}
            cubeSize={50}
            maxAngle={70}
            radius={4}
            borderStyle="2px dashed #5227FF"
            faceColor="#1a1a2e"
            rippleColor="#ff6b6b"
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
          />
        </div> */}


      <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 bg-[#0a0a0a] flex justify-center items-center px-[10px] py-[10px]">

        {/* Bento container */}
        <div className="w-full h-[calc(95vh-20px)] rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl p-6 flex flex-col mt-[10px] mb-[10px]">
          
          <section className="flex flex-col md:flex-row items-center justify-start gap-12 text-center md:text-left relative w-full h-full">
            <div className="max-w-8xl -mt-30">
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                style={{ position: "relative", height: "480px" }}
              >
                <TextPressure
                  text="Hello!"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#ff0000"
                  minFontSize={500}
                />
              </div>

              {/* Bio */}
              <p
                className={`${roboto.className} mt-2 text-gray-400 leading-tight text-xl`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                THE FUTURE OF WEB DESIGN
              </p>
            </div>

            {/* Scroll Down Indicator */}
            <div
              className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <CircularText text="Scroll Down• " />
            </div>
          </section>
        </div>
      </div>






          <ScrambledText
            className="scrambled-text-demo overflow-visible  mt-25"
            radius={100}
            duration={1.2}
            speed={0.10}> 
            <div className="flex justify-center items-center w-full my-15">
              <div className="w-full max-w-8xl h-20  rounded-lg  flex items-center">
                <ScrollVelocity
                  texts={[' Welcome!  ', 'Niggas']}
                  velocity={80}
                  className={`${bebas.className} text-6xl sm:text-6xl font-extrabold text-white `}
                />
              </div>
            </div>
          </ScrambledText>

      




      {/* About Section */}
      <section
        className="max-w-7xl mx-auto py-24 px-6 flex flex-col md:flex-row items-center gap-10"
        data-aos-delay="350"
        data-aos="zoom-in-up"
      >
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            I’m a passionate web developer who loves creating clean, minimalistic
            designs with great user experience. I specialize in React, Next.js, and
            TailwindCSS. Additionally, I am a self taught graphic designer with the usage of various tools 
            inclduing various mobile and computer software. 
          </p>
        </div>

        {/* Right: Image Card */}
        <TiltedCard
          imageSrc= "https://avatars.githubusercontent.com/u/148544294?v=4"
          altText="ProfilePicture"
          captionText="You can call me Jimjim"
          containerHeight="400px"
          containerWidth="400px"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={30}
          scaleOnHover={1.0}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div
              className="absolute top-5 left-50 px-4 py-2 rounded-lg"
              style={{
                background: 'rgba(0, 0, 0, 0.35)',
                backdropFilter: 'blur(3px)',
                WebkitBackdropFilter: 'blur(3px)',
                whiteSpace: 'nowrap'
              }}>
              <p className="tilted-card-demo-text text-2xl font-bold text-white m-0">
                James P. Lim
              </p>
            </div>
            }
        />
      </section>







      {/* Projects Section */}
      <section className="w-screen min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(-10)"
          scrollStart="center bottom+=80%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Projects
        </ScrollFloat>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition"
              data-aos="fade-up"
              data-aos-delay={project * 100}
            >
              <h3 className="font-semibold mb-2">Project {project}</h3>
              <p className="text-gray-400 text-sm">
                A brief description of this project goes here.
              </p>
            </div>
          ))}
        </div> */}

        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </section>









      {/* Contact Section */}
       <section
        className="max-w-3xl mx-auto py-20 px-6 text-center mt-40"
        data-aos="zoom-in-up"
        data-aos-delay="450"
      >
      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-6">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>


      {/* Email Button */}
      {/* <a
        href="mailto:your@email.com"
        className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
      >
        Say Hello
      </a> */}



      {/* Social Links */}
        <div style={{ height: '350px', position: 'relative' }}>
          <FlowingMenu items={demoItems} />
        </div>
    </section>











      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} James P, Lim. All rights reserved.
      </footer>
    {/* </div> */}
</ClickSpark>

  );
}
