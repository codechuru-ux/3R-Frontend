import React from 'react';
import { FaBackward } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { useLocation, Navigate } from 'react-router-dom';

const SubmittedSuccessfully = () => {
        const location = useLocation();
        const formRegister = location.state;

        if(formRegister?.fromRegister !== true){
          return <Navigate to="/" />;
        }

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
         <FaCheckSquare className=" text-[50.5px] text-green-popup"/>
        </div>
        <h2 className="text-2xl font-bold mb-4">Request Sent Successfully!</h2>
        <p className="text-gray-700 mb-6">
          Your request has been sent successfully. We will check your details and get back to you soon. Please wait until we respond. And a huge request is to please active and check ragularly. You can log in once your school get approved.
</p>
        <p className="text-gray-500 text-sm">
          Thank you for joining our community!
        </p>
      </div>
       <a href="/" className="bg-green-800 cursor-pointer text-white px-15 xl:mt-27 max-h-20 py-2 mt-7 border-2 shadow-xl border-white-800  inline-flex gap-2 font-semibold text-2xl md:text-4xl font-serif items-center transition-all duration-700 rounded-[9px] group hover:text-green-800 hover:bg-white"><FaBackward /> GO BACK </a>
    </div>
  );
};

export default SubmittedSuccessfully;
