import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  message: Yup.string().min(2).max(2000).required("please enter your message"),
});
