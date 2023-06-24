import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <header class="text-white-900 bg-green-700 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <ion-icon name="medkit-outline"></ion-icon>
          <span class="ml-3 text-xl">Doctor</span>
        </nav>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/"  className="mr-5 text-white hover:text-white">Home</Link>

          <Link to="/about" className="mr-5 text-white hover:text-white">About</Link>

          <Link to="/appointment" className="mr-5 text-white  hover:text-white">Appointment</Link>

          <Link to="/donate" className="mr-5 text-white  hover:text-white">Donate</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
