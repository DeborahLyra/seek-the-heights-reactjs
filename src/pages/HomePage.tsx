import { AboutTheSite } from "../containers/AboutTheSite";
import { Banner } from "../containers/Banner";
import { Navbar } from "../containers/Navbar";


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutTheSite/>
    </div>
  )
}
