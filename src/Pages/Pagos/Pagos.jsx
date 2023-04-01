import style from "./Pagos.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { cleanLink, linkPaymentPlatform } from "../../Redux/Slicers/paymentSlicer";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react";

export default function Pagos() {
  const dispatch = useDispatch();
  const payLink = useSelector((state) => state.paymentLink.payLink);
  const LogInStatus = useSelector (state => state.login.status)

  const state = useSelector (state => state)
  console.log("esto es el state", state)

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()


  useEffect(()=>{
    payLink && window.open(payLink, "_blank");
    return ()=>{
      dispatch(cleanLink())
    }
  },[payLink, dispatch])

    const Submit = (data) => {
      if(LogInStatus === false){
        navigate('/login');
      alert("You must be logged in to access these features")
      }
      const form = {
        userName: "Alan",
        project: "Proyecto de prueba",
        amount: data.donation
      }
      dispatch(linkPaymentPlatform(form));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(Submit)}>
                    <FormControl>
                        <FormLabel>Amount to donate</FormLabel>
                        <Input type="number" placeholder="enter the amount you want to donate (in dollars)" {...register('donation')} />
                    </FormControl>

                    <Flex>
                    <Button type="submit" className={style.button}>Realizar donacion con PayPal</Button>
                    </Flex>
            </form>
    </div>
  );
}