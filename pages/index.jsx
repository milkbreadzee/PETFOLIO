/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useAuth } from "../context/AuthContext";
// import Dashboard from "./dashboard";


const Login1 = dynamic(() => import("../components/auth/Login"), {
  ssr: false,
});


const index = () => {
      const { user, logout } = useAuth();
  if (user) {
    return (
        <h1>heelo</h1>
    )
  }
  else {
     return <Login1 />;
  }
 
   
  
}
export default index;