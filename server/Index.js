import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserRoutes from './routers/Users.js'
import DataRoutes from './routers/Data.js'

const app = express();
const PORT = 27017;
const CONNECTION_URL = "mongodb://localhost:27017/CapstoneDB";
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use('/User', UserRoutes)
app.use('/Data', DataRoutes)

app.use(cors());

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((e) => console.log(e)); 