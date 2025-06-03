import express from "express"
const app = express()
const port = 5000





app.get("/", (req, res) => {
    res.status(200).send("Tá funcionando")
})

app.listen(port, () => {
    console.log("Servidor iniciado na porta 5000");
})