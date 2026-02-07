require("dotenv").config();

const express = require("express");
const cors = require("cors");

const spoilageRoutes = require("./routes/spoilageRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", spoilageRoutes);

app.get("/", (req, res) => {
    res.send("UrbanFlux Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
