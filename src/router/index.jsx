import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import WebsiteRoutes from "./WebsiteRoutes";
import DashboardRoutes from "./DashboardRoutes";

export default function Router() {
  return (
    <BrowserRouter>
      <WebsiteRoutes />
      <DashboardRoutes />
    </BrowserRouter>
  );
}
