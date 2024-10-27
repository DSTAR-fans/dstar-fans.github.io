document.addEventListener('DOMContentLoaded', function() {
    // 1. Get the current date
    const currentDate = new Date();

    // 2. Define an array of events with their start and end dates and IDs
    const events = [
        {
            startDate: new Date('2024-04-18'),
            endDate: new Date('2024-05-18'),
            eventId: 'hamvention'
        },
        {
            startDate: new Date('2025-06-01'),
            endDate: new Date('2025-07-01'),
            eventId: 'field-day'
        },
        {
            startDate: new Date('2025-01-01'),
            endDate: new Date('2025-02-01'),
            eventId: 'winter-field-day'
        },
        {
            startDate: new Date('2024-10-15'),
            endDate: new Date('2025-03-01'),
            eventId: 'dstar-qso-party'
        },
        // Add more events here
    ];

    // 3. Loop through each event
    events.forEach(event => {
        // Directly select the div by its eventId
        const eventDiv = document.getElementById(event.eventId);

        // Check if the eventDiv exists to avoid errors
        if (eventDiv) {
            // 4. Compare the current date with the start and end dates of the event
            if (currentDate >= event.startDate && currentDate <= event.endDate) {
                // 5. Display the div
                eventDiv.style.display = 'block';
            } else {
                // Hide the div
                eventDiv.style.display = 'none';
            }
        }
    });
});