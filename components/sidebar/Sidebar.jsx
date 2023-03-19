import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";


export default function Sidebaruser() {
  const router = useRouter();
      const { user, logout } = useAuth();

  const [open, setOpen] = React.useState(false);

  const opening = () => {
    setOpen(!open);
  };


  return (
    <div className="flex flex-col rounded-l-[40px] rounded-r-[10px] pr-9 items-center px-5 gap-10 justify-items-stretch  w-full min-h-10 sm:h-full overflow-hidden text-gray-800  bg-[#7dc8b3] p-0  ">
      <div className=" hidden sm:flex flex-col py-0 items-center w-full mt-24 gap-8 m-0 transition-all transform duration-500">
        <Link
          className=" flex items-center w-full h-16 justify-center -mt-2 mb-6 m-0 p-0 rounded-full  text-wehite-600 bg-white-100 hover:text-gray-300 "
          href="/dashboard"
        >
          <img src="/logoi.png" className="w-16 opacity-90" />{" "}
          {/* <span className="ml-2 text-sm font-medium">Home</span> */}
        </Link>

        <Link
          className="btn flex items-center w-full h-16 justify-center mt-2 m-0 p-0 rounded-full  hover:bg-[#E38B29] text-wehite-600 bg-white-100 hover:text-gray-300 "
          href="/dashboard"
        >
          <img src="/icon/home.png" className="w-8 opacity-90" />{" "}
          {/* <span className="ml-2 text-sm font-medium">Home</span> */}
        </Link>

        <Link
          className="btn flex items-center w-full h-16 justify-center mt-2 m-0 p-0 rounded-xl  hover:bg-[#E38B29]  text-wehite-600 bg-white-100 hover:text-gray-300 "
          href="/map"
        >
          <img src="/icon/map.png" className="w-8 opacity-90" />{" "}
          {/* <span className="ml-2 text-sm font-medium">Home</span> */}
        </Link>

        <Link
          className="btn flex items-center w-full h-16 justify-center mt-2 m-0 p-0 rounded-xl  hover:bg-[#E38B29]  text-wehite-600 bg-white-100 hover:text-gray-300 "
          href="/profile"
        >
          <img src="/icon/petprofile.png" className="w-8 opacity-90" />{" "}
          {/* <span className="ml-2 text-sm font-medium">Home</span> */}
        </Link>
        <button
          onClick={logout}
          className="btn flex items-center w-full h-16 justify-center mt-2 m-0 p-0 rounded-xl  hover:bg-[#E38B29]  text-wehite-600 bg-white-100 hover:text-gray-300 "
          href="/dashboard"
        >
          <img src="/icon/logout.png" className="w-8 opacity-90" />{" "}
          {/* <span className="ml-2 text-sm font-medium">Home</span> */}
        </button>
      </div>
    </div>
  );
    }