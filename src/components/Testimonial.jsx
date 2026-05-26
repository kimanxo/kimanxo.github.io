import React from "react";

const Testimonial = ({ img, name, role, testimonial }) => {
  return (
    <article className="flex min-h-[460px] flex-col items-center justify-between gap-8 rounded-lg bg-white p-8 text-center shadow-lg dark:border-2 dark:border-dashed dark:border-gray-600 dark:bg-inherit">
      {/* Avatar */}
      <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full">
        <img
          src={img}
          alt={`${name}'s photo`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Testimonial Text */}
      <p className="flex-1 text-start leading-8 text-gray-700 dark:text-gray-300">
        “{testimonial}”
      </p>

      {/* Author Info */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-bold text-[#030712] dark:text-[#F9FAFB]">
          {name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </article>
  );
};

export default Testimonial;
