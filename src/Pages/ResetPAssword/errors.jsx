import * as yup from "yup";

export const ResetPasswordSchema = yup.object({
    user_password: yup.string().required()
})