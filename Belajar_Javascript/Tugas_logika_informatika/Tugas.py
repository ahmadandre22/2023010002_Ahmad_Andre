# Program untuk mengecek kelayakan pengajuan pinjaman

def cek_kelayakan_pinjaman():
    # Input data dari pengguna
    print("\n=== Program Cek Kelayakan Pinjaman ===")
    
    try:
        # Meminta input umur
        umur = int(input("\nMasukkan umur Anda: "))
        
        # Meminta input pendapatan
        pendapatan = int(input("Masukkan pendapatan bulanan Anda (Rp): "))
        
        # Cek kelayakan berdasarkan syarat
        if umur >= 21 and pendapatan >= 3000000:
            print("\nAnda memenuhi syarat untuk pengajuan pinjaman")
        else:
            print("\nAnda belum memenuhi syarat untuk pengajuan pinjaman")
            
            # Memberikan detail alasan tidak memenuhi syarat
            if umur < 21:
                print(f"- Umur Anda ({umur} tahun) belum mencapai minimal 21 tahun")
            if pendapatan < 3000000:
                print(f"- Pendapatan Anda (Rp{pendapatan:,}) belum mencapai minimal Rp3,000,000")
    
    except ValueError:
        print("\nError: Mohon masukkan angka yang valid!")
        
    finally:
        # Tanya apakah ingin mengecek lagi
        print("\n" + "="*40)
        ulang = input("\nIngin mengecek lagi? (y/n): ").lower()
        if ulang == 'y':
            cek_kelayakan_pinjaman()

# Menjalankan program
if __name__ == "__main__":
    cek_kelayakan_pinjaman()