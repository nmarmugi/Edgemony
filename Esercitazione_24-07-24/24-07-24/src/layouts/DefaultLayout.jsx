import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
