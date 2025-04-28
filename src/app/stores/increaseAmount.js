import { create } from "zustand";

const useCartStore = create((set, get) => ({
  items: [],

  addItem: (item) => {
    console.log("Produktet tilføjet til kurven!");

    //Her er logikken for nyprisen:
    const discountPercentage = item.discountPercentage / 100;
    const newPrice = Math.floor(item.price * (1 - discountPercentage));

    //logikken for tilføjelse af ny var & eller eksisterende.
    const existingItem = get().items.find((i) => i.id === item.id);
    if (existingItem) {
      set((state) => ({
        items: state.items.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        ),
      }));
    } else {
      set((state) => ({
        items: [...state.items, { ...item, price: newPrice, quantity: 1 }],
      }));
    }
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

  //usestate for shoppingCart icon
  isCartOpen: false,
  toggleCart: () =>
    set((state) => ({ isCartOpen: !state.isCartOpen }), console.log("KURV")), // Rettet her!
}));

export default useCartStore;
