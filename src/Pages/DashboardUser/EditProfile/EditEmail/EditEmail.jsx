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
import { EmailSchema } from './errors';
import { updateUser } from '../../../../Redux/Slicers/UserDashboard';
import { getUser } from '../../../../Redux/Slicers/LogInOutSlicer';


export default function EditEmail() {
    const user = useSelector(state => state.login.user)


    const dispatch = useDispatch();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(EmailSchema)
    })

    const submit = async (data) =>{
        const res = await dispatch(updateUser(data));

        if(res.meta?.requestStatus === "fulfilled"){
            dispatch(getUser());
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <FormControl isInvalid={errors.user_email ? true : false}>
                <FormLabel>Email address</FormLabel>
                <Input
                    placeholder={user.email}
                    _placeholder={{ color: 'gray.500' }}
                    type="email" {...register("user_email")}
                />
                
                {!errors.user_email ? null : (<FormErrorMessage>{errors.user_email?.message}</FormErrorMessage>)}

                <Button
                    bg={'blue.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                        bg: 'blue.500',
                    }}
                    type = "submit"
                    >
                    Submit
                </Button>
            </FormControl>
        </form>
    )
}