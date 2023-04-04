import ImageSlider from "../../Components/carousel/ImageSlide";
import { SlideData } from "../../Components/carousel/SlideData";
import Chatbot from "../../Components/chatbot/chatbot";
import CountAnimation from "../../Components/CountAnimation/CountAnimation";

export default function Home() {

  
  return (
    <>
      <ImageSlider slides={SlideData} />
      <CountAnimation />
      <Chatbot />
    </>
  );
}

//Solo el achivo index de Pages recibe este export
