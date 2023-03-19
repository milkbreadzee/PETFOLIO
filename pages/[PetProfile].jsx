import { useRouter } from "next/router";
import { collection,  addDoc, getDocs,getFirestore, getDoc, doc } from "firebase/firestore";
import { app, database } from "../config/firebase";
import { useEffect,useState } from "react";
import DisplayPetCard from "../components/DisplayPetCard";
import Head from "next/head";
import Link from "next/link";


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
    <section className="relative bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-500 to-gray-600 min-h-screen py-7 bg-gray-900 sm:py-10 lg:py-20">
      <Head>
        <title></title>
      </Head>
      <div className="absolute inset-0 bg-gray-900/20"></div>
      <div className="relative max-w-md px-4 mx-auto rounded-md  sm:px-0">
        <div className="overflow-hidden bg-white rounded-2xl shadow-md">
          <div className="px-0 py-0 mt-0 sm:px-0 sm:py-0">
            <div className="text-center">
              <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                <img
                  src="/banner.png"
                  className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
                />
                <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                  <img
                    className="h-full object-fit w-full rounded-full"
                    src={status.image}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex p-6 gap-2 m-8 rounded-lg flex-col items-center justify-center">
              <h2 className="text-2xl sm:text-3xl tracking-wide	 font-display text-gray-900">
                {status.name}
              </h2>
              <div className="flex p-6 gap-2 mt-5 w-full rounded-lg border flex-col items-left justify-start">
                <h2 className="text-lg">Breed: {status.breed}</h2>
                <h2 className="text-lg">Age: {status.age}</h2>
                <h2 className="text-lg">Medications: {status.medications}</h2>
                <h2 className="text-lg">Allergy: {status.allergy}</h2>
                <h2 className="text-lg">Owner: {status.owner_name}</h2>
                <h2 className="text-lg">Email: {status.owner_gmail}</h2>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-1">
            <Link
              href="/"
              className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
            >
              <img className="h-7 mt-3 mb-6" src="/logo.png"></img>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
// else{
//     return (
//         <div>
//           <h1>404</h1>
//         </div>
//       );
// }
}