document.getElementById('preferences-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const destinationType = document.getElementById('destination-type').value;
    const destinations = getRecommendations(destinationType);
    displayDestinations(destinations);
});
// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log form data to the console (for testing)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display a success message
    alert('Thank you for contacting us! We will get back to you soon.');

    // Clear the form
    document.getElementById('contact-form').reset();
});

function getRecommendations(type) {
    const destinations = {
        beach: [
            { name: "Maldives", description: "Beautiful beaches and clear waters.", image: "images/maldives.jpg" },
            { name: "Bali", description: "Exotic beaches and vibrant culture.", image: "images/bali.jpg" }
        ],
        mountain: [
            { name: "Swiss Alps", description: "Majestic mountains and scenic views.", image: "images/swiss-alps.jpg" },
            { name: "Rocky Mountains", description: "Great for hiking and adventure.", image: "images/rocky-mountains.jpg" }
        ],
        city: [
            { name: "Paris", description: "The city of lights and romance.", image: "images/paris.jpg" },
            { name: "New York", description: "The city that never sleeps.", image: "images/new-york.jpg" }
        ]
    };
    return destinations[type] || [];
}

function displayDestinations(destinations) {
    const destinationsList = document.getElementById('destinations-list');
    destinationsList.innerHTML = ''; // Clear previous content
    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
        `;
        destinationsList.appendChild(card);
    });
}