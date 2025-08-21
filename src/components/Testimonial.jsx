import React from "react";

const Testimonial = ({img,name,role,testimonial}) => {
  return (
    <article className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg   gap-8">
      <img
        src={img}
        alt={`${name}'s photo`}
        className="rounded-full w-32 h-32"
      />
      <p className="leading-7 text-start">{testimonial}</p>
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-[#030712] dark:text-[#F9FAFB]">{name}</h1>
        <p className="">{role}</p>
      </div>
    </article>
  );
};

export default Testimonial;
