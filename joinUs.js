document.getElementById('membershipForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    document.getElementById('nameError2').textContent = '';
    document.getElementById('mobileError').textContent = '';
    document.getElementById('emailError2').textContent = '';
    document.getElementById('branchError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('yearError').textContent = '';
    document.getElementById('reasonError').textContent = '';
    document.getElementById('contributionError').textContent = '';
    document.getElementById('formMsg2').textContent = '';

    // Validate the form inputs
    let isValid = true;
    const name = document.getElementById('name2').value;
    const gender = document.querySelector('input[name="entry.1891674036"]:checked');
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email2').value;
    const branch = document.getElementById('branch').value;
    const year = document.querySelector('input[name="entry.32802590"]:checked');
    const reason = document.getElementById('reason').value;
    const contribution = document.getElementById('contribution').value;

    if (!name) {
        isValid = false;
        document.getElementById('nameError2').textContent = 'Name is required';
        document.getElementById('nameError2').classList.remove('none');
    }

    else if (!mobile) {
        isValid = false;
        document.getElementById('nameError2').classList.add('none');
        document.getElementById('mobileError').textContent = 'Mobile number is required';
        document.getElementById('mobileError').classList.remove('none');
    }

    else if (!email) {
        isValid = false;
        document.getElementById('nameError2').classList.add('none');
        document.getElementById('mobileError').classList.add('none');
        document.getElementById('emailError2').textContent = 'Email is required';
        document.getElementById('emailError2').classList.remove('none');
    } 
    else if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        document.getElementById('nameError2').classList.add('none');
        document.getElementById('mobileError').classList.add('none');
        document.getElementById('emailError2').textContent = 'Email is invalid';
        document.getElementById('emailError2').classList.remove('none');
    }

    else if (!branch) {
        isValid = false;
        document.getElementById('nameError2').classList.add('none');
        document.getElementById('mobileError').classList.add('none');
        document.getElementById('emailError2').classList.add('none');
        document.getElementById('branchError').textContent = 'Branch is required';
        document.getElementById('branchError').classList.remove('none');
    }

    else if (!gender) {
        isValid = false;
        document.getElementById('nameError2').classList.add('none');
        document.getElementById('mobileError').classList.add('none');
        document.getElementById('emailError2').classList.add('none');
        document.getElementById('branchError').classList.add('none');
        document.getElementById('genderError').textContent = 'Gender is required';
        document.getElementById('genderError').classList.remove('none');
    }

    else if (!year) {
        isValid = false;
        document.getElementById('nameError2').classList.add('none');
        document.getElementById('mobileError').classList.add('none');
        document.getElementById('emailError2').classList.add('none');
        document.getElementById('branchError').classList.add('none');
        document.getElementById('genderError').classList.add('none');
        document.getElementById('yearError').textContent = 'Year is required';
        document.getElementById('yearError').classList.remove('none');
    }

    else if (!reason) {
        isValid = false;
        document.getElementById('nameError2').classList.add('none');
        document.getElementById('mobileError').classList.add('none');
        document.getElementById('emailError2').classList.add('none');
        document.getElementById('branchError').classList.add('none');
        document.getElementById('genderError').classList.add('none');
        document.getElementById('yearError').classList.add('none');
        document.getElementById('reasonError').textContent = 'Reason is required';
        document.getElementById('reasonError').classList.remove('none');
    }

    else if (!contribution) {
        isValid = false;
        document.getElementById('nameError2').classList.add('none');
        document.getElementById('mobileError').classList.add('none');
        document.getElementById('emailError2').classList.add('none');
        document.getElementById('branchError').classList.add('none');
        document.getElementById('genderError').classList.add('none');
        document.getElementById('yearError').classList.add('none');
        document.getElementById('reasonError').classList.add('none');
        document.getElementById('contributionError').textContent = 'Contribution is required';
        document.getElementById('contributionError').classList.remove('none');
    }

    else if (isValid) {
        document.getElementById('nameError2').classList.add('none');
        document.getElementById('mobileError').classList.add('none');
        document.getElementById('emailError2').classList.add('none');
        document.getElementById('branchError').classList.add('none');
        document.getElementById('genderError').classList.add('none');
        document.getElementById('yearError').classList.add('none');
        document.getElementById('reasonError').classList.add('none');
        document.getElementById('contributionError').classList.add('none');
        // Display the success message
        document.getElementById('formMsg2').textContent = 'Form submitted successfully!';
        document.getElementById('formMsg2').classList.add('success');

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