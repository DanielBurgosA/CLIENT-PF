import ImageSlider from "../../Components/carousel/ImageSlide";
import { SlideData } from "../../Components/carousel/SlideData";
import Chatbot from "../../Components/chatbot/chatbot";
import CountAnimation from "../../Components/CountAnimation/CountAnimation";
import SocialProfileWithImage from "../../Components/CardPresentation/CardPresentation";
import style from "./Home.module.css";
export default function Home() {
  return (
    <>
      <ImageSlider slides={SlideData} />
      <CountAnimation />
      <div className={style.message}>
        <h1>join these amazing heroes to see what´s possible</h1>
      </div>
      <SocialProfileWithImage />
      <Chatbot />
    </>
  );
}

//Solo el achivo index de Pages recibe este export
