import  * as Yup from "yup";

export const appointmentSchema = Yup.object({
    firstname:Yup.string().min(2).max(30).required("Please  Enter your Firstname"),
    lastname : Yup.string().min(2).max(30).required("Please  Enter your Lastname"),
    mobilenumber : Yup.number().min(10).required(" Please  Enter your MobileNumber"),
    age:Yup.number().min(2).max(100).required(" Please  Enter your Age"),
    date:Yup.date().required(" Please  Enter proper Date"),
    time:Yup.string().min(2).max(40).required(" Please  Enter proper Time"),
})