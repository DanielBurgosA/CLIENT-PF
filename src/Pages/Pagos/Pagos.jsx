import style from "./Pagos.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
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
  
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get('id');
  const max = queryParams.get('max');
  console.log(max);

  const[form, setForm]=useState({
    amount:0,
    projectId:id,
  })

  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(()=>{
    payLink && window.open(payLink, "_blank");
    return ()=>{
      dispatch(cleanLink())
    }
  },[payLink, dispatch])

  const handleChange = (e) =>{
    setForm({...form, amount : e.target.value})
    console.log(form.amount);
  }

    const Submit = (data) => {
      dispatch(linkPaymentPlatform(form));
      console.log("esto es data",data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(Submit)}>
                    <FormControl>
                        <FormLabel>Amount to donate</FormLabel>
                        <Input type="number" placeholder="enter the amount you want to donate (in dollars)" {...register('donation')} value={form.amount} onChange={handleChange} />
                    </FormControl>

                    <Flex>
                    <Button type="submit" className={style.button}>Realizar donacion con PayPal</Button>
                    </Flex>
            </form>
    </div>
  );
}