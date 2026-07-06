/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MataKuliah, Pertemuan, JadwalHari } from './types';

export const MATA_KULIAH_DATA: MataKuliah[] = [
  {
    id: 'mk-1',
    kode: 'TIF2341',
    nama: 'Pemrograman Web Lanjut',
    sks: 3,
    dosen: 'Yudi Irawan, S.Kom., M.T.',
    color: '#FFD6E8', // Soft pink
    bgColor: 'bg-[#FFF0F5]',
    borderColor: 'border-[#FFD6E8]',
    textColor: 'text-[#D81B60]',
    tagColor: 'bg-[#FCE4EC]',
    iconName: 'Globe',
  },
  {
    id: 'mk-2',
    kode: 'TIF2342',
    nama: 'Kecerdasan Buatan (AI)',
    sks: 3,
    dosen: 'Dr. Evizal Abdul Kadir, S.T., M.Eng.',
    color: '#E8DFF5', // Soft lavender
    bgColor: 'bg-[#F3E5F5]',
    borderColor: 'border-[#E1BEE7]',
    textColor: 'text-[#7B1FA2]',
    tagColor: 'bg-[#F3E5F5]',
    iconName: 'Cpu',
  },
  {
    id: 'mk-3',
    kode: 'TIF2343',
    nama: 'Rekayasa Perangkat Lunak',
    sks: 3,
    dosen: 'Sri Devi, S.Kom., M.Kom.',
    color: '#DDF3F5', // Soft teal-blue
    bgColor: 'bg-[#E0F7FA]',
    borderColor: 'border-[#B2EBF2]',
    textColor: 'text-[#00838F]',
    tagColor: 'bg-[#E0F7FA]',
    iconName: 'CodeXml',
  },
  {
    id: 'mk-4',
    kode: 'TIF2344',
    nama: 'Sistem Basis Data Lanjut',
    sks: 3,
    dosen: 'Dr. Apri Siswanto, S.Kom., M.Kom.',
    color: '#FFEAA7', // Soft apricot/peach
    bgColor: 'bg-[#FFF8E1]',
    borderColor: 'border-[#FFE082]',
    textColor: 'text-[#F57F17]',
    tagColor: 'bg-[#FFF8E1]',
    iconName: 'Database',
  },
  {
    id: 'mk-5',
    kode: 'TIF2345',
    nama: 'Jaringan Komputer',
    sks: 3,
    dosen: 'Windi Syahputra, S.T., M.T.',
    color: '#D4EDDA', // Soft green/mint
    bgColor: 'bg-[#E8F5E9]',
    borderColor: 'border-[#C8E6C9]',
    textColor: 'text-[#2E7D32]',
    tagColor: 'bg-[#E8F5E9]',
    iconName: 'Network',
  },
  {
    id: 'mk-6',
    kode: 'TIF2346',
    nama: 'Desain Pengalaman Pengguna (UI/UX)',
    sks: 2,
    dosen: 'Dwi Nabila Dhiya Ulhaq, M.Sn.', // A fun nod to the student!
    color: '#FFF3CD', // Soft yellow
    bgColor: 'bg-[#FFFDE7]',
    borderColor: 'border-[#FFF9C4]',
    textColor: 'text-[#F57F17]',
    tagColor: 'bg-[#FFFDE7]',
    iconName: 'Palette',
  }
];

export const PERTEMUAN_DATA: Pertemuan[] = [
  {
    id: 'p-1',
    matkulId: 'mk-1',
    namaMatkul: 'Pemrograman Web Lanjut',
    pertemuanKe: 1,
    topik: 'Pengenalan & Arsitektur React Vite',
    tanggal: '03 Maret 2026',
    isCompleted: true,
  },
  {
    id: 'p-2',
    matkulId: 'mk-1',
    namaMatkul: 'Pemrograman Web Lanjut',
    pertemuanKe: 2,
    topik: 'State Management & Custom Hooks',
    tanggal: '10 Maret 2026',
    isCompleted: true,
  },
  {
    id: 'p-3',
    matkulId: 'mk-2',
    namaMatkul: 'Kecerdasan Buatan (AI)',
    pertemuanKe: 1,
    topik: 'Introduction to Intelligent Agents',
    tanggal: '04 Maret 2026',
    isCompleted: true,
  },
  {
    id: 'p-4',
    matkulId: 'mk-2',
    namaMatkul: 'Kecerdasan Buatan (AI)',
    pertemuanKe: 2,
    topik: 'Uninformed & Informed Search Algorithms',
    tanggal: '11 Maret 2026',
    isCompleted: true,
  },
  {
    id: 'p-5',
    matkulId: 'mk-3',
    namaMatkul: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 1,
    topik: 'SDLC & Agile Methodology',
    tanggal: '05 Maret 2026',
    isCompleted: true,
  },
  {
    id: 'p-6',
    matkulId: 'mk-3',
    namaMatkul: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 2,
    topik: 'UML Diagram & Software Modeling',
    tanggal: '12 Maret 2026',
    isCompleted: false,
  },
  {
    id: 'p-7',
    matkulId: 'mk-4',
    namaMatkul: 'Sistem Basis Data Lanjut',
    pertemuanKe: 1,
    topik: 'Normalisasi Database & Relasi Kompleks',
    tanggal: '06 Maret 2026',
    isCompleted: true,
  },
  {
    id: 'p-8',
    matkulId: 'mk-4',
    namaMatkul: 'Sistem Basis Data Lanjut',
    pertemuanKe: 2,
    topik: 'Optimasi Query SQL & indexing',
    tanggal: '13 Maret 2026',
    isCompleted: false,
  },
  {
    id: 'p-9',
    matkulId: 'mk-5',
    namaMatkul: 'Jaringan Komputer',
    pertemuanKe: 1,
    topik: 'Konsep Dasar TCP/IP & OSI Layer',
    tanggal: '02 Maret 2026',
    isCompleted: true,
  },
  {
    id: 'p-10',
    matkulId: 'mk-5',
    namaMatkul: 'Jaringan Komputer',
    pertemuanKe: 2,
    topik: 'Subnetting & Routing Konfigurasi',
    tanggal: '09 Maret 2026',
    isCompleted: false,
  },
  {
    id: 'p-11',
    matkulId: 'mk-6',
    namaMatkul: 'Desain Pengalaman Pengguna (UI/UX)',
    pertemuanKe: 1,
    topik: 'Design Thinking & User Research',
    tanggal: '07 Maret 2026',
    isCompleted: true,
  },
  {
    id: 'p-12',
    matkulId: 'mk-6',
    namaMatkul: 'Desain Pengalaman Pengguna (UI/UX)',
    pertemuanKe: 2,
    topik: 'Wireframing & High-Fidelity Design',
    tanggal: '14 Maret 2026',
    isCompleted: false,
  }
];

