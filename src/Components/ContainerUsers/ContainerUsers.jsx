import { Button } from "@chakra-ui/button";
import { useDispatch } from "react-redux";
import { changeBanStatus } from "../../Redux/Slicers/AdminDashboard";
import { getUsers } from "../../Redux/Slicers/AdminDashboard";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

export default function ContainerUsers({ data, render }) {
  const dispatch = useDispatch();

  const ban = async (id) => {
    const data = { id: id, status: "ban" };
    const a = await dispatch(changeBanStatus(data));
    console.log(a.meta?.requestStatus)
    //render();
    console.log(a)
    if (a.meta?.requestStatus === "fulfilled") {
      dispatch(getUsers());
    }
  }

  const unBan = async (id) => {
    const data = { id: id, status: "unBan" };
    dispatch(changeBanStatus(data));
    console.log(data)
    const a = await dispatch(changeBanStatus(data));
    console.log(a.meta?.requestStatus)
    //render();
    console.log(a)
    if (a.meta?.requestStatus === "fulfilled") {
      dispatch(getUsers());
    }
  }



  return (
    <>
      <TableContainer>
        <Table variant='simple' size="sm" w="sm">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Lastname</Th>
              <Th>Email</Th>
              <Th>Status</Th>
              {data[0]?.deleted ? <Th>Ban</Th> : <Th>Un ban</Th>}

            </Tr>
          </Thead>
          <Tbody>
            {data?.map(user => {
              return (
                <Tr>
                  <Td>{user.user_name}</Td>
                  <Td>{user.user_lastname}</Td>
                  <Td>{user.user_email}</Td>
                  <Td>{user.deleted? "Banned": "Active"}</Td>
                  <Td>{user.deleted ? <Button onClick={() => unBan(user.id)}>unBan</Button> : <Button onClick={() => ban(user.id)}>Ban</Button>}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
