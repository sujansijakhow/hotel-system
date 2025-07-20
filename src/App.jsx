import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./routes/Home";
import ViewDetailOne from "./routes/ViewDetailOne";
import Availability from "./routes/Availability";
import Booking from "./routes/Booking";
import MyBooking from "./routes/MyBooking";

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
    }, {
      path: "/booking",
      element: <Booking />
    },
    {
      path: "/mybooking",
      element: <MyBooking />
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
