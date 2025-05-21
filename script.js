// Tour data
const tourData = {
    'hike-1': {
        name: 'Kyzyl-Tuu to Korgon-Tash',
        price: 149.99,
        duration: '2 days',
        itinerary: [
            'Day 1: Meet at Kyzyl-Tuu village',
            'Trek through mountain meadows',
            'Camp near mountain stream',
            'Day 2: Summit trek to Korgon-Tash',
            'Descent with panoramic views'
        ],
        images: ['kyzyl-tuu1.jpg', 'korgon-tash1.jpg', 'trek1.jpg'],
        difficulty: 'Moderate',
        elevation: '2800m max',
        includes: [
            'Professional guide',
            'Camping equipment',
            'Meals during trek',
            'Safety equipment'
        ]
    },
    'hike-2': {
        name: 'Tash-Rabat to Osh',
        price: 299.99,
        duration: '5 days',
        itinerary: [
            'Day 1: Tash-Rabat caravanserai exploration',
            'Day 2-3: Trek through Kara-Shoro Region',
            'Day 4: Mountain pass crossing',
            'Day 5: Descent to Osh'
        ],
        images: ['tash-rabat1.jpg', 'kara-shoro1.jpg', 'osh1.jpg'],
        difficulty: 'Challenging',
        elevation: '3500m max',
        includes: [
            'Guide and porter',
            'All camping gear',
            'Full board meals',
            'Transport to start point'
        ]
    },
    'hike-3': {
        name: 'Shyrkyty Gorge to Ichke',
        price: 249.99,
        duration: '4 days',
        itinerary: [
            'Day 1: Shyrkyty Gorge trek start',
            'Day 2: Tash-Rabat visit',
            'Day 3: Chatyr-Kol Lake exploration',
            'Day 4: Trek to Ichke village'
        ],
        images: ['shyrkyty1.jpg', 'chatyr-kol1.jpg', 'ichke1.jpg'],
        difficulty: 'Moderate to Challenging',
        elevation: '3200m max',
        includes: [
            'Expert mountain guide',
            'Camping equipment',
            'All meals',
            'Emergency satellite phone'
        ]
    },
    'hike-4': {
        name: '1-May Village to Kel-Suu Lake',
        price: 179.99,
        duration: '3 days',
        itinerary: [
            'Day 1: Depart from 1-May Village',
            'Day 2: Trek to Kel-Suu Lake',
            'Day 3: Lake exploration and return'
        ],
        images: ['1-may1.jpg', 'kel-suu1.jpg', 'trek2.jpg'],
        difficulty: 'Moderate',
        elevation: '3000m max',
        includes: [
            'Local guide',
            'Camping gear',
            'Meals',
            'Border zone permits'
        ]
    },
    'horse-1': {
        name: 'Caravan Sarai to Chatyr-Kol',
        price: 199.99,
        duration: '2 days',
        itinerary: [
            'Day 1: Horse selection and Silk Road history',
            'Trek along ancient trade routes',
            'Day 2: Reach Chatyr-Kol Lake',
            'Return journey with mountain views'
        ],
        images: ['caravanserai1.jpg', 'chatyr-kol2.jpg', 'horse-trek1.jpg'],
        includes: [
            'Experienced horse guide',
            'Trained horses',
            'Camping equipment',
            'Traditional meals'
        ]
    },
    'horse-2': {
        name: 'Caravan Sarai to Kel-Suu',
        price: 249.99,
        duration: '3 days',
        itinerary: [
            'Day 1: Depart from Caravan Sarai',
            'Day 2: Mountain pass crossing',
            'Day 3: Arrive at Kel-Suu Lake'
        ],
        images: ['caravanserai2.jpg', 'kel-suu2.jpg', 'horse-trek2.jpg'],
        includes: [
            'Professional horse guide',
            'Trained horses',
            'All camping equipment',
            'Traditional Kyrgyz meals'
        ]
    },
    'horse-3': {
        name: 'Kel-Suu to the Waterfall',
        price: 179.99,
        duration: '2 days',
        itinerary: [
            'Day 1: Lake shore riding',
            'Waterfall trail ascent',
            'Day 2: Waterfall exploration',
            'Return journey'
        ],
        images: ['kel-suu3.jpg', 'waterfall1.jpg', 'horse-trek3.jpg'],
        includes: [
            'Expert guide',
            'Horse rental',
            'Camping gear',
            'All meals'
        ]
    },
    'horse-4': {
        name: 'Tash-Rabat to Osh',
        price: 399.99,
        duration: '6 days',
        itinerary: [
            'Day 1: Tash-Rabat departure',
            'Day 2-3: Mountain pass crossing',
            'Day 4-5: Valley routes',
            'Day 6: Arrival in Osh'
        ],
        images: ['tash-rabat2.jpg', 'mountains1.jpg', 'osh2.jpg'],
        includes: [
            'Professional guide team',
            'Horse and equipment',
            'All meals and snacks',
            'Support vehicle'
        ]
    },
    'horse-5': {
        name: 'Son-Kol to Tash-Rabat',
        price: 299.99,
        duration: '4 days',
        itinerary: [
            'Day 1: Son-Kol Lake start',
            'Day 2: Alpine meadow crossing',
            'Day 3: Mountain pass trek',
            'Day 4: Arrive at Tash-Rabat'
        ],
        images: ['son-kol1.jpg', 'meadows1.jpg', 'tash-rabat3.jpg'],
        includes: [
            'Experienced guide',
            'Horse and gear',
            'Yurt stays',
            'Traditional meals'
        ]
    },
    'road-1': {
        name: 'Bishkek to Son-Kol & Tash-Rabat',
        price: 449.99,
        duration: '5 days',
        itinerary: [
            'Day 1: Bishkek to Bokonbaevo',
            'Day 2-3: Son-Kol Lake stay',
            'Day 4: Drive to Tash-Rabat',
            'Day 5: Return to Bishkek'
        ],
        images: ['bishkek1.jpg', 'son-kol2.jpg', 'tash-rabat4.jpg'],
        includes: [
            '4x4 vehicle with driver',
            'Experienced guide',
            'Accommodation',
            'All meals'
        ]
    },
    'road-2': {
        name: 'Southern Kyrgyz Silk Road',
        price: 399.99,
        duration: '4 days',
        itinerary: [
            'Day 1: At-Bashy to Tash-Rabat',
            'Day 2: Ancient caravanserai exploration',
            'Day 3: Journey to Kel-Suu',
            'Day 4: Return via scenic route'
        ],
        images: ['at-bashy1.jpg', 'silk-road1.jpg', 'kel-suu4.jpg'],
        includes: [
            'Professional driver-guide',
            'Comfortable 4x4 vehicle',
            'Hotel and yurt stays',
            'All meals and activities'
        ]
    }
    }
};

