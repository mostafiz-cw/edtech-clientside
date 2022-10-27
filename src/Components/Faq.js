import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              Who Can Benefit?
              </summary>
              <div className="px-4 pb-4">
                <p>
                Online programs can meet the needs of many types of students, depending on their educational and professional needs. Some examples of students who might benefit from e-learning programs.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              Will I get credit for this course?
              </summary>
              <div className="px-4 pb-4">
                <p>
                Online Learning credit courses are comparable to on-campus courses and appear on your University of Minnesota Morris transcript in exactly the same manner as an on-campus course. You will receive University credit for these courses.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              How long do I have to complete a course?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                Fall and spring semester courses will be completed during stated weeks of the designated term in which they are offered. Most Summer Term courses are five weeks in length; a few are ten weeks. Assignments and course requirements must be completed by the due dates set by your instructor in the course syllabus. Any variance of this timeframe would need to be pre-approved by the instructor.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
