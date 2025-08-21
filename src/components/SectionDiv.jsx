import React from "react";

const SectionDiv = ({ title, id, description = "" }) => {
  return (
    <div
      className=" xdsf w-full flex flex-col gap-6 justify-center items-center my-12  scroll-smooth p-4 "
      id={id}
    >
      <a href={`#${id}`} className="p-1 px-5 rounded-full   bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
        {title}
      </a>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default SectionDiv;
