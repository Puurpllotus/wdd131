const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];
function populateProductOptions() {
    const selectElement = document.getElementById('productname');
    
    if (!selectElement) return; 

    products.forEach(product => {
        const option = document.createElement('option');
        option.textContent = product.name; 
        option.value = product.id;     
        selectElement.appendChild(option);
    });
}
function updateReviewCounter() {
    const counterElement = document.getElementById('review-counter');
    
    if (!counterElement) return;

    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    
    // Increment and update storage
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Display the new count
    counterElement.textContent = reviewCount;
}

function updateFooter() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
}

document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
    updateReviewCounter();

    // This runs on both pages
    updateFooter(); 
});