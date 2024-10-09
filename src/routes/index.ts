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