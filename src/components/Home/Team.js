import React from "react";
import img1 from "../../assets/images/team/avatar-1.png";
import img2 from "../../assets/images/team/avatar-2.png";
import img3 from "../../assets/images/team/avatar-3.png";
import img4 from "../../assets/images/team/avatar-4.png";

const Team = () => {
  return (
    <section className="text-gray-700 body-font ">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Our Team Leader
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Meet Your Experts Team Member
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2  md:px-5">
            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__ animate__fadeIn  border border-gray-100 hover:border-gray-200 animated animated">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src={img1}
                  alt="Monst"
                />
                <div className="pl-4">
                  <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                  <p className="text-gray-500 text-xs mt-3">CEO, Co Founders</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
              <div className="flex space-x-2">
                <a href="#">
                  <img
                    src="https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg"
                    alt="Monst"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg"
                    alt="Monst"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2  md:px-5">
            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__ animate__fadeIn  border border-gray-100 hover:border-gray-200 animated animated">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src={img2}
                  alt="Monst"
                />
                <div className="pl-4">
                  <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                  <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
              <div className="flex space-x-2">
                <a href="#">
                  <img
                    src="https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg"
                    alt="Monst"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg"
                    alt="Monst"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-5 md:px-5">
            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__ animate__fadeIn  border border-gray-100 hover:border-gray-200 animated animated">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src={img3}
                  alt="Monst"
                />
                <div className="pl-4">
                  <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                  <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
              <div className="flex space-x-2">
                <a href="#">
                  <img
                    src="https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg"
                    alt="Monst"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg"
                    alt="Monst"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-5 md:px-5">
            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__ animate__fadeIn  border border-gray-100 hover:border-gray-200 animated animated">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src={img4}
                  alt="Monst"
                />
                <div className="pl-4">
                  <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                  <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
              <div className="flex space-x-2">
                <a href="#">
                  <img
                    src="https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg"
                    alt="Monst"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg"
                    alt="Monst"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
