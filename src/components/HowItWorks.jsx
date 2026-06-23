function HowItWorks() {
    return (
        <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-4">
                How It Works
            </h2>

            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                The application follows a simple workflow that combines user
                input, machine learning analysis, and instant prediction generation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl transition">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            1
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Enter Patient Information
                            </h3>

                            <p className="text-gray-600">
                                Provide normalized patient feature values
                                such as age, BMI, blood pressure, and other
                                health indicators through the prediction form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl transition">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            2
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Send Data to Backend
                            </h3>

                            <p className="text-gray-600">
                                The React frontend sends the entered values
                                to the FastAPI backend through a secure API request.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl transition">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            3
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Machine Learning Prediction
                            </h3>

                            <p className="text-gray-600">
                                The Gradient Boosting Regressor analyzes
                                the input features and estimates the diabetes
                                progression score.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl transition">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            4
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                View Results
                            </h3>

                            <p className="text-gray-600">
                                The predicted score and submitted patient
                                feature values are displayed in an easy-to-read
                                results dashboard.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HowItWorks;