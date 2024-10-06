import layoutAdmin from "@/pages/admin/layout"
import layoutWebsite from "@/pages/website/layout"
import { useRoutes } from "react-router-dom"

function App() {
    const routes = useRoutes([
      {
        path: '/',
        Component: layoutWebsite,
        children: [
         
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