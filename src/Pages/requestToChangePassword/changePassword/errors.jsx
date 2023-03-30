import * as yup from "yup";

export const changePasswordSchema = yup.object({
    user_email: yup.string().email().required()
});