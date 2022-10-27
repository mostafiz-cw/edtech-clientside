import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const SignIN = () => {

  // firebase log in auth from user context
  const {logIn, googleLogInProvider} = useContext(AuthContext);

  // jump course page after log in using react router
  const navigate = useNavigate();
  
  const [error, setError] = useState('');




  // sign in submit handeler
  const signINSubmitHanler = (event)=>{
    event.preventDefault();
    setError('');
    const form = event.target;
    const email = form.email.value;
    const password = form.pwd.value;

    logIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      navigate('/courses')
    })
    .catch(error => {
      console.error(error);
      setError(error.message);
    })

  };

  // google auth provider
  const googleProvider = new GoogleAuthProvider();

  // google sign in handeler
  const googleLogIn = ()=> {
    setError('');
    googleLogInProvider(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate('/courses')
    })
    .catch(error => {
      console.error('error', error);
      setError(error.message);
    })
  };

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
                <div className="grid gap-6 sm:grid-cols-2">
                  <button onClick={googleLogIn} className="h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src="https://svgshare.com/i/ng7.svg"
                        className="w-5"
                        alt=""
                      />
                      <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white">
                        With Google
                      </span>
                    </div>
                  </button>
                  <button className="h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700">
                    <div className="flex items-center justify-center space-x-4 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <span className="block w-max text-sm font-semibold tracking-wide text-white">
                        With Github
                      </span>
                    </div>
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4 mb-3">
                  <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                  <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                    or login with email
                  </span>

                  <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>
                <form onSubmit={signINSubmitHanler} action="" className="space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
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
                      name="pwd"
                      id="pwd"
                      className="focus:outline-none block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-sky-300"
                    />
                  </div>
                  <small className="text-red-600">{error}</small>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-sky-600 py-3 px-6 focus:bg-sky-700 active:bg-sky-500"
                  >
                    <span className="text-white">Continue</span>
                  </button>
                  <p className="border-t pt-6 text-sm">
                    Don't have an account ?{" "}
                    <Link to="/register" href="#link" className="text-sky-500">
                      Register Now
                    </Link>
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

export default SignIN;
