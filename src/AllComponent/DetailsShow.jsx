import { Outlet } from "react-router-dom";
import Dashboard from "../NastedComponent/NastedDash";

const DetailsShow = () => {
  return (
    <div className="flex gap-10">
      <div className="w-[20%]">
        <Dashboard></Dashboard>
      </div>
      <div className="w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DetailsShow;
