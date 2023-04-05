import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Switch,
  FormControl,
  FormLabel,
  Select,
  Stack
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { changeProjectStatus } from '../../Redux/Slicers/AdminDashboard';
import { getProject } from '../../Redux/Slicers/AdminDashboard';

export default function ContainerAdmin({ data }) {

  //const approved = useSelector(state =>)
  const dispatch = useDispatch();


  const click = async (event, id) => {
    
    if (event.target.value === "approve") {
     
      const data = { id: id, status: "approved" }

      const res = await dispatch(changeProjectStatus(data));

      if (res.meta?.requestStatus === "fulfilled") {
        console.log("hola")
        dispatch(getProject());
      }
    }

    if (event.target.value === "reject") {
      const data = { id: id, status: "rejected" };
      const res = await dispatch(changeProjectStatus(data));

      if (res.meta?.requestStatus === "fulfilled") {
        console.log("hola")
        dispatch(getProject());
      }
    }

  }

  console.log(data[0])

  return (
    <>

      <>
        <TableContainer>
          <Table variant='simple'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Location</Th>
                <Th>Status</Th>
                <Th>Goal</Th>
                {data[0]?.status === "wait approval" ?  <Th>Approved</Th> :null }
              </Tr>
            </Thead>
            {data.map(elem => {
              return (
                <Tr>
                  <Td>{elem.name}</Td>
                  <Td>{elem.location}</Td>
                  <Td>{elem.status}</Td>
                  <Td>{elem.completed ? "true" : "false"}</Td>

                  {data[0]?.status === "wait approval" ?
                    <Td>
                      {/* <Select placeholder='Select option' onChange={(event) => click(event, elem.id)}>
                        <option selected>--select an option</option>
                        <option value='approve'>Approve</option>
                        <option value='reject'>Reject</option>
                        
                      </Select> */}
                      <Button m="1" value="approve" onClick = { (event) => click(event, elem.id)}>
                        Approve
                      </Button>
                      <Button value="reject" onClick = { (event) => click(event, elem.id)}>
                        Reject
                      </Button>
                    </Td> : null}
                  {/* <FormControl display='flex' alignItems='center'>
                      <FormLabel htmlFor='email-alerts' mb='0'>
                        approved
                      </FormLabel>
                      {data[0]?.status === "approved" ? <Switch id='email-alerts' onChange={() => click(elem.id)} isChecked /> :
                        <Switch id='email-alerts' onChange={() => click(elem.id)} />}
                    </FormControl> */}


                </Tr>
              )
            })}
          </Table>
        </TableContainer>
      </>

    </>
  );
}
