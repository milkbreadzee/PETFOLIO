import { useRouter } from "next/router";


export default function PetProfile() {

    const router = useRouter()
    const { PetProfile } = router.query
    console.log(PetProfile)


if(PetProfile){
  return (
    <div>
      <h1>{PetProfile}</h1>
    </div>
  );
}}