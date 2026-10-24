import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPAge";
import Root from "./components/Root";
import ProductDetail from "./components/ProductDetail";
import FollowUp from "./components/FollowUp";
import ShopPage from "./pages/ShopPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index:true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ShopPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
