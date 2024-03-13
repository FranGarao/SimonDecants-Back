import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 3001;

/*Import Routes*/
import usersRoutes from "./api/routes/users.routes";

app.get("/", usersRoutes);

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}\n\nHave a nice Development :)`
  );
});
