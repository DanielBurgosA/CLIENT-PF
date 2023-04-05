import UserDonationAbs from "./UserDonationAbs";
import UserProfile from "./UserProfile";
import UserProject from "./UserProject";
import DonationsChart from "./DonationCharts";
import { SimpleGrid, Flex } from "@chakra-ui/react";

export default function UserInfo() {
  return (
    <>

      <DonationsChart ></DonationsChart>
      <Flex justifyContent={"space-around"}>
        <UserProfile></UserProfile>
        <UserProject></UserProject>
      </Flex>


      <UserDonationAbs></UserDonationAbs>

    </>
  )
}



