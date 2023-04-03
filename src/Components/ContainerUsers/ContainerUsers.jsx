import { Button } from "@chakra-ui/button";
import { useDispatch } from "react-redux";
import { changeBanStatus } from "../../Redux/Slicers/AdminDashboard";
import { useState, useEffect } from "react";
import { getUsers } from "../../Redux/Slicers/AdminDashboard";

export default function ContainerUsers({ data, render}) {
    const dispatch = useDispatch();

    const ban = (id) => {
      const data = {id: id, status: "ban" };
      dispatch(changeBanStatus(data));
      render();
      
    }
    const unBan = (id) => {
      const data = {id: id, status: "unBan" };
      dispatch(changeBanStatus(data));
      console.log(data)
      render();
    
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
  