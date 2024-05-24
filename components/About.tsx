import React from "react";

export const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center text-center">
          <h1
            id="about"
            className="text-4xl text-center mb-6 text-gray-900 font-bold"
          >
            About
          </h1>
          <hr
            className="border-fuchsia-800 border-t-4 rounded w-16 mb-6 dark:border-gray-200"
            style={{ opacity: 1, transform: "none" }}
          />
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
            <img
              className="object-cover object-center max-w-56 max-h-56 rounded-full shadow-xl"
              alt="Image"
              src="/android-chrome-512x512.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-6 md:pl-3 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I'm, <span className="font-zina">Varun Soni</span>
              <br className="hidden lg:inline-block" />
              <p className="font-satoshi mt-3 text-base">
                Web Developer | Next.js Developer
              </p>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              A third-year Computer Science undergraduate at GD Goenka
              University with a strong interest in web development. Actively
              engaged in my studies, I am dedicated to mastering programming
              languages and core computer science concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
