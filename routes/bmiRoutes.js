const express = require('express');
const router = express.Router();
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');


let historicalData = JSON.parse(localStorage.getItem('historicalData')) || [];
 
router.post('/bmi', (req, res) => {
    const { name,height,weight, age, gender } = req.body;

    const heightInMeters = height / 100; 
    const bmi = weight / (heightInMeters * heightInMeters);

    let bmiCategory = '';

    if (age >= 18) {
        if (gender === 'male') {
            if (bmi < 18.5) {
                bmiCategory = 'Underweight';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                bmiCategory = 'Normal weight';
            } else if (bmi >= 25 && bmi < 29.9) {
                bmiCategory = 'Overweight';
            } else {
                bmiCategory = 'Obese';
            }
        } 
        else if (gender === 'female') {
            if (bmi < 18.5) {
                bmiCategory = 'Underweight';
            } else if (bmi >= 18.5 && bmi < 23.9) {
                bmiCategory = 'Normal weight';
            } else if (bmi >= 24 && bmi < 28.9) {
                bmiCategory = 'Overweight';
            } else {
                bmiCategory = 'Obese';
            }
        }
    } 
    else {
        if (gender === 'male') {
            if (bmi < 14) {
                bmiCategory = 'Underweight';
            } else if (bmi >= 14 && bmi < 20) {
                bmiCategory = 'Normal weight';
            } else if (bmi >= 20 && bmi < 24) {
                bmiCategory = 'Overweight';
            } else {
                bmiCategory = 'Obese';
            }
        } else if (gender === 'female') {
            if (bmi < 14) {
                bmiCategory = 'Underweight';
            } else if (bmi >= 14 && bmi < 21) {
                bmiCategory = 'Normal weight';
            } else if (bmi >= 21 && bmi < 27) {
                bmiCategory = 'Overweight';
            } else {
                bmiCategory = 'Obese';
            }
        }
    }

    const timestamp = new Date().toISOString();
    historicalData.push({ name, height, weight, age, gender, timestamp });
    localStorage.setItem('historicalData', JSON.stringify(historicalData));
    res.json({ bmi, category: bmiCategory });

});

router.get('/history', (req, res) => {
    const historicalData = JSON.parse(localStorage.getItem('historicalData')) || [];
    res.json(historicalData);
});

module.exports = router;

