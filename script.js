$(document).ready(function () {
    
    $('#exercise-form').submit(function (e) {
        e.preventDefault();

        const exercise = $('#exercise').val();
        const duration = $('#duration').val();

        if (window.innerWidth < 768) {
            
            const confirmationMessage = `Add the exercise "${exercise}" for ${duration} minutes?`;

            if (confirm(confirmationMessage)) {
                const entry = `<li>${exercise}: ${duration} minutes</li>`;
                $('#exercise-log').append(entry);
            }
        } else {
            
            const entry = `<li>${exercise}: ${duration} minutes</li>`;
            $('#exercise-log').append(entry);
        }

        $('#exercise').val('');
        $('#duration').val('');
    });
    
});
