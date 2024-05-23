const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.profile-menu a');
    const profileDetails = document.getElementById('profile-details');
    const profileViolation = document.getElementById('profile-violation');
    const profileSettle = document.getElementById('profile-settle');
    const profileLog = document.getElementById('profile-log');

        //profileDetails.style.display = 'none';
        profileViolation.style.display = 'none';
        profileSettle.style.display = 'none';
        profileLog.style.display = 'none';

    function toggleVisibility(clickedLink) {
        console.log("toggleVisibility called with:", clickedLink.id);


        profileDetails.style.display = 'none';
        profileViolation.style.display = 'none';
        profileSettle.style.display = 'none';
        profileLog.style.display = 'none';

        const menuItems = document.querySelectorAll('.profile-menu li');
        menuItems.forEach(item => item.classList.remove('active'));

        clickedLink.parentElement.classList.add('active');

        if (clickedLink.id === 'menu-detail-link') {
            profileDetails.style.display = 'block';
        } else if (clickedLink.id === 'menu-violation-link') {
            profileViolation.style.display = 'block';
        } else if (clickedLink.id === 'menu-settle-link') {
            profileSettle.style.display = 'block';
        } else if (clickedLink.id === 'menu-log-link') {
            profileLog.style.display = 'block';
        }
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            toggleVisibility(this);
        });
    });
});

{
    var table = document.querySelector('.home .content-table');
    // Count the number of rows in the table (excluding the header row)
    var rowCount = table.rows.length - 1; // Assuming the first row is the header

    // Select the container and settle-message elements
    var container = document.querySelector('.home .content-table');
    var settleMessage = document.querySelector('.home .settle-message');

    settleMessage.style.display = 'none';

    // Check if there are any data rows in the table
    if (rowCount > 0) {
        // If there are data rows, show the container and hide the settle-message
        container.style.display = 'block';
        settleMessage.style.display = 'none';
    } else {
        // If there are no data rows, hide the container and show the settle-message
        container.style.display = 'none';
        settleMessage.style.display = 'block';
    }
    }