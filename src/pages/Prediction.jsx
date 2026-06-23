import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Prediction() {
    const [formData, setFormData] = useState({
        age: "",
        sex: "",
        bmi: "",
        bp: "",
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        setError("");

        try {
            const response = await fetch(
                "https://diabetes-progression-prediction-api.onrender.com/predict",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        age: parseFloat(formData.age),
                        sex: parseFloat(formData.sex),
                        bmi: parseFloat(formData.bmi),
                        bp: parseFloat(formData.bp),
                        s1: parseFloat(formData.s1),
                        s2: parseFloat(formData.s2),
                        s3: parseFloat(formData.s3),
                        s4: parseFloat(formData.s4),
                        s5: parseFloat(formData.s5),
                        s6: parseFloat(formData.s6),
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Prediction failed");
            }

            const data = await response.json();

            navigate("/result", {
                state: {
                    prediction: data.prediction,
                    patientData: formData
                }
            });

        } catch (error) {
            setError("Unable to connect to prediction server.");
        }
        finally {
            setLoading(false);
        }
    };

    const fields = [
        { name: "age", label: "Age Feature" },
        { name: "sex", label: "Sex Feature" },
        { name: "bmi", label: "BMI Feature" },
        { name: "bp", label: "BP Feature" },
        { name: "s1", label: "S1 Feature" },
        { name: "s2", label: "S2 Feature" },
        { name: "s3", label: "S3 Feature" },
        { name: "s4", label: "S4 Feature" },
        { name: "s5", label: "S5 Feature" },
        { name: "s6", label: "S6 Feature" }
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">

            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-600 mb-3">
                    Diabetes Progression Prediction
                </h1>

                <p className="text-gray-600 text-lg">
                    Enter the normalized patient feature values below to generate a diabetes progression prediction.
                </p>
            </div>

            <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >

                    {
                        fields.map(
                            (field) => (
                                <div key={field.name}>
                                    <label
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        {field.label}
                                    </label>

                                    <input
                                        type="number"
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={`Enter ${field.label}`}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            )
                        )
                    }
                    {error && (
                        <p className="text-red-500 font-semibold md:col-span-2 text-center">
                            {error}
                        </p>
                    )}

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Predicting..." : "Predict"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Prediction;