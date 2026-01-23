import { prisma } from "../prisma";
import { MarkupKey } from "./enums";
import { IMarkup } from "./interfaces";

export async function saveHtmlAndCss(key: MarkupKey, content: IMarkup): Promise<IMarkup> {
  await prisma.html.upsert({
    where: {
      key,
    },
    update: {
      content: content.html,
    },
    create: {
      key,
      content: content.html,
    },
  });

  await prisma.css.upsert({
    where: {
      key,
    },
    update: {
      content: content.css,
    },
    create: {
      key,
      content: content.css,
    },
  });

  await prisma.$disconnect();


  return content;
}
