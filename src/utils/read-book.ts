import fs from "node:fs/promises"
import { Book } from "../type.js";

export  const readBooks = async ()=>{
  const data = await fs.readFile("./book.json", "utf8")
  return data
}


