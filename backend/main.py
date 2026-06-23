from fastapi import FastAPI
import joblib
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://diabetes-progression-prediction-app.vercel.app/"
        ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("diabetes_model.pkl")

class PatientData(BaseModel):
    age: float
    sex: float
    bmi: float
    bp: float
    s1: float
    s2: float
    s3: float
    s4: float
    s5: float
    s6: float

@app.get("/")
def home():
    return {"message": "Diabetes Prediction API Running"}

@app.post("/predict")
def predict(data: PatientData):

    features = [[
        data.age,
        data.sex,
        data.bmi,
        data.bp,
        data.s1,
        data.s2,
        data.s3,
        data.s4,
        data.s5,
        data.s6
    ]]

    prediction = model.predict(features)

    return {
        "prediction": float(prediction[0])
    }