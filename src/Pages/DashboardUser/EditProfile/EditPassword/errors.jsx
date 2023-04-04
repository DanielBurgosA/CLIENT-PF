import * as yup from "yup";

export const PasswordSchema = yup.object({
    password: yup.string().required("enter your password")
})