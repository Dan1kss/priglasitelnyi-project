// const userINFO = document.querySelector("#input");
// const opportunity = document.querySelector("#checkbox");
import express from "express";
import cors from "cors";

import { create , read } from "./database";

const app= express();
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5500" }));// Разрешить запросы только отсюда

app.post('/', async (req, res) => { // Добавь async
    const gest = await create(req.body); // Добавь await
    res.status(201).send(gest);})
// app.post('/',(req,res)=>{
//     const gest = create(req.body)
//     res.status(201).send(gest)
//     console.log(gest)
// })

app.get('/',(req,res)=>{
    const ListGests=read()
    res.status(200).send(ListGests)
})
const PORT = process.env.port || 3000
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));