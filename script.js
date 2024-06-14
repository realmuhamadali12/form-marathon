function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;

    if (!validateEmail(email)) {
        alert('Masukkan alamat email yang valid.');
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Masukkan nomor telepon yang valid.');
        return false;
    }

    if (age <= 0) {
        alert('Masukkan usia yang valid.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\d{10,15}$/;
    return re.test(phone);
}
