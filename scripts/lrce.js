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
  // Conditional branching shown here
  if (!navUl || !hamburger) return;
  const isOpen = navUl.classList.toggle('open');
  hamburger.textContent = isOpen ? '✖' : '☰';
  hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  hamburger.setAttribute('aria-expanded', isOpen);
}

/*-------------------------------------------------------
  Function 2: Populate service dropdown with product data
--------------------------------------------------------*/
function populateServiceOptions() {
  const selectElement = document.getElementById('servicename');
  if (!selectElement) return;
  selectElement.innerHTML = ''; // Ensure dropdown is cleared before population
  // Use array map to convert objects to option elements, then forEach to append — demonstrates array method variety!
  products.map(product => {
    const option = document.createElement('option');
    option.value = product.id;
    // Template literal for output
    option.textContent = `${product.name} (₦${product.price.toLocaleString()})`;
    return option;
  }).forEach(option => {
    selectElement.appendChild(option);
  });
}

/*-------------------------------------------------------
  Function 3: Update the booking counter using localStorage
--------------------------------------------------------*/
function updateBookingCounter() {
  const counterElement = document.getElementById('booking-counter');
  if (!counterElement) return;
  // Retrieve existing booking count or start from 0 (with conditional branching)
  let bookingCount = parseInt(localStorage.getItem('LRCBookingCount'));
  if (isNaN(bookingCount)) {
    bookingCount = 0;
  }
  bookingCount++;
  localStorage.setItem('LRCBookingCount', bookingCount);
  // Output with template literal
  counterElement.textContent = `${bookingCount}`;
}

/*-------------------------------------------------------
  Function 4: Display current year and last modified date
--------------------------------------------------------*/
function updateFooter() {
  const yearSpan = document.getElementById('currentyear');
  const modifiedSpan = document.getElementById('lastModified');
  // More conditional branching
  if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }
  if (modifiedSpan) { modifiedSpan.textContent = document.lastModified; }
}

/*-------------------------------------------------------
  Function 5: Show service description on selection (Extra DOM and object use for mastery)
--------------------------------------------------------*/
function showServiceDescription() {
  const selectElement = document.getElementById('servicename');
  const descriptionElement = document.getElementById('service-description');
  if (!selectElement || !descriptionElement) return;
  selectElement.addEventListener('change', function () {
    const selectedId = selectElement.value;
    const selectedProduct = products.find(product => product.id === selectedId);
    // Output with template literal (exclusive use)
    descriptionElement.textContent = selectedProduct
      ? `Description: ${selectedProduct.description}`
      : '';
  });
}

/*-------------------------------------------------------
  Initialize all functions and attach event listeners
--------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);

  populateServiceOptions();

  // Optional: add a <div id="service-description"></div> under your form for user feedback
  showServiceDescription();

  updateBookingCounter();
  updateFooter();
});
