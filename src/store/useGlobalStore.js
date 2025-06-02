import { getItem, setItem } from "@/lib/localStorage";
import { create } from "zustand";


const initialState = {
    isMenuOpen: getItem('isMenuOpen') ?? false,
  };


const useGlobalStore = create(
  (set) => ({
    ...initialState,
    toggleMenu: () => {
      set((state) => {
        setItem("isMenuOpen", !state.isMenuOpen);
        return { isMenuOpen: !state.isMenuOpen };
      });
    },
  })
);

export default useGlobalStore;
