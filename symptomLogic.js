// symptomLogic.js

const symptomMap = {
  "chest pain": "Cardiology",
  "skin rash": "Dermatology",
  "headache": "Neurology",
  "stomach ache": "Gastroenterology",
  "cough": "Pulmonology",
  "fever": "General Medicine",
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
