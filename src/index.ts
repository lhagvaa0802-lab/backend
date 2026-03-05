// import express from "express";
// import type { Response, Request } from "express";

// type Book = {
//   id: number;
//   title: string;
//   author: string;
// };
// let books = [
//   {
//     id: 1,
//     title: "Harry-1",
//     author: "Dorj",
//   },

//   {
//     id: 2,
//     title: "Harry-2",
//     author: "Dorj",
//   },
// ];

// const app = express();
// const port = "3000";
// app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello");
// });

// app.get("/books", (req: Request, res: Response) => {
//   res.status(200).send(books);
// });

// app.get("/books/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   const book = books.find((book) => String(book.id) === String(id));
//   res.status(200).send(book);
// });

// app.post("/books", (req: Request, res: Response) => {
//   const { title, author } = req.body;
//   const newBookId = books.length + 1;
//   const newBook: Book = { id: newBookId, title, author };

//   books.push(newBook);
//   res.send(books);
// });

// app.delete("/books/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   books = books.filter((book) => String(book.id) !== String(id));
//   res.status(200).send(books);
// });

// app.put("/books/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { title, author } = req.body;

//   const updatedBooks = books.map((book) => {
//     console.log("id", String(id));
//     if (String(book.id) === String(id)) {
//       return { ...book, title: title, author: author };
//     } else return book;
//   });

//   res.status(200).send(updatedBooks);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });

// import express from "express";
// import type { Response, Request } from "express";

// // type Todo = {
// //   id: number;
// //   task: string;
// //   isCompleted: boolean;
// // };

// let Todos = [
//   {
//     id: 1,
//     task: "Go to Grosery",
//     isCompleted: "Completed",
//   },

//   {
//     id: 2,
//     task: "Go to gym",
//     isCompleted: "Completed",
//   },
// ];

// const app = express();
// const port = "3000";
// app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello");
// });

// app.get("/Todos", (req: Request, res: Response) => {
//   res.status(200).send(Todos);
// });

// app.get("/Todos/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   const book = Todos.find((book) => String(book.id) === String(id));
//   res.status(200).send(book);
// });

// app.post("/Todos", (req: Request, res: Response) => {
//   const { task, isCompleted } = req.body;
//   const newTodoId = Todos.length + 1;
//   const newTodo = { id: newTodoId, task, isCompleted };

//   Todos.push(newTodo);
//   res.send(Todos);
// });

// app.delete("/Todos/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   Todos = Todos.filter((todo) => String(todo.id) !== String(id));
//   res.status(200).send(Todos);
// });

// app.put("/Todos/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { task, isCompleted } = req.body;

//   const updatedTodos = Todos.map((todo) => {
//     console.log("id", String(id));
//     if (String(todo.id) === String(id)) {
//       return { ...todo, task: task, isCompleted: isCompleted };
//     } else return todo;
//   });

//   res.status(200).send(updatedTodos);
// });

// import express from "express";
// import type { Response, Request } from "express";

// const app = express();
// const port = "3000";
// app.use(express.json());

// app.get("/student/:name", (req: Request, res: Response) => {
//   const { name } = req.params;
//   res.send(`Helle ${name}`);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });

// app.get("/filter", (req: Request, res: Response) => {
//   const { city, age } = req.query;

//   res.json({ id: 1, city, age });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });

// app.get("/", (req: Request, res: Response) => {
//   const token = String(req.headers.authorization).split(" ").slice(1);

//   console.log("token", token);

//   res.send("opk");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });

// app.get("/randompath", (req: Request, res: Response) => {
//   const path = req.path;
//   const method = req.method;
//   console.log("path", path);
//   console.log("method", method);

//   res.send("opk");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });

// app.get("/test", (req, res) => {
//   res.send(`Та ${req.path} зам руу ${req.method} хүсэлт илгээлээ`);
// });

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.get("/library/:category/:bookId", (req, res) => {
  const { category, bookId } = req.params;
  const { lang } = req.query;

  const apiKey = req.headers["x-api-key"];

  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      status: "Invalid key",
    });
  }

  res.json({
    status: "Valid",
    request_info: {
      method: req.method,
      path: req.path,
    },
    extracted_data: {
      category: category,
      id: bookId,
      language: lang,
      auth: "Verified",
    },
  });
});

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
