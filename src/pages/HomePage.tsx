import ModalWrapper from "../containers/general/ModalWrapper";
import { AboutChurch } from "../containers/landing/AboutChurch";
import { AboutTheSite } from "../containers/landing/AboutTheSite";
import { Banner } from "../containers/landing/Banner";
import { FaithExamples } from "../containers/landing/FaithExamples";
import { Footer } from "../containers/general/Footer";
import { Miracles } from "../containers/landing/Miracles";
import { TextComponent } from "../containers/landing/TextsComponent";


export default function HomePage() {
  return (
    <div>
     
      <Banner />
      <AboutTheSite />
      <AboutChurch />
      <FaithExamples />
      <Miracles />
      <TextComponent />
      <Footer />
      <div>
        <ModalWrapper/>
      </div>
    </div>
  )
}
