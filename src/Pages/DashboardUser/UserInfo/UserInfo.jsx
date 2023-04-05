import UserDonationAbs from "./UserDonationAbs"
import UserProfile from "./UserProfile"
import UserProject from "./UserProject"
import DonationsChart from "./DonationCharts"
export default function UserInfo() {
  return (
    <>
    
      <DonationsChart></DonationsChart>
      <UserProfile></UserProfile>
      <UserProject></UserProject>
      <UserDonationAbs></UserDonationAbs>
      
    </>
  )
}



