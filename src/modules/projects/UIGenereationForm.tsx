"use client";
import { generateGeminiUI } from "@/lib/ai/gemini";
import { MarkupKey } from "@/lib/db/enums";
import { IMarkup } from "@/lib/db/interfaces";
import useStore from "@/lib/store/store";
import React, { FormEvent, useState } from "react";

interface IForm {
  message: string;
}

async function generateUI(markupKey: MarkupKey, message: string) {
  return fetch("http://localhost:3000/api/v1/ui-generator?key=" + markupKey, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, key: markupKey }),
  });
}

function UIGenereationForm() {
  const { updateForm } = useStore();
  const [form, setForm] = useState<IForm>({ message: "" });

  async function handleGenerateUI(event:  FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const aiHtml = await generateGeminiUI(MarkupKey.contactForm, form.message);
    const response = await generateUI(MarkupKey.contactForm, form.message);

    const aiData: IMarkup = await response.json();

    if (aiData) updateForm({ html: aiData.html, css: aiData.css });
  }

  return (
    <form onSubmit={handleGenerateUI} className="flex items-center h-10 *:h-full w-full max-w-xl fixed bottom-10">
      <input
        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
        value={form.message}
        type="text"
        className=" border border-gray-700 hover:border-gray-900 outline-none  rounded-s-md p-2 flex-1"
      />
      <button type="submit"   className=" bg-blue-500 hover:bg-blue-700 text-white font-bold   px-4 rounded-e-md cursor-pointer">
        Generate
      </button>
    </form>
  );
}

export default UIGenereationForm;
