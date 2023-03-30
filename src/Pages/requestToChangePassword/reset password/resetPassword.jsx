import { useForm } from "react-hook-form";
import { Center, Container, FormControl, FormLabel, Input,FormErrorMessage, Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "./errors";

export default function ResetPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(resetPasswordSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form >
            <Container mt="100px">

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <Center>
                        <FormControl isInvalid={errors.user_password ? true : false}>
                            <FormLabel>User new password</FormLabel>
                            <Input type="text" placeholder="Enter the user new password" {...register('user_password')} />
                            {!errors.user_password ? null : <FormErrorMessage>{errors.user_password?.message}</FormErrorMessage>}
                        </FormControl>
                    </Center>

                    <Button type="submit" colorScheme="blue"> send </Button>

                </form>
            </Container>
        </form>
    )
}