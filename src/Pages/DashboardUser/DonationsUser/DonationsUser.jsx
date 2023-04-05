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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Center,
} from '@chakra-ui/react'

export default function DonationUser() {

  const dispatch = useDispatch();

  const userDonations = useSelector(state => state.dashBoardUser.donationUser)

  useEffect(() => {
    dispatch(getDonations());
  }, [dispatch])

  return (
    <>
      {userDonations?.length >= 1 ?
        <Center>
          <TableContainer>
            <Table variant='simple' size="sm" w="sm" m="0.5em">
              <Thead>
                <Tr>
                  <Th>Project</Th>
                  <Th isNumeric>Monto</Th>
                  <Th>Currency</Th>
                </Tr>
              </Thead>
              <Tbody>
                {userDonations?.map(donation => {
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
        </Center>
        :
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Hi User!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Here will appear your donations.
          </AlertDescription>
        </Alert>
      }
    </>

  );
}
