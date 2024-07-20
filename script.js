const form = document.getElementById('survey-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // You can process form data here (e.g., sending it to a server)
    // Example: You can access form data using form.elements or FormData API
    let formData = new FormData(form);
    console.log('Form submitted with data:', formData);
    // Optionally, you can reset the form after submission
    // form.reset();
});