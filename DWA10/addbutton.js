const addButton = document.getElementById('addButton');// Event listener for the Add button
addButton.addEventListener('click', () => {
    // Increment the counter value
    counterValue++;
    // Update the counter display
    updateCounterDisplay();
});

export{addButton}