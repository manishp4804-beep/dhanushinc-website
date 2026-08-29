import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

export default function Layout() {
    return (
        <div className="app-shell min-h-screen flex flex-col transition-colors duration-200">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
