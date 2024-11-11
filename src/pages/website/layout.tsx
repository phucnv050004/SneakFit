import AppFooter from "@/components/Footer";
import Header from "@/components/Header";
import { useCart } from "@/contexts/cart";
import { useUser } from "@/contexts/user";
import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const layoutWebsite = () => {
  const { setCart } = useCart();
  const { setUser } = useUser();
  const getAllCarts = async () => {
    try {
        const userJson = localStorage.getItem("user");
        const user = userJson ? JSON.parse(userJson)?.user : null;
      setUser(user);

      if (!user) return;
      const { data } = await axios.get(`/carts/user/${user._id}`);
      console.log(data);
      setCart(data);
    } catch (error) {}
  };
  
  useEffect(() => {
    getAllCarts();
  }, []);
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <AppFooter />
    </div>
  );
};

export default layoutWebsite;
