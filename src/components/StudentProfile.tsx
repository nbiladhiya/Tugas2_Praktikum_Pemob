/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, Heart, Sparkles, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data';

export default function StudentProfile() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFEAF2] via-[#FDF0F6] to-[#EBF3FE] p-6 shadow-sm border border-[#FFE2EF]">
      {/* Decorative Pastel Bubbles */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#FFD3E8] opacity-30 blur-xl"></div>
      <div className="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-[#D6E6FF] opacity-40 blur-xl"></div>

      <div className="relative flex flex-col sm:flex-row items-center gap-5">
        {/* Avatar with Cute Girly Floating Sparkle */}
        <div className="relative">
          <div className="h-20 w-20 overflow-hidden rounded-2xl border-2 border-white bg-[#FFF0F5] shadow-sm flex items-center justify-center p-0.5">
            <img
              src={PROFILE_DATA.avatarUrl}
              alt={PROFILE_DATA.nama}
              className="h-full w-full rounded-xl object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF0F5] text-pink-400 shadow-sm border border-pink-100 animate-bounce">
            <Heart size={12} className="fill-pink-400" />
          </span>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-semibold text-pink-700">
              <Sparkles size={10} className="text-pink-500 fill-pink-500" />
              {PROFILE_DATA.semester}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              {PROFILE_DATA.prodi}
            </span>
          </div>

          <h2 className="font-display text-xl font-bold text-[#5c4a52] leading-tight flex items-center justify-center sm:justify-start gap-1">
            {PROFILE_DATA.nama}
          </h2>
          <p className="text-sm font-mono text-[#8a727d] mt-0.5">
            NPM: {PROFILE_DATA.npm}
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-4 text-xs text-[#7d6571]">
            <span className="flex items-center gap-1">
              <GraduationCap size={13} className="text-pink-400" />
              {PROFILE_DATA.universitas}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-blue-400" />
              Pekanbaru, Riau
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
