const express = require("express");
const cortesRoute = require("./routes/corte");

// settings
const app = express();
const PORT = process.env.PORT || 3000;
app.set("token", process.env.TOKEN || "recipeT0k3n");
app.listen(PORT, () => console.log(`Escuchando en puerto", ${PORT}`));

// middlewares
app.use(express.json());
app.use("/api", cortesRoute);

// routes
app.get("/", (req, res) => {
    res.send("aquanet API");
});

