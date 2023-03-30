import { useForm } from "react-hook-form";
import { Center, Container, FormControl, FormLabel, Input,FormErrorMessage, Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "./errors";

export default function ChangePassword() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(changePasswordSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form >
            <Container mt="100px">

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <Center>
                        <FormControl isInvalid={errors.user_email ? true : false}>
                            <FormLabel>User email</FormLabel>
                            <Input type="text" placeholder="Enter the user email" {...register('user_email')} />
                            {!errors.user_email ? null : <FormErrorMessage>{errors.user_email?.message}</FormErrorMessage>}
                        </FormControl>
                    </Center>

                    <Button type="submit" colorScheme="blue"> send </Button>

                </form>
            </Container>
        </form>
    )
}