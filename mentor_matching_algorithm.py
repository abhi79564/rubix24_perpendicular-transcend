# mentor_matching_algorithm.py

from sklearn import svm
import joblib

# Sample dataset
mentors_data = [
    {"id": 1, "skills": ["programming", "machine learning"], "goals": ["career development"], "specialization": "AI"},
    {"id": 2, "skills": ["data analysis", "communication"], "goals": ["leadership"], "specialization": "Data Science"},
    # Add more mentors and their data
]

# Sample mentee data
mentee_data = {"skills": ["programming", "data analysis"], "goals": ["career development"], "specialization": "AI"}

# Preprocess data
X = [[1 if skill in mentee_data["skills"] else 0 for skill in mentor["skills"]] +
     [1 if goal in mentee_data["goals"] else 0 for goal in mentor["goals"]] +
     [1 if mentor["specialization"].lower() == mentee_data["specialization"].lower() else 0]
     for mentor in mentors_data]
y = [mentor["id"] for mentor in mentors_data]

# Train a simple Support Vector Machine (SVM) model
model = svm.SVC()
model.fit(X, y)

# Save the trained model
joblib.dump(model, "mentor_matching_model.joblib")
