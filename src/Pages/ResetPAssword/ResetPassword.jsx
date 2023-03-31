import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input,
    Container,
    VStack,
    Box,
    Flex,
    Spacer,
    Heading,
    Divider,
    Center,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ResetPasswordSchema } from "./errors";
import { useLocation } from "react-router-dom";
import axios from "axios";



export default function ResetPassword (){
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const token = queryParams.get('token')
; 
    console.log(token)
    const [result, setResult] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ResetPasswordSchema)
    })

    const authHeader = { Authorization: `Bearer ${token}` };

    const submit = async (data) => {
        try {
           const res = await axios.put("/reset", data); 
           setResult(res.data);
        } catch (error) {
            console.log(error);
        }
        

    }

    return (
        <Container mt= "100px">
            <Heading>Log in</Heading>
            <form onSubmit={handleSubmit(submit)}>
                <VStack spacing="24px">

                    <FormControl isInvalid={errors.user_password ? true : false}>
                        <FormLabel>Enter the new password</FormLabel>
                        <Input type='text' placeholder="Enter your email" {...register('user_email')} />
                        <Input type='text' placeholder="Enter your password" {...register('user_password')} />
                        {!errors.user_password ? null : <FormErrorMessage>{errors.user_password?.message}</FormErrorMessage>}
                    </FormControl>
                </VStack>
                <Button type="submit">send</Button>
            </form>
            {result? <span>{result}</span>: null}
        </Container>
    )
}