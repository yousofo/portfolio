import { generateGeminiUI } from "@/lib/ai/gemini";
import { MarkupKey } from "@/lib/db/enums";
import { readHtmlAndCss } from "@/lib/db/readHtmlAndCss";
import { saveHtmlAndCss } from "@/lib/db/saveHtmlAndCss";
import css from "styled-jsx/css";

export async function POST(request: Request) {
  try {
    const data: { message: string; key: MarkupKey } = await request.json();

    //generate ui
    const markup = await generateGeminiUI(data.key, data.message);
    //save to db
    await saveHtmlAndCss(data.key, markup);

    console.log("-----aiHtml------", markup);

    return Response.json({
      html: markup.html,
      css: markup.css,
    });
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : "Unexpected error";

    return new Response(message, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const markup = await readUI(request.url);
    return Response.json(markup);
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : "Unexpected error";
    console.log("-----message------", message);
    return new Response(message, { status: 500 });
  }
}

function readUI(url: string) {
  const { searchParams } = new URL(url);
  const markupKey = searchParams.get("key");
  if (!markupKey) throw new Error("markupKey not found");
  return readHtmlAndCss(markupKey);
}
function generateUI(messaege: string) {
  console.log("-----messaege------", messaege);
  //ui generator
  return fetch("http://127.0.0.1:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model: "ui-generator", prompt: messaege, stream: false }),
  });
}
