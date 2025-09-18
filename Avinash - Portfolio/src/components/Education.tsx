import { education, IEducate } from "../data/biodata";

const Education = () => {
  return (
    <div className="flex flex-col text-3xl fw-bold items-center gap-5 bg-black-400 rounded-3xl">
      <h1>Education</h1>
      <div className="flex flex-col justify-around w-full">
        {education.map((i: IEducate) => (
          <div key={i.title} className="p-8 w-full rounded-lg bg-gray-50 text-blue-950">
            <h1 className="text-2xl font-bold">{i.title}</h1>
            <p className="text-sm">{i.subtitle}</p>
            <p className="text-xs">{i.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
