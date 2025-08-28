"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { animate } from 'animejs';
import MagicBento from './components/MagicBento'



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
import ScrollReveal from './components/ScrollReveal';


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
{/* <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal> */}


//masonry
const items = [
    {
      id: "1",
      img: "https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/481448440_2305588679841213_8339816643446045084_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGptw1oaZgEx8LlWRmGbOQIkFATxc5R-8CQUBPFzlH7wOzdeYlBsYZ3J3GTotdvR67Oyec1nVrHWuqwbDwDEKoE&_nc_ohc=HgBXiByVI_0Q7kNvwE6BleU&_nc_oc=AdlwQCcVv42GCuEvS9TCyRFcxc3c1jxp-iQSiVy2xtnt2pFVfR8165ppGaIGtmF9wKQ&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=eGXWlhpmrAHNT3xmB7ttqg&oh=00_AfWV5EGZ7TUvUBXJ3sSr9n0JXylFjU-YGXxFlr87DMI-BA&oe=68B3BE74",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/481448440_2305588679841213_8339816643446045084_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGptw1oaZgEx8LlWRmGbOQIkFATxc5R-8CQUBPFzlH7wOzdeYlBsYZ3J3GTotdvR67Oyec1nVrHWuqwbDwDEKoE&_nc_ohc=HgBXiByVI_0Q7kNvwE6BleU&_nc_oc=AdlwQCcVv42GCuEvS9TCyRFcxc3c1jxp-iQSiVy2xtnt2pFVfR8165ppGaIGtmF9wKQ&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=eGXWlhpmrAHNT3xmB7ttqg&oh=00_AfWV5EGZ7TUvUBXJ3sSr9n0JXylFjU-YGXxFlr87DMI-BA&oe=68B3BE74",
      url: "https://example.com/two",
      height: 750,
    },
    {
      id: "3",
      img: "https://scontent.fcgm1-1.fna.fbcdn.net/v/t1.6435-9/127925925_390811888898768_5306747639628916202_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFfvVtZbLBy-eQ8Iy8pkgFB5n8kPUafJGzmfyQ9Rp8kbHpPvkTDp_PAIBpU-BumsCvh4DpjSvp0q9UpgRlGG4QV&_nc_ohc=J3axZ5PpqNEQ7kNvwGK8hQa&_nc_oc=AdlbVmraIo_ChEujcyoLkPmnASLPbMoGuV0sNcydJk-B7npp3CgsxW4ZiyFZupbZcqU&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=K_6aVLXCmpbsp-Ukz-uXMw&oh=00_AfVKXI8mDw7FT-SdP_knJ9D_1gYC4G_LNd49zASAMKXIbg&oe=68C8AEDE",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://scontent.fcgm1-1.fna.fbcdn.net/v/t1.6435-9/178907031_480695853243704_4380366982325189988_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFT7YPEhQ-xTkIHQKF_cob-h5pJZ5z2aJaHmklnnPZolum_l-c7UXDYbCTmz1w02zoSo5OVl4ROh8ULfL_j72su&_nc_ohc=UcoTZCx7CgEQ7kNvwFPl6ZJ&_nc_oc=AdkkI70i8xhr0xdYn-78dey9ddCixRglt5NnR__-tHdiDwAIG7rW2rWziF0RSap_G9Q&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=gLdK4NeUmSyCfB70cHdFEg&oh=00_AfUOUwhufLA78Z-q9QkZbZCbBcwEu0YWLDIwveZkNgp2zQ&oe=68C88FAF",
      url: "https://example.com/three",
      height: 300,
    },
    {
      id: "5",
      img: "https://scontent.fcgm1-1.fna.fbcdn.net/v/t1.6435-9/179843571_480696066577016_8773821593027985396_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHOPN52wwVJYXlVw6pE17pKiksUohmIb_SKSxSiGYhv9CyxQU487Cuc3jaB_CrsN1xj9WYu4JT2zI2ZBd-u6ZNQ&_nc_ohc=2Qzwioxpr3IQ7kNvwFte6ZL&_nc_oc=AdnmvBfw0MMBY7uS3B43Cxp85HDun6yAxlhOxG-iq5Rm1z7VPV0YbF-q8vZzk_fHdv4&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=Q4691D7PWLEpBucJfuewkQ&oh=00_AfViCWLfrj9IQUToudhM5tCt1oHTJh4oMEkRIinbZx4Kog&oe=68C8A830",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "6",
      img: "https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/505043008_2401334943599919_5310625316680681331_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHzzsvh06rX2Z5BR-h8x4oj5q8spRNXOxPmryylE1c7E1SoROrv6OqiW_O6WtXoXQgH65imtV0Nbi86vgJ6n-Xp&_nc_ohc=iekN3FPauKQQ7kNvwHqn9e0&_nc_oc=Adl8Cncz-HQeev8FdCwKj0CgijtUwo9tLhQCFqnU8kBCCnv0UlkBSSXD9wagpdzp5uc&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=RXYIpdvLu8B7QfPw2JV2VA&oh=00_AfWRW3-cNgkrFN08Ywy78awDqNeDIYvOFjolKZ1bBoBU5w&oe=68A745B2",
      url: "https://example.com/three",
      height: 600,
    },
];


