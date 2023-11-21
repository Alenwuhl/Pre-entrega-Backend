import express from "express";
import cartRouter from "./routes/carts.route.js"
import productRouter from "./routes/products.route.js"

const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter );
app.use("/api/carts", cartRouter);

app.listen(8080, () => console.log(`Server listening on port ${port}`))