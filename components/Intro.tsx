import React from "react";

export const Intro = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-neutral-700 relative">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-zina">
          Hi there! <span className="wave">👋</span>
        </h1>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10">
        <div className="w-8 h-12">
          <div className="w-6 h-10 border-2 border-fuchsia-600 dark:border-gray-200 rounded-full absolute left-1/2 transform -translate-x-1/2">
            <div
              className={`w-2 h-2 rounded-full animate-slide-fade bg-fuchsia-600 mx-auto dark:bg-gray-200 dark:border-black dark:border-opacity-50`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
