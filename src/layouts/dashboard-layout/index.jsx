import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}
