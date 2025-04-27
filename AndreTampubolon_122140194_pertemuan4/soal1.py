# fungsi untuk menghitung BMI
def hitung_bmi(berat_badan, tinggi_badan):
    return berat_badan / (tinggi_badan * tinggi_badan)

# fungsi untuk menentukan kategori BMI
def kategori_bmi(bmi):
    if bmi < 18.5:
        return "berat badan anda kurang"
    elif 18.5 <= bmi < 25:
        return "berat badan normal"
    elif 25 <= bmi < 30:
        return "berat badan berlebih"
    else:
        return "Obesitas"

def main():
    # input pengguna
    berat_badan = float(input("Masukkan berat badan anda (kg): "))
    tinggi_badan = float(input("Masukkan tinggi badan anda (cm): "))
    tinggi_badan = tinggi_badan / 100  # ubah cm ke m
    
    # hitung BMI
    bmi = hitung_bmi(berat_badan, tinggi_badan)
    
    # print hasil
    print(f"\nBMI Anda adalah: {bmi:.5f}")
    print(f"Kategori: {kategori_bmi(bmi)} \n")
    
if __name__ == "__main__":
    main()
