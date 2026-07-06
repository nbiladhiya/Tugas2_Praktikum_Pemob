/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MataKuliah {
  id: string;
  kode: string;
  nama: string;
  sks: number;
  dosen: string;
  color: string; // e.g. '#FFD6E8' (pastel pink), '#E8DFF5' (pastel lavender), etc.
  bgColor: string; // e.g. 'bg-pink-50'
  borderColor: string; // e.g. 'border-pink-200'
  textColor: string; // e.g. 'text-pink-700'
  tagColor: string; // e.g. 'bg-pink-100'
  iconName: string;
}

export interface Pertemuan {
  id: string;
  matkulId: string;
  namaMatkul: string;
  pertemuanKe: number;
  topik: string;
  tanggal: string;
  isCompleted?: boolean;
}

export interface ScheduleItem {
  id: string;
  matkulId: string;
  namaMatkul: string;
  ruangan: string;
  jamMulai: string;
  jamSelesai: string;
  dosen: string;
  color: string;
  bgColor: string;
  textColor: string;
}

export interface JadwalHari {
  title: string; // Nama Hari: "Senin", "Selasa", etc.
  data: ScheduleItem[];
}
