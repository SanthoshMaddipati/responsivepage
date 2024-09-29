import HomePage from "./routes/HomePage/homePage";
import ListPage from "./routes/listPage/listPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Layout from "./routes/layout/layout"; // Import the Layout component

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Main layout for the app
      children: [
        {
          path: "/", // Root path
          element: <HomePage />,
        },
        {
          path: "list", 
          element: <ListPage />, 
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} /> 
  );
}

export default App;
