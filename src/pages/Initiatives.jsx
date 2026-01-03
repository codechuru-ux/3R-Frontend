import React from "react";
import TextInitiatives from "../components/TextInitiatives";
import Slidebar from "../components/Slidebar";
const Image = "/images/Screenshot from 2025-12-04 14-11-12";

const Initiatives = () => {
  return (
    <>
        <Slidebar />
    <div className="min-h-screen w-full bg-green-100">
      <TextInitiatives image={Image} />
    </div>
    </>
  )
}

export default Initiatives;
