import React from "react";
import Navbar from "../navbar_j/Navbar";
import Sidebar from "../sidebar/Sidebar";
import router, { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Map from "../map/Mapc";
import Addpop from "../profile/Addpop";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, database, db, storage } from "../../config/firebase";
import { useState, useEffect } from "react";
import AddPetForm from "../AddPetForm";


export default function Dashboard() {
    const [signedInUser, setSignedInUser] = useState();
  const [open, setOpen] = React.useState(false);

  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setSignedInUser(user);
      } else {
      }
    });
  }, []);
  

  return (
    <div className=" flex bg-yellow-500 min-h-screen flex-col sm:flex-row ">
      {open && (<>
                    
        <div className="h-screeen fixed z-50 w-screen flex justify-center bg-[#fffffff4]">
            
        
          <div className="grid  gap-8 grid-cols-1 h-screen mt-12 bg-slate-50 px-12 py-5 rounded-xl">
          <div className="backbtn z-50 flex justify-center h-10">
                    <button
                                    onClick={() => setOpen(false)}
                                    className="bg-red-600 px-6 py-3 text-white rounded-xl"
                                    >
                                    {" "}
                                    x{" "}
                                    </button>
                                
                    </div>
            <div className="flex flex-col ">
            
              <div className="flex flex-col sm:flex-row items-center">
                      <AddPetForm />
                    
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    
                </div>
              </div>

              <div className="mt-5">
                <div className="form">
                  <div className="md:space-y-2 mb-3">
                 
                </div>
              </div>
            </div>
          </div>
        </div>        </div>
        </>

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
              {signedInUser?.displayName}
            </h6>
            <img src={signedInUser?.photoURL} className="w-8 opacity-90 rounded-full" />{" "}
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