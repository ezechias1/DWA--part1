const resetButton = document.getElementById('resetButton');
// Event listener for the Reset button
resetButton.addEventListener('click', () => {
    // Reset the counter value to zero
    counterValue = 0;
    // Update the counter display
    updateCounterDisplay();
    
});

export{resetButton}