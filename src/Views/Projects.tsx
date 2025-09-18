interface IProjects {
  name: string;
  description: string;
}

const projects: IProjects[] = [
  {
    name: "Car-O-Drive",
    description:
      "A web application built with Angular to manage and display car inventory for a manufacturing and warehouse system.",
  },
  {
    name: "Fall Detection System",
    description:
      "An IoT-based system using Raspberry Pi and sensors to detect falls in elderly individuals and alert caregivers via a mobile app.",
  },
  {
    name: "Innoversity",
    description:
      "A crowdsourcing platform built with Node.js, MongoDB, and React to promote diversity and innovation in various projects.",
  },
  {
    name: "Acid-Base Game",
    description:
      "A 2D educational game created with Godot Engine to teach players the basics of acid-base reactions interactively.",
  },
];

export const Projects = () => {
  return (
    <div className="text-[#F1F1F1] text-center dark:text-[#0F0F0F] lg:px-32">
      <div
        id="projects"
        className="flex flex-col items-center font-semibold pt-36 gap-8 lg:gap-28 lg:mb-10"
      >
        <h1 className="text-3xl lg:text-6xl">My Projects</h1>
        {projects.map((item: IProjects) => (
          <div
            key={item.name}
            className="flex flex-col gap-3 w-10/12 items-center mb-10 border border-[#F1F1F1] dark:border-[#0F0F0F] p-4 rounded-lg hover:shadow-lg hover:shadow-white hover:scale-105 duration-500 lg:p-16"
          >
            <h1 className="text-xl lg:text-3xl">{item.name}</h1>
            <p className="lg:text-2xl">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
