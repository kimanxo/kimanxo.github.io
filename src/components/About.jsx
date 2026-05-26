import React, { useState } from "react";
import sunshine from "./../assets/sunshine.jpg";
import sunshineLow from "./../assets/sunshine_low.jpg"; // 👈 low-res version

const About = () => {
  const [highResLoaded, setHighResLoaded] = useState(false);

  return (
    <section className="p-4 w-full flex flex-col items-center gap-16 lg:flex-row overflow-auto lg:justify-between lg:items-start my-12">
      <article className="w-4/5 lg:w-1/2 relative">
        {/* Low-res blurred image */}
        <img
          src={sunshineLow}
          alt="sunshine low quality"
          className={`absolute top-0 left-0 w-[30rem] mx-auto outline-20 border-12 border-transparent outline-gray-200 dark:outline-gray-700 object-cover transition-opacity duration-500 ${
            highResLoaded ? "opacity-0" : "opacity-100"
          } blur-sm`}
          style={{ zIndex: 1 }}
        />
        {/* High-res image */}
        <img
          src={sunshine}
          alt="ismail"
          loading="lazy"
          onLoad={() => setHighResLoaded(true)}
          className={`w-[30rem] mx-auto outline-20 border-12 border-transparent outline-gray-200 dark:outline-gray-700 object-cover transition-opacity duration-500 ${
            highResLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 2, position: "relative" }}
        />
      </article>

      <article className="flex flex-col gap-8 lg:gap-8 lg:justify-between lg:w-1/2">
        <h1 className="font-bold text-lg lg:text-3xl dark:text-[#F9FAFB] text-[#030712]">
          Curious about me? Here you have it:
        </h1>
        <p className="xl:text-lg md:leading-7 xl:leading-8">
          I'm a self-taught full stack developer with +4 years of experience who
          loves turning ideas into fast, secure, and scalable web apps.I build
          with purpose—clean code, solid architecture, and a drive to make every
          project better than the last.
        </p>
        <p className="xl:text-lg md:leading-7 xl:leading-8">
          I began my journey 4 years ago, driven by curiosity and a deep
          interest in how things work under the hood. Since then, I've grown
          through constant learning and hands-on building. Today, I'm crafting
          modern, secure, and scalable web apps using modern technologies.
        </p>
        <p className="xl:text-lg md:leading-7 xl:leading-8">
          When I’m not building or securing web apps, I’m in the world of
          radiology—combining tech thinking with healthcare practice. Balancing
          both fields keeps me curious, sharp, and always learning.
        </p>
        <p className="xl:text-lg md:leading-7 xl:leading-8">
          Finally, some quick bits about me.
        </p>
        <ul className="lg:grid lg:grid-cols-2 lg:gap-4 space-y-2 xl:text-lg md:leading-7 xl:leading-8 list-disc list-inside">
          <li>Full Stack Web Developer.</li>
          <li>Cyber Security Enthausiast.</li>
          <li>Scripting & Automation agent.</li>
          <li>Radiology Technologist.</li>
        </ul>
      </article>
    </section>
  );
};

export default About;
