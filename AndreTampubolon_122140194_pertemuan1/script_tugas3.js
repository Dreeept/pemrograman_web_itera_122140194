document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name.length <= 3) {
        document.getElementById('nameError').textContent = 'Nama harus lebih dari 3 karakter';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Email tidak valid';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password harus minimal 8 karakter';
        isValid = false;
    }

    if (isValid) {
        alert('Form berhasil divalidasi!');
        document.getElementById('form').reset();
    }
});