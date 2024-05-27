import { Routes, Route } from "react-router";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Home from "../pages/Home";
import News from "../pages/News";

export default function WebsiteRoutes() {
  return (
    <WebsiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </WebsiteLayout>
  );
}
