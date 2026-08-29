import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export default function Darkmode() {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )
    const element = document.documentElement
    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [theme])
    return (
        <div className="relative rounded-full bg-amber-300 dark:bg-gray-700 duration-200 transition-all text-white p-1 shadow-sm">
            <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`cursor-pointer drop-shadow-md transition-all 
                            duration-300 absolute right-2 z-10
                            ${theme === "dark" ? "opacity-0" : "opacity-100"}
                            `}>
                <FaSun />
            </div>
            <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`w-10 cursor-pointer drop-shadow-md transition-all duration-300
                            ${theme === "light" ? "opacity-0" : "opacity-100"}
                        `}>
                <FaMoon />
            </div>
        </div>
        // <button type="button" aria-label="Toggle color theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="app-button relative w-full rounded-full p-1">
        //     <span className={`cursor-pointer drop-shadow-md transition-all 
        //             duration-300 absolute right-2 z-10
        //             ${theme === "dark" ? "opacity-0" : "opacity-100"}
        //             `}>
        //         <FaSun />
        //     </span>
        //     <span
        //         className={`w-10 cursor-pointer drop-shadow-md transition-all duration-300
        //             ${theme === "light" ? "opacity-0" : "opacity-100"}
        //         `}>
        //         <FaMoon />
        //     </span>
        // </button>
    )
}
