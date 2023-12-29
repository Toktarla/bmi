function validateInput(input) {
    return !isNaN(input) && input > 0;
}

function validateForm() {
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    if (!validateInput(heightInput) || !validateInput(weightInput)) {
        alert('Please enter valid height and weight values.');
        return false;
    }
    return true;
} 