import { getDonations } from "../../../Redux/Slicers/AdminDashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
} from '@chakra-ui/react'

export default function Donations() {
  const donations = useSelector((state) => state.dashBoardAdmin.AllDonation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDonations());
  }, [dispatch])

  return (

    <Center>


      <TableContainer>
        <Table variant='simple' w="lg">
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Project</Th>
              <Th isNumeric>Amout</Th>

            </Tr>
          </Thead>
          {donations?.map(donation => {
            return (
              <Tr>
                <Td>{donation.user.user_name}</Td>
                <Td>{donation.project.name}</Td>
                <Td isNumeric>{donation.monto}</Td>
              </Tr>
            )
          })}
        </Table>
      </TableContainer>
    </Center>

  );
}
