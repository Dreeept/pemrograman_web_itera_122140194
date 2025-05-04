# Sistem Manajemen Perpustakaan Sederhana

Proyek sederhana menggunakan konsep **Object-Oriented Programming (OOP)** dalam Python. Sistem dibuat dengan pendekatan class, inheritance, encapsulation, dan polymorphism.

## Fitur Utama

- Tambah item ke perpustakaan:
  - Buku (`Book`)
  - Majalah (`Magazine`)
- Menampilkan seluruh item yang tersedia
- Mencari item berdasarkan **judul** atau **ID**
- Interface berbasis teks (CLI Menu)

## Struktur Kelas

- `LibraryItem` _(Abstract Class)_: Dasar untuk semua jenis item
- `Book`: Subclass dari `LibraryItem` yang menyimpan data penulis
- `Magazine`: Subclass dari `LibraryItem` yang menyimpan data edisi
- `Library`: Mengelola koleksi item (menambah, menampilkan, mencari)

## Konsep OOP yang Digunakan

- **Inheritance**: `Book` dan `Magazine` mewarisi `LibraryItem`
- **Encapsulation**: Menggunakan atribut protected dan private
- **Polymorphism**: Method `display_info()` diimplementasikan berbeda pada masing-masing subclass
- **Abstraction**: `LibraryItem` sebagai abstract class dengan method abstract
- **Property Decorator**: Untuk mengakses atribut penting secara aman

## Cara Menjalankan Program

1. **Clone repository ini**

   ```bash
   git clone https://github.com/Dreeept/pemrograman_web_itera_122140194.git
   ```

2. **Masuk ke Direktori file**
   ```bash
   cd pemrograman_web_itera_122140194
   cd AndreTampubolon_122140194_pertemuan5
   cd manajemen_perpustakaan.py
   ```
3. **Jalankan Program**
   ```bash
   python manajemen_perpustakaan.py
   ```
4. **Ikuti Menu yang tersedia**
   ```
   === Menu Perpustakaan ===
    1. Tambah Buku
    2. Tambah Majalah
    3. Tampilkan Semua Item
    4. Cari Item
    5. Keluar
   ```
