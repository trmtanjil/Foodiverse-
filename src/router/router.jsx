import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AdminLayout from "../Layout/AdminLayout";
 
 const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {

      }
    ]
  },

//   admin layout 
{
    path: '/adminlayout',
    element: <AdminLayout />, 
    children: [
        {
            index: true,
            element: <AdminLayout />  
        }
    ]
}
]);


export default router;