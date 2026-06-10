import { createBrowserRouter } from "react-router-dom";
import Home from "@/page/Home";
import Detail from "@/page/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
],
  {
    basename: "/Learn_React_Jike_Mobile",
  });

export default router;
