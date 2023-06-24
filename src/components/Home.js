import React from "react";
import { Link } from "react-router-dom";
import img from "../images/DoctorNurse.jpg";
import aw1 from "../images/award1.jpg";
import aw2 from "../images/award2.jpg";
import aw3 from "../images/award3.jpg";
import aw4 from "../images/award4.jpg";
import HospitalLocation from "./HospitalLocation"

function Home() {
  return (
    <>
      {/*Main Hero Section */}
      <section class=" bg-white-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              class="object-cover object-center rounded"
              alt="heroimage"
              src={img}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-400">
              Check Your Health <ion-icon name="heart-outline"></ion-icon>
              <br class="hidden lg:inline-block" />
              With Us.
            </h1>
            <p class="mb-8 leading-relaxed  text-gray">
              We understand that being in a hospital can be a challenging and
              stressful time for both patients and their families. That's why we
              strive to create a comfortable and compassionate environment where
              you can feel supported and cared for. From the moment you enter
              our hospital, our friendly and knowledgeable staff will be there
              to guide you through every step of your healthcare journey.
            </p>
            <div class="flex justify-center">
              <Link to="/appointment">
                <button class="inline-flex text-white bg-cyan-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
                  Book Your Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Award Section*/}

      <section class="text-blue-900 bg-white-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-cyan">
              Award/Achivements🏆
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Over the years, I have had the privilege of accomplishing various
              achievements and receiving prestigious awards that have recognized
              my hard work, dedication, and exceptional skills. These
              accomplishments have served as significant milestones in my
              journey, validating my efforts and motivating me to reach new
              heights.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <h2 class="title-font font-medium text-3xl text-white">
                  <img src={aw1} alt="awrdpic" />
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <h2 class="title-font font-medium text-3xl text-white">
                  <img src={aw2} alt="awrdpic" />
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <h2 class="title-font font-medium text-3xl text-white">
                  <img src={aw3} alt="awrdpic" />
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <h2 class="title-font font-medium text-3xl text-white">
                  <img src={aw4} alt="awrdpic" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

       <h2 className="title-font text-center mt-2 sm:text-4xl text-3xl mb-4 font-medium text-black">We Are Availabel 24*7</h2>

      <HospitalLocation/>

    </>
  );
}

export default Home;
