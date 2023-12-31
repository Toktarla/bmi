function validateForm() {
    const name = document.getElementById('name').value.trim();
    const height = parseFloat(document.getElementById('height').value.trim());
    const weight = parseFloat(document.getElementById('weight').value.trim());
    const age = parseInt(document.getElementById('age').value.trim());
    const gender = document.getElementById('gender').value.trim();
    const units = document.getElementById('units').value.trim();

    let isValid = true;
    const errors = {
        height: '',
        weight: '',
        age: ''
    };

    if (isNaN(height) || height < 1 || height > 300) {
        errors.height = 'Height must be a number between 1 and 300.';
        isValid = false;
    }

    if (isNaN(weight) || weight < 1 || weight > 500) {
        errors.weight = 'Weight must be a number between 1 and 500.';
        isValid = false;
    }

    if (isNaN(age) || age < 1 || age > 100) {
        errors.age = 'Age must be a number between 1 and 100.';
        isValid = false;
    }

    document.getElementById('heightError').textContent = errors.height;
    document.getElementById('weightError').textContent = errors.weight;
    document.getElementById('ageError').textContent = errors.age;

    return isValid;
}