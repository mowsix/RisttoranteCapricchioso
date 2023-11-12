const app = require("express")();


app.post("/post", (req, res) => {
    res.send("Hola mundo post")
})


app.listen(9999, ()=>console.log("Listening on 9999"))




