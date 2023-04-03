import style from "./DonationHistory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDonations } from "../../../Redux/Slicers/UserDashboard";

export default function DonationUser() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getDonations());
  },[dispatch])

  return (
    <div className={style.container}>
      <p>donationHistory</p>
    </div>
  );
}
