const subtractButton = document.getElementById('subtractButton');
// Event listener for the Subtract button
subtractButton.addEventListener('click', () => {
    // Ensure the counter value doesn't go below zero
    if (counterValue > 0) {
        // Decrement the counter value
        counterValue--;
        // Update the counter display
        updateCounterDisplay();
    }
});

export{subtractButton}