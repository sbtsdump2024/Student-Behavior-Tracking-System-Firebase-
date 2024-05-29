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
    const profileName = document.getElementById('profile-name');

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
            profileName.style.display = 'block';
        } else if (clickedLink.id === 'menu-settle-link') {
            profileSettle.style.display = 'block';
            profileName.style.display = 'block';
        } else if (clickedLink.id === 'menu-log-link') {
            profileLog.style.display = 'block';
            profileName.style.display = 'block';
        }

        
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            toggleVisibility(this);
        });
    });

    var cancelButton = document.querySelector('.cancel-button');

    // Add a click event listener to the cancel button
    cancelButton.addEventListener('click', function(event) {
        // Prevent the default action of the button (if any)
        event.preventDefault();

        // Select the form by its ID
        var form = document.getElementById('violationForm');

        // Reset the form
        form.reset();
    });

    var form = document.getElementById('violationForm');

    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Show the alert
        alert('Violation entry has been submitted');

        // Submit the form programmatically
        form.submit();
    });

    var form = document.getElementById('violationForm');

    form.addEventListener('submit', function(event) {
        // Get the selected violation type
        var selectedViolationType = form.querySelector('select[name="violation_type"]').value;

        // Check if the selected option is the placeholder option
        if (selectedViolationType === "Select Violation") {
            // Prevent the form from submitting
            event.preventDefault();

            // Show an alert to the user
            alert('Please select a violation type.');
        } else {
            // If a valid option is selected, show the alert and then submit the form
            alert('Violation entry has been submitted');
            form.submit();
        }
    });

    {
    var table = document.querySelector('.profile-settle .content-table');
    // Count the number of rows in the table (excluding the header row)
    var rowCount = table.rows.length - 1; // Assuming the first row is the header

    // Select the container and settle-message elements
    var container = document.querySelector('.profile-settle .container');
    var settleMessage = document.querySelector('.profile-settle .settle-message');

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
    
    {
        var table2 = document.querySelector('.profile-log .content-table');
        var rowCount2 = table2.rows.length - 1; // Assuming the first row is the header

        // Select the container and messages within the profile-log section
        var container2 = document.getElementById('container2');
        var logMessage2 = document.getElementById('settle-message2');

        // Hide the message initially
        logMessage2.style.display = 'none';

        if (rowCount2 > 0) {
            // If there are data rows, show the container and hide the log-message
            container2.style.display = 'block';
            logMessage2.style.display = 'none';
        } else {
            // If there are no data rows, hide the container and show the log-message
            container2.style.display = 'none';
            logMessage2.style.display = 'block';
        }
    }

    

});