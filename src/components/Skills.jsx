import React from "react";
import Skill from "./Skill";
import python from "./../assets/python-svgrepo-com.svg";
import javascript from "./../assets/js-svgrepo-com.svg";
import react from "./../assets/react-svgrepo-com.svg";
import fastapi from "./../assets/fastapi.svg";
import django from "./../assets/django-svgrepo-com.svg";
import docker from "./../assets/docker-icon-svgrepo-com.svg";
import insomnia from "./../assets/insomnia-svgrepo-com.svg";
import git from "./../assets/git-svgrepo-com.svg";
import linux from "./../assets/linux-svgrepo-com.svg";
import astro from "./../assets/astro-svgrepo-com.svg";
import nginx from "./../assets/nginx-svgrepo-com.svg";
import postgresql from "./../assets/postgresql-logo-svgrepo-com.svg";
import redis from "./../assets/redis-svgrepo-com.svg";
import tailwind from "./../assets/tailwind-svgrepo-com.svg";
import vscode from "./../assets/vscode-svgrepo-com.svg";
import bash from "./../assets/bash-icon-svgrepo-com.svg";
import scrapy from "./../assets/scrapy.svg";

const Skills = () => {
return (
  <div className="grid gap-4 gap-y-12 justify-items-center grid-cols-3 md:grid-cols-5 lg:grid-cols-8 p-4">
    <Skill img={javascript} alt="Javascript" />
    <Skill img={tailwind} alt="Tailwind" />
    <Skill img={react} alt="React" />
    <Skill img={astro} alt="Astro" />
    <Skill img={fastapi} alt="FastAPI" />
    <Skill img={django} alt="Django" />
    <Skill img={postgresql} alt="PostgreSQL" />
    <Skill img={redis} alt="Redis" />
    <Skill img={python} alt="Python" />
    <Skill img={bash} alt="Bash" />
    <Skill img={scrapy} alt="Scrapy" />
    <Skill img={linux} alt="Linux" />
    <Skill img={nginx} alt="Nginx" />
    <Skill img={docker} alt="Docker" />
    <Skill img={git} alt="Git" />
    <Skill img={vscode} alt="VS Code" />
    <Skill img={insomnia} alt="Insomnia" />
  </div>
);
};

export default Skills;
