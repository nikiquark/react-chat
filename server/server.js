const express = require('express')
const app = express()
const port = 5000

const cors = require('cors')
app.use(cors());

let data = [{"user":"Никита", "text":"Привет"},{"user":"Коля", "text":"Привет"} ]
app.use(express.json())
app.get('/api/message',(req, res)=>{res.json(data)})
app.post('/api/message',(req, res)=>{
    const message = req.body;
    console.log(message);
    // Проверка message
    data.push(message);
    res.json("OK");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))