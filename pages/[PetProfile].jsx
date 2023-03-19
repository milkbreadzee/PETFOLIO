import { useRouter } from "next/router";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { app, database } from "../config/firebase";
import { useEffect, useState } from "react";
import DisplayPetCard from "../components/DisplayPetCard";
import Head from "next/head";
import Link from "next/link";








// geoLocation();

function Missingtrue() {


  const [lat, setLat] = useState(" ")
const [lng, setLng] = useState(" ")
const[currLoc, setCurrLoc] =useState(null)
const [statusq, setStatusq] = useState(" ")


  console.log("truello");

  const geoLocation = () => {
    if (!navigator.geolocation){
        setStatusq('Geolocation is not supported by your browser');
    }else{
        setStatusq('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            setCurrLoc({lat, lng});
        }, () => {
            setStatusq('Unable to retrieve your location');
        })
    }
  }


  function updatestatsbtn() {
    geoLocation();
    const washingtonRef = doc(database, "pets", status.name);
    const updatenote = () => {
      updateDoc(washingtonRef, {
        location_last:currLoc,

        });
  }
  }
  return (
    <div>
      <div role="alert" className="px-5 bg-white rounded-xl ">
        <div class="bg-red-500 text-white rounded-t-xl font-bold px-4 py-2">
          Missing
        </div>
        <div class="border text-2sm border-t-0 border-red-400 rounded-b-xl  bg-red-100 px-4 py-3 text-red-700">
          <p>
            This pet was reported missing. Please kindly report its location
          </p>
        </div>
      </div>

      <div
        class="flex items-center mx-5 rounded-lg mt-5 bg-blue-500 text-white text-sm font-bold px-4 py-3"
        role="alert"
      >
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
        </svg>
        <p>We access your location for reporting .</p>
      </div>
      <div className="flex  items-center justify-center mt-5">
      <button type="button" onClick={updatestatsbtn} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Report Location</button>
      </div>
    </div>
  );
}

function Missingfalse() {
  console.log("helsssslo");
  return (
    <div>
      <h1> not Missing</h1>
    </div>
  );
}
export default function PetProfile() {

  

  
  const router = useRouter();


 

  const { PetProfile } = router.query;
  // console.log(PetProfile)
  const names = [];

  const [status, setStatus] = useState(null);

  const fetchPost = async () => {
    // console.log("hello")

    const docRef = doc(database, "pets", PetProfile);
    // console.log(docRef,"hello")
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setStatus(docSnap.data());
      console.log(status?.name)

    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

 


  useEffect(() => {
    if (PetProfile) {
      fetchPost();
      console.log(status,"ji")
    }
  }, [PetProfile]);

  if (status) {
   
   
    return (
      <section className="relative bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-500 to-gray-600 min-h-screen py-7 bg-gray-900 sm:py-10 lg:py-20">
        <Head>
          <title></title>
        </Head>
        <div className="absolute inset-0 bg-gray-900/20"></div>
        <div className="relative max-w-md px-4 mx-auto rounded-md  sm:px-0">
          <div className="overflow-hidden bg-white rounded-2xl shadow-md">
            <div className="px-0 py-0 mt-0 pb-0 sm:px-0 sm:py-0">
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

              <div className="flex p-6  mt-8 rounded-lg flex-col items-center justify-center">
                <h2 className="text-2xl sm:text-3xl tracking-wide font-sans  font-semibold  capitalize text-gray-900 pb-0">
                  {status.name}
                </h2>
                <h2 className="tracking-wide lowercase font-sans text-lg text-gray-600 mt-0 pt-0">
                  {status.breed}
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
            {status.missing_status ? <Missingtrue /> : <Missingfalse />}

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
