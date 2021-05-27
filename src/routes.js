/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import MenuBook from "@material-ui/icons/MenuBook";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import GerenciamentoProjetos from "views/Projetos/gerenciamentoProjetos.js";
import GerenciamentoProfessores from "views/Professores/gerenciamentoProfessores.js";
import GerenciamentoAlunos from "views/Alunos/gerenciamentoAlunos.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import { EmojiEmotions, EmojiPeople, PersonOutline } from "@material-ui/icons";

const dashboardRoutes = [
  
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  {
    path: "/alunos",
    name: "Alunos",
    rtlName: "Alunos",
    icon: Person,
    component: GerenciamentoAlunos,
    layout: "/admin"
  },
  {
    path: "/professores",
    name: "Professores",
    rtlName: "Professores",
    icon: PeopleAlt,
    component: GerenciamentoProfessores,
    layout: "/admin"
  },
  {
    path: "/projetos",
    name: "Projetos",
    rtlName: "Projetos",
    icon: MenuBook,
    component: GerenciamentoProjetos,
    layout: "/admin"
  }
  /*
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }*/,
  {
    path: "/upgrade-to-pro",
    name: "Alunos Demetrio",
    rtlName: "Alunos Demetrio",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

export default dashboardRoutes;
