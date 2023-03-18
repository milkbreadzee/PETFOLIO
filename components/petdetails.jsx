import Navbar from "../components/navbar"
export default function PetDetails(){
    return(
        <>
          <Navbar />  
          <div className="details grid grid-cols-2">
            <div className="pet">
                <img src="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg" alt="" />
            </div>
            
          </div>
        </>
    )
}