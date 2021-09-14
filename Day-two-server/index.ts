import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use(express.urlencoded());

// app.get("/", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

// app.post('/', async (req,res) => {
//     const {email, name, password} = req.body;

//     const createUser = await prisma.user.create({
//         data: {
//             email: email,
//             password: password,
//             name: name
//         }
//     })
//     res.json(createUser)
// })

app.get("/allbooks", async (req, res) => {
  const allbooks = await prisma.book.findMany();
  res.json(allbooks);
});

app.post('/addbook', async (req,res) => {
    const {title, genre, publisher, year, imageURL} = req.body;

    const addBook = await prisma.book.create({
        data: {
           title,
           genre,
           publisher,
           year,
           imageURL
        }
    })
    res.json(addBook)
})



async function main() {
    // ... you will write your Prisma Client queries here

}


main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

const server = app.listen(8080, () =>
  console.log(`
🚀 Server ready at: http://localhost:8080`),
)
