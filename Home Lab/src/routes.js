/** 
  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Home from "layouts/MyPages/Home";
import Bin from "layouts/MyPages/bin";
import Bill from "layouts/MyPages/bill";
import Techinfo from "layouts/MyPages/techinfo";
import Techview from "layouts/MyPages/techview";
import List from "layouts/MyPages/list";
import Test from "layouts/MyPages/test";
import Doctinfo from "layouts/MyPages/doctinfo";
import Doctreco from "layouts/MyPages/doctreco";
import Report from "layouts/MyPages/report";
import MyProfile from "layouts/MyPages/MyProfile/MyProfile";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   route: "/tables",
  //   icon: <Office size="12px" />,
  //   component: <Tables />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/billing",
  //   icon: <CreditCard size="12px" />,
  //   component: <Billing />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Home",
  //   key: "home",
  //   route: "/home",
  //   icon: <CreditCard size="12px" />,
  //   component: <Home />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "techinfo",
  //   key: "techinfo",
  //   route: "/techinfo",
  //   icon: <CreditCard size="12px" />,
  //   component: <Techinfo />,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Appointments",
    key: "techiview",
    route: "/appointments",
    icon: <CreditCard size="12px" />,
    component: <Techview />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "doctinfo",
  //   key: "doctinfo",
  //   route: "/doctinfo",
  //   icon: <CreditCard size="12px" />,
  //   component: <Doctinfo />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "doctreco",
  //   key: "doctreco",
  //   route: "/doctreco",
  //   icon: <CreditCard size="12px" />,
  //   component: <Doctreco />,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Make Appointments",
    key: "bin",
    route: "/makeAppointments",
    icon: <CreditCard size="12px" />,
    component: <Bin />,
    noCollapse: true,
  },
  {
    // type: "collapse",
    // name: "bill",
    // key: "bill",
    route: "/payment",
    icon: <CreditCard size="12px" />,
    component: <Bill />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "My Appointments",
    key: "list",
    route: "/myAppointments",
    icon: <CreditCard size="12px" />,
    component: <List />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "test",
  //   key: "test",
  //   route: "/test",
  //   icon: <CreditCard size="12px" />,
  //   component: <Test />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "report",
  //   key: "report",
  //   route: "/report",
  //   icon: <CreditCard size="12px" />,
  //   component: <Report />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Virtual Reality",
  //   key: "virtual-reality",
  //   route: "/virtual-reality",
  //   icon: <Cube size="12px" />,
  //   component: <VirtualReality />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   route: "/rtl",
  //   icon: <Settings size="12px" />,
  //   component: <RTL />,
  //   noCollapse: true,
  // },
  { type: "title", title: "Account Pages", key: "account-pages" },
  // {
  //   type: "collapse",
  //   name: "My Profile",
  //   key: "myprofile",
  //   route: "/myprofile",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <MyProfile />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <Profile />,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
