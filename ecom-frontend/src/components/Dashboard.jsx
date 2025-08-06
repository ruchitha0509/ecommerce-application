import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import CartIcon from "./CartIcon";

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            <CartIcon></CartIcon>
            <nav className="dashboard-navbar">
                <NavLink to="" className="dashboard-link">Laptops</NavLink>
                <NavLink to="mobiles" className="dashboard-link">Mobiles</NavLink>
                <NavLink to="headphones" className="dashboard-link">Headphones</NavLink>
            </nav>
            <section className="dashboard-content">
                <Outlet />
            </section>
        </div>
    );
};

export default Dashboard;



