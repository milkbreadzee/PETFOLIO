import React, { useState } from "react";
import Image from "next/image";
import Qrcodegen from "../QRcode";
import { getDatabase, ref, child, push, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../config/firebase";
import Link from "next/link";






export default function Profile({ obj }) {

  const washingtonRef = doc(database, "pets", obj.name);
  const updatenote = () => {
    console.log("hi")
    updateDoc(washingtonRef, {
      missing_status: true,});
      
    }

 
  // function update_status(){
    
  //   const ref = firebase.database().ref(`path/to/objects/${obj.id}`);
  //   ref.update({ missing_status: "True" });
  
  // }
  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className="relative flex flex-col items-center rounded-[20px] bg-slate-100 w-[400px] mx-auto p-4  bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src="/banner.png"
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
          />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              className="h-full object-fit w-full rounded-full"
              src={obj?.image || "./cuttie.jpg"}
              alt=""
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-black">
            {obj?.name || "Name"}
          </h4>
          <p className="text-base font-normal text-gray-600">
            {" "}
            {obj?.breed || "Breed"}
          </p>
          
        </div>
        <div className="mt-6 bg-white p-4 w-full rounded-xl mx-4 flex flex-col mb-3 text-black gap-1 justify-start md:!gap-1">
          {/* <p>Breed:</p> <p>Age:</p>
          <p>Medicine:</p>
          <p>Allergy:</p> */}

          <div className="flex  gap-3 p-2">
            <div className="flex  ml-3">
              <div className="flex flex-col px-3  items-stretch h-full w-full ">
                <div className="flex  text-slate-400 py-1 ">
                  <h3 className="font-sans  text-xs font-normal tracking-wide ">
                    Age
                  </h3>
                </div>
                <h2 className="font-sans  text-slate-800  font-bold tracking-wide  pb-1 ">
                  {obj.age || "Age"}
                </h2>

                <div className="flex flex-col  text-slate-400 py-1 ">
                  <h3 className="font-sans  text-xs font-normal tracking-wide ">
                    Allergies
                  </h3>
                  <h2 className="font-sans  text-slate-800  font-bold tracking-wide  pb-1 ">
                    {obj.allergy || "Age"}
                  </h2>
                </div>

                <div className="flex flex-col  text-slate-400 py-1 mt-2 ">
                  <h3 className="font-sans  text-xs font-normal tracking-wide ">
                    Medications
                  </h3>
                  <h2 className="font-sans  text-slate-800  font-bold tracking-wide  pb-1 ">
                    {obj.medications || "Medications"}
                  </h2>
                </div>
                </div>


                <div className="flex flex-col p-3 text-slate-400 py-1 mt-2 ">

                  <div className="flex flex-col gap-2 items-center">


                    <div className="flex gap-3 w-full ml-4 ">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-1"
                      >
                        <path
                          d="M5 12V3L20 10L5 17V21"
                          stroke="#808080"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex justify-center text-slate-400 py-1 gap-3 ">
                        <h3 className="font-sans  text-xs font-normal tracking-wide  ">
                          Last Location
                        </h3>
                      </div>
                    </div>
                    <div className="flex  px-3  items-stretch h-full w-full ">
                      <div className="flex gap-1 justify-center items-center">
                        <h2 className="font-sans  text-slate-800  font-semibold text-xs tracking-wide  pb-1 ">
                          {obj.location_last?.latitude || "Latitude"}
                        </h2>
                        <h2 className="font-sans  text-slate-800  font-semibold text-xs tracking-wide  pb-1 ">
                          ,
                        </h2>
                        <h2 className="font-sans  text-slate-800  font-semibold text-xs tracking-wide  pb-1 ">
                          {obj.location_last?.longitude || "Latitude"}
                        </h2>
                      </div>


                    </div>

                  </div>
                  <div className=" w-20 m-6 aspect-square">
                  <Qrcodegen obj={"http://localhost:3000/".concat(obj.name)}/>
                  </div>





              </div>








            </div>

            <div className="flex flex-col justify-between mx-6 ">

            </div>


          </div>
        </div>
        <div className="flex flex-row items-center">
        <button onClick={updatenote}>
        <span class="inline-flex items-center m-2 px-6 py-2 bg-red-400 hover:bg-red-300 rounded-full text-sm font-semibold text-white">
          <img src="/walking.png" className="h-8 w-8"></img>

          <span class="ml-1">Missing my pet</span>
        </span>
        </button>
        <Link href={"http://localhost:3000/qr/".concat(obj.name)}>
        <button class="inline-flex items-center m-2 px-6 py-2 bg-white border-2 border-red-400 hover:bg-red-300 hover:text-white rounded-full text-sm font-semibold text-red-400">Show QR</button>
        </Link>
        
        </div>
        

      </div>
    </div>
  );
}
