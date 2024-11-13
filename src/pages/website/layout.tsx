import AppFooter from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const layoutWebsite = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <AppFooter />
    </div>
  );
};

export default layoutWebsite;
