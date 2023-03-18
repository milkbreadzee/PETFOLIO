import { useRouter } from "next/router";
import { collection,  addDoc, getDocs,getFirestore, getDoc, doc } from "firebase/firestore";
import { app, database } from "../config/firebase";
import { useEffect,useState } from "react";
import DisplayPetCard from "../components/DisplayPetCard";


export default function PetProfile() {

    const router = useRouter()
    const { PetProfile } = router.query
    console.log(PetProfile)
    const names=[]

const [status, setStatus] = useState(null);


const fetchPost = async () => {
    console.log("hello")

    const docRef = doc(database, "pets", PetProfile);
    // console.log(docRef,"hello")
    const docSnap = await getDoc(docRef);
    
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
        setStatus(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

     
  }



  
  useEffect(()=>{

    if (PetProfile){
        fetchPost();
    }
      
    //   console.log(docid)
      
      // console.log(corods) 
      // console.log(markerData)
     
  
      
  }, [PetProfile]);


  

if(status){
  return (
    <div>
      {/* <h1>{PetProfile}</h1> */}
        <DisplayPetCard pet={status} />
        {/* <h1>{docid}</h1> */}
    </div>
  );
}
else{
    return (
        <div>
          <h1>404</h1>
        </div>
      );
}
}