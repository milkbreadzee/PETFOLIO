/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

// import Dashboard from "./dashboard";



// const Login = dynamic(() => import("../components/auth/Login"), {
//   ssr: false,   
// });


const login = () => {
    const router = useRouter();
      const { user, logout } = useAuth();
  if (user) {
  }
  else {
    router.push("/dashboard")
  }
 
   
  
}
export default login;