import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="overflow-hidden w-full  h-17">
                <div className="flex justify-center items-center  list-none mt-4">
                    <ul className="flex justify-center items-center my-5">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `${
                                    isActive ? "text-blue-400" : "text-white"
                                }
                            p-4 cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full duration-200`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `${
                                        isActive ? "text-blue-400" : "text-white"
                                    } p-4 cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full duration-200`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/article"
                                className={({ isActive }) => `${
                                    isActive ? "text-blue-400" : "text-white"
                                }
                            p-4 cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full duration-200`}
                            >
                                Article
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact-us"
                                className={({ isActive }) => `${
                                    isActive ? "text-blue-400" : "text-white"
                                }
                            p-4 cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full duration-200`}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
