import style from "./Pagos.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { cleanLink, linkPaymentPlatform } from "../../Redux/Slicers/paymentSlicer";
import { provGetIdPago, cleanIdPago } from "../../Redux/Slicers/projectSlicer";
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

  useEffect(()=>{
    dispatch(provGetIdPago(id));
    payLink && window.open(payLink, "_blank");
    return ()=>{
      dispatch(cleanIdPago());
      dispatch(cleanLink())
    }
  },[payLink])

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
    <div>
      <form onSubmit={handleSubmit(Submit)}>
                    <h1>{`gracias por donar a ${projectById.name}`}</h1>
                    <h2>{`faltan ${max} dolares para alcanzar nuestra meta`}</h2>
                    <FormControl>
                        <FormLabel>Amount to donate</FormLabel>
                        <Input type="number" placeholder="enter the amount you want to donate (in dollars)" {...register('donation')} value={form.amount} onChange={handleChange} min={5} max={max}/>
                    </FormControl>

                    <Flex>
                    <Button type="submit" className={style.button}>Realizar donacion con PayPal</Button>
                    </Flex>
            </form>
    </div>
  );
}