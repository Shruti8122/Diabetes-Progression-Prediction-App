# Diabetes Progression Prediction App

A full-stack Machine Learning web application that predicts diabetes progression using patient health indicators. The application integrates a React frontend, FastAPI backend, and a Gradient Boosting Regressor model trained on the Scikit-Learn Diabetes dataset.

## Live Demo

🔗 Live Application: 

## Features

- Predicts diabetes progression score using Machine Learning
- Responsive and modern React UI
- FastAPI backend for model inference
- Real-time prediction results
- Patient data summary on results page
- Error handling and loading states
- Fully deployed frontend and backend
- Mobile-friendly design

## Tech Stack

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Vite

### Backend
- FastAPI
- Uvicorn
- Pydantic

### Machine Learning
- Scikit-Learn
- Gradient Boosting Regressor
- NumPy
- Pandas

### Deployment
- Vercel (Frontend)
- Render (Backend)

## Project Structure

```text
Diabetes-Progression-Prediction-App
│
├── backend
│   ├── main.py
│   ├── train.py
│   ├── diabetes_model.pkl
│   └── requirements.txt
│
├── src
│   ├── components
│   ├── pages
│   └── App.jsx
│
├── public
├── package.json
└── README.md
```

## Machine Learning Model

The application uses the Diabetes dataset available in Scikit-Learn.

### Input Features

- Age
- Sex
- BMI
- Blood Pressure
- S1
- S2
- S3
- S4
- S5
- S6

### Model

```python
GradientBoostingRegressor
```

The model was trained and evaluated using Scikit-Learn and then saved using Joblib for deployment.

## Application Workflow

```text
User Input
      ↓
React Frontend
      ↓
FastAPI Backend
      ↓
Machine Learning Model
      ↓
Prediction Generated
      ↓
Results Displayed
```

## API Endpoint

### Health Check

```http
GET /
```

Response:

```json
{
  "message": "Diabetes Prediction API Running"
}
```

### Prediction Endpoint

```http
POST /predict
```

Request Body:

```json
{
  "age": 0.03,
  "sex": 0.05,
  "bmi": 0.06,
  "bp": 0.02,
  "s1": 0.01,
  "s2": -0.02,
  "s3": 0.04,
  "s4": 0.01,
  "s5": 0.05,
  "s6": 0.03
}
```

Response:

```json
{
  "prediction": 184.72
}
```

## Local Installation

### Clone Repository

```bash
git clone <repository-url>
cd Diabetes-Progression-Prediction-App
```

### Frontend Setup

```bash
npm install
npm run dev
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

## Screenshots

### Home Page

Add Screenshot Here

### Prediction Page

Add Screenshot Here

### Results Page

Add Screenshot Here

### About Page

Add Screenshot Here

## Learning Outcomes

This project helped me gain hands-on experience with:

- React Component Architecture
- State Management using Hooks
- React Router Navigation
- API Integration using Fetch
- FastAPI Backend Development
- Machine Learning Model Deployment
- CORS Configuration
- Cloud Deployment using Render and Vercel
- Git and GitHub Workflow

## Future Improvements

- Feature importance visualization
- Prediction history
- User authentication
- Model comparison dashboard
- Advanced analytics and charts
- Docker deployment

## Author

Developed by Shruti Singh

This project was built as part of my Machine Learning and Full-Stack Development learning journey.
