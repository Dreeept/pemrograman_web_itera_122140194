# 📚 Book Manager

**Book Manager** adalah aplikasi web berbasis React yang dirancang untuk membantu pengguna mengelola koleksi buku pribadinya. Aplikasi ini memungkinkan pengguna untuk menambahkan, mengedit, menghapus, mencari, serta memfilter buku berdasarkan status seperti: **Sudah Dimiliki**, **Sedang Dibaca**, atau **Ingin Dibeli**. Selain itu, tersedia juga tampilan statistik koleksi dalam bentuk visual untuk memberikan insight yang lebih informatif.

🔗 **Live Demo:** [https://pemrograman-web-itera-122140194.vercel.app/](https://pemrograman-web-itera-122140194.vercel.app/)

---

## 🚀 Cara Instalasi & Menjalankan Aplikasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi secara lokal:

```bash
# 1. Clone repositori
git clone https://github.com/Dreeept/pemrograman_web_itera_122140194.git

# 2. Masuk ke direktori project
cd AndreTampubolon_122140194_pertemuan3

# 3. Install dependencies
npm install

# 4. Jalankan server lokal
npm start

# 5. Buka di browser
http://localhost:3000

# 6. Menjalankan Testing
npm test

Tampilan Antarmuka
Halaman Utama (Daftar Buku)
Menampilkan seluruh buku yang telah ditambahkan dengan fitur pencarian dan filter status.

Form Tambah/Edit Buku
Formulir untuk menambahkan atau memperbarui data buku.

Statistik Koleksi Buku
Visualisasi statistik seperti jumlah buku berdasarkan status dan total penulis unik.

⚙️ Teknologi & Fitur React yang Digunakan
✅ Functional Components & Hooks
Semua komponen dibangun dengan pendekatan functional components dan memanfaatkan hooks seperti:

useState, useEffect – Untuk mengelola state dan efek samping.

useContext – Untuk berbagi state global antar komponen.

useMemo – Untuk meningkatkan performa dengan memoization.

🌐 Context API
Digunakan untuk mengelola state global terkait data buku, filter, dan pencarian melalui BookContext. Ini menghindari penggunaan prop drilling.

🛠 Custom Hooks
useLocalStorage: Menyimpan dan mengambil data dari localStorage, agar data tetap tersedia meskipun halaman di-refresh.

useBookStats: Menghitung statistik seperti jumlah total buku, jumlah per status, dan total penulis unik.

🧭 React Router
Navigasi antar halaman dilakukan menggunakan react-router-dom, dengan komponen seperti:

<Routes>, <Route>, <Link>

useNavigate untuk navigasi programatik

🧪 Testing
Pengujian dilakukan dengan:
@testing-library/react

Jest

Yang diuji meliputi:

Fungsi utama (tambah, hapus, filter, statistik)

Komponen, context, dan custom hook

📌 Semua fungsi utama telah teruji dan berjalan sesuai harapan.

👤 Identitas
Nama: Andre

NIM: 122140194

Mata Kuliah: Pemrograman Web RB
```
