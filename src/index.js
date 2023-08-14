const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json()); 

var num_arr = [[11, 21], [13, 42], [15, 26],17,8]; 

app.get("/", (_req, res) => {
    console.log(num_arr);
    res.send(`array: ${JSON.stringify(num_arr)}`);
});

app.post("/", (req, res) => {
    const newData = req.body;
    console.log("Received data:", newData);
    array.push(newData);

    res.send("The new entry is added");
    res.send(`array: ${JSON.stringify(num_arr)}`);
});

app.listen(PORT, () => {
    console.log(`THe Server is running on PORT:", ${PORT}`);
});