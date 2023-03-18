import React from "react";
import Navbar from "../navbar_j/Navbar";
import Sidebar from "../sidebar/Sidebar";
import router, { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Map from "../map/Mapc";


export default function Dashboard() {
  const { user, login, loging } = useAuth();
  console.log(user);

  return (
    <div className=" flex bg-black min-h-screen flex-col sm:flex-row ">
      <div className="flex w-full sm:w-96 m-0 p-0" style={{ flex: 0.25 }}>
        <Sidebar />
      </div>

      <div
        className="flex relative flex-col  bg-white m-4 px-5 rounded-[40px]"
        style={{ flex: 3 }}
      >
        <div className="flex flex-row bg-slate-200 mt-5 py-4 justify-between items-center px-8 rounded-full  w-full h-16">
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
            className=" relative flex flex-col justify-center  px-9 py-0   m-0 p-0 h-full shadow-md bg-slate-100 rounded-2xl "
            style={{ flex: 6 }}
          >
          <Map />

          
          </div>
        </div>
      </div>
    </div>
  );
}