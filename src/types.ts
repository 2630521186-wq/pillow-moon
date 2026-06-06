/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string; // e.g., "aspect-[4/3]" or "aspect-[3/4]"
  colSpan: string; // e.g., "md:col-span-7" or "md:col-span-5"
}

export interface JournalEntry {
  id: string;
  title: string;
  readTime: string;
  date: string;
  image: string;
}

export interface ExplorationItem {
  id: string;
  title: string;
  category: string;
  image: string;
  rotation: string; // degrees of rotation in visual layout
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}
