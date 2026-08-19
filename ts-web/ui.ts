export interface SoundItem {
  id: string;
  name: string;
  type: 'preset' | 'sample';
  category: string;
}

export interface Pack {
  id: string;
  name: string;
  author: string;
  privacy: 'public' | 'private' | 'unlisted';
  allowedUsers?: string[];
  coverUrl: string;
  videoUrl?: string;
  description?: string;
  tags: string[];
  itemIds: string[];
  createdAt: number;
  favoritesCount: number;
}

export interface User {
  username: string;
  favorites: string[];
}

export const MOCK_OWNED_ITEMS: SoundItem[] = [
  { id: '1', name: '808 Bass Kick Heavy', type: 'sample', category: 'Drums' },
  { id: '2', name: 'Cyber Synth Lead - Serum', type: 'preset', category: 'Leads' },
  { id: '3', name: 'Analog Warm Pad', type: 'preset', category: 'Pads' },
  { id: '4', name: 'Hi-Hat Closed Vintage', type: 'sample', category: 'Drums' },
  { id: '5', name: 'Vocal Chop Dry', type: 'sample', category: 'Vocals' },
  { id: '6', name: 'Pluck Arp Poly', type: 'preset', category: 'Plucks' }
];

export const INITIAL_PACKS: Pack[] = [
  {
    id: 'pack-101',
    name: 'Retro Synthwave Essentials',
    author: 'SynthMaster',
    privacy: 'public',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80',
    description: 'A complete collection of authentic 80s synthesizer presets and drum hits.',
    tags: ['synthwave', 'retrowave', 'presets'],
    itemIds: ['1', '2', '3'],
    createdAt: Date.now() - 1000000,
    favoritesCount: 12
  },
  {
    id: 'pack-102',
    name: 'Future Bass Starter Kit',
    author: 'PulseSound',
    privacy: 'public',
    coverUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&q=80',
    description: 'High energy presets and punchy drum samples built for modern EDM producers.',
    tags: ['edm', 'bass', 'samples'],
    itemIds: ['1', '4', '5'],
    createdAt: Date.now() - 500000,
    favoritesCount: 25
  }
];
