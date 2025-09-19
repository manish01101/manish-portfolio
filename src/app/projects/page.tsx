"use client";

import ProjectCard from "@/components/ProjectCard";
import { projectCategories, projects } from "@/lib/projects";
import { Filter, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedWord, setSearchedWord] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchedWord.toLowerCase()) ||
      project.description.toLowerCase().includes(searchedWord.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchedWord.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto text-center space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating innovative solutions that solve real-world problems.
          </p>
          {/* search and filter  */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* search  */}
            {/* <div className="flex items-center gap-2 px-4 py-1 border rounded-xl border-gray-300">
              <Search className=" text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full p-2 outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              />
            </div> */}
            <div className="flex items-center gap-2 px-4 border rounded-lg border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
              <Search className="text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchedWord} // this will clear the current text as this binds the value
                className="w-full p-2 outline-none"
                onChange={(e) => setSearchedWord(e.target.value)}
              />
            </div>

            {/* filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex gap-2">
                {projectCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* featured projects  */}
      {featuredProjects.length > 0 && (
        <section className="p-16 space-y-6">
          <div className="max-w-6xl mx-auto text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {" "}
              Highlighting some of my most impactful and innovative work.
            </p>
          </div>

          {/* project */}
          {/* <div className="grid lg:grid-cols-2 gap-8 justify-items-center">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div> */}
          <div className="flex flex-wrap gap-10 justify-center">
            {featuredProjects.map((project, index) => (
              <div key={index} className="w-full lg:w-[48%]">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* other project */}
      {otherProjects.length > 0 && (
        <section className="p-16 space-y-6 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              More Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {" "}
              Additional projects showcasing various skills and technologies.
            </p>
          </div>

          {/* project */}
          {/* <div className="grid lg:grid-cols-2 gap-8 justify-items-center">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div> */}
          <div className="flex flex-wrap gap-10 justify-center">
            {otherProjects.map((project, index) => (
              <div key={index} className="w-full md:w-[45%] lg:w-[30%]">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No projects found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchedWord("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300"
            >
              Clear Filters
            </button>
          </div>
        </section>
      )}
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-600 to-gray-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            I&apos;m always excited to take on new challenges and collaborate on
            interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800 hover:scale-102 transition-all duration-200"
            >
              Start a Project
            </Link>
            <Link
              href="/about"
              className="px-5 py-3 rounded-lg border text-white hover:bg-white hover:text-blue-600  transition-all duration-200"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
