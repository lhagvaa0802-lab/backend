import express from "express";
import type { Response, Request } from "express";

type Book = {
  id: number;
  title: string;
  author: string;
};
let books = [
  {
    id: 1,
    title: "Harry-1",
    author: "Dorj",
  },

  {
    id: 2,
    title: "Harry-2",
    author: "Dorj",
  },
];

const app = express();
const port = "3000";
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.get("/books", (req: Request, res: Response) => {
  res.status(200).send(books);
});

app.get("/books/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const book = books.find((book) => String(book.id) === String(id));
  res.status(200).send(book);
});

app.post("/books", (req: Request, res: Response) => {
  const { title, author } = req.body;
  const newBookId = books.length + 1;
  const newBook: Book = { id: newBookId, title, author };

  books.push(newBook);
  res.send(books);
});

app.delete("/books/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  books = books.filter((book) => String(book.id) !== String(id));
  res.status(200).send(books);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
