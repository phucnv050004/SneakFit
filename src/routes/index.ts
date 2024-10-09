import LayoutAdmin from "@/layouts/LayoutAdmin";
import AdminAddProduct from "@/pages/admin/Add";
import AdminProductList from "@/pages/admin/List";
import pageHome from "@/pages/website/home/page";
import layoutWebsite from "@/pages/website/layout";
import { useRoutes } from "react-router-dom";



const Router = () => {
  const router = useRoutes([
    {
      path: "/",
      Component:layoutWebsite,
      children:[
        {index : true ,Component:pageHome}
      ]
    },

    {
      path: "/admin",
      Component: LayoutAdmin,
      children: [
        { path: "/admin", Component: AdminProductList },
        { path: "/admin/product/add", Component: AdminAddProduct },
        
      ],
    },
    
    // {path:'*',element:<Notfound/>}
  ]);
  return router;
 
};

export default Router;
