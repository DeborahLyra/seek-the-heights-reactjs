import { Outlet } from "react-router-dom";
import { Navbar } from "../containers/general/Navbar";

export function DefaultLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
      
    </div>
  )
}
