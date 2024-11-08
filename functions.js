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

    function applyResponsiveStyles() {
        if (window.innerWidth < 600) { 
            // Styles for screens smaller than 600px
            asideContainerSmaller.style.display = 'block';
            asideContainer.style.display = 'none';
            mainContainer.style.gridTemplateColumns = '15vw 40vw 1fr';
        } else {
            // Check localStorage to set initial state of the sidebar for larger screens
            if (isAsideContainer === 'expanded') {
                asideContainer.style.display = 'block';
                asideContainerSmaller.style.display = 'none';
                mainContainer.style.gridTemplateColumns = '30vw 40vw 1fr';
            } else {
                asideContainer.style.display = 'none';
                asideContainerSmaller.style.display = 'block';
                mainContainer.style.gridTemplateColumns = '8vw 40vw 1fr';
            }
        }
    }

    // Initial call to set styles on load
    applyResponsiveStyles();

    // Update styles on window resize
    window.addEventListener('resize', applyResponsiveStyles);

    // Event listener for the toggle button for all screen sizes
    document.getElementById('btn').addEventListener('click', function() {
        if (window.getComputedStyle(asideContainer).display === 'none') {
            asideContainer.style.display = 'block';
            asideContainerSmaller.style.display = 'none';
            mainContainer.style.gridTemplateColumns = window.innerWidth < 600 ? '30vw 40vw 1fr' : '20vw 40vw 1fr';
            console.log("Set asideContainer to block, main grid expanded");

            // Save the state to localStorage
            localStorage.setItem('isAsideContainer', 'expanded');
        } else {
            asideContainer.style.display = 'none';
            asideContainerSmaller.style.display = 'block';
            mainContainer.style.gridTemplateColumns = window.innerWidth < 600 ? '15vw 40vw 1fr' : '8vw 40vw 1fr';
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

