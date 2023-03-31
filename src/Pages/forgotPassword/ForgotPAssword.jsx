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
import { forgotPasswordSchema } from "./errors";
import axios from "axios";

export default function ForgotPassword() {
    const [result, setResult] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(forgotPasswordSchema)
    })

    const submit = async (data) =>{
        try {
            const res = await axios.post("/forgotPassword", data)

            setResult(res.data)

        } catch (error) {
            console.log(error)
        }
        

    }

    return (
        <Container mt= "100px">
            <Heading>Log in</Heading>
            <form onSubmit={handleSubmit(submit)}>
                <VStack spacing="24px">

                    <FormControl isInvalid={errors.user_email ? true : false}>
                        <FormLabel>Email</FormLabel>
                        <Input type='text' placeholder="Enter your password" {...register('user_email')} />
                        {!errors.user_email ? null : <FormErrorMessage>{errors.user_email?.message}</FormErrorMessage>}
                    </FormControl>
                    
                    <SignUp/>
                </VStack>

            </form>
            {result? <span>{result}</span>: null}
        </Container>
    )
}