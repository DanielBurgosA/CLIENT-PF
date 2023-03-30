import * as yup from "yup";

export const loginUsersSchema = yup.object({
    user_email: yup.string().email("enter a correct email").required("enter the user email"),
    password: yup.string().required("enter your password")
})