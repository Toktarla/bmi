document.addEventListener('DOMContentLoaded', () => {
    async function displayHistory() {
    try {
        const response = await fetch('/calculate/history');
        const historicalData = await response.json();

        const historyTable = document.getElementById('historyTable');
        historyTable.innerHTML = '';

        historicalData.forEach(data => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${data.name}</td>
                <td>${data.height}</td>
                <td>${data.weight}</td>
                <td>${data.age}</td>
                <td>${data.gender}</td>
                <td>${data.timestamp}</td>
            `;
            historyTable.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

window.onload = displayHistory;

});