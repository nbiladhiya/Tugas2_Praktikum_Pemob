/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Code, BookOpen, Layers, Brackets, CheckCircle, Smartphone } from 'lucide-react';

export default function DeveloperConsole() {
  const [activeCodeTab, setActiveCodeTab] = useState<'map' | 'flatlist' | 'sectionlist'>('map');

  const codeSnippets = {
    map: `// 1. IMPLEMENTASI DENGAN ARRAY.MAP() (REACT NATIVE EXPO)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MATA_KULIAH_DATA } from './data';

export default function MataKuliahScreen() {
  return (
    <View style={styles.container}>
      {MATA_KULIAH_DATA.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.kode}>{item.kode}</Text>
          <Text style={styles.nama}>{item.nama}</Text>
          <Text style={styles.sks}>{item.sks} SKS</Text>
          <Text style={styles.dosen}>Dosen: {item.dosen}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: { padding: 16, backgroundColor: '#FFF0F5', borderRadius: 12, marginBottom: 12 },
  kode: { fontSize: 12, fontWeight: 'bold', color: '#D81B60' },
  nama: { fontSize: 16, fontWeight: 'bold', marginVertical: 4 },
  sks: { fontSize: 12, color: '#666' },
  dosen: { fontSize: 12, fontStyle: 'italic', marginTop: 4 }
});`,

    flatlist: `// 2. IMPLEMENTASI DENGAN FLATLIST (REACT NATIVE EXPO)
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { PERTEMUAN_DATA } from './data';

export default function PertemuanScreen() {
  // keyExtractor prop
  const keyExtractor = (item) => \`pertemuan-\${item.id}\`;

  // ItemSeparatorComponent prop
  const ItemSeparatorComponent = () => (
    <View style={styles.separator} />
  );

  // ListHeaderComponent prop
  const ListHeaderComponent = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Agenda Kelas & Progress</Text>
    </View>
  );

  // ListEmptyComponent prop
  const ListEmptyComponent = () => (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>Daftar Pertemuan Kosong!</Text>
    </View>
  );

  return (
    <FlatList
      data={PERTEMUAN_DATA}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>Pertemuan Ke-{item.pertemuanKe}</Text>
          <Text style={styles.topic}>{item.topik}</Text>
          <Text>{item.namaMatkul}</Text>
        </View>
      )}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}

const styles = StyleSheet.create({
  separator: { height: 1, backgroundColor: '#FFE2EA', marginVertical: 8 },
  header: { padding: 16, backgroundColor: '#FFF5F8' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  empty: { padding: 24, alignItems: 'center' },
  emptyText: { color: '#888' },
  item: { padding: 16, backgroundColor: 'white' },
  topic: { fontWeight: 'bold' }
});`,

    sectionlist: `// 3. IMPLEMENTASI DENGAN SECTIONLIST (REACT NATIVE EXPO)
import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import { JADWAL_HARI_DATA } from './data';

export default function JadwalScreen() {
  return (
    <SectionList
      sections={JADWAL_HARI_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.nama}>{item.namaMatkul}</Text>
          <Text style={styles.details}>{item.ruangan} | {item.jamMulai} - {item.jamSelesai}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>HARI {title.toUpperCase()}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: { padding: 10, backgroundColor: '#FFF0F4', borderRadius: 8, marginVertical: 6 },
  headerTitle: { fontWeight: 'bold', color: '#D81B60' },
  item: { padding: 16, backgroundColor: 'white', borderLeftWidth: 4, borderLeftColor: '#FFD6E8' },
  nama: { fontWeight: 'bold' },
  details: { color: '#666', fontSize: 12 }
});`
  };

  return (
    <div className="rounded-3xl bg-slate-900 text-slate-100 p-6 shadow-xl border border-slate-800 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400">
            <Code size={18} />
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-pink-300">
              Developer Code Inspector
            </h3>
            <p className="text-xs text-slate-400">
              Kompilasi kode React Native Expo yang diajukan dalam tugas
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
          <Smartphone size={12} className="text-pink-400 animate-pulse" />
          <span className="text-[10px] font-mono text-slate-300">Expo SDK 51</span>
        </div>
      </div>

      {/* Code Tab Selection */}
      <div className="flex bg-slate-950 p-1 rounded-xl gap-1">
        <button
          onClick={() => setActiveCodeTab('map')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeCodeTab === 'map'
              ? 'bg-pink-500 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Brackets size={12} />
          .map()
        </button>
        <button
          onClick={() => setActiveCodeTab('flatlist')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeCodeTab === 'flatlist'
              ? 'bg-pink-500 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Layers size={12} />
          FlatList
        </button>
        <button
          onClick={() => setActiveCodeTab('sectionlist')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeCodeTab === 'sectionlist'
              ? 'bg-pink-500 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <BookOpen size={12} />
          SectionList
        </button>
      </div>

      {/* Code Display */}
      <div className="relative rounded-2xl bg-slate-950 p-4 border border-slate-800 max-h-[350px] overflow-y-auto">
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-[10px] text-slate-400 font-mono">
          <CheckCircle size={10} className="text-emerald-400" />
          Validated Syntax
        </div>
        <pre className="text-xs font-mono text-pink-100/95 leading-relaxed whitespace-pre-wrap select-all selection:bg-pink-500/30 selection:text-white">
          {codeSnippets[activeCodeTab]}
        </pre>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/50 p-3 rounded-xl border border-slate-850">
        <span className="text-pink-400 font-bold">★ Note:</span>
        <span>Kode di atas adalah struktur standard React Native yang disimulasikan secara presisi dan fungsional pada visual browser ini.</span>
      </div>
    </div>
  );
}
