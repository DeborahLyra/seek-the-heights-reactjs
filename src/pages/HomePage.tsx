import { AboutChurch } from "../containers/AboutChurch";
import { AboutTheSite } from "../containers/AboutTheSite";
import { Banner } from "../containers/Banner";
import { FaithExamples } from "../containers/FaithExamples";
import { Navbar } from "../containers/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutTheSite />
      <AboutChurch />
      <FaithExamples />
    </div>
  )
}
