import React from "react";
import { useFormik } from "formik";
import { appointmentSchema } from "../schemas";
import SendAppointmentData from "../api"


const initialValues = {
  firstname: "",
  lastname: "",
  mobilenumber: "",
  age: "",
  date: "",
  time: "",
};

function Appointmentform() {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: appointmentSchema,
    onSubmit: (values,action) => {
      const usedetails = {
        firstname : values.firstname,
        lastname : values.lastname,
        mobilenumber : values.mobilenumber,
        age : values.age,
        date : values.date,
        time : values.time
      }
      console.log(usedetails)
      SendAppointmentData(usedetails);
      action.resetForm()
    },
  });
 

  return (
    <section className="text-black-900 bg-white-900 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black-900">
            Take Appointment
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Fill The Information Carefully
          </p>
        </div>
        <form onSubmit={handleSubmit}>
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
                    autoComplete="off"
                    placeholder="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {<p  className="leading-7 text-sm text-red-900">{ errors.firstname}</p>}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="lastname"
                    className="leading-7 text-xl text-blue-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    autoComplete="off"
                    placeholder="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {<p  className="leading-7 text-sm text-red-900">{ errors.lastname}</p>}
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
                    autoComplete="off"
                    placeholder="mobilenumber"
                    value={values.mobilenumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {<p  className="leading-7 text-sm text-red-900">{ errors.mobilenumber}</p>}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="age"
                    className="leading-7 text-xl text-blue-700"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    autoComplete="off"
                    placeholder="age"
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {<p  className="leading-7 text-sm text-red-900">{ errors.age}</p>}
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
                    placeholder="date"
                    autoComplete="off"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {<p  className="leading-7 text-sm text-red-900">{ errors.date}</p>}
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
                    autoComplete="off"
                    placeholder="time"
                    value={values.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-white-800 bg-opacity-40 rounded border border-green-700 focus:border-blue-700 focus:bg-white-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-indigo-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {<p  className="leading-7 text-sm text-red-900">{ errors.time}</p>}
                </div>
              </div>
              <div className="p-2 w-full">
                <input
                  type="submit"
                  className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Appointmentform;
