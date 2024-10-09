import LayoutAdmin from "@/layouts/LayoutAdmin";
import AdminAddProduct from "@/pages/admin/Add";
import AdminProductList from "@/pages/admin/List";
import { useRoutes } from "react-router-dom";



const Router = () => {
  const router = useRoutes([
    

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
