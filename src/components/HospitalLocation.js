import React from "react";
import img from "../images/Hospital.webp";

function HospitalLocation() {
  return (
    <section class="text-gray-800 bg-black-900 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={img}
        />
        <div class="text-center lg:w-2/3 w-full">
          <p class="leading-relaxed mb-8">
            The hospital facility is a place of healing, hope, and care, where
            the convergence of medical expertise, state-of-the-art technology,
            and compassionate service creates an environment dedicated to
            improving lives. Within its walls, patients and their families find
            solace, reassurance, and the promise of comprehensive healthcare.
          </p>
          <div class="flex justify-center text-black-500">
          <h1 class="text-blue-900 font-size: 5rem"><ion-icon name="call-outline"></ion-icon>+91 9924515011</h1>&nbsp;&nbsp;&nbsp;&nbsp;
          <h1 class="text-blue-900 font-size: 5rem"><ion-icon name="location-outline"></ion-icon>Mumbai-India</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HospitalLocation;
