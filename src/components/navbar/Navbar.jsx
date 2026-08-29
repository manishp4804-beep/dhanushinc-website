import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/websites/logo.png";
import { FaGasPump, FaBars, FaTimes } from "react-icons/fa";
import Darkmode from "./Darkmode";
import { RiArrowDropDownLine } from "react-icons/ri";

const Menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "About", link: "/about" },
    { id: 4, name: "Contact", link: "/contact" },
    { id: 5, name: "Careers", link: "/careers" },
];

const dropDown = [
    {
        id: 1,
        name: "Austin",
        link: "https://maps.app.goo.gl/4ewcvcH4znYsd9CL6",
    },
    {
        id: 2,
        name: "Killeen",
        link: "https://maps.app.goo.gl/VcaLXPeMTdPVCSvP8",
    },
    {
        id: 3,
        name: "Marshall",
        link: "/#marshall"
    },
    {
        id: 4,
        name: "Kansas",
        link: "/#kansas"
    },
    {
        id: 5,
        name: "H&L",
        link: "https://maps.app.goo.gl/CmLdK47g6JLdaLzz9",
    },
    {
        id: 6,
        name: "Fox Fast",
        link: "https://maps.app.goo.gl/jZMZ6SoEuc98a71C6",
    },
    {
        id: 7,
        name: "Twin",
        link: "https://maps.app.goo.gl/bN2MectABDxELTRp7",
    },
    {
        id: 8,
        name: "Penguin Hut",
        link: "https://maps.app.goo.gl/dE9QLbMi92wzer2HA"
    },
    {
        id: 9,
        name: "La México",
        link: "https://maps.app.goo.gl/zi4C91SNfrAD74iE9",
    },
    {
        id: 10,
        name: "Deport",
        link: "https://maps.app.goo.gl/xAcG3U1FXnET5TCy9",
    },
    {
        id: 11,
        name: "HighStreet",
        link: "https://maps.app.goo.gl/ZjRkAmswbUu9bPar6",
    },
    {
        id: 12,
        name: "PitStop",
        link: "https://maps.app.goo.gl/xgpMqHC5PZDZcL9b8",
    },
    {
        id: 13,
        name: "FairField",
        link: "/#fairfield",
    },
    {
        id: 14,
        name: "East Loop",
        link: "https://maps.app.goo.gl/Kd2Le73qdJUdQWMy9",
    },
]

const navLinkClass = ({ isActive }) =>
    `inline-block px-4 py-2 duration-200 ${isActive
        ? "app-nav-link-active font-semibold"
        : "app-nav-link"
    }`;

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="app-nav shadow-md sticky top-0 transition duration-200 z-40 border-b">
            {/* upper navbar */}
            <div className="">
                <div className="p-1 sm:p-3 flex items-center justify-between">
                    <div>
                        <Link to="/" onClick={() => setMobileOpen(false)} className="app-primary font-bold text-2xl items-center sm:text-3xl flex gap-2">
                            <img src={Logo} alt="Logo" className="w-10" />DHANUSH PETROLEUM INC
                        </Link>
                    </div>
                    {/* search bar */}
                    <div className="flex justify-between items-center gap-3">
                        {/* <div className="group relative hidden sm:block">
                            <input type="text" placeholder="Search..."
                                className="w-50 sm:w-50 bg-white group-hover:w-75 rounded-full transition-all 
                         focus:outline-none focus:border-1 focus:border-orange-500 duration-300 px-2 py-1 dark:border-gray-100 dark:bg-gray-800 border-gray-300" />
                            <FaSearch className="text-gray-500 group-hover:text-orange-500 absolute top-1/2 right-3 -translate-y-1/2" />
                        </div> */}
                        <Link to="/stores" className="app-button cursor-pointer group rounded-full flex gap-3 transition-all duration-200 px-4 py-1 items-center">
                            <span className="group-hover:block hidden transition-all duration-800">Stores</span>
                            <FaGasPump className="drop-shadow-md cursor-pointer" />
                        </Link>
                        {/* dark mode switch */}
                        <div>
                            <Darkmode />
                        </div>
                        {/* mobile menu toggle */}
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            className="sm:hidden text-2xl p-1 cursor-pointer"
                        >
                            {mobileOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* lower navbar - desktop */}
            <div className="justify-center sm:flex hidden">
                <ul className="flex items-center gap-4">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <NavLink to={data.link} className={navLinkClass}>
                                {data.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="group">
                        <Link to="/stores"
                            className="app-nav-link flex items-center gap-1 py-2">
                            Our Stores
                            <span>
                                <RiArrowDropDownLine className="transition-all relative duration-200 group-hover:rotate-180" />
                            </span>
                        </Link>
                        <div className="hidden group-hover:block">
                            <ul className="app-card grid grid-cols-3 p-2 absolute shadow-lg rounded-md gap-y-3 gap-x-6 border">
                                {dropDown.map((data) => (
                                    <li
                                        key={data.id}
                                        className="app-border border rounded-full p-1 flex text-center"
                                    >
                                        <Link
                                            to={data.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="app-nav-link rounded-md inline-block w-full"
                                        >
                                            {data.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            {/* mobile menu */}
            {mobileOpen && (
                <div className="app-nav sm:hidden border-t px-4 py-3">
                    <ul className="flex flex-col gap-1">
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <NavLink
                                    to={data.link}
                                    onClick={() => setMobileOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-2 py-2 rounded-md duration-200 ${isActive
                                            ? "app-nav-link-active font-semibold"
                                            : "app-nav-link"
                                        }`
                                    }
                                >
                                    {data.name}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink
                                to="/stores"
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `block px-2 py-2 rounded-md duration-200 ${isActive
                                        ? "app-nav-link-active font-semibold"
                                        : "app-nav-link"
                                    }`
                                }
                            >
                                Stores
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
