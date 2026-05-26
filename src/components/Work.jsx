import React from "react";
import Project from "./Project";
import bloggy from "./../assets/bloggy.png";
import ruvocab from "./../assets/ruvocab.png";
import vialab from "./../assets/Vialab.png";
import sealedock from "./../assets/sealedock.png";
import react from "./../assets/react-svgrepo-com.svg";
import django from "./../assets/django-svgrepo-com.svg";
import tailwind from "./../assets/tailwind-svgrepo-com.svg";
import postgresql from "./../assets/postgresql-logo-svgrepo-com.svg";
import js from "./../assets/js-svgrepo-com.svg";
import python from "./../assets/python-svgrepo-com.svg";
import scrapy from "./../assets/scrapy.svg";



const Work = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:gap-8   justify-items-center ">
      <Project
        img={ruvocab}
        name="RuVocab"
        description="a Scrapy-based web scraper designed to extract Russian vocabulary words, translations, example sentences, and media files."
        techs={[python, scrapy, postgresql]}
        link="https://ruvocab.kimanxo.org"
      />
      <Project
        img={vialab}
        name="Vialab"
        description="A fully featured interactive Blood Lab Analysis responsive web app."
        techs={[react, django, tailwind, postgresql]}
        link="https://vialab.kimanxo.org"
      />
      <Project
        img={sealedock}
        name="SealeDock"
        description="A secure end to end encrypted file sharing service."
        techs={[js, django, tailwind, postgresql]}
        link="https://sealedock.kimanxo.org"
      />
      <Project
        img={bloggy}
        name="Bloggy"
        description="A fully featured interactive Blog made with love  using Django & HTMX."
        techs={[js, django, tailwind, postgresql]}
        link="http://bloggy.work.gd"
      />
    </section>
  );
};

export default Work;
