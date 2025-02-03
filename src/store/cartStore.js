import { create } from 'zustand';

function createCartStore() {
  return create((set) => ({
    items: [],
    addToCart: (item) =>
      set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id);
        return {
          items: existingItem
            ? state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              )
            : [...state.items, { ...item, quantity: 1 }],
        };
      }),
    removeFromCart: (id) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      })),
    updateQuantity: (id, quantity) =>
      set((state) => ({
        items:
          quantity === 0
            ? state.items.filter((item) => item.id !== id)
            : state.items.map((item) =>
                item.id === id ? { ...item, quantity } : item
              ),
      })),
    clearCart: () => set({ items: [] }),
  }));
}

export const useCartStore = createCartStore();
