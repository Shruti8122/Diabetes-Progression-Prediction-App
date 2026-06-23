function Features() {
    return (
        <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-4">
                Why Use This Application?
            </h2>

            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                A machine learning powered solution that helps estimate diabetes
                progression quickly, accurately, and through an intuitive user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl hover:-translate-y-1 transition">
                    <h3 className="text-xl font-semibold mb-3">
                        Machine Learning Powered
                    </h3>

                    <p className="text-gray-600">
                        Utilizes a trained Gradient Boosting Regressor model
                        to predict diabetes progression using patient health data.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl hover:-translate-y-1 transition">
                    <h3 className="text-xl font-semibold mb-3">
                        Fast Predictions
                    </h3>

                    <p className="text-gray-600">
                        Generate prediction results instantly through a
                        streamlined machine learning pipeline.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl hover:-translate-y-1 transition">
                    <h3 className="text-xl font-semibold mb-3">
                        User-Friendly Interface
                    </h3>

                    <p className="text-gray-600">
                        Clean and intuitive forms make it easy to enter
                        patient information and obtain predictions.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl hover:-translate-y-1 transition">
                    <h3 className="text-xl font-semibold mb-3">
                        Data-Driven Insights
                    </h3>

                    <p className="text-gray-600">
                        Predictions are based on patterns learned from
                        real healthcare data provided by the Diabetes dataset.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl hover:-translate-y-1 transition">
                    <h3 className="text-xl font-semibold mb-3">
                        Full-Stack Architecture
                    </h3>

                    <p className="text-gray-600">
                        Combines React, FastAPI, and Scikit-Learn into a
                        complete machine learning web application.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl hover:-translate-y-1 transition">
                    <h3 className="text-xl font-semibold mb-3">
                        Responsive Design
                    </h3>

                    <p className="text-gray-600">
                        Designed to work seamlessly across desktops,
                        tablets, and mobile devices.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Features;