import React from "react";
import Project from "./Project";
import bloggy from "./../assets/bloggy.png";
import ruvocab from "./../assets/ruvocab.png";
import vialab from "./../assets/Vialab.png";
import sealedock from "./../assets/sealedock.png";




const Work = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:gap-8   justify-items-center ">
      <Project
        img={ruvocab}
        name="RuVocab"
        description="a Scrapy-based web scraper designed to extract Russian vocabulary words, translations, example sentences, and media files."
        techs={["Python", "Scrapy", "Requests", "JSON"]}
        link="https://ruvocab.kimanxo.org"
      />
      <Project
        img={vialab}
        name="Vialab"
        description="A fully featured interactive Blood Lab Analysis responsive web app."
        techs={[
          "Django",
          "DRF",
          "TailwindCSS",
          "React.js",
          "PostgreSQL",
          "Framer Motion",
        ]}
        link="https://vialab.kimanxo.org"
      />
      <Project
        img={sealedock}
        name="SealeDock"
        description="A secure end to end encrypted file sharing service."
        techs={["Django", "HTMX", "CSS", "JavaScript", "PostgreSQL"]}
        link="https://sealedock.kimanxo.org"
      />
      <Project
        img={bloggy}
        name="Bloggy"
        description="A fully featured interactive Blog made with love  using Django & HTMX."
        techs={["Django", "HTMX", "CSS", "JavaScript", "PostgreSQL"]}
        link="http://bloggy.work.gd"
      />
    </section>
  );
};

export default Work;
