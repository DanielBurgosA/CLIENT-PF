import style from "./DonationHistory.module.css";
import { getDonations } from "../../../Redux/Slicers/AdminDashboard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
} from '@chakra-ui/react'

export default function Donations() {
  const donations = useSelector((state) => state.dashBoardAdmin.AllDonation)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDonations());
  }, [dispatch])

  return (

    <div className={style.container}>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Project</Th>
              <Th isNumeric>Monto</Th>

            </Tr>
          </Thead>
          {donations.map(donation => {
            return (
              <Tr>
                <Td>{donation.user.user_name}</Td>
                <Td>{donation.projectId}</Td>
                <Td isNumeric>{donation.monto}</Td>
              </Tr>
            )
          })}
        </Table>
      </TableContainer>

    </div>
  );
}
