import { create } from "zustand";

const useCartStore = create((set, get) => ({
  item: [],

  addItem: (item) => {
    set((state) => {
      const existingItem = state.item.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return { item: [...state.items, { ...item, quantity: 1 }] };
      }
    });
  },

  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    }));
  },

  incrementItemQuantity: (itemId) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decrementItemQuantity: (itemId) => {
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === itemId) {
          const newQuantity = Math.max(1, item.quantity - 1); // Sikrer at antallet ikke kommer under 1
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  GetTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));

export default useCartStore;
