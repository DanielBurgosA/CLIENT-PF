import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Container,
  VStack,
  Textarea,
  Center,
  Heading,
} from "@chakra-ui/react";
import { usersFormSchema } from "./UserFormErrors";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Slicers/userSlicer";
import { useNavigate } from "react-router-dom";

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
    navigate("/login");
  }
  
  return (
    <Container mt="100px">
      <Heading>Create an account</Heading>
      <form onSubmit={handleSubmit(Submit)}>
        <VStack spacing="24px">
          <FormControl isInvalid={errors.user_name ? true : false}>
            <FormLabel>User name</FormLabel>
            <Input type="text" placeholder="Enter the user name" {...register('user_name')} />
            {!errors.user_name ? null : <FormErrorMessage>{errors.user_name?.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.user_email ? true : false}>
            <FormLabel>User email</FormLabel>
            <Input type="text" placeholder="Enter the user name" {...register('user_email')} />
            {!errors.user_email ? null : <FormErrorMessage>{errors.user_email?.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.password ? true : false}>
            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              placeholder="Enter your password"
              {...register("password")}
            />
            {!errors.password ? null : (
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            )}
          </FormControl>

          <Button type="submit" colorScheme="blue">
            {" "}
            send{" "}
          </Button>
          <br />
          <br />
        </VStack>
      </form>
    </Container>
  );
}
