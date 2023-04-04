import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    FormErrorMessage
} from '@chakra-ui/react';


import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordSchema } from './errors';
import { updateUser } from '../../../../Redux/Slicers/UserDashboard';
import { getUser } from '../../../../Redux/Slicers/LogInOutSlicer';


export default function EditPassword() {
    const user = useSelector(state => state.login.user)


    const dispatch = useDispatch();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(PasswordSchema)
    })

    const submit = async (data) => {
        const res = await dispatch(updateUser(data));

        if (res.meta?.requestStatus === "fulfilled") {
            dispatch(getUser());
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <FormControl isInvalid={errors.password ? true : false}>
                <FormLabel>Password</FormLabel>
                <Input
                    placeholder="enter the new password"
                    _placeholder={{ color: 'gray.500' }}
                    type="email" {...register("password")}
                />
                {!errors.password ? null : (<FormErrorMessage>{errors.password?.message}</FormErrorMessage>)}

                <Button
                    bg={'blue.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                        bg: 'blue.500',
                    }}
                    type="submit"
                >
                    Submit
                </Button>
            </FormControl>
        </form>
    )
}
