import * as yup from "yup";

export const ResetPasswordSchema = yup.object({
    user_email : yup.string().required(),
    user_password: yup.string().required()
})