import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { usersFormSchema } from "./UserFormErrors";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Slicers/userSlicer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function UserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(usersFormSchema),
  });

  const Submit = (data) => {
    dispatch(postUser(data));
    Swal.fire("Good job!", "You create a new user!", "great");
    navigate("/login");
  }

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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to be part of the change ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired isInvalid={errors.user_name ? true : false}>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" placeholder="Enter the user name" {...register('user_name')}/>
                  {!errors.user_name ? null : <FormErrorMessage>{errors.user_name?.message}</FormErrorMessage>}
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired isInvalid={errors.user_lastname ? true : false}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" placeholder="Enter the user last name" {...register('user_lastname')}/>
                  {!errors.user_lastname ? null : <FormErrorMessage>{errors.user_lastname?.message}</FormErrorMessage>}
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired isInvalid={errors.user_email ? true : false}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter the user email" {...register('user_email')} />
              {!errors.user_email ? null : <FormErrorMessage>{errors.user_email?.message}</FormErrorMessage>} 
            </FormControl>
            <FormControl id="password" isRequired isInvalid={errors.user_password ? true : false}>
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
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                type="submit"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href={"/login"} color={'blue.400'}>Login</Link >
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </form>
  );

    // <Container mt="100px">
    //   <Heading>Create an account</Heading>
    //   <form onSubmit={handleSubmit(Submit)}>
    //     <VStack spacing="24px">
    //       <FormControl isInvalid={errors.user_name ? true : false}>
    //         <FormLabel>User name</FormLabel>
    //         <Input type="text" placeholder="Enter the user name" {...register('user_name')} />
    //         {!errors.user_name ? null : <FormErrorMessage>{errors.user_name?.message}</FormErrorMessage>}
    //       </FormControl>

    //       {/* <FormControl isInvalid={error.user_lastname? true : false}>
    //         <FormLabel>User user_lastname</FormLabel>
    //         <Input type="text" placeholder="Enter the user lastname" {...register('user_lastname')} />
    //         {!errors.user_lastname ? null : <FormErrorMessage>{errors.user_lastname?.message}</FormErrorMessage>}
    //       </FormControl> */}

    //       <FormControl isInvalid={errors.user_email ? true : false}>
    //         <FormLabel>User email</FormLabel>
    //         <Input type="text" placeholder="Enter the user email" {...register('user_email')} />
    //         {!errors.user_email ? null : <FormErrorMessage>{errors.user_email?.message}</FormErrorMessage>}
    //       </FormControl>

    //       <FormControl isInvalid={errors.user_password ? true : false}>
    //         <FormLabel>Password</FormLabel>
    //         <Input
    //           type={showPassword? "text" : "password"}
    //           placeholder="Enter your password"
    //           {...register("user_password")}
    //         />
    //         {!errors.user_password ? null : (
    //           <FormErrorMessage>{errors.user_password?.message}</FormErrorMessage>
    //         )}
    //       </FormControl>

    //       <Button type="submit" colorScheme="blue">
    //         {" "}
    //         send{" "}
    //       </Button>
    //       <br />
    //       <br />
    //     </VStack>
    //   </form>
    // </Container>
}

