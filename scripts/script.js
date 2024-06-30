document.addEventListener('DOMContentLoaded', function() {
    // 1. Get the current date
    const currentDate = new Date();

    // 2. Define the start and end dates
    const startDate = new Date('2024-04-18'); // Replace 'YYYY-MM-DD' with your start date
    const endDate = new Date('2024-05-18'); // Replace 'YYYY-MM-DD' with your end date

    // 3. Select the event-container element
    const eventContainer = document.querySelector('.event-container');

    // 4. Compare the current date with the start and end dates
    if (currentDate > startDate && currentDate < endDate) {
        // 5. Display the event-container
        eventContainer.style.display = 'block';
    } else {
        // Hide the event-container
        eventContainer.style.display = 'none';
    }
});