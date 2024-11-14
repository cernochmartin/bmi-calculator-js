function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100
    const weight = parseFloat(document.getElementById('weight').value)

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').textContent = 'Prosím, zadejte platnou výšku a váhu.'
        return
    }

    const bmi = weight / (height * height)
    let category

    if (bmi < 18.5) {
        category = 'Podváha'
    } else if (bmi < 24.9) {
        category = 'Normální váha'
    } else if (bmi < 29.9) {
        category = 'Nadváha'
    } else {
        category = 'Obezita'
    }

    document.getElementById('result').textContent = `Vaše BMI je ${bmi.toFixed(2)} (${category}).`
}
