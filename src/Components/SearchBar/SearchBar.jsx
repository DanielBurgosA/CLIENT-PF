import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../Redux/Slicers/projectSlicer";
import {
  Input,
  InputGroup,
} from '@chakra-ui/react';

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handlerInputChange = (e) => {
    setName(e.target.value);
    dispatch(searchName(e.target.value.toLowerCase()));
  };

  return (
    <InputGroup size='md'>
    <Input
      width='auto'
      type={'text'}
      placeholder='Search Project'
      onChange={(e) => handlerInputChange(e)}
      value = {name}
    />
  </InputGroup>
  );
}
