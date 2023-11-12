const app = require("express")();

app.get("/get", (req,res) => {
    const id = req.query.id;
    res.send(`El valor del parámetro "id" es: ${id}`);
})








app.listen(9999, ()=>console.log("Listening on 9999"))




