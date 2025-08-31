"use client";

import { useEffect } from "react";
import AOS from "aos";         //needed for aos effect 
import "aos/dist/aos.css";    //needed for aos effect as well as a useeffect hook
import ClickSpark from '../components/ClickSpark';


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
          <section className="flex flex-col items-center justify-center text-center w-full py-16 ">
            
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
                            Since I can remember, I have always been fascinated by art and
                            technology. I was deeply interested in sketching, painting, crafts,
                            and video games. I consider myself fortunate to have closely
                            witnessed the technological transformation from indestructible
                            Nokia devices to incredibly powerful modern smartphones.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            During my high school days, I delved into rooting and custom
                            Android ROMs, and I still remain a proud member of Team Android.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center"
                    data-aos="fade-left" 
                    data-aos-delay="400">
                    <img
                        src="https://tinyurl.com/2yt76uyt"
                        alt="Old Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg -rotate-6"
                    />
                    <img
                        src="https://tinyurl.com/2yt76uyt"
                        alt="Wood Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-3 z-10"
                    />
                    <img
                        src="https://tinyurl.com/2yt76uyt"
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
                    <img
                        src="https://tinyurl.com/2yt76uyt"
                        alt="Old Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg -rotate-6"
                    />
                    <img
                        src="https://tinyurl.com/2yt76uyt"
                        alt="Wood Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-3 z-10"
                    />
                    <img
                        src="https://tinyurl.com/2yt76uyt"
                        alt="Modern Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-6"
                    />
                    </div>


                    <div className="flex-1 text-left" 
                    data-aos="fade-right" 
                    data-aos-delay="400">
                        <h2 className="text-2xl md:text-2xl font-extrabold uppercase mb-4 text-white">
                            Education
                        </h2>
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                            Since I can remember, I have always been fascinated by art and
                            technology. I was deeply interested in sketching, painting, crafts,
                            and video games. I consider myself fortunate to have closely
                            witnessed the technological transformation from indestructible
                            Nokia devices to incredibly powerful modern smartphones.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            During my high school days, I delved into rooting and custom
                            Android ROMs, and I still remain a proud member of Team Android.
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
                            When touching grass
                        </h2>
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                            Since I can remember, I have always been fascinated by art and
                            technology. I was deeply interested in sketching, painting, crafts,
                            and video games. I consider myself fortunate to have closely
                            witnessed the technological transformation from indestructible
                            Nokia devices to incredibly powerful modern smartphones.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            During my high school days, I delved into rooting and custom
                            Android ROMs, and I still remain a proud member of Team Android.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center"
                    data-aos="fade-left" 
                    data-aos-delay="400">
                    <img
                        src="https://tinyurl.com/2yt76uyt"
                        alt="Old Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg -rotate-6"
                    />
                    <img
                        src="https://tinyurl.com/2yt76uyt"
                        alt="Wood Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-3 z-10"
                    />
                    <img
                        src="https://tinyurl.com/2yt76uyt"
                        alt="Modern Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-6"
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