import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Feather from "react-feather";
import { AiOutlineDiscord } from "react-icons/ai";

import {
  Code,
  Layout,
  Smartphone,
  GitHub,
  Linkedin,
  Instagram,
  Phone,
  Mail,
} from "react-feather"; // make sure react-feather is installed
import Contact from "./Contact";
import Card from "./Card";
import en from "./assets/translations/en.json";
import gr from "./assets/translations/gr.json";

type Lang = "en" | "gr";
type TranslationKeys = keyof typeof en;
type Translations = Record<Lang, Record<TranslationKeys, string>>;

const translations: Translations = { en, gr };

function App() {
  let baseURL = import.meta.env.BASE_URL;
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  // Detect ?lang= from URL or fallback to localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get("lang");
    if (queryLang === "gr" || queryLang === "en") {
      setLang(queryLang);
    } else {
      const saved = localStorage.getItem("lang");
      if (saved === "gr" || saved === "en") setLang(saved);
    }
  }, []);

  // Save lang to localStorage & update URL
  useEffect(() => {
    localStorage.setItem("lang", lang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);
  }, [lang]);

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
          <div className="flex justify-between h-16 items-center">
            {/* Left - Logo */}
            <div className="flex items-center">
              <a href="#Home" className="flex-shrink-0 flex items-center">
                <Feather.User className="h-7 w-7 text-indigo-600" />
                <span className="font-suse tracking-tight font-bold ml-2 text-lg md:text-xl text-gray-900">
                  Michalis Kokologiannakis
                </span>
              </a>
            </div>

            <div className="hidden lg:flex space-x-3 md:space-x-7">
              {/* Center - Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                {[t.home, t.about, t.projects, t.contact].map((item, i) => (
                  <a
                    key={i}
                    href={`#${["Home", "About", "Projects", "Contact"][i]}`}
                    className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition duration-150"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Right - Language Switch + Mobile Menu */}
              <div className="hidden lg:flex items-center space-x-2">
                <button
                  onClick={() => {
                    setLang("gr");
                  }}
                  className="text-gray-900 hover:cursor-pointer hover:text-indigo-600 py-2 text-sm font-medium transition duration-150"
                >
                  🇬🇷 ΕΛ
                </button>
                <span className="h-5 border-1 border-r border-indigo-300"></span>
                <button
                  onClick={() => setLang("en")}
                  className="text-gray-900 hover:cursor-pointer hover:text-indigo-600 py-2 text-sm font-medium transition duration-150"
                >
                  EN 🇬🇧
                </button>
              </div>
            </div>

            <button
              id="menu-btn"
              className="lg:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
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
            <Feather.X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {[t.home, t.about, t.projects, t.contact].map((item, i) => (
            <a
              key={i}
              href={`#${["Home", "About", "Projects", "Contact"][i]}`}
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
                {t.hello}{" "}
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
                  {t.viewWork}
                </a>
                <a
                  href="#Contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition duration-150"
                >
                  {t.contactMe}
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
              <img
                src={baseURL + "/portrait.jpg"}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.aboutMeTitle}
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.aboutMeDesc}
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card icon={<Code />} title={t.webDevTitle} desc={t.webDevDesc} />
            <Card icon={<Layout />} title={t.uiuxTitle} desc={t.uiuxDesc} />
            <Card
              icon={<Smartphone />}
              title={t.mobileTitle}
              desc={t.mobileDesc}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.featuredProjects}
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.featuredDesc}
            </p>
          </div>

          {/* Project Cards here... */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover transition duration-300"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img
                src={baseURL + "/logoTMS.png"}
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
                src={baseURL + "/information-retrieval.webp"}
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
                src={baseURL + "/pokemon.jpg"}
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

          <div className="text-center mt-12">
            <a
              href="https://github.com/fidelity-michael"
              target="_blank"
              className="inline-block bg-indigo-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition duration-150"
            >
              {t.viewAll}
              <GitHub className="inline-block ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Contact />

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
                  href="https://www.instagram.com/michaliskok/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition duration-150 social-icon"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/michalis-kokologiannakis-1aa935335/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition duration-150 social-icon"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://discord.com/users/364332134598443008"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition duration-150 social-icon"
                >
                  <AiOutlineDiscord className="h-6 w-6" />
                </a>
              </div>

              <div className="flex mt-4 items-center space-x-1">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4" />
                  <p className="text-gray-400">+30</p>
                </div>
                <p className="text-gray-400">6940586609</p>
              </div>
              <div className="flex mt-4 items-center space-x-3">
                <Mail className="h-4 w-4" />
                <p className="text-gray-400">mixkok2001@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 My Personal Site. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
