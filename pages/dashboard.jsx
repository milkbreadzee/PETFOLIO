import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { app } from "../config/firebase";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/dashboard/Dashboard";


export default function dashboard() {

 const [signedInUser, setSignedInUser] = useState();
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setSignedInUser(user);
      console.log(user);
    } else {
    }
  });


  return (
    <>
    <Dashboard />
   </>
  );
}