import React from "react";
import logo from "../../assets/logo.jpg"

function Datos() {
  return (
    <div className="flex w-full h-[300px] bg-yellow-500">
      
      <div className="flex w-1/3 h-[230px] bg-blue-500 mt-10 ">
        <img className="w-[200px] h-[200px] ml-10 mt-4"
            src={logo}
            alt="logo">
        </img>
      </div>
      <div className="w-2/3 h-[230px] bg-white mt-10 bg-red-500">
        <h2 className="text-center text-black">Datos - Bahía Blanca</h2>
      </div>  
    
    </div>
  );
}

export default Datos;