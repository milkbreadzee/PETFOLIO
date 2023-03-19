import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";

import { app, database, db, storage } from "../config/firebase";
import { collection, addDoc, getDocs,setDoc,doc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/router";

import { uploadBytes, getDownloadURL, listAll, list } from "firebase/storage";
import { getStorage, ref } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

export default function AddPetForm() {
  const [signedInUser, setSignedInUser] = useState();
  const [open, setOpen] = React.useState(false);
  const initialValues = {
    age: 0,
    name: "",
    breed: "",
    medications: "",
    allergy: "",
    owner_gmail: signedInUser?.email || "",
    owner_name: signedInUser?.displayName || "",
    owner_phone: "",
    image: "",
    datetime: getCurrentDate(),

    imageurl: "",
    missing_status: false,
    location: [{ lat: 0, lng: 0 }],
  };
  const [file, setFile] = useState(null);
  const [urlkey, seturlkey] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
        setSignedInUser(user);
      } else {
      }
    });
  }, []);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toISOString(); // return date in ISO format (e.g. "2023-03-06T12:30:00.000Z")
  }

  const handleUploadClick = (file) => {
    const accidentImagesRef = ref(storage, `images/${file.name}`);
    console.log("uploading:");

    console.log(file);
    uploadBytes(accidentImagesRef, file).then((snapshot) => {
      getDownloadURL(accidentImagesRef)
        .then((url) => {
          console.log(url);
          seturlkey(url);
          setFormValues({ ...formValues, imageurl: url });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const router = useRouter();

  useEffect(() => {
    // Get the user's current location using the Geolocation API
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ latitude, longitude });
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handlecheck = (e) => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  const formhandler = () => {
    setFormValues({ ...formValues, owner_name: signedInUser?.displayName , owner_gmail: signedInUser?.email });
    console.log(formValues);

    // const dbInstance = collection(database, "pets");

    console.log(formValues);
    setDoc(doc(database, "pets",formValues.name) ,{
      name: formValues.name,
      breed: formValues.breed,
      age: formValues.age,
      allergy: formValues.allergy,
      medications: formValues.medications,
      owner_gmail: signedInUser?.email || "hello",
      owner_name: signedInUser?.displayName || "hello",
        image: formValues.imageurl,
      location_last: currentLocation,
      location_history: [currentLocation],
      missing_status: formValues.missing_status,
    datetime: getCurrentDate(),
    });


  
    router.push("/qr/".concat(formValues.name));
  };

  return (
    <div className="bg-white flex gap-4 h-screen rounded shadow-lg p-4 px-4 md:p-8 mb-6">
  
      {/* <div className="w-36 m-0 p-0">
      {" "}
      <Sidebar />
    </div> */}
      <div className="grid px-20 mt-10 gap-4 gap-y-2 ml-10 text-sm grid-cols-1 lg:grid-cols-3">
        <div className="text-gray-600">
         
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
              <label for="full_name">Pet's name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>
            <div className="md:col-span-5">
              {/* <p>{formErrors.username}</p> */}

              <label for="text">Breed</label>
              <input
                type="text"
                name="breed"
                placeholder="breed"
                value={formValues.breed}
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>

            <div className="md:col-span-5">
              {/* <p>{formErrors.username}</p> */}

              <label for="text">Age</label>
              <input
                type="number"
                name="age"
                placeholder="age"
                value={formValues.age}
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>

         

            <div className="md:col-span-5">
              {/* <p>{formErrors.username}</p> */}

              <label for="text">Allergy</label>
              <input
                type="text"
                name="allergy"
                placeholder="allergy"
                value={formValues.allergy}
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>

            <div className="md:col-span-5">
              {/* <p>{formErrors.username}</p> */}

              <label for="text">Medications</label>
              <input
                type="text"
                name="medications"
                placeholder="medications"
                value={formValues.medications}
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              />
            </div>



            <div className="md:col-span-2 mt-4 bg-slate-200 px-5 py-5 rounded-xl">
              <div>
                <input
                  type="file"
                  className="w-full p-4"
                  onChange={(event) => handleFileInputChange(event)}
                />
                <button
                  className="bg-slate-700 px-3 py-2 rounded-xl text-white ml-4"
                  onClick={() => handleUploadClick(file)}
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="md:col-span-5 text-left mt-2">
              <div className="inline-flex items-start gap-4">
                <button
                  onClick={formhandler}
                  className=" bg-green-500 px-6 py-3 text-white rounded-xl mr-2"
                >
                  Submit
                </button>
                <Link href="/dashboard">
                <button
                 
                  className=" bg-red-500 px-6 py-3 text-white rounded-xl mr-2"
                >
                  Cancel
                </button>
                </Link>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
