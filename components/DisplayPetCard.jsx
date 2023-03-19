export default function DisplayPetCard({ pet }) {
    console.log(pet.missing_status)
    



    
  return (
   <>
        <div className="flex">
            <div className="flex flex-col">
                <img src={pet.image} className=" w-16 aspect-square" alt="" />
                <h1 className="text-2xl">{pet.name}</h1>
            </div>

            <div className="flex flex-col">
                <h1 className="text-2xl">Breed: {pet.breed}</h1>
                <h1 className="text-2xl">Age: {pet.age}</h1>
                <h1 className="text-2xl">Medications: {pet.medications}</h1>
                <h1 className="text-2xl">Allergy: {pet.allergy}</h1>
                {/* <h1 className="text-2xl">{pet.missing_status?heelo:hi}</h1> */}
                </div>
 
        </div>

   </>
  );
}