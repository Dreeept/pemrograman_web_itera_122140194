# Import modul dengan 2 cara
import math_operations as mo
from math_operations import celsius_to_fahrenheit, celsius_to_kelvin

def main():
    print("\n === Perhitungan Geometri ===")
    # persegi
    sisi = 5
    print(f"Luas Persegi (sisi = {sisi}): {mo.luas_persegi(sisi)}")
    print(f"Keliling Persegi (sisi = {sisi}): {mo.keliling_persegi(sisi)}\n")

    # persegi panjang
    panjang = 8
    lebar = 3
    print(f"Luas Persegi Panjang (panjang = {panjang}, lebar = {lebar}): {mo.luas_persegi_panjang(panjang, lebar)}")
    print(f"Keliling Persegi Panjang (panjang = {panjang}, lebar = {lebar}): {mo.keliling_persegi_panjang(panjang, lebar)}\n")

    # lingkaran
    jari_jari = 7
    print(f"Luas Lingkaran (jari-jari = {jari_jari}): {mo.luas_lingkaran(jari_jari):.2f}")
    print(f"Keliling Lingkaran (jari-jari = {jari_jari}): {mo.keliling_lingkaran(jari_jari):.2f}\n")

    # suhu
    print("=== Konversi Suhu ===")
    celsius = 25
    print(f"{celsius}°C ke Fahrenheit: {celsius_to_fahrenheit(celsius):.2f}°F")
    print(f"{celsius}°C ke Kelvin: {celsius_to_kelvin(celsius):.2f}K \n")

if __name__ == "__main__":
    main()
