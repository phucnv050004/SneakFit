<<<<<<< HEAD
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
=======
import layoutAdmin from "@/pages/admin/layout"
import pageHome from "@/pages/website/home/page"
import layoutWebsite from "@/pages/website/layout"
import { useRoutes } from "react-router-dom"

function App() {
    const routes = useRoutes([
      {
        path: '/',
        Component: layoutWebsite,
        children: [
         {index:true , Component: pageHome}
        ]
      },
      {
        path: 'admin',
        Component: layoutAdmin,
        children: [
         
        ]
      }
    ])
    return routes
  }
  export default App
>>>>>>> 2c5f47de239574855e1ab1b31020e89be2a26a96
