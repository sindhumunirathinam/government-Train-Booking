document.getElementById('trainBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const trainClass = document.getElementById('class').value;
    
    alert(`Ticket booked from ${from} to ${to} on ${date} in ${trainClass} class.`);
});
document.getElementById('trainBookingForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const trainClass = document.getElementById('class').value;
    
    alert(`Ticket booked from ${from} to ${to} on ${date} in ${trainClass} class.`);
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    alert(`Logged in as ${username}`);
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (newPassword === confirmPassword) {
        alert(`Registered as ${newUsername}`);
    } else {
        alert('Passwords do not match');
    }
});

document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Message sent by ${name} (${email}): ${message}`);
});


document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('form');
    registerForm.addEventListener('submit', function(event) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            event.preventDefault();
            alert('Passwords do not match.');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const availableTrains = [
        { id: 1, from: 'New York', to: 'Washington D.C.', departure: '08:00 AM', arrival: '12:00 PM' },
        { id: 2, from: 'Los Angeles', to: 'San Francisco', departure: '10:00 AM', arrival: '02:00 PM' },
        { id: 3, from: 'Chicago', to: 'New York', departure: '06:00 AM', arrival: '02:00 PM' },
        { id: 4, from: 'Houston', to: 'Dallas', departure: '09:00 AM', arrival: '12:00 PM' },
        { id: 5, from: 'Miami', to: 'Orlando', departure: '07:00 AM', arrival: '10:00 AM' }
    ];

    window.searchTrains = () => {
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const departureDate = document.getElementById('departure-date').value;
        const departureTime = document.getElementById('departure-time').value;
        const returnDate = document.getElementById('return-date').value;
        const returnTime = document.getElementById('return-time').value;

        const trainList = document.getElementById('train-list');
        trainList.innerHTML = '';

        const filteredTrains = availableTrains.filter(train => 
            train.from.toLowerCase() === from.toLowerCase() && 
            train.to.toLowerCase() === to.toLowerCase()
        );

        if (filteredTrains.length > 0) {
            filteredTrains.forEach(train => {
                const trainElement = document.createElement('div');
                trainElement.classList.add('train');
                trainElement.innerHTML = `
                    <h3>Train ${train.id}</h3>
                    <p>From: ${train.from} - To: ${train.to}</p>
                    <p>Departure: ${train.departure}</p>
                    <p>Arrival: ${train.arrival}</p>
                `;
                trainList.appendChild(trainElement);
            });
        } else {
            trainList.innerHTML = '<p>No trains available for the selected route and time.</p>';
        }
    };
});
