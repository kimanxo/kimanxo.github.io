import React from "react";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    company: "Freelancer",
    logo: null,
    role: "Developer & Cybersecurity Consultant",
    timeframe: "2022 – Now",
    description:
      "Since early 2022, I have worked with local and international clients on web development and cybersecurity projects. I’ve built secure, scalable web apps and provided security consulting to help clients protect their digital businesses.",
  },
  {
      company: "Jibni",
      logo: null,
      role: "Backend - DevOps Engineer & Project Manager",
      timeframe: "2025-2026",
      description:
      "In 2025, I joined Jibni, a VTC like startup. As a Backend Developer and DevOps Engineer, I was responsible for designing and implementing the backend architecture, ensuring the security and scalability of their application, and managing project timelines to deliver high-quality solutions on time.",
  },
  {
      company: "Magsat",
      logo: null,
      role: "Web Scraping & Automation Agent",
      timeframe: "2025",
      description:
      "In 2025, I developed web scraping and automation solutions for Magsat, a company specializing in video streaming services. I created custom scripts to extract and process large datasets from various sources, enabling Magsat to enhance their data offerings and improve their analytical capabilities.",
    },
    {
      company: "MyStidia",
      logo: null,
      role: "Application Security Consultant",
      timeframe: "2025",
      description:
        "In 2025, I provided application security consulting for MyStidia, a startup focused on learning materials for med students. I conducted security assessments, identified vulnerabilities, and recommended best practices to enhance the security of their web application.",
    },
];

const Experience = () => {
  return (
    <section className="grid gap-6  lg:p-0 w-5/6 mx-auto" id="experiece">
      {experiences.map((experience) => (
        <ExperienceItem key={experience.company} {...experience} />
      ))}
    </section>
  );
};

export default Experience;
