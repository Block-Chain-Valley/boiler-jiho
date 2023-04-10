import React, { useEffect } from "react";
import { connectMetamask } from "../utils/metamask";
import Home1 from "../images/Home1.png";
import Home2 from "../images/Home2.png";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  items-center w-max">
          <h1 className="text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">
            Fully Decentralized <br />
            Futures Trading <br />
            in crypto
          </h1>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
          </div>
        </div>

        <img src={Home1} />
      </div>

      <div>
        <div className="max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <div className="flex items-center justify-between">
              <div className="flex flex-row items-center">
                <div className="w-20 h-20 rounded-full bg-[#242038]"></div>
                <div>
                  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                    Our Team
                  </h2>
                  <p>Meet our team</p>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <div className="w-20 h-20 rounded-full bg-[#242038]"></div>
                <div>
                  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                    Our Team
                  </h2>
                  <p>Meet our team</p>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <div className="w-20 h-20 rounded-full bg-[#242038]"></div>
                <div>
                  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                    Our Team
                  </h2>
                  <p>Meet our team</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <img src={Home2} />
              <div>
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Our Team
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Meet our team
                </p>
                <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-10 bg-[#2b076e] items-center justify-center flex-col">
        <div className="flex text-4xl font-bold">
          Market sentiments, portfolio, and run the infrastructure of your cho
        </div>
        <div>
          <h1>Invest Smart</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, nisl eget aliquam tincidunt, nunc elit aliquam massa,
          </p>
          <button>LearnMore</button>
        </div>
      </div>
    </main>
  );
}

export default Home;
