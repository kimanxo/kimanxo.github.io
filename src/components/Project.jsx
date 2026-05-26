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
        <div className="flex flex-wrap gap-2 text-sm  ">
          {techs.map((tech, idx) => (
            <img
            className="w-6 h-6"
              key={idx}
              src={tech}
              alt={tech}
            />
          ))}
        </div>
        <a className="flex justify-center items-center gap-4" href={link} target="_blank">
          Visit:
          <img src={open} alt="link" className="cursor-pointer" />
        </a>
      </article>
    </section>
  );
};

export default Project;
