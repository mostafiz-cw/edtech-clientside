import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Blog About Four Question.
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is CORS?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                  mechanism that allows a server to indicate any origins
                  (domain, scheme, or port) other than its own from which a
                  browser should permit loading resources.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  1) Firebase helps you develop high-quality apps, grow your
                  user base, and earn more money. Each feature works
                  independently, and they work even better together. 2)Firebase
                  Authentication provides backend services, easy-to-use SDKs,
                  and ready-made UI libraries to authenticate users to your app.
                  It supports authentication using passwords, phone numbers,
                  popular federated identity providers like Google, Facebook and
                  Twitter, and more. Firebase Database used to store users' data
                  like chat messages, users details, and other metadata.Firebase
                  Cloud Storage is used to store user-generated content like
                  profile pictures, multimedia messages, etc.Firebase Cloud
                  Messaging used to send notifications.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How does the private route work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Private Routes vary based on the Apps, For example, Dashboard,
                  User Profile, App Settings, Home etc. In simple words, These
                  routes can be accessed only after login. The constraints for
                  Public and Private routes are that Public routes should not be
                  accessed after login and Private routes should not be
                  accessible before login.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is node? How does node work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Node allows developers to write JavaScript code that runs
                  directly in a computer process itself instead of in a browser.
                  Node can, therefore, be used to write server-side applications
                  with access to the operating system, file system, and
                  everything else required to build fully-functional
                  applications. It is a used as backend service where javascript
                  works on the server-side of the application. This way
                  javascript is used on both frontend and backend. Node. js runs
                  on chrome v8 engine which converts javascript code into
                  machine code, it is highly scalable, lightweight, fast, and
                  data-intensive
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
