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
                src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/577534996_2541695769563835_5405608086239876345_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFbq8S-w0zliEFForw5jLZBlMcA0DVTOs2UxwDQNVM6zeoqCocb1KpENShi4ct0C9PdsJZqzLKkzPgJpG8BekgK&_nc_ohc=tGxtpTQucvYQ7kNvwFoVLLg&_nc_oc=AdkCOYqReHXawzjTZn0IXwGoGJjlMvt5UPEUvGxthLhkmmGd1j9L3A4CcYKy5Go4Px8&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=N6zuhlDkfMTpLnwqOjuy-Q&oh=00_AfhN9HiUpNfy2tlfvGTv784t_01EXJg9yg0WMPk4frtp8A&oe=6930AC5F"
                alt="James' image"
                className="w-50 h-50 object-cover rounded-lg -rotate-20 shadow-lg"
                />
                <img
                src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/457737506_2150280865371996_4679146964722032431_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHxs_Jt0CBacFktKp9nhxXuxlcznDmzYHPGVzOcObNgc-JyXSoDxrOkzD7m96CWgEDW5o9CttcQ3SdrwZnBpf6C&_nc_ohc=os-5-We4-bcQ7kNvwFRkrRx&_nc_oc=AdmI9J95C-KPrWRhFK17qqMEkl8_78l7L8n7eLWO3dNFbDpaCsL2QLGQM69aF3bCgkg&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=iF9T6syg0EkGqK5s6W5ECg&oh=00_AfhHccpIGgHMl2PWsH0esMl6LYrUvwxmNEHe_Y10PKYj9w&oe=6930CDE6"
                alt="James' image"
                className="w-50 h-50 object-cover rounded-lg shadow-lg z-10"
                />
                <img
                src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/485758578_2324282557971825_1311607995309980965_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFHIFm8MtIdtz4wxx1X_C_hOhB4_dHYfH46EHj90dh8fpDfTT6Gw7DgT3VYGM3oCbiCvF--JR2Fu0t-VpFhSjy2&_nc_ohc=m15m92UkEdUQ7kNvwFlO6b7&_nc_oc=Adk3RmRmrsJ2lnUWJ8h_rDBrgB36cgWWCz62V43G4lUVEYJL0zpMd_SajLPL2DR8Prk&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=Vjth-JoufaJxPuEIAYK37Q&oh=00_Afj6-qj6pYucYIvZue9pmwRQZ9gZ7dqVeAPniGI_SE8IMw&oe=6930A1CB"
                alt="James' image"
                className="w-50 h-50 object-cover rounded-lg rotate-20 shadow-lg"
                />
                <img
                src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/481448440_2305588679841213_8339816643446045084_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGptw1oaZgEx8LlWRmGbOQIkFATxc5R-8CQUBPFzlH7wOzdeYlBsYZ3J3GTotdvR67Oyec1nVrHWuqwbDwDEKoE&_nc_ohc=tCGOaqgRBGkQ7kNvwHXYTx5&_nc_oc=AdnZSJcVUrJHPIEfr3Fg889lqP3xBtsvPfuSOK0wOV7pRH_IVYwFDgjrVrt8-Dj0d7E&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=zyoXdr6EFw_VOSn79vu9cg&oh=00_AfjfvGMtmYNmb6Wy2lmlLqSyjTYMnoTrWhUUFMbmiDyVcQ&oe=6930C4B4"
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
                        src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/480497452_2297064944026920_4525555456059261293_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeEJXJHvWCyY_tzotSWQSPfNWWslBlnYvJlZayUGWdi8mVwaFbYtTb7TzF3ZSmb1xc0YLVHzj8f8MHJHjtszZe-E&_nc_ohc=MjQUb7M0bJYQ7kNvwFLPhDp&_nc_oc=Adl5iVMj22olwUdvI9nG3Mk6uzX4NVEa0WRvmE1T1xxQyidhN3L5ZcU03omBLfURyf0&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=2xyaTMIrVVX3TbuDQ6ARYw&oh=00_AfiveICtI78PJHOCmIZ3ohfCZxfAX-2OFZ-HXGIIzX5elw&oe=6930C640"
                        alt="Old Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg -rotate-6"
                    />
                    <img
                        src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/481197883_2304772663256148_4941455372113470941_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeESdbUpHIJGyyFURZNrWYcHSdrZ0NWDVSdJ2tnQ1YNVJ-_VUYobs_LxDSfIUCP3sBQ_kma5W1HRajbkvdnRDlWS&_nc_ohc=14Vxpszj_cQQ7kNvwGw_Vrm&_nc_oc=Adn7h5zYmpzVWTWDLc9q4VPvGvCXSFJZdrTLNP75SB_f0I1lRE93A-QFxJ7p84YTRNg&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=2xyaTMIrVVX3TbuDQ6ARYw&oh=00_AfjAU8GIhPsiWkjlWkWbfQWqCRzX4hNcHW8Tid1zb4PA3g&oe=6930C993"
                        alt="Wood Phone"
                        className="w-35 h-37 object-cover rounded-lg shadow-lg rotate-3 z-10"
                    />
                    <img
                        src="https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/484381307_2315931855473562_1078761350224060181_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=669761&_nc_eui2=AeHuM0OgGMPoD19vmdZ2urX4TJztCSRYpg5MnO0JJFimDtEP-pKlt1ysTJuR5YY8Be35xh-BdE8fo1Dd8pT8LF1K&_nc_ohc=aG4jgu06Xg4Q7kNvwGoQWQy&_nc_oc=AdldCTTN2QFspqNmyFYeIQg-sI7ynIKgB53AoFhCZzkllr7ecnsNC8Cj0wresH1PRkA&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=2xyaTMIrVVX3TbuDQ6ARYw&oh=00_Afhkhu1hlbc95qg12_41ssvJKeyAvHmwuXuX8LInH9qITw&oe=6930A20C"
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
                        src="https://tinyurl.com/2yt76uyt"
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