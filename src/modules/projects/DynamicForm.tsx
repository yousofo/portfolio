"use client";
import useStore from "@/lib/store/store";
import React from "react";

function DynamicForm() {
  const { markup } = useStore();

  return (
    <>
      <style>{markup.form.css}</style>
      <div className="contact-form" dangerouslySetInnerHTML={{ __html: markup.form.html }}></div>
    </>
  );
}

export default DynamicForm;
