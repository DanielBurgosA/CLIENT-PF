import * as yup from "yup";

export const resetPasswordSchema = yup.object({
    user_password: yup.string().required()
});