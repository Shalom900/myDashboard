// Hide Money Button Event
document.getElementById('hideMoneyBtn').addEventListener('click', function() {
    const moneyValue = document.getElementById('moneyValue');
    const hideMoney = document.getElementById('hideMoney');
    const viewMoneyBtn = document.getElementById('viewMoneyBtn');
    const hideMoneyBtn = document.getElementById('hideMoneyBtn');

    viewMoneyBtn.style.display = 'block'; // Show the view button
    hideMoneyBtn.style.display = 'none'; // Hide the hide button
    moneyValue.style.display = 'block'; // Hide the money value
    hideMoney.style.display = 'none'; // Show hidden text or icons
});

// View Money Button Event
document.getElementById('viewMoneyBtn').addEventListener('click', function() {
    const moneyValue = document.getElementById('moneyValue');
    const hideMoney = document.getElementById('hideMoney');
    const viewMoneyBtn = document.getElementById('viewMoneyBtn');
    const hideMoneyBtn = document.getElementById('hideMoneyBtn');

    viewMoneyBtn.style.display = 'none'; // Hide the view button
    hideMoneyBtn.style.display = 'block'; // Show the hide button
    moneyValue.style.display = 'none'; // Show the money value
    hideMoney.style.display = 'block'; // Hide the hidden text or icons
    
});
// Toggle Menu Bar
document.addEventListener("DOMContentLoaded", function() {
    const asideContainer = document.getElementById('asideContainer');
    const asideContainerSmaller = document.getElementById('asideContainerSmaller');
    const mainContainer = document.querySelector('main');
    const isAsideContainer = localStorage.getItem('isAsideContainer');

    // Check localStorage to set initial state of the sidebar
    if (isAsideContainer === 'expanded') {
        // Set styles for expanded state
        asideContainer.style.display = 'block';
        asideContainerSmaller.style.display = 'none';
        mainContainer.style.gridTemplateColumns = '20vw auto';
    } else {
        // Set styles for collapsed state
        asideContainer.style.display = 'none';
        asideContainerSmaller.style.display = 'block';
        mainContainer.style.gridTemplateColumns = '5vw auto';
    }

    // Attach event listener to button
    document.getElementById('btn').addEventListener('click', function() {
        // Check if asideContainer is valid before using it
        if (window.getComputedStyle(asideContainer).display === 'none') {
            asideContainer.style.display = 'block';
            asideContainerSmaller.style.display = 'none';
            mainContainer.style.gridTemplateColumns = '20vw auto';
            console.log("Set asideContainer to block, main grid expanded");

            // Save the state to localStorage
            localStorage.setItem('isAsideContainer', 'expanded');
        } else {
            asideContainer.style.display = 'none';
            asideContainerSmaller.style.display = 'block';
            mainContainer.style.gridTemplateColumns = '5vw auto';
            console.log("Set asideContainer to none, main grid collapsed");

            // Save the state to localStorage
            localStorage.setItem('isAsideContainer', 'collapsed');
        }
    });
});




// Recent Order, view all
document.addEventListener('DOMContentLoaded', function() {
    const viewAll = document.getElementById('viewAll');
    const orderDetails = document.getElementById('orderDetails');

    // Check localStorage to apply the last saved state on page load
    const isViewAllActive = localStorage.getItem('isViewAllActive') === 'true';
    if (isViewAllActive) {
        orderDetails.style.overflow = 'scroll'; // Show all content
    } else {
        orderDetails.style.overflow = 'hidden'; // Hide overflow content
    }

    // Toggle the overflow state and save it to localStorage on button click
    viewAll.addEventListener('click', function() {
        const isCurrentlyHidden = orderDetails.style.overflow === 'hidden';

        if (isCurrentlyHidden) {
            orderDetails.style.overflow = 'scroll';
            localStorage.setItem('isViewAllActive', 'true');
        } else {
            orderDetails.style.overflow = 'hidden';
            localStorage.setItem('isViewAllActive', 'false');
        }
    });
});

