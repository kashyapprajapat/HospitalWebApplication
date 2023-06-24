import axios from "axios";

const SendBloodDonationData = async (formvalue) => {
    try {
      const Respons = await axios.post(
        "https://hospital-webapi.onrender.com/api/donate",
        formvalue
      );
      console.log(Respons);
    } catch (e) {
      console.log(e);
    }
  };



export default  SendBloodDonationData;