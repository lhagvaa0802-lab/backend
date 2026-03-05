import express from "express";
import { readBooks } from "./utils/read-book.js";
import { writeBooks } from "./utils/write-books.js";
import { Book } from "./type.js";
const port = 3000;


const app=express()
app.use(express.json())


app.get("/books", async (req, res) => {
  const raw = await readBooks();
  const books = JSON.parse(raw);
  res.json(books);
});


app.get("/books/:id", async (req, res) => {
  const { id } = req.params;

  const raw = await readBooks();
  const books = JSON.parse(raw);

  const book = books.find((b: any) => b.id === Number(id));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});


app.post("/books", async (req, res) => {
  const { title, author } = req.body;


  if (!title || !author) {
    return res.status(400).json({ message: "title and author are required" });
  }
const raw = await readBooks();
const books = JSON.parse(raw);
 const newBook = {
    id: Date.now(),
    title,
    author,
  };

const updated = [...books, newBook];
 await writeBooks(updated);
res.status(201).json(updated);
});


app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const raw = await readBooks();
  const books = JSON.parse(raw);

  const updated = books.map((b: any) =>
    b.id === Number(id) ? { ...b, title, author } : b,
  );

  await writeBooks(updated);

  res.json(updated);
});


app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  
  const raw = await readBooks();
  const books = JSON.parse(raw);

 const filtered = books.filter((b: any) => b.id !== Number(id));

  await writeBooks(filtered);

  res.json(filtered);
});







app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
