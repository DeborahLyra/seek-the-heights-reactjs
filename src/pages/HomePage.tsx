import { MessageButton } from "../containers/general/MessageButton";
import { AboutChurch } from "../containers/landing/AboutChurch";
import { AboutTheSite } from "../containers/landing/AboutTheSite";
import { Banner } from "../containers/landing/Banner";
import { FaithExamples } from "../containers/landing/FaithExamples";
import { Footer } from "../containers/landing/Footer";
import { Miracles } from "../containers/landing/Miracles";
import { Navbar } from "../containers/landing/Navbar";
import { TextComponent } from "../containers/landing/TextsComponent";


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutTheSite />
      <AboutChurch />
      <FaithExamples />
      <Miracles />
      <TextComponent />
      <Footer />
      <div>
        <MessageButton/>
      </div>
    </div>
  )
}