// FLOWING MENU
const demoItems = [
  { link: 'https://www.facebook.com/share/14GPy5T84Ks/', 
    text: 'FaceBook', 
    image: "https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/457737506_2150280865371996_4679146964722032431_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxs_Jt0CBacFktKp9nhxXuxlcznDmzYHPGVzOcObNgc-JyXSoDxrOkzD7m96CWgEDW5o9CttcQ3SdrwZnBpf6C&_nc_ohc=J5L5DuiI6I4Q7kNvwEdbSRK&_nc_oc=Adn92wpkv22G3_cvdOY3QDQABCq1tOtJW6vJZ4s92e0hD5aGK-iD_YxMBXoDAhVgok8&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=-OmXk_lzwf3bmHSLNnu4wg&oh=00_AfU3CbCLTmbQT5LGO0FKBv4EG78N3kD0tV7HkuiuUyjdWw&oe=68B6A2E6",
  },

  { link: 'https://www.instagram.com/po_chiso?igsh=MXJmZjZkOGtpemc1Yw==', 
    text: 'Instagram', 
    image: 'https://scontent.fcgm1-1.fna.fbcdn.net/v/t1.6435-9/127925925_390811888898768_5306747639628916202_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFfvVtZbLBy-eQ8Iy8pkgFB5n8kPUafJGzmfyQ9Rp8kbHpPvkTDp_PAIBpU-BumsCvh4DpjSvp0q9UpgRlGG4QV&_nc_ohc=J3axZ5PpqNEQ7kNvwGK8hQa&_nc_oc=AdlbVmraIo_ChEujcyoLkPmnASLPbMoGuV0sNcydJk-B7npp3CgsxW4ZiyFZupbZcqU&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=K_6aVLXCmpbsp-Ukz-uXMw&oh=00_AfVKXI8mDw7FT-SdP_knJ9D_1gYC4G_LNd49zASAMKXIbg&oe=68C8AEDE'
  },

  { link: 'https://github.com/jeamjim', 
    text: 'Github', 
    image:"https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/481448440_2305588679841213_8339816643446045084_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGptw1oaZgEx8LlWRmGbOQIkFATxc5R-8CQUBPFzlH7wOzdeYlBsYZ3J3GTotdvR67Oyec1nVrHWuqwbDwDEKoE&_nc_ohc=HgBXiByVI_0Q7kNvwE6BleU&_nc_oc=AdlwQCcVv42GCuEvS9TCyRFcxc3c1jxp-iQSiVy2xtnt2pFVfR8165ppGaIGtmF9wKQ&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=eGXWlhpmrAHNT3xmB7ttqg&oh=00_AfWV5EGZ7TUvUBXJ3sSr9n0JXylFjU-YGXxFlr87DMI-BA&oe=68B3BE74",
  },

  { link: 'https://mail.google.com/mail/u/0/#inbox', 
    text: 'Email', 
    image:"https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/481448440_2305588679841213_8339816643446045084_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGptw1oaZgEx8LlWRmGbOQIkFATxc5R-8CQUBPFzlH7wOzdeYlBsYZ3J3GTotdvR67Oyec1nVrHWuqwbDwDEKoE&_nc_ohc=HgBXiByVI_0Q7kNvwE6BleU&_nc_oc=AdlwQCcVv42GCuEvS9TCyRFcxc3c1jxp-iQSiVy2xtnt2pFVfR8165ppGaIGtmF9wKQ&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=eGXWlhpmrAHNT3xmB7ttqg&oh=00_AfWV5EGZ7TUvUBXJ3sSr9n0JXylFjU-YGXxFlr87DMI-BA&oe=68B3BE74",
  }
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

      <div className="min-h-full w-full bg-gradient-to-b from-gray-900 bg-[#0a0a0a] flex justify-center items-center px-[10px] py-[10px]">
        {/* Bento container */}
        <div className="w-full h-[calc(95vh-20px)] rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl p-6 flex flex-col mt-[30px] mb-[10px]">
          
          <section className="flex flex-col md:flex-row items-center justify-start gap-5 text-center md:text-left relative w-full h-full">
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
            className="scrambled-text-demo"
            radius={100}
            duration={1.2}
            speed={0.10}
          > 
            <div className="flex justify-center items-center w-full px-[10px] mb-[100px]">
              <div className="w-full max-w-full h-20 bg-white rounded-lg flex items-center overflow-hidden">
                <ScrollVelocity
                  texts={[' Welcome! ']}
                  velocity={40}
                  className={`${bebas.className} text-6xl md:text-6xl font-extrabold text-black whitespace-nowrap`}
                />
              </div>
            </div>
          </ScrambledText>
          
      

      {/* About Section */}
      <section
        className="max-w-full mx-auto py-1 px-6 flex flex-col md:flex-row items-center gap-10"
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
      <section className="w-full mt-[100px] flex flex-col items-center justify-center px-6 text-center">
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

        {/* <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        /> */}

        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </section>









      {/* Contact Section */}
       <section
        className="max-w-full mx-auto px-6 text-center mt-40 py-10"
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

        {/* <footer className="bg-white text-black py-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-start justify-start space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
              JAMES LIM
            </h2>

            
            <div className="flex items-center space-x-8 text-2xl">
              <a href="mailto:your@email.com" className="hover:opacity-70 transition">
                📧
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                📷
              </a>
              <a href="#" className="hover:opacity-70 transition">
                ✖
              </a>
            </div>
          </div>
        </footer> */}


</ClickSpark>

  );
}
