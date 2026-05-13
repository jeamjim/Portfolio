"use client";

import { useEffect } from "react";
import AOS from "aos";         //needed for aos effect 
import "aos/dist/aos.css";    //needed for aos effect as well as a useeffect hook

import Image from "next/image";
import ClickSpark from '../components/ClickSpark';
import grass1 from "../../public/grass1.jpg"
import grass2 from "../../public/grass2.jpg"
import educ1 from "../../public/educ1 (1).jpg"
import educ2 from "../../public/educ2.jpg"
import lim123 from "../../public/lim123.jpg"



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
const righteous = Righteous({weight: "400",subsets: ["latin"],});   //viable
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


export default function aboutMe() { 
//useeffect hook for aos
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
          <section className="relative w-full overflow-hidden px-6 py-24 bg-[#0a0a0a]">

  {/* Back Button */}
  <a
    href="/"
    className="absolute top-6 left-6 text-sm md:text-base text-white hover:text-orange-500 transition z-20"
    data-aos="fade"
    data-aos-delay="900"
  >
    ← Back to Home
  </a>

  <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">

    {/* Name */}
    <h1
      className={`${righteous.className} font-extrabold uppercase text-white text-4xl sm:text-5xl md:text-7xl leading-tight`}
      data-aos="fade-down"
      data-aos-delay="400"
    >
      James Paler Lim
    </h1>

    {/* Image Stack */}
    <div
      className="flex items-center justify-center flex-wrap md:flex-nowrap gap-4 md:gap-0 md:-space-x-8"
      data-aos="zoom-in-up"
      data-aos-delay="400"
    >

      <img
        src="/me.jpg"
        alt="James portrait"
        className="w-32 h-40 sm:w-40 sm:h-52 md:w-52 md:h-64 object-cover rounded-2xl -rotate-12 shadow-xl transition hover:scale-105"
      />

      <img
        src="/educ1 (1).jpg"
        alt="James education"
        className="w-32 h-40 sm:w-40 sm:h-52 md:w-52 md:h-64 object-cover rounded-2xl shadow-2xl z-10 transition hover:scale-105"
      />

      <img
        src="/me2.jpg"
        alt="James portrait"
        className="w-32 h-40 sm:w-40 sm:h-52 md:w-52 md:h-64 object-cover rounded-2xl rotate-12 shadow-xl transition hover:scale-105"
      />

      <img
        src="/me3.jpg"
        alt="James portrait"
        className="w-32 h-40 sm:w-40 sm:h-52 md:w-52 md:h-64 object-cover rounded-2xl -rotate-6 shadow-xl transition hover:scale-105"
      />
    </div>

    {/* Subtitle */}
    <p
      className={`${lato.className} uppercase text-base sm:text-lg md:text-2xl font-bold text-white tracking-wide`}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      An Effective <br />
      Generalist
    </p>

  </div>
</section>



{/* history */}
            <section className="w-full px-6 py-24">

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Text Content */}
    <div
      className="flex flex-col gap-6 text-left"
      data-aos="fade-right"
      data-aos-delay="400"
    >

      <div>
        <p className="uppercase tracking-[0.25em] text-sm text-yellow-400 font-semibold mb-3">
          My Journey
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white leading-tight">
          A Little Bit <br />
          Of History
        </h2>
      </div>

      <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-xl">
        Since the beginning of COVID-19, many people saw that time as a
        disaster — and honestly, so did I. But looking back, it became a
        blessing in disguise. That was when I first became interested in
        technology and creative work. I started exploring graphic design and
        learning tools that allowed me to create simple but meaningful designs.
      </p>

    </div>

    {/* Image Collage */}
    <div
      className="flex justify-center items-center flex-wrap sm:flex-nowrap gap-4"
      data-aos="fade-left"
      data-aos-delay="400"
    >

      <img
        src="/New (4).webp"
        alt="Design journey"
        className="w-28 h-40 sm:w-36 sm:h-52 md:w-44 md:h-60 object-cover rounded-2xl shadow-xl -rotate-6 transition hover:scale-105"
      />

      <img
        src="/New (6).webp"
        alt="Creative process"
        className="w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 object-cover rounded-2xl shadow-2xl rotate-3 z-10 transition hover:scale-105"
      />

      <img
        src="/meme.jpg"
        alt="James portrait"
        className="w-28 h-40 sm:w-36 sm:h-52 md:w-44 md:h-60 object-cover rounded-2xl shadow-xl rotate-6 transition hover:scale-105"
      />

    </div>

  </div>
