import React from "react";

const Home = () => {
  return (
    <div>
      <>
        <div className="pt-32 md:pt-40">
          <div className="container m-auto px-6 md:px-12 lg:px-6">
            <div className="lg:flex lg:items-center lg:gap-x-16">
              <div className="space-y-8 lg:w-7/12">
                <h1 className=" font-bold text-gray-900 text-4xl md:text-5xl">
                  Run successful remote and hybrid teams
                </h1>
                <p className="text-gray-600 lg:w-11/12">
                  DailyBot takes chat and collaboration to the next level: daily
                  standups, team check-ins, surveys, kudos, best companion bot
                  for your virtual watercooler, 1:1 intros, motivation tracking
                  and more.
                </p>
                <span className="block font-semibold">
                  The best companion bot for your chat app.
                </span>
              </div>
              <div hidden="" className="lg:block lg:w-5/12">
                <img
                  src="images/watch.svg"
                  className="w-full"
                  alt="wath illustration"
                  loading="lazy"
                  width={320}
                  height={280}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-8">
          <div className="container m-auto px-6 md:px-12 lg:px-6">
            <div className="py-8 px-12 bg-cyan-50 rounded-2xl">
              <span className="block text-center font-medium text-cyan-700">
                Trusted by your favorite giants
              </span>
              <div className="mt-8 flex justify-center flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                <div className="flex items-center">
                  <img
                    className="w-36"
                    src="images/clients/microsoft.png"
                    alt="client logo"
                    loading="lazy"
                    width={584}
                    height={122}
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="w-28"
                    src="images/clients/myob.png"
                    alt="client logo"
                    loading="lazy"
                    width={400}
                    height={219}
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="w-28"
                    src="images/clients/grabyo.png"
                    alt="client logo"
                    loading="lazy"
                    width={400}
                    height={219}
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="w-32"
                    src="images/clients/lifegroups.png"
                    alt="client logo"
                    loading="lazy"
                    width={400}
                    height={219}
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="w-24"
                    src="images/clients/lilly.png"
                    alt="client logo"
                    loading="lazy"
                    width={400}
                    height={219}
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="w-28"
                    src="images/clients/grabyo.png"
                    alt="client logo"
                    loading="lazy"
                    width={400}
                    height={219}
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="w-32"
                    src="images/clients/lifegroups.png"
                    alt="client logo"
                    loading="lazy"
                    width={400}
                    height={219}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
