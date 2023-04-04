import * as yup from "yup";

export const EmailSchema = yup.object({
    user_email: yup.string().email().required("enter your email")
})