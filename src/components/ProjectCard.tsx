import { IProjectCard } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }: IProjectCard) => {
  return (
    <div className="group shadow-lg rounded-xl hover:scale-102 hover:shadow-2xl duration-300 ">
      {/* image */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
          className="w-full h-full trasition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          unoptimized
        />
      </div>
      {/* title, desc, techused, link */}
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-2xl text-sm font-medium">
            {project.category}
          </span>
          <span className="text-gray-500 text-sm">{project.year}</span>
        </div>
        {/* title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        {/* desc */}
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
        {/* tech used */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-xl text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* link */}
        <div className="flex items-center space-x-4 pt-2 ">
          <Link
            href={project.liveUrl}
            target="_blank"
            className="flex justify-center items-center space-x-2 bg-blue-600 text-white px-4 py-2 font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            <span>Live URL </span>
            <FaExternalLinkAlt />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
