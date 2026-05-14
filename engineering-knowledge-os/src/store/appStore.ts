import { create } from "zustand";

type AppState = {
  selectedDomain: string;
  searchQuery: string;
  setSelectedDomain: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  selectedDomain: "all",
  searchQuery: "",
  setSelectedDomain: (value) => set({ selectedDomain: value }),
  setSearchQuery: (value) => set({ searchQuery: value })
}));
