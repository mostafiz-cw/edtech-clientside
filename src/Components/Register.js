import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const Register = () => {

    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    // register submit handler
    const handleRegisterSubmit = (event) => {
        setError('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.pwd.value;
        console.log(name,email,url,password);

        if(password.length < 6){
            setError("Password must be 6 characters");
            return;
        };
        form.reset();

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
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
                Create your Free Account
                </h2>
                <form onSubmit={handleRegisterSubmit} action="" className="space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="focus:outline-none block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-sky-300"
                    />
                  </div>
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
                  <div className="space-y-2">
                    <label htmlFor="url" className="text-gray-700">
                      Photo Url
                    </label>
                    <input
                      type="text"
                      name="url"
                      id="url"
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
                    <small className="text-red-600">{error}</small>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-sky-600 py-3 px-6 focus:bg-sky-700 active:bg-sky-500"
                  >
                    <span className="text-white">Continue</span>
                  </button>
                  <p className="border-t pt-6 text-sm">
                    Already have an account ? <Link to='/signin' href="#link" className="text-sky-500">
                      Sign In
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

export default Register;
