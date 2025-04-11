// Ambil elemen form
const form = document.querySelector('.contact-form');

// Tambahkan event listener saat form disubmit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // Ambil data dari form
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const message = form.elements['message'].value.trim();

  // Validasi sederhana
  if (name === '' || email === '' || message === '') {
    showMessage('Harap isi semua field!', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    showMessage('Format email tidak valid!', 'error');
    return;
  }

  // Jika lolos validasi
  showMessage('Pesan berhasil dikirim! 🎉', 'success');

  // Reset form setelah 3 detik
  setTimeout(() => {
    form.reset();
    clearMessage();
  }, 3000);
});

// Fungsi validasi email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Buat div untuk pesan feedback (kalau belum ada)
let messageBox = document.createElement('div');
messageBox.id = 'formMessage';
messageBox.style.marginTop = '20px';
form.appendChild(messageBox);

// Fungsi menampilkan pesan
function showMessage(text, type) {
  messageBox.textContent = text;
  messageBox.style.color = type === 'error' ? 'red' : 'green';
}

// Fungsi untuk menghapus pesan
function clearMessage() {
  messageBox.textContent = 'Pesan Terkirim, Terimakasih Sudah Menghubungi Saya. Pesan Akan Secepatnya Kami Balas';
}
