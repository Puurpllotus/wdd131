// Array of available cruise and event products
const products = [
    { id: "rc-101", name: "Sunrise Breakfast Cruise", price: 35000, description: "Start your day with an exquisite breakfast buffet and views of the waking city." },
    { id: "rc-202", name: "Midday Lunch Buffet", price: 45000, description: "A relaxed midday break featuring a selection of local and continental cuisine." },
    { id: "rc-303", name: "Sunset Dinner Experience", price: 75000, description: "Our signature premium offering, including live entertainment and a gourmet 3-course meal." },
    { id: "ev-404", name: "Private Event Charter", price: 900000, description: "Hire the entire vessel for weddings, corporate retreats, and special celebrations." }
];

/*-------------------------------------------------------
  Function 1: Toggle the mobile navigation menu
--------------------------------------------------------*/
function toggleMobileMenu() {
    const navUl = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');

    const isOpen = navUl.classList.toggle('open');

    // Change icon and label
    hamburger.textContent = isOpen ? '✖' : '☰';
    hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');

    // ✅ Add this line for accessibility:
    hamburger.setAttribute('aria-expanded', isOpen);
}

/*-------------------------------------------------------
  Function 2: Populate service dropdown with product data
--------------------------------------------------------*/
function populateServiceOptions() {
    const selectElement = document.getElementById('servicename');
    if (!selectElement) return;

    // Loop through each product and create an <option> element
    products.forEach(product => {
        const optionContent = `${product.name} (₦${product.price.toLocaleString()})`;
        const option = document.createElement('option');
        option.textContent = optionContent; 
        option.value = product.id;     
        selectElement.appendChild(option);
    });
}

/*-------------------------------------------------------
  Function 3: Update the booking counter using localStorage
--------------------------------------------------------*/
function updateBookingCounter() {
    const counterElement = document.getElementById('booking-counter');
    if (!counterElement) return;

    // Retrieve existing booking count or start from 0
    let bookingCount = parseInt(localStorage.getItem('LRCBookingCount')) || 0;
    
    // Increment and store updated count
    bookingCount++;
    localStorage.setItem('LRCBookingCount', bookingCount);

    // Display the current count in the footer or UI
    counterElement.textContent = `${bookingCount}`;
}

/*-------------------------------------------------------
  Function 4: Display current year and last modified date
--------------------------------------------------------*/
function updateFooter() {
    const yearSpan = document.getElementById('currentyear');
    const modifiedSpan = document.getElementById('lastModified');
    
    if (yearSpan) { 
        yearSpan.textContent = new Date().getFullYear(); 
    }
    if (modifiedSpan) { 
        modifiedSpan.textContent = document.lastModified; 
    }
}

/*-------------------------------------------------------
  Initialize functions and attach event listeners
--------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'); 
    
    // Handle menu toggle on mobile
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Run all initialization functions
    populateServiceOptions();
    updateBookingCounter(); 
    updateFooter();
});
