# 🌸 Sistem Jadwal Kuliah

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-Expo-ffb7d5?style=for-the-badge&logo=expo&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-Pastel%20Theme-c8b6ff?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Completed-f9c5d1?style=for-the-badge"/>
</p>

<p align="center">
  <b>📚 Sistem Jadwal Kuliah</b><br>
  Dibuat untuk memenuhi Tugas Praktikum Pemrograman Mobile.
</p>

---

## 👩‍🎓 Informasi Mahasiswa

|                   |                        |
| :---------------- | :--------------------- |
| **Nama**          | Dwi Nabila Dhiya Ulhaq |
| **NPM**           | 233510384              |
| **Program Studi** | Teknik Informatika     |
| **Universitas**   | Universitas Islam Riau |

---

## ✨ Deskripsi

Sistem Jadwal Kuliah merupakan aplikasi berbasis **React Native (Expo)** yang menggunakan **data statis (hardcode)** untuk menampilkan informasi jadwal perkuliahan mahasiswa.

Aplikasi ini mengimplementasikan tiga teknik rendering list pada React Native, yaitu:

* 🩷 `.map()`
* 💜 `FlatList`
* 🌸 `SectionList`

Seluruh fitur dikemas dalam antarmuka bertema **Pastel Clean Look Girly Minimalist** dengan tampilan modern, sederhana, dan nyaman digunakan.

---

# 📱 Fitur Aplikasi

### 🌷 Ringkasan Mata Kuliah (.map())

Menampilkan daftar seluruh mata kuliah yang diambil menggunakan **`.map()`** dari array statis.

Informasi yang ditampilkan:

* Nama Mata Kuliah
* Kode Mata Kuliah
* Jumlah SKS
* Dosen Pengampu

✅ Menggunakan **key** unik pada setiap item.

---

### 🌷 Daftar Pertemuan (FlatList)

Menampilkan minimal **10 pertemuan** dari seluruh mata kuliah menggunakan **FlatList**.

Informasi yang ditampilkan:

* Nama Mata Kuliah
* Pertemuan ke-
* Topik
* Tanggal

Implementasi props:

* ✅ keyExtractor
* ✅ ItemSeparatorComponent
* ✅ ListHeaderComponent
* ✅ ListEmptyComponent

---

### 🌷 Jadwal Kuliah per Hari (SectionList)

Menampilkan jadwal yang dikelompokkan berdasarkan hari menggunakan **SectionList**.

Informasi yang ditampilkan:

* Nama Mata Kuliah
* Ruangan
* Jam Kuliah

Header setiap hari dibuat berbeda agar lebih mudah dibedakan secara visual.

---

# 🎀 Tampilan Aplikasi

Aplikasi menggunakan konsep desain:

* 🌸 Pastel Pink
* 💜 Soft Lavender
* 🍑 Peach Accent
* 🤍 Clean & Minimalist Layout
* ✨ Rounded Card
* 🌷 Smooth Animation
* 📱 Mobile Mockup Style

---

# ⚙️ Teknologi

* React Native (Expo)
* TypeScript
* React
* CSS Modern
* Static Data (Hardcode)

---

# 📂 Struktur Komponen

```text
src/
│
├── components/
│   ├── StudentProfile.tsx
│   ├── MataKuliahMap.tsx
│   ├── PertemuanFlatList.tsx
│   ├── JadwalSectionList.tsx
│   └── DeveloperConsole.tsx
│
├── data.ts
├── types.ts
└── App.tsx
```

---

# 🌟 Implementasi yang Telah Dibuat

✔️ Halaman Ringkasan Mata Kuliah menggunakan `.map()`

✔️ Halaman Daftar Pertemuan menggunakan `FlatList`

✔️ Halaman Jadwal Harian menggunakan `SectionList`

✔️ Data bersumber dari array statis (hardcode)

✔️ Simulasi tampilan perangkat React Native (Expo)

✔️ Profil mahasiswa

✔️ Developer Console sebagai media pembelajaran kode React Native

✔️ Tema Pastel Clean Look Girly Minimalist

---

## 💖 Preview

> Sistem Jadwal Kuliah >  untuk memenuhi tugas 2 Praktikum Pemrograman Mobile.

---

<p align="center">
Made with 🤍 by <b>Dwi Nabila Dhiya Ulhaq</b><br>
Universitas Islam Riau • 2026
</p>
