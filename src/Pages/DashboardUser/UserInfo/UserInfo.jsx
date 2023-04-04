import UserDonationAbs from "./UserDonationAbs"
import UserProfile from "./UserProfile"
import UserProject from "./UserProject"
export default function UserInfo() {
  return (
    <>
      <UserProfile></UserProfile>
      <UserProject></UserProject>
      <UserDonationAbs></UserDonationAbs>
    </>
  )
}



