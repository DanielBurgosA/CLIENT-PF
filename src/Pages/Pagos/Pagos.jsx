import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { cleanLink, linkPaymentPlatform } from "../../Redux/Slicers/paymentSlicer";
import { provGetIdPago, cleanIdPago } from "../../Redux/Slicers/projectSlicer";
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
  FormErrorMessage,
} from "@chakra-ui/react";

export default function Pagos() {

  const dispatch = useDispatch();
  const payLink = useSelector((state) => state.paymentLink.payLink);
  const location = useLocation()
  
  const queryParams = new URLSearchParams(location.search);
  console.log("esto es query", queryParams) //objeto vacio

  const id = queryParams.get('id');

    /* const pathname = window.location.pathname;
    const id = pathname.split('/').pop(); 
    console.log("esto es id", id); */

  useEffect(()=>{
    dispatch(provGetIdPago(id));
    payLink && window.open(payLink, "_blank");
    return ()=>{
      dispatch(cleanIdPago());
      dispatch(cleanLink())
    }
  },[payLink, dispatch, id])

  let projectById = useSelector((state) => state.project.projectIdPago);
  !projectById&& dispatch(provGetIdPago(id));

  const max = parseFloat(projectById.cost) - parseFloat(projectById.currentAmount);

  console.log(max);

  const[form, setForm]=useState({
    amount:5,
    projectId:id,
  })

  console.log(form.amount);

  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleChange = (e) =>{
    setForm({...form, amount : e.target.value})
  }

    const Submit = (data) => {
      dispatch(linkPaymentPlatform(form));
      console.log("esto es data",data)
  }

  return (

    <form onSubmit={handleSubmit(Submit)}>
            <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>{`Donation to ${projectById.name}`}</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                          {`we need ${max} dolares to reach our goal`}
                        </Text>
                    </Stack>
                    <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email" isInvalid={errors.user_email ? true : false}>
                            <FormLabel>Amount to donate</FormLabel>
                            <Input type="number" placeholder="enter the amount you want to donate (in dollars)" {...register('donation')} value={form.amount} onChange={handleChange} min={5} max={max} />
                            {!errors.user_email ? null : <FormErrorMessage>{errors.user_email?.message}</FormErrorMessage>}
                        </FormControl>
                        <Button
                            type="submit"
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                            bg: 'blue.500',
                            }}>
                            Donate with Paypal
                        </Button>
                    </Stack>
                    </Box>
                </Stack>
            </Flex>
        </form>
  );
}