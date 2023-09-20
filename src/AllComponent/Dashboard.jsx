import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-start">
        <div className="flex flex-col ml-5 shadow-md p-5 bg-blue-200">
          <Link className="mr-5" to="/">
            Phone-Hunter-Bd
          </Link>
          <Link className="mr-5" to="/dashboard">
            Dashboard
          </Link>
          <Link className="mr-5" to="/dashboard/profile">
            Profile
          </Link>
          <Link className="mr-5" to="/dashboard/editProfile">
            EditProfile
          </Link>
        </div>
        <div className="flex-1 bg-green-300">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
