import fs from "node:fs/promises";
import { Book } from "../type.js";

export const writeBooks = async (books: Book[]) => {
  await fs.writeFile("./book.json", JSON.stringify(books, null , 2), "utf8");
};
