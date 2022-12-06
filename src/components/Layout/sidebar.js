import { MdOutlineDashboard } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
// import { RiNodeTree } from "react-icons/ri";
import { FaExchangeAlt } from "react-icons/fa";
export const links = [
  {
    text: "Main dashboard",
    path: "/dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    text: "Personal Profile",
    path: "/account",
    icon: <BsPersonCheck />,
  },
  {
    text: "Investment Plans",
    path: "/invest",
    icon: <RiExchangeDollarLine />,
  },
  {
    text: "Transaction History",
    path: "/transactions",
    icon: <FaExchangeAlt />,
  },
  // {
  //   text: "Refer Users",
  //   path: "/referrals",
  //   icon: <RiNodeTree />,
  // },
];
