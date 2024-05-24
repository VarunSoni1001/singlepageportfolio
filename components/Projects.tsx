import { ProjectTypes } from "@/data/projectData";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

export const Projects = ({ projects }: ProjectTypes) => {
  return (
    <section className="min-h-screen bg-transparent pb-24">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center text-center">
          <h1
            id="projects"
            className="text-4xl text-center mb-6 text-gray-900 font-zna font-bold"
          >
            Projects
          </h1>
          <hr
            className="border-fuchsia-800 border-t-4 rounded w-16 mb-20 dark:border-gray-200"
            style={{ opacity: 1, transform: "none" }}
          />
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {projects?.map((project: any, index: number) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full bg-neutral-50 rounded-xl overflow-hidden shadow-md flex flex-col justify-between hover:outline hover:outline-[1px] hover:outline-neutral-400 hover:shadow-xl transition-all">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={project.img}
                  alt={project.title}
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h1 className="text-lg font-medium text-gray-900 mb-3">
                    {project.title}
                  </h1>
                  <p className="mb-4 text-base">{project.description}</p>
                  <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-6">
                    {project.skills.join(", ")}
                  </h2>
                  <div className="flex items-center justify-center gap-4 mt-auto">
                    <Link
                      href={project.liveLink}
                      title="View Live"
                      target="_blank"
                      className="text-white bg-fuchsia-700 border-0 p-2 focus:outline-none hover:bg-fuchsia-900 text-base transition-all duration-75 rounded-full"
                    >
                      <HiOutlineExternalLink />
                    </Link>
                    <Link
                      href={project.githubLink}
                      title="GitHub - Source Code"
                      target="_blank"
                      className="text-white bg-gray-800 border-0 p-2 focus:outline-none hover:bg-gray-700 text-base transition-all duration-75 rounded-full"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
