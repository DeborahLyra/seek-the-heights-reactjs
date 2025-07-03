import { AboutChurch } from "../containers/AboutChurch";
import { AboutTheSite } from "../containers/AboutTheSite";
import { Banner } from "../containers/Banner";
import { FaithExamples } from "../containers/FaithExamples";
import { Miracles } from "../containers/Miracles";
import { Navbar } from "../containers/Navbar";
import { TextComponent } from "../containers/TextsComponent";

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
    </div>
  )
}
