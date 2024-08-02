document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('formMsg').textContent = '';

    // Validate form inputs
    let valid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    }

    if (!phone.match(/^\d{10}$/)) {
        document.getElementById('phoneError').textContent = 'Phone must be 10 digits';
        valid = false;
    }

    if (valid) {
        document.getElementById('formMsg').textContent = 'Form submitted successfully';
        document.getElementById('formMsg').classList.add('success');
        
        // Call function to submit data to Google Sheets
        submitToGoogleSheets(name, email, phone);
    }
});

function submitToGoogleSheets(name, email, phone) {
    const url = 'https://script.google.com/macros/s/AKfycbyrI_MiZgkxR82XMYaiWbiaR7w6FyyVasLE0LNEzFeyK9xtBmdxIs2fQzHfTwV027IoQQ/exec';
    const data = {name, email, phone};

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === 'success') {
            console.log('Data successfully submitted to Google Sheets');
        } else {
            console.error('Error submitting data to Google Sheets');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
