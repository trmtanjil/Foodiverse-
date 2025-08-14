import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AdminLayout from "../Layout/AdminLayout";
import AdminCreatePoke from "../pages/AdminAddFood/AdminCreatePoke";
  
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
             path:'AdminCreatePoke',
             Component:AdminCreatePoke,
        }
    ]
}
]);


export default router;