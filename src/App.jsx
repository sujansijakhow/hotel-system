import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./routes/Home";
import ViewDetailOne from "./routes/ViewDetailOne";
import Availability from "./routes/Availability";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/viewdetailone",
      element: <ViewDetailOne />
    },
    {
      path: "/availability",
      element: <Availability />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
