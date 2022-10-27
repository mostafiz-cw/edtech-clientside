import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Courses.css";

const AllCourses = () => {
  const [categories, setCategories] = useState([]);

  const allCourses = useLoaderData();
  // const {details, title} = courses;
  console.log(allCourses);

  useEffect(() => {
    fetch("https://assignment-10-serverside-rouge.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // console.log(categories);

  return (
    <div className="section flex flex-col lg:flex-row">
      <div className="sidebar">
        {categories.map((catagory) => (
          <button
            key={catagory.id}
            type="button"
            className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
          >
            <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
          </button>
        ))}
        {/* <button
          type="button"
          className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
        >
          Border
        </button> */}
        {/* <button
          type="button"
          className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
        >
          Border
        </button>
        <button
          type="button"
          className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
        >
          Border
        </button> */}
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Welcome to learn digital skills
            </h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Propel your career, get a degree, or expand your knowledge at any level.
            </p>
          </div>
          {/* text - end */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {/* article - start */}
            {allCourses.map((course) => (
              <div
                key={course._id}
                className="flex flex-col bg-white border rounded-lg overflow-hidden"
              >
                <a
                  href="#/"
                  className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
                >
                  <img
                    src={course.image_url}
                    loading="lazy"
                    alt=" by Minh Pham"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                </a>
                <div className="flex flex-col flex-1 p-4 sm:p-6">
                  <h2 className="text-gray-800 text-lg font-semibold mb-2">
                    <a
                      href="##"
                      className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    >
                      {course.title}
                    </a>
                  </h2>
                  <p className="text-gray-500 mb-8">{course.details}</p>
                  <div className="flex justify-between items-end mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                        <img
                          src={course.thumbnail_url}
                          loading="lazy"
                          alt=" by Brock Wegner"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <span className="block text-indigo-500">Mike Lane</span>
                        <span className="block text-gray-400 text-sm">
                          July 19, 2021
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* article - end */}

            {/* article - start */}
            {/* <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
              <a
                href="#"
                className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt=" by Lorenzo Herrera"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
              </a>
              <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    Working with legacy stacks
                  </a>
                </h2>
                <p className="text-gray-500 mb-8">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
                <div className="flex justify-between items-end mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt=" by peter bucks"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="block text-indigo-500">
                        Jane Jackobs
                      </span>
                      <span className="block text-gray-400 text-sm">
                        April 07, 2021
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm border rounded px-2 py-1">
                    Article
                  </span>
                </div>
              </div>
            </div> */}
            {/* article - end */}
            {/* article - start */}
            {/* <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
              <a
                href="#"
                className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt=" by Magicle"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
              </a>
              <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    10 best smartphones for devs
                  </a>
                </h2>
                <p className="text-gray-500 mb-8">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
                <div className="flex justify-between items-end mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt=" by Jassir Jonis"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="block text-indigo-500">Tylor Grey</span>
                      <span className="block text-gray-400 text-sm">
                        March 15, 2021
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm border rounded px-2 py-1">
                    Article
                  </span>
                </div>
              </div>
            </div> */}
            {/* article - end */}
            {/* article - start */}
            {/* <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
              <a
                href="#"
                className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt=" by Martin Sanchez"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
              </a>
              <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                  <a
                    href="#"
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    8 High performance Notebooks
                  </a>
                </h2>
                <p className="text-gray-500 mb-8">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
                <div className="flex justify-between items-end mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt=" by Aiony Haust"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="block text-indigo-500">Ann Park</span>
                      <span className="block text-gray-400 text-sm">
                        January 27, 2021
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm border rounded px-2 py-1">
                    Article
                  </span>
                </div>
              </div>
            </div> */}
            {/* article - end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
