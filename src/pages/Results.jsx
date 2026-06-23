import { useLocation, useNavigate } from "react-router-dom";

function Results() {
    const location = useLocation();
    const navigate = useNavigate();

    if (!location.state) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">
                    No Prediction Found
                </h1>

                <button
                    onClick={() => navigate("/prediction")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Go To Prediction Page
                </button>
            </div>
        );
    }

    const { prediction, patientData } = location.state;

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-600 mb-2">
                    Prediction Results
                </h1>

                <p className="text-gray-600">
                    Generated using a Gradient Boosting Regressor model.
                </p>
            </div>

            <div className="flex justify-center mb-10">
                <div className="bg-white border border-blue-200 shadow-2xl rounded-2xl p-8 text-center w-full max-w-xl">

                    <h2 className="text-lg text-gray-500 mb-2">
                        Predicted Diabetes Progression Score
                    </h2>

                    <h1 className="text-6xl font-bold text-blue-600">
                        {prediction.toFixed(2)}
                    </h1>

                </div>
            </div>

            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                Patient Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <FeatureCard title="Age Feature" value={patientData.age} />
                <FeatureCard title="Sex Feature" value={patientData.sex} />
                <FeatureCard title="BMI Feature" value={patientData.bmi} />
                <FeatureCard title="BP Feature" value={patientData.bp} />
                <FeatureCard title="S1 Feature" value={patientData.s1} />
                <FeatureCard title="S2 Feature" value={patientData.s2} />
                <FeatureCard title="S3 Feature" value={patientData.s3} />
                <FeatureCard title="S4 Feature" value={patientData.s4} />
                <FeatureCard title="S5 Feature" value={patientData.s5} />
                <FeatureCard title="S6 Feature" value={patientData.s6} />

            </div>

            <div className="flex justify-center mt-10">
                <button
                    onClick={() => navigate("/prediction")}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                    Make Another Prediction
                </button>
            </div>

        </div>
    );
}

function FeatureCard({ title, value }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-5 hover:shadow-xl transition">
            <h3 className="text-gray-500 text-sm mb-2">
                {title}
            </h3>

            <p className="text-2xl font-bold text-gray-800">
                {value}
            </p>
        </div>
    );
}

export default Results;