import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Planets from "./pages/Planets";
import People from "./pages/People";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Planets />,
      },
      {
        path: "people",
        element: <People />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
