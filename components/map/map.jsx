import React from "react";
import Navbar from "../navbar_j/Navbar";
import Sidebar from "../sidebar/Sidebar";
import router, { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Map from "../map/mapc";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, database, db, storage } from "../../config/firebase";
import { useState, useEffect } from "react";


export default function Dashboard() {
  const [signedInUser, setSignedInUser] = useState();
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
    <div className=" flex bg-[#6D9886] min-h-screen flex-col sm:flex-row ">
       <div className="flex w-full m-4 -mr-9 sm:min-w-96 px-0" style={{ flex: 0.25 }}>
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
              {signedInUser?.displayName}
            </h6>
            <img src={signedInUser?.photoURL} className="w-8 opacity-90 rounded-full" />{" "}
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