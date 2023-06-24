import React, { useState } from "react";
import SendBloodDonationData from "../api2"



function DonateForm() {
  const [formvalue, setFormValue] = useState({
    firstname: "",
    bloodgroup: "",
    mobilenumber: "",
    adharnumber: "",
    date: "",
    time: "",
  });

  const handelInput = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formvalue, [name]: value });
  };

  const handelFormsubmit = (event) => {
    event.preventDefault();
    console.log(formvalue);
    SendBloodDonationData(formvalue)
  };

  return (
    <section className="text-red-700 bg-white-900 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black-900">
            Donate Your Blood And Save Other Life.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Fill The Information Carefully.
          </p>
        </div>
        <form onSubmit={handelFormsubmit}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="firstname"
                    className="leading-7 text-xl text-blue-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="firstname"
                    required
                    value={formvalue.firstname}
                    onChange={handelInput}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="bloodgroup"
                    className="leading-7 text-xl text-blue-700"
                  >
                    BloodGroup
                  </label>
                  <input
                    type="text"
                    id="bloodgroup"
                    name="bloodgroup"
                    placeholder="A+/B-"
                    required
                    value={formvalue.bloodgroup}
                    onChange={handelInput}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="mobilenumber"
                    className="leading-7 text-xl text-blue-700"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobilenumber"
                    name="mobilenumber"
                    placeholder="mobilenumber"
                    required
                    value={formvalue.mobilenumber}
                    onChange={handelInput}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="adharnumber"
                    className="leading-7 text-xl text-blue-700"
                  >
                    Adhar-Number
                  </label>
                  <input
                    type="number"
                    id="adharnumber"
                    name="adharnumber"
                    placeholder="adharnumber"
                    required
                    value={formvalue.adharnumber}
                    onChange={handelInput}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="date"
                    className="leading-7 text-xl text-blue-700"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formvalue.date}
                    onChange={handelInput}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="time"
                    className="leading-7 text-xl text-blue-700"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formvalue.time}
                    onChange={handelInput}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default DonateForm;
