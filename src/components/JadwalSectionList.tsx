/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { JADWAL_HARI_DATA } from '../data';
import { ScheduleItem } from '../types';

export default function JadwalSectionList() {
  const [activeDayFilter, setActiveDayFilter] = useState<string>('all');

  // Filter sections based on selection for interactive experience
  const displayedSections = activeDayFilter === 'all'
    ? JADWAL_HARI_DATA
    : JADWAL_HARI_DATA.filter(section => section.title.toLowerCase() === activeDayFilter.toLowerCase());

  return (
    <div className="space-y-4">
      {/* Dynamic Sub-header detailing method */}
      <div className="rounded-2xl bg-[#FFF9FB] p-4 border border-[#FFE8ED] flex items-start gap-3">
        <div className="rounded-xl bg-[#FFF0F4] p-2 text-pink-500">
          <Icons.CalendarDays size={18} />
        </div>
        <div>
          <h3 className="font-display font-bold text-sm text-[#5c4a52]">
            Metode Rendering: <code className="bg-[#FFF0F4] px-1.5 py-0.5 rounded text-pink-600 font-mono text-xs">&lt;SectionList&gt;</code>
          </h3>
          <p className="text-xs text-[#8a727d] mt-1 leading-relaxed">
            Menampilkan jadwal kuliah yang dikelompokkan berdasarkan hari kuliah (Senin-Sabtu) menggunakan konsep data terstruktur seksi. Header hari didesain khusus agar kontras secara visual.
          </p>
        </div>
      </div>

      {/* Interactivity: Quick Filter by Day */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FFF5F8] rounded-2xl border border-pink-100/60 max-w-full overflow-x-auto">
        <button
          onClick={() => setActiveDayFilter('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            activeDayFilter === 'all'
              ? 'bg-pink-500 text-white shadow-xs'
              : 'text-[#8a727d] hover:bg-pink-50 hover:text-pink-600'
          }`}
        >
          Semua Hari
        </button>
        {JADWAL_HARI_DATA.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDayFilter(s.title)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeDayFilter === s.title
                ? 'bg-pink-500 text-white shadow-xs'
                : 'text-[#8a727d] hover:bg-pink-50 hover:text-pink-600'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Simulated Scrollable SectionList */}
      <div className="bg-[#FFFDFE] rounded-3xl p-5 border border-[#FFE2EA] space-y-6 max-h-[550px] overflow-y-auto">
        {displayedSections.map((section, sIdx) => (
          <div key={`section-${sIdx}`} className="space-y-3">
            
            {/* SECTION HEADER (GAYA BERBEDA AGAR NAMA HARI TERLIHAT JELAS) */}
            <div className="flex items-center gap-2 sticky top-0 bg-white/95 backdrop-blur-xs py-1.5 z-10">
              <div className="bg-pink-100/80 px-4 py-1.5 rounded-full border border-pink-200/60 shadow-xs flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
                <h3 className="font-display font-bold text-sm text-[#D81B60] tracking-wide uppercase">
                  Hari {section.title}
                </h3>
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-pink-200 to-transparent"></div>
              <span className="text-[10px] font-mono text-[#aa909d]">
                {section.data.length} Sesi Kuliah
              </span>
            </div>

            {/* SECTION DATA ITEMS */}
            <div className="grid grid-cols-1 gap-3 pl-2">
              {section.data.map((item: ScheduleItem, iIdx) => (
                <div
                  key={`item-${item.id}-${iIdx}`}
                  className={`relative overflow-hidden rounded-2xl p-4 border transition-all duration-300 hover:shadow-xs hover:translate-x-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${item.bgColor} border-pink-100/50`}
                >
                  {/* Left accent bar matching subject color */}
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1.5"
                    style={{ backgroundColor: item.color }}
                  ></div>

                  {/* Left Details */}
                  <div className="space-y-1.5 pl-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-display font-bold text-sm text-[#4a3a41]">
                        {item.namaMatkul}
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#8a727d]">
                      <span className="flex items-center gap-1">
                        <Icons.User size={12} className="opacity-70" />
                        {item.dosen}
                      </span>
                    </div>
                  </div>

                  {/* Right Room & Time Details */}
                  <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-pink-100/40 pt-2.5 sm:pt-0 gap-2 font-mono text-xs">
                    <span className="flex items-center gap-1 bg-white/70 px-2.5 py-1 rounded-xl border border-pink-100 text-[#5c4a52] font-semibold text-[11px]">
                      <Icons.MapPin size={11} className="text-pink-400" />
                      {item.ruangan}
                    </span>
                    <span className="flex items-center gap-1.5 bg-pink-100/50 px-2.5 py-1 rounded-xl text-pink-700 font-bold text-[11px]">
                      <Icons.Clock size={11} className="text-pink-500" />
                      {item.jamMulai} - {item.jamSelesai} WIB
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Styled Footnote for compliance validation */}
      <div className="bg-[#FFF9FA] p-3.5 rounded-2xl border border-[#FFE2EA] text-center">
        <p className="text-[11px] text-[#8a727d] flex items-center justify-center gap-1.5">
          <Icons.Info size={13} className="text-pink-400" />
          <span>Gaya visual <strong>Header Hari (Section Header)</strong> diimplementasikan secara terpisah untuk menjamin kontras estetis di atas list.</span>
        </p>
      </div>
    </div>
  );
}
