import React, { useState, useEffect } from "react";
import Datos from "../Datos/datos";
import NavBar from "../NavBar/navbar";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function home () {
	const [activeLink, setActiveLink] = useState('home');

  return (
    <div className="relative w-full">
      <Datos activeLink={activeLink} />
    	<NavBar />
    	<Header />
    	<Footer /> 
    </div>
  );
}

export default home;