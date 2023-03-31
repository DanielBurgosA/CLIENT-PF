import ImageSlider from "../../Components/carousel/ImageSlide";
import { SlideData } from "../../Components/carousel/SlideData";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { verifyStatus } from "../../Redux/Slicers/LogInOutSlicer";
import Chatbot from "../../Components/chatbot/chatbot";

export default function Home() {

  return (
    <>
      <ImageSlider slides={SlideData} />

      <Chatbot />
    </>
  );
}

//Solo el achivo index de Pages recibe este export
