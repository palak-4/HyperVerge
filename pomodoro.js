document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString(undefined, options);
        const timeString = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

        document.getElementById('date-time').textContent = `${timeString}, ${dateString}`;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call to display time immediately
});