// Modal functionality
const modal = document.getElementById('tour-modal');
const closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Show tour details
function showTourDetails(tourId) {
    const tour = tourData[tourId];
    const detailsDiv = document.getElementById('tour-details');
    
    let itineraryHtml = tour.itinerary.map(item => `<li>${item}</li>`).join('');
    let includesHtml = tour.includes ? tour.includes.map(item => `<li>${item}</li>`).join('') : '';
    
    detailsDiv.innerHTML = `
        <h2>${tour.name}</h2>
        <p class="price">Price: $${tour.price}</p>
        <p>Duration: ${tour.duration}</p>
        ${tour.difficulty ? `<p class="difficulty">Difficulty: ${tour.difficulty}</p>` : ''}
        ${tour.elevation ? `<p class="elevation">Elevation: ${tour.elevation}</p>` : ''}
        <h3>Itinerary:</h3>
        <ul class="itinerary-list">${itineraryHtml}</ul>
        ${tour.includes ? `
        <h3>Included in Tour:</h3>
        <ul class="includes-list">${includesHtml}</ul>
        ` : ''}
        <div class="tour-images">
            ${tour.images.map(img => `<img src="${img}" alt="Tour image">`).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Booking functionality
const bookingForm = document.getElementById('booking-form');

bookingForm.onsubmit = function(e) {
    e.preventDefault();
    const date = document.getElementById('tour-date').value;
    const participants = document.getElementById('participants').value;
    
    // Here you would typically send this data to a server
    alert(`Booking confirmed!\nDate: ${date}\nParticipants: ${participants}`);
    modal.style.display = 'none';
}

function bookGuidedTour(tourId, guidedTourName) {
    const tour = tourData[tourId];
    const guidedTour = tour.guidedTours.find(g => g.name === guidedTourName);
    
    if (guidedTour) {
        const date = prompt(`Select a date (Available: ${guidedTour.availability}):`);
        const participants = prompt('Number of participants:');
        
        if (date && participants) {
            alert(`Guided Tour Booking Confirmed!\nTour: ${guidedTourName}\nDate: ${date}\nParticipants: ${participants}\nTotal Price: $${(guidedTour.price * parseInt(participants)).toFixed(2)}`);
        }
    }
}

// Reviews functionality
const reviews = [];
const reviewsContainer = document.querySelector('.reviews-container');
const addReviewBtn = document.getElementById('add-review-btn');

addReviewBtn.onclick = function() {
    const rating = prompt('Rate this tour (1-5 stars):', '5');
    const comment = prompt('Leave your review:', '');
    
    if (rating && comment) {
        const review = {
            rating: parseInt(rating),
            comment: comment,
            date: new Date().toLocaleDateString()
        };
        
        reviews.push(review);
        displayReviews();
    }
}

function displayReviews() {
    reviewsContainer.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
            <p>${review.comment}</p>
            <small>${review.date}</small>
        </div>
    `).join('');
}
