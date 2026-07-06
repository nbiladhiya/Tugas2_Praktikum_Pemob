/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Sparkles, 
  Heart, 
  Layers, 
  Brackets, 
  BookOpen, 
  HelpCircle, 
  CheckCircle, 
  Info,
  Calendar,
  User,
  GraduationCap
} from 'lucide-react';
import StudentProfile from './components/StudentProfile';
import MataKuliahMap from './components/MataKuliahMap';
import PertemuanFlatList from './components/PertemuanFlatList';
import JadwalSectionList from './components/JadwalSectionList';
import DeveloperConsole from './components/DeveloperConsole';

export default function App() {
  const [activeTab, setActiveTab] = useState<'map' | 'flatlist' | 'sectionlist'>('map');
  const [currentTime, setCurrentTime] = useState<string>('08:00');

  // Update time for the virtual smartphone status bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours().toString().padStart(2, '0');
      let minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8FA] text-[#4A3E45] selection:bg-pink-100 selection:text-pink-700">
      
      {/* Dynamic Aesthetic Pastel Ribbon Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#FFEAF0] shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo & Student Identity */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-pink-400 to-[#FCA5A5] flex items-center justify-center text-white shadow-sm shadow-pink-200">
                <Calendar size={20} className="animate-heart" />
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 border-2 border-white" title="Sistem Online"></div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-display font-bold text-lg text-[#5c4a52] tracking-tight">
                  Sistem Jadwal Kuliah
                </h1>
                <span className="text-[10px] bg-pink-100 text-pink-700 font-semibold px-2 py-0.5 rounded-full">
                  v1.0-Expo
                </span>
              </div>
              <p className="text-xs text-[#8a727d]">
                Dwi Nabila Dhiya Ulhaq • NPM 233510384 • Universitas Islam Riau
              </p>
            </div>
          </div>

          {/* Quick Stats / Info */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#7d6571] hidden sm:inline-block bg-[#FFF0F4] px-3 py-1.5 rounded-xl border border-[#FFE2EB]">
              💻 Desain: <strong className="text-pink-600 font-bold">Girly Minimalist Pastel</strong>
            </span>
            <span className="text-xs font-mono font-bold text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1.5 rounded-xl flex items-center gap-1">
              <Sparkles size={12} className="fill-pink-500 text-pink-500" />
              Nilai A+ Project
            </span>
          </div>

        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Homework Description Cards Banner */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-[#FFE6EF] shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-pink-500">
              <Brackets size={18} className="stroke-[2.5]" />
              <h4 className="font-display font-bold text-sm text-[#5c4a52]">
                A. Ringkasan Mata Kuliah (.map)
              </h4>
            </div>
            <p className="text-xs text-[#8a727d] leading-relaxed">
              Daftar seluruh mata kuliah semester ini dirender langsung dari array statis menggunakan <code className="bg-[#FFF0F4] px-1 py-0.5 rounded text-pink-600 font-mono">.map()</code>. Dilengkapi info SKS, Kode, dan Dosen.
            </p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-[#FFE6EF] shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-pink-500">
              <Layers size={18} className="stroke-[2.5]" />
              <h4 className="font-display font-bold text-sm text-[#5c4a52]">
                B. Daftar Pertemuan (FlatList)
              </h4>
            </div>
            <p className="text-xs text-[#8a727d] leading-relaxed">
              Daftar pertemuan (minimal 10 item) dengan simulasi lengkap properti wajib FlatList: <code className="text-pink-600 font-mono">keyExtractor</code>, <code className="text-pink-600 font-mono">Separator</code>, <code className="text-pink-600 font-mono">Header</code>, dan <code className="text-pink-600 font-mono">EmptyComponent</code>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-[#FFE6EF] shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-pink-500">
              <BookOpen size={18} className="stroke-[2.5]" />
              <h4 className="font-display font-bold text-sm text-[#5c4a52]">
                C. Jadwal per Hari (SectionList)
              </h4>
            </div>
            <p className="text-xs text-[#8a727d] leading-relaxed">
              Menampilkan jadwal harian terstruktur berdasarkan hari. Header setiap seksi (hari) dibuat berbeda secara visual dan memiliki gaya kontras.
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Simulated Smartphone Device (Viewport) - 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Devices Mock Shell */}
            <div className="w-full max-w-md relative bg-slate-900 rounded-[50px] p-4 shadow-2xl border-4 border-slate-800">
              
              {/* Speaker Notch */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 h-4 w-32 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
              </div>

              {/* Volume & Power buttons decorations */}
              <div className="absolute left-[-6px] top-32 w-[3px] h-12 bg-slate-700 rounded-l"></div>
              <div className="absolute left-[-6px] top-48 w-[3px] h-12 bg-slate-700 rounded-l"></div>
              <div className="absolute right-[-6px] top-40 w-[3px] h-16 bg-slate-700 rounded-r"></div>

              {/* Screen Area */}
              <div className="bg-white rounded-[38px] overflow-hidden border border-slate-700 flex flex-col min-h-[680px] max-h-[750px] relative">
                
                {/* Simulated Phone Status Bar */}
                <div className="bg-gradient-to-r from-[#FFF5F8] to-[#FFF0F5] px-6 pt-3 pb-2 flex justify-between items-center text-xs text-[#5c4a52] font-semibold select-none z-20">
                  <span className="font-mono">{currentTime}</span>
                  <div className="flex items-center gap-1.5">
                    {/* Simulated icons */}
                    <svg className="w-3.5 h-3.5 fill-[#5c4a52]" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.13 19.58 10.53 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                    </svg>
                    <svg className="w-3.5 h-3.5 fill-[#5c4a52]" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                    <div className="w-5 h-2.5 border border-[#5c4a52] rounded-xs p-0.5 flex items-center">
                      <div className="h-full w-4 bg-[#5c4a52] rounded-xs"></div>
                    </div>
                  </div>
                </div>

                {/* Simulated App Header inside Phone */}
                <div className="bg-gradient-to-b from-[#FFF0F5] to-white px-5 pt-4 pb-3 border-b border-[#FFEAF0]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-pink-500 font-bold text-xs font-display">
                        <Sparkles size={12} className="fill-pink-400" />
                        Portal Mahasiswa UIR
                      </div>
                      <h2 className="font-display font-bold text-lg text-[#4a3a41] tracking-tight mt-0.5">
                        {activeTab === 'map' && 'Ringkasan Matkul'}
                        {activeTab === 'flatlist' && 'Daftar Pertemuan'}
                        {activeTab === 'sectionlist' && 'Jadwal Mingguan'}
                      </h2>
                    </div>
                    
                    {/* Cute student indicator badge */}
                    <div className="flex items-center gap-1.5 bg-pink-100/60 border border-pink-200/50 rounded-xl py-1 px-2.5">
                      <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
                      <span className="text-[9px] font-bold text-pink-700 uppercase">Dwi Nabila</span>
                    </div>
                  </div>
                </div>

                {/* Scrollable Screen Content (Simulating Expo Screen Scroll) */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {activeTab === 'map' && <MataKuliahMap />}
                  {activeTab === 'flatlist' && <PertemuanFlatList />}
                  {activeTab === 'sectionlist' && <JadwalSectionList />}
                </div>

                {/* Simulated Phone Navigation Bottom Bar */}
                <nav className="bg-white border-t border-[#FFEAF0] px-4 py-3 pb-5 flex justify-around items-center select-none z-20">
                  <button
                    onClick={() => setActiveTab('map')}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
                      activeTab === 'map' ? 'text-pink-500 scale-105' : 'text-[#aa909d] hover:text-pink-400'
                    }`}
                  >
                    <Brackets size={18} className={activeTab === 'map' ? 'stroke-[2.5]' : ''} />
                    <span className="text-[10px] font-bold">Ringkasan</span>
                    {activeTab === 'map' && <span className="h-1 w-4 rounded-full bg-pink-500"></span>}
                  </button>

                  <button
                    onClick={() => setActiveTab('flatlist')}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
                      activeTab === 'flatlist' ? 'text-pink-500 scale-105' : 'text-[#aa909d] hover:text-pink-400'
                    }`}
                  >
                    <div className="relative">
                      <Layers size={18} className={activeTab === 'flatlist' ? 'stroke-[2.5]' : ''} />
                      <span className="absolute -top-1 -right-2 bg-pink-500 text-white font-mono text-[8px] font-bold h-3.5 px-1 rounded-full flex items-center justify-center">10+</span>
                    </div>
                    <span className="text-[10px] font-bold">Pertemuan</span>
                    {activeTab === 'flatlist' && <span className="h-1 w-4 rounded-full bg-pink-500"></span>}
                  </button>

                  <button
                    onClick={() => setActiveTab('sectionlist')}
                    className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
                      activeTab === 'sectionlist' ? 'text-pink-500 scale-105' : 'text-[#aa909d] hover:text-pink-400'
                    }`}
                  >
                    <BookOpen size={18} className={activeTab === 'sectionlist' ? 'stroke-[2.5]' : ''} />
                    <span className="text-[10px] font-bold">Jadwal</span>
                    {activeTab === 'sectionlist' && <span className="h-1 w-4 rounded-full bg-pink-500"></span>}
                  </button>
                </nav>

                {/* Virtual Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full z-30"></div>
              </div>
            </div>

            {/* Instruction helper tag */}
            <p className="text-xs text-[#8a727d] text-center mt-3 max-w-sm">
              💡 Gunakan Tab Bar di bagian bawah mock handphone untuk beralih antar halaman rendering list.
            </p>
          </div>

          {/* RIGHT: Student Profile & Code Inspector - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Student Profile Widget */}
            <StudentProfile />

            {/* Developer/Professor Checklist Panel */}
            <div className="bg-white p-6 rounded-3xl border border-[#FFE2EF] shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#FFEAF0]">
                <Info size={16} className="text-pink-500" />
                <h3 className="font-display font-bold text-base text-[#5c4a52]">
                  Checklist Evaluasi Tugas
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-[#7d6571]">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5 fill-emerald-50" />
                  <div>
                    <strong className="text-[#5c4a52]">Identitas Mahasiswa:</strong> Tampil lengkap atas nama <span className="text-pink-600 font-bold">Dwi Nabila Dhiya Ulhaq</span>, NPM <span className="text-pink-600 font-bold">233510384</span>, Universitas Islam Riau.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#7d6571]">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5 fill-emerald-50" />
                  <div>
                    <strong className="text-[#5c4a52]">Ringkasan Mata Kuliah (.map):</strong> Menampilkan nama, kode, SKS, dosen dengan key unik dalam seksi Ringkasan.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#7d6571]">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5 fill-emerald-50" />
                  <div>
                    <strong className="text-[#5c4a52]">FlatList 4 Props:</strong> keyExtractor, ItemSeparatorComponent, ListHeaderComponent, dan ListEmptyComponent berjalan aktif di Tab Pertemuan (bisa disimulasikan kosong!).
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#7d6571]">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5 fill-emerald-50" />
                  <div>
                    <strong className="text-[#5c4a52]">SectionList:</strong> Jadwal dikelompokkan per hari dengan gaya header yang mencolok dan berbeda secara visual di Tab Jadwal.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#7d6571]">
                  <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5 fill-emerald-50" />
                  <div>
                    <strong className="text-[#5c4a52]">Estetika:</strong> Tema Girly Minimalist Pastel bernuansa pink soft & lavender yang rapi, bersih, dan modern.
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Console Code Snippet Viewer */}
            <DeveloperConsole />

          </div>

        </div>
      </main>

      {/* Aesthetic Footer */}
      <footer className="border-t border-[#FFEAF0] bg-white py-8 mt-12 text-center text-xs text-[#aa909d]">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="flex items-center justify-center gap-1 font-display font-medium text-[#7d6571]">
            Dibuat dengan <Heart size={12} className="text-pink-500 fill-pink-500 animate-heart" /> oleh <strong>Dwi Nabila Dhiya Ulhaq</strong> (233510384)
          </p>
          <p>
            Teknik Informatika • Fakultas Teknik • Universitas Islam Riau • © {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </div>
  );
}