export const JADWAL_HARI_DATA: JadwalHari[] = [
  {
    title: 'Senin',
    data: [
      {
        id: 's-1',
        matkulId: 'mk-5',
        namaMatkul: 'Jaringan Komputer',
        ruangan: 'Lab Jaringan Komputer - Lt. 3',
        jamMulai: '08:00',
        jamSelesai: '10:30',
        dosen: 'Windi Syahputra, S.T., M.T.',
        color: '#D4EDDA',
        bgColor: 'bg-[#E8F5E9]',
        textColor: 'text-[#2E7D32]'
      }
    ]
  },
  {
    title: 'Selasa',
    data: [
      {
        id: 's-2',
        matkulId: 'mk-1',
        namaMatkul: 'Pemrograman Web Lanjut',
        ruangan: 'Lab Komputasi - Lt. 2',
        jamMulai: '10:45',
        jamSelesai: '13:15',
        dosen: 'Yudi Irawan, S.Kom., M.T.',
        color: '#FFD6E8',
        bgColor: 'bg-[#FFF0F5]',
        textColor: 'text-[#D81B60]'
      }
    ]
  },
  {
    title: 'Rabu',
    data: [
      {
        id: 's-3',
        matkulId: 'mk-2',
        namaMatkul: 'Kecerdasan Buatan (AI)',
        ruangan: 'Ruang Seminar 2.4 - Lt. 2',
        jamMulai: '08:00',
        jamSelesai: '10:30',
        dosen: 'Dr. Evizal Abdul Kadir, S.T., M.Eng.',
        color: '#E8DFF5',
        bgColor: 'bg-[#F3E5F5]',
        textColor: 'text-[#7B1FA2]'
      }
    ]
  },
  {
    title: 'Kamis',
    data: [
      {
        id: 's-4',
        matkulId: 'mk-3',
        namaMatkul: 'Rekayasa Perangkat Lunak',
        ruangan: 'Kelas Teori 3.1 - Lt. 3',
        jamMulai: '13:30',
        jamSelesai: '16:00',
        dosen: 'Sri Devi, S.Kom., M.Kom.',
        color: '#DDF3F5',
        bgColor: 'bg-[#E0F7FA]',
        textColor: 'text-[#00838F]'
      }
    ]
  },
  {
    title: 'Jumat',
    data: [
      {
        id: 's-5',
        matkulId: 'mk-4',
        namaMatkul: 'Sistem Basis Data Lanjut',
        ruangan: 'Lab Basis Data - Lt. 2',
        jamMulai: '08:00',
        jamSelesai: '10:30',
        dosen: 'Dr. Apri Siswanto, S.Kom., M.Kom.',
        color: '#FFEAA7',
        bgColor: 'bg-[#FFF8E1]',
        textColor: 'text-[#F57F17]'
      }
    ]
  },
  {
    title: 'Sabtu',
    data: [
      {
        id: 's-6',
        matkulId: 'mk-6',
        namaMatkul: 'Desain Pengalaman Pengguna (UI/UX)',
        ruangan: 'Studio Kreatif - Lt. 1',
        jamMulai: '09:00',
        jamSelesai: '11:00',
        dosen: 'Dwi Nabila Dhiya Ulhaq, M.Sn.',
        color: '#FFF3CD',
        bgColor: 'bg-[#FFFDE7]',
        textColor: 'text-[#F57F17]'
      }
    ]
  }
];

export const PROFILE_DATA = {
  nama: 'Dwi Nabila Dhiya Ulhaq',
  npm: '233510384',
  universitas: 'Universitas Islam Riau',
  prodi: 'Teknik Informatika',
  fakultas: 'Fakultas Teknik',
  semester: 'Semester 4 (Genap)',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256',
};
