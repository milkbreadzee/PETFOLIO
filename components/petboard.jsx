import PetCard from "./petcard"
import Navbar from "./navbar"
import {AiOutlinePlus} from "react-icons/ai"
export default function Petboard(){
    return(
        <>
        <Navbar />
        <div className="cards grid grid-cols-4 pr-0 pl-10 py-20 gap-y-10 gap-x-4justify-between overflow-auto">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        </div>
        
        <div className="addpet fixed bottom-0 right-20 w-10 p-5">
        <button className="btn "><AiOutlinePlus /></button>
        </div>

       
       
        
        
        
        </>
    )
}