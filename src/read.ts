import express from "express";
import type { Response, Request } from "express";
import { readBooks } from "./utils/read-book.js";
import { Book } from "./type.js";
import { error } from "node:console";
import { writeBooks } from "./utils/write-books.js";

const app = express();
const port = 3000;

app.use(express.json());

// app.get("/books", async (req: Request, res: Response) => {
//   const books = await readBooks();
//   console.log(books);

//   if (!books) {
//     res.status(500).json({ message: "failed", books: [] });
//     return;
//   }
//   const parsedBook: Book[] = JSON.parse(books);

//   res.status(200).json({ message: "succes", books: parsedBook });
// });

// app.get("/books/:id", async (req: Request, res: Response) => {
//   const books = await readBooks();
//   if (books === undefined) {
//     throw error;
//   }
//   const parsedBook: Book[] = JSON.parse(books);
//   const { id } = req.params;
//   const book = parsedBook.find((book) => String(book.id) === String(id));
//   res.status(200).send(book);
// });

// {----------------write---------}

app.post("/books", async (req: Request, res: Response) => {
  const { title, author } = req.body;
  const books = await readBooks();
  if (!books) {
    return;
  }

  const parsedBook: Book[] = JSON.parse(books);

  const newBook = {
    id: new Date().getTime(),
    title,
    author,
  };

  const updatedbook = [...parsedBook, newBook];

  await writeBooks(updatedbook);

  res.send(updatedbook);
});

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
