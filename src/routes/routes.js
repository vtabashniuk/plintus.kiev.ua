import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Store from "../pages/Store/Store";
import Contacts from "../pages/Contacts/Contacts";
import Gallery from "../pages/Gallery/Gallery";
import Homepage from "../pages/Homepage/Homepage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
    // path:
  },
]);

export default router;
