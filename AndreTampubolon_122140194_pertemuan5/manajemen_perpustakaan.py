from abc import ABC, abstractmethod

# Abstract class
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._id = item_id  # protected
        self._title = title

    @abstractmethod
    def display_info(self):
        pass

    @property
    def title(self):
        return self._title

    @property
    def id(self):
        return self._id


# Subclass Book
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author  # private

    def display_info(self):
        return f"Book - ID: {self._id}, Title: {self._title}, Author: {self.__author}"

    @property
    def author(self):
        return self.__author


# Subclass Magazine
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue):
        super().__init__(item_id, title)
        self._issue = issue

    def display_info(self):
        return f"Magazine - ID: {self._id}, Title: {self._title}, Issue: {self._issue}"

    @property
    def issue(self):
        return self._issue


# Library class
class Library:
    def __init__(self):
        self.__collection = []

    def add_item(self, item: LibraryItem):
        self.__collection.append(item)

    def display_all_items(self):
        for item in self.__collection:
            print(item.display_info())

    def find_item(self, keyword):
        keyword_str = str(keyword).lower()
        for item in self.__collection:
            if str(item.id) == keyword_str or keyword_str in item.title.lower():
                print(item.display_info())


if __name__ == "__main__":
    library = Library()

    while True:
        # CLI menu
        print("\n=== Menu Perpustakaan ===")
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Tampilkan Semua Item")
        print("4. Cari Item")
        print("5. Keluar")
        pilihan = input("Pilih menu (1-5): ")

        if pilihan == "1":
            id = input("Masukkan ID Buku: ")
            title = input("Masukkan Judul Buku: ")
            author = input("Masukkan Nama Penulis: ")
            library.add_item(Book(id, title, author))
            print("Buku berhasil ditambahkan.")

        elif pilihan == "2":
            id = input("Masukkan ID Majalah: ")
            title = input("Masukkan Judul Majalah: ")
            issue = input("Masukkan Edisi Majalah: ")
            library.add_item(Magazine(id, title, issue))
            print("Majalah berhasil ditambahkan.")

        elif pilihan == "3":
            print("\n== Daftar Item di Perpustakaan ==")
            library.display_all_items()

        elif pilihan == "4":
            keyword = input("Masukkan Judul atau ID: ")
            print("\n== Hasil Pencarian ==")
            library.find_item(keyword)
            # Jika tidak ada item yang ditemukan, umumkan ke pengguna
            if not library.find_item(keyword):
                print("Item tidak ditemukan.")

        elif pilihan == "5":
            print("Terima kasih! Keluar dari program.")
            break

        else:
            print("Pilihan tidak valid. Coba lagi.")

