import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUsersSchema } from "./LoginErrors";
import { userLogIn } from "../../Redux/Slicers/LogInOutSlicer"; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    InputGroup,
    InputRightElement,
    FormErrorMessage,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import SignUp from "../../Components/GoogleLogIn/LogIn";

export default function LogIn() {
 
    const navigate = useNavigate();
    const LogInStatus = useSelector (state => state.login.status)
    const dispatch = useDispatch();
    

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginUsersSchema)
    })

    const[disp, setDisp] = useState(false);

    const Submit = (data) => {
        dispatch(userLogIn(data));
    }

    useEffect(() => {
        LogInStatus && navigate('/home');
        (!LogInStatus && disp) && alert("This account doest exist");
        return ()=>{
            setDisp(false);
          }
     }, [LogInStatus,disp]);

     const [showPassword, setShowPassword] = useState(false);
    

    return (
        <form onSubmit={handleSubmit(Submit)}>
            <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                        </Text>
                    </Stack>
                    <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email" isInvalid={errors.user_email ? true : false}>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" placeholder="Enter the user user_email" {...register('user_email')} />
                            {!errors.user_email ? null : <FormErrorMessage>{errors.user_email?.message}</FormErrorMessage>}
                        </FormControl>
                        <FormControl id="password" isInvalid={errors.user_password ? true : false}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" {...register("user_password")}/>
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                        setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                                {!errors.user_password ? null : (<FormErrorMessage>{errors.user_password?.message}</FormErrorMessage>)}
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                                <Link to={"/forgotPassword"} color={'blue.400'}>Forgot password?</Link>
                                <Link to={"/create-user"} color={'blue.400'}>Create account</Link>
                            </Stack>
                        <Button
                            type="submit"
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                            bg: 'blue.500',
                            }}>
                            Sign in
                        </Button>
                        </Stack>
                    </Stack>
                    </Box>
                </Stack>
            </Flex>
        </form>



        // <Container mt= "100px">
        //     <Heading>Log in</Heading>
        //     <form onSubmit={handleSubmit(Submit)}>
        //         <VStack spacing="24px">
        //             <FormControl isInvalid={errors.user_email ? true : false}>
        //                 <FormLabel>User email</FormLabel>
        //                 <Input type="text" placeholder="Enter the user user_email" {...register('user_email')} />
        //                 {!errors.user_email ? null : <FormErrorMessage>{errors.user_email?.message}</FormErrorMessage>}
        //             </FormControl>

        //             <FormControl isInvalid={errors.user_password ? true : false}>
        //                 <FormLabel>Password</FormLabel>
        //                 <Input type='text' placeholder="Enter your password" {...register('user_password')} />
        //                 {!errors.user_password ? null : <FormErrorMessage>{errors.user_password?.message}</FormErrorMessage>}
        //             </FormControl>
        //             <Flex w="100%">
        //                 <Link to={"/create-user"} style={{color:"blue"}}>Create an Account</Link> 
        //                 <Link to={"/forgotPassword"} style={{color:"blue"}}>Forgot password?</Link> 
        //                 <Spacer></Spacer>
        //                 <Button type="submit" colorScheme="blue"> send </Button>
        //             </Flex>
        //             <SignUp/>
        //         </VStack>

        //     </form>
        // </Container>
    )
}

//Solo el achivo index de Pages recibe este export
