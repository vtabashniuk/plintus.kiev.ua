import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Store from "pages/Store/Store";
import Contacts from "pages/Contacts/Contacts";
import Gallery from "pages/Gallery/Gallery";
import Homepage from "pages/Homepage/Homepage";
import NaturalOak from "components/Categories/NaturalOak/NaturalOak";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "store",
        element: <Store />,
        children: [{ path: "*", element: <NaturalOak /> }],
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
    // path:
  },
]);

export default router;
