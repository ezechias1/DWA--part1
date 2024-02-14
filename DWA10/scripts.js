
        // Selecting the buttons and counter display element
        const addButton = document.getElementById('addButton');
        const subtractButton = document.getElementById('subtractButton');
        const resetButton = document.getElementById('resetButton');
        const counterDisplay = document.getElementById('placeholder');

        // Initializing the counter value
        let counterValue = 0;

        // Event listener for the Add button
        addButton.addEventListener('click', () => {
            // Increment the counter value
            counterValue++;
            // Update the counter display
            updateCounterDisplay();
        });

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

        // Event listener for the Reset button
        resetButton.addEventListener('click', () => {
            // Reset the counter value to zero
            counterValue = 0;
            // Update the counter display
            updateCounterDisplay();
            
        });

        // Function to update the counter display
        function updateCounterDisplay() {
            // Set the text content of the counter display element to the counter value
            counterDisplay.textContent = counterValue;
        }
    


    
       