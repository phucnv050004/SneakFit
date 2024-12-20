import List from "@/pages/admin/Auth/List";
import LayoutAdmin from "@/pages/admin/LayoutAdmin";
import AdminAddNews from "@/pages/admin/News/Add";
import AdminEditNews from "@/pages/admin/News/Edit";
import AdminNewsList from "@/pages/admin/News/List";
import AdminAddProduct from "@/pages/admin/product/Add";
import AdminEditProduct from "@/pages/admin/product/Edit";
import AdminProductList from "@/pages/admin/product/List";
import SizeManagement from "@/pages/admin/Size/SizeManagement";
import page from "@/pages/website/ArticleDetail/page";
import Login from "@/pages/website/auth/Login";
import Register from "@/pages/website/auth/Register";
import pageBill from "@/pages/website/Bill/pageBill";
import pageCart from "@/pages/website/Cart/page";
import pageContact from "@/pages/website/contact/page";
import pageHome from "@/pages/website/home/page";
import layoutWebsite from "@/pages/website/layout";
import pageNews from "@/pages/website/new/page";
import pageDetail from "@/pages/website/ProductDetail/page";
import PageProductList from "@/pages/website/products/page";
import { useRoutes } from "react-router-dom";

const Router = () => {
  const router = useRoutes([
    {
      path: "/",
      Component: layoutWebsite,
      children: [
        { index: true, Component: pageHome },
        { path: "cart", Component: pageCart },
        { path: "detail/:id", Component: pageDetail },
        { path: "products", Component: PageProductList },
        { path: "contact", Component: pageContact },
        { path: "articles", Component: pageNews },
        { path: "article/:id", Component: page},
        { path: "bill", Component: pageBill },
        { path: "login", Component: Login },
        { path: "register", Component: Register },
      ],
    },

    {
      path: "/admin",
      Component: LayoutAdmin,
      children: [
        { path: "/admin", Component: AdminProductList },
        { path: "/admin/product/add", Component: AdminAddProduct },
        { path: "/admin/product/edit/:id", Component: AdminEditProduct },
        { path: "/admin/news", Component: AdminNewsList },
        { path: "/admin/news/add", Component: AdminAddNews },
        { path: "/admin/news/edit/:id", Component: AdminEditNews },
        { path: "/admin/sizes", Component: SizeManagement },
        { path: "/admin/auth", Component:List  },

      ],
    },

    // {path:'*',element:<Notfound/>}
  ]);
  return router;
};

export default Router;
