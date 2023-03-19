import React from 'react'
import Image from 'next/image';



export default function Profile({obj}) {
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
              className="h-full w-full rounded-full"
              src={obj.image ||"https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png"}
              alt=""
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-black">
            {obj?.name || "Name"}
          </h4>
          <p className="text-base font-normal text-gray-600">            {obj?.breed || "Breed"}
</p>
        </div>
        <div className="mt-6 bg-white p-4 w-full rounded-xl mx-4 flex flex-col mb-3 text-black gap-1 justify-start md:!gap-1">
          <p>Breed:</p> <p>Age:</p>
          <p>Medicine:</p>
          <p>Allergy:</p>
        </div>
        <span class="inline-flex items-center m-2 px-6 py-2 bg-red-400 hover:bg-red-300 rounded-full text-sm font-semibold text-white">
          <img src="/walking.png" className="h-8 w-8"></img>

          <span class="ml-1">Missing my pet</span>
        </span>
      </div>
    </div>
  );
}