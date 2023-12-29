# BMI Calculator Project

This project is a simple web application that calculates Body Mass Index (BMI) with additional functionalities such as history tracking and different input units.

## Routes and Structure

- **Routes**: The routes for this project are defined in `route.js`, and the actual routes themselves are implemented in `routes/bmiRoutes.js`.
- **Pages**: There are four main pages in this project:
    - Home
    - About
    - History
    - BMI Calculator

## Features

### BMI Calculator

The BMI calculator includes:
- Inputs for name, age, gender, weight, and height.
- Supports units in cm, mm, m for height and g, kg for weight.

### History

The history feature was implemented through a button click. It uses the `POST` method and displays history via JSON format on an HTML Bootstrap modal.

## Setup and Running

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/bmi-calculator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bmi-calculator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

   By default, the server runs on port 3000.

## Dependencies

- Express
- Bootstrap
- body-parser
- jQuery (for DOM manipulation)

