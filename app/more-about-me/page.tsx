"use client";

import { useEffect } from "react";
import AOS from "aos";         //needed for aos effect 
import "aos/dist/aos.css";    //needed for aos effect as well as a useeffect hook



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
          <section className="flex flex-col items-center justify-center text-center w-full py-16">
            <h1 className={`${lato.className} font-extrabold uppercase text-white text-5xl md:text-6xl mb-8`} 
            data-aos="fade-down" 
            data-aos-delay="400">
                James Paler Lim
            </h1>
            <div 
            className='flex mb-8 mt-10 -space-x-7' 
            data-aos="zoom-in-up" 
            data-aos-delay="400">

                <img
                src="https://tinyurl.com/25wgf95l"
                alt="James' image"
                className="w-50 h-50 object-cover rounded-lg -rotate-20 shadow-lg"
                />
                <img
                src="https://tinyurl.com/2arvsj8c"
                alt="James' image"
                className="w-50 h-50 object-cover rounded-lg shadow-lg z-10"
                />
                <img
                src="https://tinyurl.com/22rws7cr"
                alt="James' image"
                className="w-50 h-50 object-cover rounded-lg rotate-20 shadow-lg"
                />
                <img
                src="https://tinyurl.com/2yt76uyt"
                alt="James' image"
                className="w-50 h-50 object-cover rounded-lg -rotate-10 shadow-lg"
                />
            </div>
                <p className={`${lato.className} uppercase text-lg md:text-xl font-bold text-white`}
                data-aos="fade-up" 
                data-aos-delay="400">
                    An effective <br />
                    Generalist
                </p>
            </section>
        </>
    );
}