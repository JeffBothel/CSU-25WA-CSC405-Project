// TimeInfo JavaScript that I originally built in Module 6 work, referencable at https://github.com/JeffBothel/CSU-25WA-CSC405/blob/main/module6/timeInfo.js
function updateDateTime() {
    const now = new Date();
    
    // Slight change to update the formatting of the date and time to be more readable
    // Format: "1 January, 2026 - 12:01:03 PM"
    const day = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    
    const dateTimeString = `${day} ${month}, ${year} - ${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('datetime').textContent = dateTimeString;
}

// Call when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        updateDateTime();
        setInterval(updateDateTime, 1000);
    });
} else {
    updateDateTime();
    setInterval(updateDateTime, 1000);
}