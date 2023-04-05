import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDonations } from "../../../Redux/Slicers/UserDashboard";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export default function DonationUser() {

  const dispatch = useDispatch();

  const userDonations = useSelector(state => state.dashBoardUser.donationUser)

  useEffect(() => {
    dispatch(getDonations());
  }, [dispatch])

  return (
    <TableContainer>
      <Table variant='simple' size="sm" w="sm">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Project</Th>
            <Th isNumeric>Monto</Th>
            <Th>Currency</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userDonations.map(donation => {
            return (
              <Tr>
                <Td>{donation.project.name}</Td>
                <Td isNumeric>{donation.monto}</Td>
                <Td>{donation.monto_currency}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
