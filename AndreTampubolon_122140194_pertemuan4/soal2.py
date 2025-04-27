#Data mahasiswa
mahasiswa = [
    {"nama": "Andi", "nim": "123001", "nilai_uts": 78, "nilai_uas": 85, "nilai_tugas": 80},
    {"nama": "Budi", "nim": "123002", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 75},
    {"nama": "Citra", "nim": "123003", "nilai_uts": 90, "nilai_uas": 92, "nilai_tugas": 88},
    {"nama": "Dina", "nim": "123004", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58},
    {"nama": "Eka", "nim": "123005", "nilai_uts": 40, "nilai_uas": 45, "nilai_tugas": 50}
]

# fungsi hitung nilai akhir
def hitung_NA(uts, uas, tugas):
    return 0.3 * uts + 0.4 * uas + 0.3 * tugas

# fungsi tentukan grade
def tentukan_grade(nilai_akhir):
    if nilai_akhir >= 80:
        return "A"
    elif nilai_akhir >= 70:
        return "B"
    elif nilai_akhir >= 60:
        return "C"
    elif nilai_akhir >= 50:
        return "D"
    else:
        return "E"

# tambah nilai akhir dan grade ke dalam dictionary data mahasiswa
for mhs in mahasiswa:
    nilai_akhir = hitung_NA(mhs["nilai_uts"], mhs["nilai_uas"], mhs["nilai_tugas"])
    mhs["nilai_akhir"] = nilai_akhir
    mhs["grade"] = tentukan_grade(nilai_akhir)

# tampilkan data
print("\nData Nilai Mahasiswa")
print("="*80)
print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<15} {:<5}".format(
    "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"))
print("="*80)

for mhs in mahasiswa:
    print("{:<10} {:<10} {:<10} {:<10} {:<10} {:<15.2f} {:<5}".format(
        mhs["nama"], mhs["nim"], mhs["nilai_uts"], mhs["nilai_uas"],
        mhs["nilai_tugas"], mhs["nilai_akhir"], mhs["grade"]))

print("="*80)

# cari mahasiswa dengan nilai nilai_tertinggi dan nilai_terendah
nilai_tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
nilai_terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print(f"\nMahasiswa dengan nilai tertinggi:")
print(f"Nama: {nilai_tertinggi['nama']}, NIM: {nilai_tertinggi['nim']}, Nilai Akhir: {nilai_tertinggi['nilai_akhir']:.2f}, Grade: {nilai_tertinggi['grade']}")

print(f"\nMahasiswa dengan nilai terendah:")
print(f"Nama: {nilai_terendah['nama']}, NIM: {nilai_terendah['nim']}, Nilai Akhir: {nilai_terendah['nilai_akhir']:.2f}, Grade: {nilai_terendah['grade']} \n")
