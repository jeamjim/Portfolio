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
          <section className="flex flex-col items-center justify-center text-center w-full py-16 bg-gradient-to-b from-gray-900 bg-[#0a0a0a]">
            <a
            href="/"
            className="absolute top-4 left-6 text-white hover:text-orange-500 transition"
            data-aos="fade" 
            data-aos-delay="900">
                <span className="hover:text-rotate-20">←</span> Back to Home 
            </a>

            <h1 className={`${righteous.className} font-extrabold uppercase text-white text-5xl md:text-6xl mb-8`} 
            data-aos="fade-down" 
            data-aos-delay="400">
                James Paler Lim
            </h1>
            <div 
            className='flex mb-8 mt-10 -space-x-7' 
            data-aos="zoom-in-up" 
            data-aos-delay="400">

                <img
                src="/me.jpg"
                className="w-50 h-50 object-cover rounded-lg -rotate-20 shadow-lg"
                />
                <img
                src="/educ1 (1).jpg"
                alt="James' image"
                className="w-50 h-50 object-cover rounded-lg shadow-lg z-10"
                />
                <img
                src="/me2.jpg"
                alt="James' image"
                className="w-50 h-50 object-cover rounded-lg rotate-20 shadow-lg"
                />
                <img
                src="/me3.jpg"
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



{/* history */}
            <section className="w-full py-20 px-6 mt-20 ">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 text-left" 
                    data-aos="fade-right" 
                    data-aos-delay="400">
                        <h2 className="text-2xl md:text-2xl font-extrabold uppercase mb-4 text-white">
                            A Little Bit of History
                        </h2>
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                            Since the beginning of COVID-19 everyone me seemed to look at that time as 
                            a disaster and to me as well. However, I have never thought that that time was 
                            a blessing in disguise to mr without me knoing. During those times I begun to be interested 
                            in technology for the first time. I was into graphic design and begun learning tools that allowed 
                            me to design basic designs. 
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center"
                    data-aos="fade-left" 
                    data-aos-delay="400">
                    <img
                      src="/New (4).webp"
                        alt="Old Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg -rotate-6"
                    />
                    <img
                      src="/New (6).webp"
                        alt="Wood Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-3 z-10"
                    />
                    <img
                        src="/meme.jpg"
                        alt="Modern Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-6"
                    />
                    </div>

                </div>
            </section>


{/* education */}
            <section className="w-full py-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 flex justify-center"
                    data-aos="fade-left" 
                    data-aos-delay="400">

                    <Image
                        className="w-35 h-37 object-cover rounded-lg shadow-lg -rotate-6"
                        src={educ1} 
                        alt="Grass" 
                    />
                    <Image
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-3 z-10"
                        src={educ2} 
                        alt="Grass" 
                    />
                    <Image
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-3 z-10"
                        src={lim123} 
                        alt="Grass" 
                    />
                    </div>


                    <div className="flex-1 text-left" 
                    data-aos="fade-right" 
                    data-aos-delay="400">
                        <h2 className="text-2xl md:text-2xl font-extrabold uppercase mb-4 text-white">
                            Education
                        </h2>
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                            Information technology undergraduate at BUKIDNON STATE UNIVERSITY. Currently into basic
                            web development, web desig and graphic design. I am also proficient in Microsoft technologies 
                            e.g., word, power point and excel. 
                        </p>
                    </div>

                    
                </div>
            </section>



{/* touch grass */}
            <section className="w-full py-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex-1 text-left" 
                    data-aos="fade-right" 
                    data-aos-delay="400">
                        <h2 className="text-2xl md:text-2xl font-extrabold uppercase mb-4 text-white">
                            When I dont work
                        </h2>
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                            Every busy man has a life outside his work that matters more than the work. Mine is my family my hobbies 
                            and a significant other. when off work what I do mostly is do outdoor activities with my love ones.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center"
                    data-aos="fade-left" 
                    data-aos-delay="400">
                    <Image
                        className="w-35 h-37 object-cover rounded-lg shadow-lg -rotate-6" 
                        src={grass1} 
                        alt="Grass" 
                    />
                    <img
                        src="/me3.jpg"
                        alt="Wood Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-3 z-10"
                    />
                     <Image
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-6"
                        src={grass2} 
                        alt="Grass" 
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