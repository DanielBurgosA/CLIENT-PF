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
import { updateUser, uploadImage } from '../../../Redux/Slicers/UserDashboard';
import { getUser } from "../../../Redux/Slicers/LogInOutSlicer";
import EditEmail  from "./EditEmail/EditEmail"
import EditPassword from "./EditPassword/EditPassword"
import { useState, useEffect } from "react";



export default function EditProfile() {
    const user = useSelector(state => state.login.user)

    const[img, setImg] = useState("");
    var myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dipomzedf",
          uploadPreset: "linkingfuture"
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setImg(result.info.secure_url)
            console.log("Done! Here is the image info: ", result.info);
          }
        }
    );

    const dispatch = useDispatch();
      
    const widgetOpen = () => {
        myWidget.open()
    }

    const origin = localStorage.getItem("origin")

    useEffect(()=>{
        if(img!=="")
        dispatch(uploadImage(img))
      },[img])
    
    const CloseIconHandler = async () => {
        const res = dispatch(uploadImage(null));

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
                    <FormLabel>{`${user.name} ${user.lastname&&user.lastname}`}</FormLabel>
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
                            <Button w="full" onClick={widgetOpen}>Change Icon</Button >
                        </Center>
                    </Stack>
                </FormControl>
                {origin === "google"? null:<EditEmail></EditEmail>}
                {origin === "google"? null:<EditPassword></EditPassword>}


            </Stack>
        </Flex>
    )
}
