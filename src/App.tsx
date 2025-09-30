import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Feather from "react-feather";

import {
  Code,
  Layout,
  Smartphone,
  GitHub,
  Twitter,
  Linkedin,
  Instagram,
} from "react-feather"; // make sure react-feather is installed
import Contact from "./Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Feather.User className="h-7 w-7 text-indigo-600" />
                <span className="font-suse tracking-tight font-bold ml-2 text-xl text-gray-900">
                  Michalis Kokologiannakis
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={"#" + item}
                  onClick={() =>
                    document
                      .getElementById("mobile-menu")
                      ?.classList.toggle("hidden")
                  }
                  className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition duration-150"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              {/* Mobile Menu Button */}
              <button
                id="menu-btn"
                className="text-gray-500 hover:text-gray-900 focus:outline-none"
                onClick={() =>
                  document
                    .getElementById("mobile-menu")
                    ?.classList.toggle("hidden")
                }
              >
                <Feather.Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden fixed inset-0 bg-gray-200 z-20 pt-16"
      >
        <div className="flex justify-end px-5">
          <button
            className="text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={() =>
              document.getElementById("mobile-menu")?.classList.toggle("hidden")
            }
          >
            <Feather.X className="h-6 w-6"></Feather.X>
          </button>
        </div>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={"#" + item}
              onClick={() =>
                document
                  .getElementById("mobile-menu")
                  ?.classList.toggle("hidden")
              }
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <header id="Home" className="hero-gradient pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hello, I&apos;m{" "}
                <span className="font-suse tracking-tight text-indigo-200">
                  Michael
                </span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Web Developer & Designer creating beautiful digital experiences
              </p>
              <div className="flex space-x-4 md:justify-start justify-center">
                <a
                  href="#Projects"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition duration-150"
                >
                  View My Work
                </a>
                <a
                  href="#Contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition duration-150"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
              <img
                src="portrait.jpg"
                alt="Profile"
                className="rounded-lg shadow-xl h-80 w-full max-w-md object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="About" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
            >
              About Me
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              I'm a passionate developer with expertise in modern web
              technologies. I love creating intuitive user experiences and
              solving complex problems with elegant solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Development Card */}
            <div
              className="bg-gray-50 p-8 rounded-lg shadow-sm card-hover transition duration-300"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Code className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">
                Web Development
              </h3>
              <p className="text-gray-600 text-center">
                Building responsive, performant websites using HTML, CSS,
                JavaScript and modern frameworks.
              </p>
            </div>

            {/* UI/UX Design Card */}
            <div
              className="bg-gray-50 p-8 rounded-lg shadow-sm card-hover transition duration-300"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Layout className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">
                UI/UX Design
              </h3>
              <p className="text-gray-600 text-center">
                Creating beautiful, intuitive interfaces that enhance user
                experience and drive engagement.
              </p>
            </div>

            {/* Mobile Responsive Card */}
            <div
              className="bg-gray-50 p-8 rounded-lg shadow-sm card-hover transition duration-300"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Smartphone className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">
                Mobile Responsive
              </h3>
              <p className="text-gray-600 text-center">
                Ensuring your website looks and works perfectly on all devices
                from desktop to mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
            >
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Here are some of my recent projects that showcase my skills and
              expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover transition duration-300"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img
                src="logoTMS.png"
                alt="Project 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thesis Management System
                </h3>
                <p className="text-gray-600 mb-4">
                  A fully responsive System with user registration and custom
                  built UI.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                    React
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                    Node.js
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover transition duration-300"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <img
                src="information-retrieval.webp"
                alt="Project 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Information Retrieval System
                </h3>
                <p className="text-gray-600 mb-4">
                  A system using indexing and ranking for efficient, relevant
                  search.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                    Java
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                    Maven
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover transition duration-300"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <img
                src="pokemon.jpg"
                alt="Project 3"
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Pokemon Game
                </h3>
                <p className="text-gray-600 mb-4">
                  A simple text based console game, emulating pokemon fights.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                    C++
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*
          <div className="text-center mt-12" data-aos="fade-up">
            <a
              href="#"
              className="inline-block bg-gray-400 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 transition duration-150"
            >
              View All Comming Soon...
            </a>
          </div>
          */}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
            >
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Have a project in mind or want to collaborate? I'd love to hear
              from you!
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6" data-aos="fade-up" data-aos-delay="200">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-150"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <p className="text-gray-400">
                I'm a web developer passionate about creating beautiful,
                functional websites that make an impact.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-150"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="text-gray-400 hover:text-white transition duration-150"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    className="text-gray-400 hover:text-white transition duration-150"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    className="text-gray-400 hover:text-white transition duration-150"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/fidelity-michael"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition duration-150 social-icon"
                >
                  <GitHub className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-150 social-icon"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/michalis-kokologiannakis-1aa935335/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition duration-150 social-icon"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/michaliskok/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition duration-150 social-icon"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              <p className="mt-4 text-gray-400">mixkok2001@gmail.com</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 My Personal Site. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* TODO: Projects, Contact, Footer sections here using same JSX*/}
    </div>
  );
}

export default App;
