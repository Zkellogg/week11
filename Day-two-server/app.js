import { PrismaClient } from ".prisma/client";
const express = require("express");
const cors = require("cors");
const app = express();

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const users = await prisma.user.findAll();
  res.json(users);
});

app.listen(8080, () => {
  console.log("Running..");
});
