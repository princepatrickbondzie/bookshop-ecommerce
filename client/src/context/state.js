import create from "zustand";


// export const State = createContext();

export const useCounterState = create((set) => {
  return {
    counter: 0,
    increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
    decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
  };
});

// export const state = {
//   token: [token, setToken],
//   productsId:  ProductsId(),
//   userId: UserId(token)
// }


export const useCart = create((set) => {
  return {
    products: [],
    totalPrice: () =>
      set((state) => {
        const sum = state.products.reduce((cur, product) => cur + product.price, 0);
      }),
    addToCart: (product) =>
      set((state) => {
        //check if item is in cart
        const index = state.products.findIndex((it) => it.id === product.id);

        if (index !== -1) {
          const newState = state.products.map((stateProduct) => {
            if (stateProduct.id === product.id) {
              return { ...stateProduct, qty: stateProduct.qty + 1 };
            }
            return stateProduct;
          });

          return { products: newState };
        } else {
          return { products: [...state.products, { ...product, qty: 1 }] };
        }
      }),
    removeFromCart: (id) =>
      set((state) => {
        const newArray = state.products.filter((product) => product.id === id);
        return { products: newArray };
      }),
  };
});

export const useUserStore = create((get, set) => ({
  user: {
    token: "",
    isLoggedIn: false,
  },
  setAuthUser: (token) =>
    set((state) => ({ user: { token: token, isLoggedIn: true } })),
}));


