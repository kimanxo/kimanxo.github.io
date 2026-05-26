export default function  ExperienceItem  ({ company, logo, role, timeframe, description })  {
  const initials = company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="w-full flex flex-col gap-4 border-b border-gray-700/50 pb-8 last:border-none last:pb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold text-gray-800 shadow-sm dark:bg-gray-700 dark:text-gray-200">
            {logo ? (
              <img
                src={logo}
                alt={`${company} logo`}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              initials
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{company}</h3>
            <p className=" dark:text-gray-400 font-bold text-[#030712]">
              {role}
            </p>
          </div>
        </div>
        <span className="text-sm font-semibold">{timeframe}</span>
      </div>
      <p className=" leading-7">{description}</p>
    </article>
  );
};
