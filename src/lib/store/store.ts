import { create } from "zustand";
import { MarkupKey } from "../db/enums";
const formHtml = await fetch("http://localhost:3000/api/v1/ui-generator?key=" + MarkupKey.contactForm).then((res) => res.json());

interface IStore {
  markup: {
    form: {
      html: string;
      css: string;
    };
  };
  updateForm: (newFormMarkup: { html: string; css: string }) => void;
}

const useStore = create<IStore>((set) => ({
  markup: {
    form: formHtml,
  },
  updateForm: (newFormMarkup: { html: string; css: string }) => set((state) => ({ markup: { ...state.markup, form: newFormMarkup } })),
}));

export default useStore;
