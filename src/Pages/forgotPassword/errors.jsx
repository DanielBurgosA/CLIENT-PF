import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
    user_email: yup.string().email().required()
})