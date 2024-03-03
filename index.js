require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app= express();

const discussionRoutes =  require("./Route/discussion.route");

app.use(cors());
app.use(express.json());

app.use("/discussions", discussionRoutes);

app.use("*", (req, res) => {
    res.status(404).send("Page not found, you are on a default route!..");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})

mongoose.connect(`${process.env.DB_URL}`)
    .then(() => console.log(`Database connected at ${process.env.DB_URL}`))
    .catch((error) => console.log(error));