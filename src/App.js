import DoctorsDetails from "./component/Doctors/DoctorsDetails";
import Home from "./component/Home/Home";
import Layout from "./component/Layout/Layout";
import NotFound from "./component/NotFound/NotFound";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "doctor-details/:doctor_id",
          element: <DoctorsDetails />,
        },

        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
