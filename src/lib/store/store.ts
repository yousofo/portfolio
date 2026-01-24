import { create } from "zustand";
import { MarkupKey } from "../db/enums";

const formHtml = await fetch("http://localhost:3000/api/v1/ui-generator?key=" + MarkupKey.contactForm)
  .then((res) => res.json())
  .catch((err) => ({
    html: "",
    css: "",
  }));

interface IStore {
  markup: {
    form: {
      html: string;
      css: string;
    };
  };
  ui: {
    projects: {
      inView: number;
    };
  };
  updateUI: (newUI: Partial<IStore["ui"]>) => void;
  updateForm: (newFormMarkup: { html: string; css: string }) => void;
}

const useStore = create<IStore>((set) => ({
  markup: {
    form: formHtml,
  },
  ui: {
    projects: {
      inView: 0,
    },
  },
  updateUI: (newUI: Partial<IStore["ui"]>) => set((state) => ({ ui: { ...state.ui, ...newUI } })),
  updateForm: (newFormMarkup: { html: string; css: string }) =>
    set((state) => ({ markup: { ...state.markup, form: newFormMarkup } })),
}));

export default useStore;
