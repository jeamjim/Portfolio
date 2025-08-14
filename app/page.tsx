"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // run only once
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Artistic Image */}
        <div data-aos="zoom-in" className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-30 animate-pulse"></div>
          <Image
            className="rounded-full border-4 border-white/10 shadow-lg hover:scale-105 transition-transform duration-500"
            src="/me.jpg"
            alt="Profile photo"
            width={220}
            height={220}
            priority
          />
        </div>

        {/* Name */}
        <h1
          className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          James P. Lim
        </h1>

        {/* Bio */}
        <p
          className="mt-4 max-w-2xl text-gray-400 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I’m a passionate web developer who loves crafting clean, minimalistic,
          and modern digital experiences. Specializing in React, Next.js, and
          TailwindCSS, I bring ideas to life with elegant design and
          smooth functionality.
        </p>
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
