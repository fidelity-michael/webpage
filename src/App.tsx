import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as Feather from "react-feather";

import { Code, Layout, Smartphone } from "react-feather"; // make sure react-feather is installed

function App() {
  let isOpen = false;

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
                <Feather.User className="h-6 w-6 text-indigo-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">
                  MySite
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
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
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <header className="hero-gradient pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hello, I&apos;m <span className="text-indigo-200">Michael</span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Web Developer & Designer creating beautiful digital experiences
              </p>
              <div className="flex space-x-4 md:justify-start justify-center">
                <a
                  href="#"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition duration-150"
                >
                  View My Work
                </a>
                <a
                  href="#"
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
                className="rounded-lg shadow-xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
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

      {/* TODO: Projects, Contact, Footer sections here using same JSX*/}
    </div>
  );
}

export default App;
