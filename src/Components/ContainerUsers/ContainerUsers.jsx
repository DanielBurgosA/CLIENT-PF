import { Button } from "@chakra-ui/button";
import { useDispatch } from "react-redux";
import { changeBanStatus } from "../../Redux/Slicers/AdminDashboard";
import { useState, useEffect } from "react";
import { getUsers } from "../../Redux/Slicers/AdminDashboard";

export default function ContainerUsers({ data, render}) {
    const dispatch = useDispatch();

    const ban = async (id) => {
      const data = {id: id, status: "ban" };
      const a =  await dispatch(changeBanStatus(data));
      console.log(a.meta?.requestStatus)
      //render();
      console.log(a)
      if (a.meta?.requestStatus === "fulfilled"){
        console.log("hola")
        dispatch(getUsers());
      }
    }

    const unBan = async (id) => {
      const data = {id: id, status: "unBan" };
      dispatch(changeBanStatus(data));
      console.log(data)
      const a =  await dispatch(changeBanStatus(data));
      console.log(a.meta?.requestStatus)
      //render();
      console.log(a)
      if (a.meta?.requestStatus === "fulfilled"){
        console.log("hola")
        dispatch(getUsers());
      }
    }
    
    

    return (
      <>
        {data.map((elem) => {
          return (
            <>
              <p>Name: {elem.user_name}</p>
              <p>Lastname: {elem.user_lastname}</p>
              <p>Email: {elem.user_email}</p>
              <p>Status: {elem.deleted? "true": "false"}</p>
              <Button onClick={()=>ban(elem.id)}>Ban</Button>
              <Button onClick={()=>unBan(elem.id)}>unBan</Button>
              <br />
              <hr />
            </>
          );
        })}
      </>
    );
  }
  