</section>


{/* education */}
            {/* EDUCATION */}
<section className="w-full px-6 py-24">

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Images */}
    <div
      className="flex justify-center items-center flex-wrap sm:flex-nowrap gap-4"
      data-aos="fade-left"
      data-aos-delay="400"
    >

      <Image
        className="w-28 h-40 sm:w-36 sm:h-52 md:w-44 md:h-60 object-cover rounded-2xl shadow-xl -rotate-6 transition hover:scale-105"
        src={educ1}
        alt="Education"
      />

      <Image
        className="w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 object-cover rounded-2xl shadow-2xl rotate-3 z-10 transition hover:scale-105"
        src={educ2}
        alt="Education"
      />

      <Image
        className="w-28 h-40 sm:w-36 sm:h-52 md:w-44 md:h-60 object-cover rounded-2xl shadow-xl rotate-6 transition hover:scale-105"
        src={lim123}
        alt="James portrait"
      />

    </div>

    {/* Text */}
    <div
      className="flex flex-col gap-6 text-left"
      data-aos="fade-right"
      data-aos-delay="400"
    >

      <div>
        <p className="uppercase tracking-[0.25em] text-sm text-yellow-400 font-semibold mb-3">
          Education
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white leading-tight">
          Building My <br />
          Foundation
        </h2>
      </div>

      <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-xl">
        I graduated with a degree in Information Technology from
        Bukidnon State University. My interests currently revolve around
        web development, web design, and graphic design. I am also
        proficient in Microsoft technologies such as Word, PowerPoint,
        and Excel.
      </p>

    </div>

  </div>
</section>



{/* LIFE OUTSIDE WORK */}
<section className="w-full px-6 py-24">

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Text */}
    <div
      className="flex flex-col gap-6 text-left order-2 lg:order-1"
      data-aos="fade-right"
      data-aos-delay="400"
    >

      <div>
        <p className="uppercase tracking-[0.25em] text-sm text-yellow-400 font-semibold mb-3">
          Personal Life
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white leading-tight">
          When I’m <br />
          Not Working
        </h2>
      </div>

      <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-xl">
        Life outside of work matters just as much to me as my career.
        I value spending time with my family, hobbies, and loved ones.
        During my free time, I enjoy outdoor activities and creating
        meaningful moments with the people closest to me.
      </p>

    </div>

    {/* Images */}
    <div
      className="flex justify-center items-center flex-wrap sm:flex-nowrap gap-4 order-1 lg:order-2"
      data-aos="fade-left"
      data-aos-delay="400"
    >

      <Image
        className="w-28 h-40 sm:w-36 sm:h-52 md:w-44 md:h-60 object-cover rounded-2xl shadow-xl -rotate-6 transition hover:scale-105"
        src={grass1}
        alt="Outdoor activities"
      />

      <img
        src="/me3.jpg"
        alt="James portrait"
        className="w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 object-cover rounded-2xl shadow-2xl rotate-3 z-10 transition hover:scale-105"
      />

      <Image
        className="w-28 h-40 sm:w-36 sm:h-52 md:w-44 md:h-60 object-cover rounded-2xl shadow-xl rotate-6 transition hover:scale-105"
        src={grass2}
        alt="Nature"
      />

    </div>

  </div>
</section>

<footer className="text-center text-gray-500 py-6 border-t border-white/10">
     © {new Date().getFullYear()} James P, Lim. All rights reserved.
</footer>
    </ClickSpark>
    </>
    );
}
