import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Facebook } from 'react-content-loader'
// import ContentLoader, { Rect, Circle } from "react-content-loader/native";
{/* <ContentLoader viewBox="0 0 380 70">
        <Circle cx="30" cy="30" r="30" />
        <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader> */}
      const Contrls = () => {
  const MyFacebookLoader = () => <Facebook />
  const navigate = useNavigation();
  return (
    <div>
      <Header></Header>
      {
        navigate.state === 'loading' ? MyFacebookLoader :  <div className="my-4 min-h-screen">
        <Outlet></Outlet>
      </div>
      }
     <div className="my-4 min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contrls;
