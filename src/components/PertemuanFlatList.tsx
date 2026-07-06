/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Layers, Trash2, RotateCcw, Filter, Sparkles, AlertCircle } from 'lucide-react';
import { PERTEMUAN_DATA } from '../data';
import { Pertemuan } from '../types';

export default function PertemuanFlatList() {
  const [items, setItems] = useState<Pertemuan[]>(PERTEMUAN_DATA);
  const [selectedMatkul, setSelectedMatkul] = useState<string>('all');

  // List of unique courses for the filter dropdown
  const uniqueCourses = Array.from(new Set(PERTEMUAN_DATA.map(p => p.namaMatkul)));

  // Simulated keyExtractor function
  const keyExtractor = (item: Pertemuan) => `pertemuan-${item.id}`;

  // Filter logic
  const filteredData = selectedMatkul === 'all' 
    ? items 
    : items.filter(p => p.namaMatkul === selectedMatkul);

  // Actions to test ListEmptyComponent
  const handleClearList = () => setItems([]);
  const handleResetList = () => {
    setItems(PERTEMUAN_DATA);
    setSelectedMatkul('all');
  };

  // Toggle single item completed state for engagement
  const toggleComplete = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  // 1. LIST HEADER COMPONENT (PROPS VIRTUAL IMPLEMENTATION)
  const ListHeaderComponent = () => (
    <div className="bg-gradient-to-r from-[#FFF5F8] to-[#FFF0F5] p-5 rounded-2xl border border-[#FFE2EA] mb-4">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div>
          <span className="text-[10px] font-bold text-pink-500 tracking-wider uppercase bg-pink-100 px-2 py-0.5 rounded-full">
            Props: ListHeaderComponent
          </span>
          <h4 className="font-display font-bold text-lg text-[#5c4a52] mt-1">
            Agenda Kelas &amp; Progress Pembelajaran
          </h4>
          <p className="text-xs text-[#8a727d] mt-0.5">
            Menampilkan total <strong className="text-pink-600 font-bold">{filteredData.length}</strong> rencana pertemuan perkuliahan.
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl shadow-xs border border-pink-100">
          <Calendar size={14} className="text-pink-400" />
          <span className="text-xs font-mono font-medium text-[#7d6571]">Semester Genap 2026</span>
        </div>
      </div>
    </div>
  );

  // 2. ITEM SEPARATOR COMPONENT (PROPS VIRTUAL IMPLEMENTATION)
  const ItemSeparatorComponent = () => (
    <div className="my-3 flex items-center justify-center px-4">
      <div className="w-full border-t border-dashed border-pink-100/80"></div>
      <div className="mx-2 h-1 w-1 rounded-full bg-pink-200"></div>
      <div className="w-full border-t border-dashed border-pink-100/80"></div>
    </div>
  );

  // 3. LIST EMPTY COMPONENT (PROPS VIRTUAL IMPLEMENTATION)
  const ListEmptyComponent = () => (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center rounded-2xl bg-[#FFF9FA] border border-dashed border-[#FFD2DF]">
      <div className="relative mb-4">
        <div className="h-16 w-16 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 animate-pulse border border-pink-100">
          <Trash2 size={24} className="opacity-80" />
        </div>
        <span className="absolute -top-1 -right-1 flex h-4 w-4 rounded-full bg-pink-200 border-2 border-white items-center justify-center">
          <Sparkles size={8} className="text-pink-600 fill-pink-600" />
        </span>
      </div>
      <span className="text-[10px] font-bold text-pink-500 tracking-wider uppercase bg-pink-100 px-2.5 py-0.5 rounded-full mb-2">
        Props: ListEmptyComponent
      </span>
      <h4 className="font-display font-semibold text-base text-[#5c4a52]">
        Daftar Pertemuan Kosong!
      </h4>
      <p className="text-xs text-[#8a727d] max-w-sm mt-1 leading-relaxed">
        Seluruh data simulasi pertemuan telah dihapus. Tekan tombol <strong>"Reset Data"</strong> di panel kontrol untuk mengembalikan jadwal.
      </p>
      <button
        onClick={handleResetList}
        className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-pink-500 hover:bg-pink-600 px-4 py-2 text-xs font-semibold text-white transition-colors cursor-pointer shadow-sm shadow-pink-100"
      >
        <RotateCcw size={12} />
        Reset Data Simulasi
      </button>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Dynamic Sub-header detailing method */}
      <div className="rounded-2xl bg-[#FFF9FB] p-4 border border-[#FFE8ED] flex items-start gap-3">
        <div className="rounded-xl bg-[#FFF0F4] p-2 text-pink-500">
          <Layers size={18} />
        </div>
        <div>
          <h3 className="font-display font-bold text-sm text-[#5c4a52]">
            Metode Rendering: <code className="bg-[#FFF0F4] px-1.5 py-0.5 rounded text-pink-600 font-mono text-xs">&lt;FlatList&gt;</code>
          </h3>
          <p className="text-xs text-[#8a727d] mt-1 leading-relaxed">
            Menampilkan rentetan topik per pertemuan mata kuliah (min. 10 item). Dilengkapi dengan representasi detail 4 properti wajib: <code className="text-pink-500 font-mono">keyExtractor</code>, <code className="text-pink-500 font-mono">ItemSeparatorComponent</code>, <code className="text-pink-500 font-mono">ListHeaderComponent</code>, dan <code className="text-pink-500 font-mono">ListEmptyComponent</code>.
          </p>
        </div>
      </div>

      {/* Control Panel to Demonstrate ListEmptyComponent and Filtering */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-pink-100/60 shadow-xs">
        {/* Course Filter */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-pink-50 text-pink-500">
            <Filter size={14} />
          </div>
          <span className="text-xs text-[#7d6571] font-medium hidden sm:inline">Filter Matkul:</span>
          <select
            value={selectedMatkul}
            onChange={(e) => setSelectedMatkul(e.target.value)}
            className="text-xs font-medium text-[#5c4a52] bg-[#FFF5F8] border border-pink-100 rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-pink-300"
          >
            <option value="all">Semua Mata Kuliah</option>
            {uniqueCourses.map((c, idx) => (
              <option key={idx} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Clear/Reset Actions */}
        <div className="flex items-center gap-2">
          {items.length > 0 ? (
            <button
              onClick={handleClearList}
              className="inline-flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 text-xs px-3 py-1.5 rounded-xl font-medium transition-colors cursor-pointer"
              title="Mengosongkan daftar untuk memicu ListEmptyComponent"
            >
              <Trash2 size={12} />
              Kosongkan List
            </button>
          ) : (
            <button
              onClick={handleResetList}
              className="inline-flex items-center gap-1 bg-pink-100 hover:bg-pink-200 text-pink-700 border border-pink-200 text-xs px-3 py-1.5 rounded-xl font-medium transition-colors cursor-pointer"
            >
              <RotateCcw size={12} />
              Reset Data
            </button>
          )}
        </div>
      </div>

      {/* Simulated Scrollable FlatList Device Container */}
      <div className="bg-[#FFFDFE] rounded-3xl p-4 border border-[#FFE2EA] shadow-inner max-h-[500px] overflow-y-auto">
        
        {/* Render List Header Component */}
        {items.length > 0 && <ListHeaderComponent />}

        {/* Render List Body */}
        {filteredData.length > 0 ? (
          <div>
            {filteredData.map((item, index) => {
              const uniqueKey = keyExtractor(item); // keyExtractor implementation
              
              return (
                <div key={uniqueKey}>
                  {/* FlatList Item Row */}
                  <div 
                    onClick={() => toggleComplete(item.id)}
                    className={`group cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 
                      ${item.isCompleted 
                        ? 'bg-[#F9F7F8] border-[#E8DFE2] opacity-75' 
                        : 'bg-white border-[#FFEAF0] hover:border-pink-300 hover:shadow-xs'}`}
                  >
                    {/* Tick box to track complete */}
                    <div className="pt-0.5">
                      <div className={`h-5 w-5 rounded-lg border flex items-center justify-center transition-all 
                        ${item.isCompleted 
                          ? 'bg-pink-500 border-pink-500 text-white shadow-xs' 
                          : 'border-pink-200 hover:border-pink-400 bg-white'}`}>
                        {item.isCompleted && <Sparkles size={10} className="fill-white" />}
                      </div>
                    </div>

                    {/* Meeting detail content */}
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[10px] font-bold text-[#8a727d] bg-[#FFF0F4] px-2 py-0.5 rounded-md">
                          Pertemuan Ke-{item.pertemuanKe}
                        </span>
                        <span className="text-[10px] font-mono text-[#aa909d] flex items-center gap-1">
                          <Calendar size={10} />
                          {item.tanggal}
                        </span>
                      </div>

                      <h4 className={`font-display font-bold text-sm text-[#4a3a41] leading-tight ${item.isCompleted ? 'line-through text-[#9a808d]' : ''}`}>
                        {item.topik}
                      </h4>

                      <p className="text-xs text-[#8a727d] font-semibold">
                        {item.namaMatkul}
                      </p>
                    </div>
                  </div>

                  {/* Render Item Separator Component (except for the last element) */}
                  {index < filteredData.length - 1 && <ItemSeparatorComponent />}
                </div>
              );
            })}
          </div>
        ) : (
          /* Render List Empty Component when empty */
          <ListEmptyComponent />
        )}
      </div>

      {/* FlatList Key Metrics and Props visual checklist */}
      <div className="bg-[#FFFBFD] p-3 rounded-2xl border border-pink-100/50 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] text-[#8a727d]">
        <div className="p-2 bg-white rounded-xl border border-pink-50">
          <span className="block font-bold text-pink-600 font-mono">keyExtractor</span>
          <span className="opacity-80">pertemuan-[id]</span>
        </div>
        <div className="p-2 bg-white rounded-xl border border-pink-50">
          <span className="block font-bold text-pink-600 font-mono">Separator</span>
          <span className="opacity-80">Dashed Divider</span>
        </div>
        <div className="p-2 bg-white rounded-xl border border-pink-50">
          <span className="block font-bold text-pink-600 font-mono">Header</span>
          <span className="opacity-80">Total &amp; Semester info</span>
        </div>
        <div className="p-2 bg-white rounded-xl border border-pink-50">
          <span className="block font-bold text-pink-600 font-mono">EmptyView</span>
          <span className="opacity-80">Reset &amp; Info illustration</span>
        </div>
      </div>
    </div>
  );
}
