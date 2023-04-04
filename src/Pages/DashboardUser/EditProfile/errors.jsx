import * as yup from "yup";

export const EditSchema = yup.object({
    user_email: yup.string().email().required(),
    user_password: yup.string().required("enter your password")
})