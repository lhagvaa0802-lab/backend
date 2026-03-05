import fs from "node:fs/promises";

export const readBooks = async () => {
  try {
    const data = await fs.readFile("./book.json", { encoding: "utf8" });

    return data;
  } catch (err) {
    console.error(err);
  }
};
