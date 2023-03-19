import React from "react";
import Navbar from "../navbar_j/Navbar";
import Sidebar from "../sidebar/Sidebar";
import router, { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Addpop from "../profile/Addpop";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, database, db, storage } from "../../config/firebase";
import { useState, useEffect } from "react";
import AddPetForm from "../AddPetForm";
import Link from "next/link";
import Card from "./Card";

export default function Buydash() {
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
    <div className=" flex bg-[#6D9886] min-h-screen flex-col sm:flex-row ">
      {open && (
        <>
          <div className="h-screeen fixed z-50 w-screen flex justify-center bg-[#fffffff4]">
            <div className="grid  gap-8 grid-cols-1 h-screen mt-12 bg-slate-50 px-12 py-5 rounded-xl">
              <div className="flex flex-col ">
                <button
                  className="bg-red-500 absolute text-white flex justify-center h-12 items-center -mt-12 w-16 rounded-full"
                  onClick={() => setOpen(false)}
                >
                  X
                </button>

                <div className="flex flex-col sm:flex-row items-center">
                  <AddPetForm />

                  <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>

                <div className="mt-5">
                  <div className="form">
                    <div className="md:space-y-2 mb-3"></div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </>
      )}

      <div
        className="flex w-full m-4 -mr-9 sm:min-w-96 px-0"
        style={{ flex: 0.25 }}
      >
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
            <img
              src={signedInUser?.photoURL}
              className="w-8 opacity-90 rounded-full"
            />{" "}
          </div>
        </div>

        <div className="flex flex-row justify-center gap-5 h-full mt-6 mb-6 items-center">
          <div
            className="flex relative h-full gap-5 flex-row items-start px-2 rounded-xl "
            style={{ flex: 3 }}
          >
            <Card
              title="PET QR Chain - Quick and Easy Pet Identification Tag"
              img="/p1.jpg"
              price="399"
            />
            <Card
              title="PET QR Chain - Quick and Easy Pet Identification Tag"
              img="/p2.jpg"
              price="465"
            />
            <Card
              title="PET QR Chain - Quick and Easy Pet Identification Tag"
              img="/p3.jpg"
              price="250"
            />

            <div className="absolute rounded-2xl align-middle inset-0">
              <div className="flex px-6 justify-start gap-2 flex-col items-left mt-5 mb-2 py-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
