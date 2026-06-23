import { Link } from "react-router-dom";

function Hero() {
    return (
        <div >
            <div className="mb-6">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Machine Learning • Healthcare Analytics
                </span>
            </div>
            <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                    Diabetes Progression Prediction System
                </h1>

                <p className="max-w-3xl text-xl text-gray-600 mb-8">
                    Predict diabetes progression using a machine learning model
                    trained on real healthcare data and deployed through a
                    full-stack web application.
                </p>

                <div >
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mr-5 cursor-pointer hover:shadow-xl transition"
                    >
                        <Link to="/prediction">
                            Start Prediction
                        </Link>
                    </button>
                    <button
                        className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold cursor-pointer hover:shadow-2xl transition"
                    >
                        <Link to="/about">
                            Learn More
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Hero;