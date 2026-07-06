/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as Icons from 'lucide-react';
import { MATA_KULIAH_DATA } from '../data';

export default function MataKuliahMap() {
  return (
    <div className="space-y-4">
      {/* Dynamic Sub-header detailing method */}
      <div className="rounded-2xl bg-[#FFF9FB] p-4 border border-[#FFE8ED] flex items-start gap-3">
        <div className="rounded-xl bg-[#FFF0F4] p-2 text-pink-500">
          <Icons.Code size={18} />
        </div>
        <div>
          <h3 className="font-display font-bold text-sm text-[#5c4a52]">
            Metode Rendering: <code className="bg-[#FFF0F4] px-1.5 py-0.5 rounded text-pink-600 font-mono text-xs">Array.prototype.map()</code>
          </h3>
          <p className="text-xs text-[#8a727d] mt-1 leading-relaxed">
            Menampilkan data ringkasan mata kuliah semester ini dengan melakukan perulangan langsung pada array statis menggunakan fungsi map ES6, lengkap dengan properti <code className="text-pink-500 font-mono">key</code> yang unik.
          </p>
        </div>
      </div>

      {/* Grid List rendered using .map() */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MATA_KULIAH_DATA.map((mk) => {
          // Dynamic Lucide Icon
          const IconComponent = (Icons as any)[mk.iconName] || Icons.BookOpen;

          return (
            <div
              key={mk.id} // Wajib key yang unik
              className={`group relative rounded-2xl p-5 border transition-all duration-300 hover:shadow-md hover:scale-[1.01] ${mk.bgColor} ${mk.borderColor}`}
            >
              {/* Cute top-right tag */}
              <div className="absolute top-4 right-4 flex items-center gap-1">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${mk.tagColor} ${mk.textColor}`}>
                  {mk.sks} SKS
                </span>
              </div>

              <div className="flex items-start gap-4">
                {/* Icon Container */}
                <div className={`rounded-xl p-3 bg-white/80 shadow-xs border ${mk.borderColor}`}>
                  <IconComponent className={`h-5 w-5 ${mk.textColor}`} />
                </div>

                {/* Course Details */}
                <div className="space-y-1 pr-14">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9a808d]">
                    {mk.kode}
                  </span>
                  <h4 className="font-display font-bold text-base text-[#4a3a41] group-hover:text-pink-600 transition-colors leading-tight">
                    {mk.nama}
                  </h4>
                  
                  <div className="pt-2 flex flex-col gap-1">
                    <span className="text-[11px] text-[#8a727d] flex items-center gap-1.5">
                      <Icons.User size={12} className="opacity-70" />
                      Dosen: <strong className="text-[#5c4a52] font-medium">{mk.dosen}</strong>
                    </span>
                    <span className="text-[11px] text-[#8a727d] flex items-center gap-1.5">
                      <Icons.BookOpen size={12} className="opacity-70" />
                      Status: <strong className="text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">Aktif</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative design accent */}
              <div className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-pink-400">
                <Icons.Sparkles size={14} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
