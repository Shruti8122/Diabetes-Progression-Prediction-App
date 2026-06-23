import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-4 py-4 bg-blue-200">
            <h1 className="text-3xl font-bold">🩺 Diabetes Predictor</h1>

            <div className="text-2xl">
                <NavLink to="/" className={({ isActive }) =>
                    isActive
                        ? "text-blue-600 font-bold"
                        : "text-gray-700"}>
                    Home
                </NavLink>
                {"  |  "}
                <NavLink to="/prediction" className={({ isActive }) =>
                    isActive
                        ? "text-blue-600 font-bold"
                        : "text-gray-700"
                }>
                    Prediction
                </NavLink>
                {"  |  "}
                <NavLink to="/about" className={({ isActive }) =>
                    isActive
                        ? "text-blue-600 font-bold"
                        : "text-gray-700"
                }>
                    About
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;