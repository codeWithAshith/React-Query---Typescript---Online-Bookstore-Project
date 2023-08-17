import { RouterProvider } from "react-router";
import HomePage from "./pages/Home.page";
import ShopPage from "./pages/Shop.page";
import BookDetailsPage from "./pages/BookDetails.page";
import CartPage from "./pages/Cart.page";
import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";
import { createBrowserRouter } from "react-router-dom";
import LayoutComponent from "./components/utils/Layout.component";
import { AppProvider } from "./context/App.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "book/:bookId",
        element: <BookDetailsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
]);

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
