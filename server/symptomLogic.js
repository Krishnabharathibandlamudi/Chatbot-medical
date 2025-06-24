// symptomLogic.js

const symptomMap = {
  // 🫀 Cardiology
  "chest pain": "Cardiology",
  "shortness of breath": "Cardiology",
  "palpitations": "Cardiology",
  "high blood pressure": "Cardiology",

  // 🧠 Neurology
  "headache": "Neurology",
  "dizziness": "Neurology",
  "seizures": "Neurology",
  "numbness": "Neurology",
  "weakness": "Neurology",
  "tingling": "Neurology",

  // 🍽️ Gastroenterology
  "stomach ache": "Gastroenterology",
  "abdominal pain": "Gastroenterology",
  "vomiting": "Gastroenterology",
  "diarrhea": "Gastroenterology",
  "constipation": "Gastroenterology",
  "acid reflux": "Gastroenterology",

  // 🫁 Pulmonology
  "cough": "Pulmonology",
  "shortness of breath": "Pulmonology",
  "wheezing": "Pulmonology",
  "chest tightness": "Pulmonology",
  "asthma": "Pulmonology",

  // 🧴 Dermatology
  "skin rash": "Dermatology",
  "itching": "Dermatology",
  "acne": "Dermatology",
  "eczema": "Dermatology",
  "psoriasis": "Dermatology",
  "hives": "Dermatology",

  // 🩺 General Medicine
  "fever": "General Medicine",
  "fatigue": "General Medicine",
  "body pain": "General Medicine",
  "chills": "General Medicine",
  "loss of appetite": "General Medicine",
  "weight loss": "General Medicine",

  // 👩‍⚕️ Gynecology
  "menstrual cramps": "Gynecology",
  "irregular periods": "Gynecology",
  "vaginal discharge": "Gynecology",
  "pelvic pain": "Gynecology",

  // 🩸 Hematology
  "bleeding": "Hematology",
  "bruising": "Hematology",
  "anemia": "Hematology",
  "blood in urine": "Hematology",

  // 🦴 Orthopedics
  "joint pain": "Orthopedics",
  "back pain": "Orthopedics",
  "knee pain": "Orthopedics",
  "swollen joints": "Orthopedics",
  "fracture": "Orthopedics",

  // 👁️ Ophthalmology
  "blurred vision": "Ophthalmology",
  "eye pain": "Ophthalmology",
  "red eyes": "Ophthalmology",
  "dry eyes": "Ophthalmology",

  // 👂 ENT
  "ear pain": "ENT",
  "sore throat": "ENT",
  "runny nose": "ENT",
  "blocked nose": "ENT",
  "hearing loss": "ENT",
};

function getDepartment(symptomText) {
  const lower = symptomText.toLowerCase();
  for (const keyword in symptomMap) {
    if (lower.includes(keyword)) {
      return symptomMap[keyword];
    }
  }
  return "General Medicine";
}

module.exports = { getDepartment };
