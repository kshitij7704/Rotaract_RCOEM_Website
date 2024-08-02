document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('msgError').textContent = '';
    document.getElementById('formMsg').textContent = '';

    // Validate the form inputs
    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    if (!name) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').classList.remove('none');
    }

    else if (!email) {
        isValid = false;
        document.getElementById('nameError').classList.add('none');
        document.getElementById('emailError').textContent = 'Email is required';
        document.getElementById('emailError').classList.remove('none');
    } 
    else if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        document.getElementById('nameError').classList.add('none');
        document.getElementById('emailError').textContent = 'Email is invalid';
        document.getElementById('emailError').classList.remove('none');
    }

    else if (!msg) {
        isValid = false;
        document.getElementById('nameError').classList.add('none');
        document.getElementById('emailError').classList.add('none');
        document.getElementById('msgError').textContent = 'Message is required';
        document.getElementById('msgError').classList.remove('none');
    }

    else if (isValid) {
        // Display the success message
        document.getElementById('nameError').classList.add('none');
        document.getElementById('emailError').classList.add('none');
        document.getElementById('msgError').classList.add('none');
        document.getElementById('formMsg').textContent = 'Query submitted successfully!';
        document.getElementById('formMsg').classList.add('success');

        // Optionally send data to Google Forms
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
            mode: 'no-cors'
        }).then(() => {
            // Optionally reset the form
            this.reset();
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
});