import location from "./../assets/location.svg";
import ismail from "./../assets/ismail.jpg";
import ismailLow from "./../assets/ismail_low.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const Hero = () => {
    const [highResLoaded, setHighResLoaded] = useState(false);

  return (
    <section className="p-4 w-full flex flex-col items-center gap-16 lg:flex-row-reverse    lg:justify-between   lg:items-center my-20 mb-42">
      <div className="relative w-4/5 h-full md:w-[25rem] md:h-[25rem] ">
        {/* Low-res blurred image */}
        <img
          src={ismailLow}
          alt="ismail low quality"
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ${
            highResLoaded ? "opacity-0" : "opacity-100"
          } blur-sm`}
          style={{ zIndex: 1 }}
        />
        {/* High-res image */}
        <img
          src={ismail}
          alt="ismail"
          loading="lazy"
          onLoad={() => setHighResLoaded(true)}
          className={`w-full h-full object-cover rounded-full transition-opacity duration-500 ${
            highResLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 2, position: "relative" }}
        />
      </div>
      <article className="flex flex-col gap-8 lg:gap-0 lg:justify-between  md:h-[25rem]   lg:w-3/5  ">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h1 className="font-semibold text-2xl lg:font-extrabold lg:text-3xl xl:text-4xl text-[#030712] dark:text-[#F9FAFB]">
            Hi, I'm Ismail 👋
          </h1>
          <p className="xl:text-lg md:leading-7  xl:leading-8  text-justify">
            Hi, this is Ismail, a self-taught full-stack web artisan with +4
            years of experience, and on the side, an App Security and DevOps
            engineer. I'm determined to make security, scalability, usability,
            and simplicity sit together at the same round table in every web app
            I create.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={location} alt="location" />
            <span className="xl:text-lg">
              Tissemsilt, <span className="font-semibold">ALGERIA</span>
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="bg-green-500 w-3 h-3 ml-[6px] rounded-full "></span>
            <span className="xl:text-lg">
              <span className="font-semibold">Available</span> — let’s make it
              happen!
            </span>
          </div>
          <div></div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.github.com/kimanxo"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kimanxo/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-300"
            />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Hero;
