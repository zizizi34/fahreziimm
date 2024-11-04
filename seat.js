const seatSelect = document.getElementById('seat-select');
const totalSeats = 5;

// Dynamically add seat options to the dropdown
for (let i = 1; i <= totalSeats; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = ` ${i}`;
    seatSelect.appendChild(option);
}
