import Navbar from "../components/navbar"
import {FiEdit} from "react-icons/fi"

export default function PetDetails(){

    return(
        <>
          <Navbar />  


          <div className=" grid grid-cols-2  ">
            <div className=" flex-col flex justify-center py-16 items-center gap-y-8">
                <img src="https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-1.jpg" alt="" className="rounded-full h-96 w-96" />
                <h1 className="text-4xl font-extrabold">NAME</h1>
                <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
            </div>


            <div className="details border-solid border-2 border-sky-500 m-10  ">
               
            </div>
            
          </div>
        </>
    )
}