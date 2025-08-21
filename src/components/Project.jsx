import React from "react";
import open from "./../assets/link.svg";
const Project = ({ img, name, description, techs, link }) => {
  return (
    <section className="max-w-[40rem]  ">
      <div className="w-full ">
        <img
          src={img}
          alt={name}
          className=" w-full   rounded-md aspect-video "
        />
      </div>
      <article className="flex flex-col items-start gap-4 mt-4">
        <h1 className="font-semibold text-xl">{name}</h1>
        <p className="">{description}</p>
        <div className="flex flex-wrap gap-2 text-sm ">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className="dark:bg-gray-600 dark:text-white py-2 px-3 rounded-full bg-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <a href={link} target="_blank">
          <img src={open} alt="link" className="cursor-pointer" />
        </a>
      </article>
    </section>
  );
};

export default Project;
