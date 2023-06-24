import axios from "axios";

 const SendAppointmentData = async (formvalue) => {
  try {
    const Respons = await axios.post(
      "https://hospital-webapi.onrender.com/api/appointment",
      formvalue
    );
    console.log(Respons);
  } catch (e) {
    console.log(e);
  }
};



export default  SendAppointmentData;