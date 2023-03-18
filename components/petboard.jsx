import PetCard from "./petcard"
import Navbar from "./navbar"
import {AiOutlinePlus} from "react-icons/ai"
export default function Petboard(){
    return(
        <>
        <Navbar />
        <div className="cards flex flex-row px-5 py-3 gap-4 justify-between">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        </div>
        
        <div className="addpet fixed bottom-0 right-20 w-10 p-5">
        <button className="btn"><AiOutlinePlus /></button>
        </div>

       
        
        
        
        </>
    )
}