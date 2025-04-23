import { create } from "zustand";
import { persist } from "zustand/middleware";

// const useStore = create(
//   persist((set, get) => ({
//     itemAmount: 0,
//     increaseItem: () => set({ itemAmount: get().itemAmount + 1 }),
//   }),)
// );

const useStore = create(
  persist(
    (set, get) => ({
      itemAmount: 0,
      increaseItem: () => set({ messages: get().itemAmount + 1 }),
    }),
    {
      name: "itemAmount-storage",
    }
  )
);
export default useStore;
