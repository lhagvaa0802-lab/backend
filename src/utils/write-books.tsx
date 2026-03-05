import fs from "node:fs/promises";
import { Book } from "../type.js";

export const writeBooks = async (books: Book[]) => {
  try {
    await fs.writeFile("/books.json", JSON.stringify(books));
  } catch (err) {
    console.log(err);
  }
};
