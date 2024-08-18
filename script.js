var typed = new Typed((".skills"),{
    strings : ["UCLA student","Fullstack Developer","Mobile Developer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending data to a server (this is just a placeholder)
    setTimeout(function() {
        const formResponse = document.getElementById('formResponse');
        formResponse.textContent = `Thank you, ${name}! We have received your message.`;
        formResponse.style.color = 'green';
        
        // Optionally, clear the form
        document.getElementById('contactForm').reset();
    }, 1000);
});