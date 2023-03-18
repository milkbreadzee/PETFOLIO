import React from "react";
import Navbar from "../navbar_j/Navbar";
import Sidebar from "../sidebar/Sidebar";
import router, { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Map from "../map/Mapc";
import Addpop from "../profile/Addpop";

export default function Dashboard() {

  const [open, setOpen] = React.useState(false);

  const { user, login, loging } = useAuth();
  console.log(user);

  return (
    <div className=" flex bg-yellow-500 min-h-screen flex-col sm:flex-row ">
      {open && (
        <div className="h-screeen fixed z-50 w-screen flex justify-center bg-[#fffffff4]">
          <div className="grid  gap-8 grid-cols-1 h-screen mt-12 bg-slate-50 px-12 py-5 rounded-xl">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-lg mr-auto">Add your pet</h2>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div className="mt-5">
                <div className="form">
                  <div className="md:space-y-2 mb-3">
                    <label className="text-xs font-semibold text-gray-600 py-2">
                      Pet image
                      <abbr className="hidden" title="required">
                        *
                      </abbr>
                    </label>
                    <div className="flex items-center py-6">
                      <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                        <img
                          className="w-12 h-12 mr-4 object-cover"
                          src="/dogg.jpg"
                          alt="Avatar Upload"
                        />
                      </div>
                      <label className="cursor-pointer ">
                        <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                          Browse
                        </span>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Company Name <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Company Name"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="integration[shop_name]"
                        id="integration_shop_name"
                      />
                      <p className="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Company Mail <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Email ID"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="integration[shop_name]"
                        id="integration_shop_name"
                      />
                      <p className="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className=" font-semibold text-gray-600 py-2">
                      Company Website
                    </label>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                      <div className="flex">
                        <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Company Address
                      </label>
                      <input
                        placeholder="Address"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="integration[street_address]"
                        id="integration_street_address"
                      />
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Location<abbr title="required">*</abbr>
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                        required="required"
                        name="integration[city_id]"
                        id="integration_city_id"
                      >
                        <option value="">Seleted location</option>
                        <option value="">Cochin,KL</option>
                        <option value="">Mumbai,MH</option>
                        <option value="">Bangalore,KA</option>
                      </select>
                      <p
                        className="text-sm text-red-500 hidden mt-3"
                        id="error"
                      >
                        Please fill out this field.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-red-500 text-right my-3">
                    Required fields are marked with an asterisk{" "}
                    <abbr title="Required field">*</abbr>
                  </p>
                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button
                      onClick={() => setOpen(false)}
                      className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                    >
                      {" "}
                      Cancel{" "}
                    </button>
                    <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex w-full sm:min-w-96 m-0 p-0" style={{ flex: 0.25 }}>
        <Sidebar />
      </div>

      <div
        className="flex relative flex-col  bg-white m-4 px-5 rounded-[40px]"
        style={{ flex: 3 }}
      >
        <div className="flex flex-row bg-green-100 mt-5 py-4 justify-between items-center px-8 rounded-full  w-full h-16">
          <h1 className="text-black  font-body font-clash-display-600 text-center text-2xl font-medium">
            <img className="h-10" src="/logo.png" />
          </h1>
          <div className="flex flex-row justify-center gap-5 items-center">
            <h6 className="font-body font-clash-display-600">
              {user.displayName}
            </h6>
            <img src={user.photoURL} className="w-8 opacity-90 rounded-full" />{" "}
          </div>
        </div>

        <div className="flex flex-row justify-center gap-5 h-full mt-6 mb-6 items-center">
          <div
            className="flex relative h-full flex-col items-center px-2 bg-[url('/cat.png')] rounded-xl "
            style={{ flex: 3 }}
          >
            <button
              onClick={() => setOpen(true)}
              class="bg-white mt-[10%] w-[70%] justify-center gap-3 hover:scale-110 ease-in duration-300  text-gray-800 font-bold rounded-xl border-b-2 z-50 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            >
              <img src="/pet-ii.png" />
              <span class="mr-2 font-body">Add your pet</span>
            </button>
            {/* <video
              className="object-cover w-full h-full opacity-0 rounded-xl"
              src=""
              autoPlay="true"
            /> */}
            <div className="absolute rounded-2xl align-middle inset-0">
              <div className="flex px-6 justify-start gap-2 flex-col items-left mt-5 mb-2 py-4">
                {/* <p className="text-3xl font-body font-clash-display-600 ">
                  Hi {user.displayName}
                </p> */}
              </div>
            </div>
          </div>

          <div
            className=" relative flex flex-col justify-center  px-9 py-0   m-0 p-0 h-full shadow-md bg-slate-100 rounded-2xl "
            style={{ flex: 6 }}
          >
            <div className="flex justify-start w-full mt-2 mb-12">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}