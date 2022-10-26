import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="relative py-16 before:absolute before:inset-0 before:h-[50%] before:w-full before:bg-gray-200">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="lg: m-auto space-y-8 md:w-8/12">
            {/* <img
              src="images/tailus.svg"
              loading="lazy"
              className="ml-4 w-36"
              alt="tailus logo"
            /> */}
            <div className="rounded-xl border bg-white bg-opacity-50 shadow-xl backdrop-blur-2xl">
              <div className="p-6 sm:p-16">
                <h2 className="mb-8 text-2xl font-bold text-cyan-900">
                  Sign in to your account
                </h2>
                <div class="grid gap-6 sm:grid-cols-2">
        <button
          class="h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
        >
          <div class="flex items-center justify-center space-x-4">
            <img src="https://svgshare.com/i/ng7.svg" class="w-5" alt="" />
            <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white"
              >With Google</span
            >
          </div>
        </button>
        <button
          class="h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
        >
          <div class="flex items-center justify-center space-x-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-5"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            <span class="block w-max text-sm font-semibold tracking-wide text-white"
              >With Github</span
            >
          </div>
        </button>
      </div>
                <form action="" className="space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      id="email"
                      className="focus:outline-none block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-sky-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="pwd" className="text-gray-700">
                        Password
                      </label>
                      <button className="-mr-2 p-2" type="reset">
                        <span className="text-sm text-sky-500">
                          Forgot your password ?
                        </span>
                      </button>
                    </div>
                    <input
                      type="password"
                      required
                      name="pwd"
                      id="pwd"
                      className="focus:outline-none block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-sky-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-sky-600 py-3 px-6 focus:bg-sky-700 active:bg-sky-500"
                  >
                    <span className="text-white">Continue</span>
                  </button>
                  <p className="border-t pt-6 text-sm">
                    Don't have an account ?
                    <a href="#" className="text-sky-500">
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;