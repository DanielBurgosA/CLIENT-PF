import * as yup from "yup";

export const loginUsersSchema = yup.object({
    user_email: yup.string().email().required(),
    user_password: yup.string().required("enter your password")
})