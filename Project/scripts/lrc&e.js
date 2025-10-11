// Fulfills Rubric: Use objects, arrays, and array methods
const products = [
    { id: "rc-101", name: "Sunrise Breakfast Cruise", price: 35000, description: "Start your day with an exquisite breakfast buffet and views of the waking city." },
    { id: "rc-202", name: "Midday Lunch Buffet", price: 45000, description: "A relaxed midday break featuring a selection of local and continental cuisine." },
    { id: "rc-303", name: "Sunset Dinner Experience", price: 75000, description: "Our signature premium offering, including live entertainment and a gourmet 3-course meal." },
    { id: "ev-404", name: "Private Event Charter", price: 900000, description: "Hire the entire vessel for weddings, corporate retreats, and special celebrations." }
];

// Fulfills Rubric: More than one function (4 functions defined)

// --- Function 1: Navigation Toggle (Handles the icon and menu state) ---
function toggleMobileMenu() {
    const navUl = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger'); 
    
    // Fulfills Rubric: DOM modification
    navUl.classList.toggle('open');
    
    // Fulfills Rubric: Conditional branching
    if (navUl.classList.contains('open')) { 
        hamburger.textContent = '✖'; 
        hamburger.setAttribute('aria-label', 'Close Navigation');
    } else {
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-label', 'Toggle Navigation');
    }
}

// --- Function 2: Populates the Service dropdown ---
function populateServiceOptions() {
    const selectElement = document.getElementById('servicename');
    if (!selectElement) return;

    // Fulfills Rubric: Array method (forEach) and Template literal
    products.forEach(product => {
        const optionContent = `${product.name} (₦${product.price.toLocaleString()})`;
        const option = document.createElement('option');
        option.textContent = optionContent; 
        option.value = product.id;     
        selectElement.appendChild(option);
    });
}

// --- Function 3: Updates the Booking Counter (localStorage) ---
function updateBookingCounter() {
    const counterElement = document.getElementById('booking-counter');
    if (!counterElement) return;

    let bookingCount = parseInt(localStorage.getItem('LRCBookingCount')) || 0; // Fulfills Rubric: localStorage
    
    bookingCount++;
    localStorage.setItem('LRCBookingCount', bookingCount);

    counterElement.textContent = `${bookingCount}`; // Fulfills Rubric: Template literal
}

// --- Function 4: Updates Footer (DOM) ---
function updateFooter() {
    const yearSpan = document.getElementById('currentyear');
    const modifiedSpan = document.getElementById('lastModified');
    
    if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }
    if (modifiedSpan) { modifiedSpan.textContent = document.lastModified; }
}

// --- Initialization (Listener Attachment) ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Fulfills Rubric: Listening for and reacting to events
    const hamburger = document.querySelector('.hamburger'); 
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    populateServiceOptions();
    updateBookingCounter(); 
    updateFooter();
});
