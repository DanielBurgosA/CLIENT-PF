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
} from '@chakra-ui/react';

import { SmallCloseIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUser } from '../../../Redux/Slicers/UserDashboard';
import { getUser } from "../../../Redux/Slicers/LogInOutSlicer";
import EditEmail  from "./EditEmail/EditEmail"
import EditPassword from "./EditPassword/EditPassword"



export default function EditProfile() {
    const user = useSelector(state => state.login.user)

    const origin = localStorage.getItem("origin")

    const dispatch = useDispatch();

    const CloseIconHandler = async () => {
        const data = { image: null };
        const res = await dispatch(updateUser(data));

        if (res.meta.fulfilled === "fulfilled") {
            dispatch(getUser());
        }

    }

    

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    User Profile Edit
                </Heading>
                <FormControl id="userName">
                    <FormLabel>{user.name}</FormLabel>
                    <Stack direction={['column', 'row']} spacing={6}>
                        <Center>
                            <Avatar size="xl" src={user.image}>
                                <AvatarBadge
                                    as={IconButton}
                                    size="sm"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon onClick={CloseIconHandler} />}
                                />
                            </Avatar>
                        </Center>
                        <Center w="full">
                            <Button w="full">Change Icon</Button >//cloudinary
                        </Center>
                    </Stack>
                </FormControl>
                {origin === "google"? null:<EditEmail></EditEmail>}
                {origin === "google"? null:<EditPassword></EditPassword>}


            </Stack>
        </Flex>
    )
}
