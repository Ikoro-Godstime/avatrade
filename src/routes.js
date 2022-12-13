import { createBrowserRouter } from "react-router-dom";

// ? Import Pages or Routes
// import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Account from "./pages/Account";
import Invest from "./pages/Invest";
import Wallets from "./pages/Wallets";
import TransactionsPage from "./pages/TransactionsPage";
import Auth from "./pages/Auth";
import Refer from "./pages/Refer";
import Support from "./pages/Support";
import Verification from "./pages/Verification";
import Blocked from "./pages/Blocked";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/deposit",
    element: <Deposit />,
  },
  {
    path: "/withdraw",
    element: <Withdraw />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/invest",
    element: <Invest />,
  },
  {
    path: "/deposit/wallet",
    element: <Wallets />,
  },
  {
    path: "/transactions",
    element: <TransactionsPage />,
  },
  {
    path: "/refer",
    element: <Refer />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/blocked",
    element: <Blocked />,
  },
]);
