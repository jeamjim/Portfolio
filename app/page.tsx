"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { animate } from 'animejs';

// COMPONENTS
import CircularText from "./components/CircularText";
import ShinyText from "./components/ShinyText";
import ScrambledText from './components/ScrambledText';

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
} from "next/font/google";


// FONTS FUNCTIONS
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const playfair = Playfair_Display({ 
  weight: ["400", "700"], 
  subsets: ["latin"] 
});

const pacifico = Pacifico({ 
  weight: ["400"], 
  subsets: ["latin"] 
});

const greatVibes = Great_Vibes({ 
  weight: ["400",], 
  subsets: ["latin"] 
});

const dancing_Script = Dancing_Script({ 
  weight: ["400", "700"], 
  subsets: ["latin"] 
});




export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 950,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-12 text-center md:text-left">
      {/* Artistic Image */}
      <div data-aos="zoom-in" className="relative flex-shrink-0">
        <div className="absolute -inset-4"></div>
        <Image
          className="shadow-lg hover:scale-105 transition-transform duration-500 rounded-full"
          src="/me1.jpg"
          alt="Profile photo"
          width={320} // increased size
          height={320} // increased size
          priority
        />
      </div>

      {/* Text content */}
      <div className="max-w-8xl">
        {/* Name */}
        <ScrambledText
            className="scrambled-text-demo"
            radius={100}
            duration={1.2}
            speed={0.5}>
          <h1
            className={`${bebas.className} text-4xl sm:text-8xl tracking-wide text-white`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            James P. Lim
          </h1>
        </ScrambledText>

        {/* Bio */}
        
          <p
            className={`${roboto.className} mt-4 text-gray-400 leading-relaxed`}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Invest in the future through advanced Web Designing 
          </p>
        {/* Shiny Text */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6">

        <ShinyText text="Scroll Down" />

          {/* <div data-aos="zoom-in" style={{ display: "flex", justifyContent: "center"}}>
            <CircularText
              text="Scroll Down• "
            />
          </div> */}
        </div>
      </div>
    </section>

      {/* About Section */}
      <section
        className="max-w-3xl mx-auto py-20 px-6 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I’m a passionate web developer who loves creating clean, minimalistic
          designs with great user experience. I specialize in React, Next.js,
          and TailwindCSS.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2
          className="text-2xl font-semibold mb-8 text-center"
          data-aos="fade-up"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* Contact Section */}
       <section
      className="max-w-3xl mx-auto py-20 px-6 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-6">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      {/* Email Button */}
      <a
        href="mailto:your@email.com"
        className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
      >
        Say Hello
      </a>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://github.com/jeamjim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://facebook.com/jeamjiim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/po_chiso/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
    </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} James P, Lim. All rights reserved.
      </footer>
    </div>
  );
}
