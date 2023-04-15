import React from "react"
import Link from "next/link";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="flex flex-wrap items-center justify-between md:px-20 py-3 fixed top-0 w-full">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        className="text-2xl font-bold text-white leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                        href="/"
                    >
                        Metrola
                    </Link>
                    {/* <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button> */}
                </div>
                {/* <div
                    className={
                        "lg:flex flex-grow items-center " +
                        (navbarOpen ? "block bg-black text-center" : "hidden")
                    }
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item text-white cursor-pointer">
                            <i className="fas fa-user"></i>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    );
}