import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AdminLayout from "../Layout/AdminLayout";
import AdminAddFood from "../pages/AdminAddFood/AdminAddFood";
 
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
             path:'adminaddfood',
             Component:AdminAddFood,
        }
    ]
}
]);


export default router;