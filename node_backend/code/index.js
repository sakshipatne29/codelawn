import express from 'express';
import bodyParser from 'body-parser';
import dbRoutes from './routes/operations.js'
import userRoutes from './routes/user.js'

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/dbOperations", dbRoutes);
app.use("/userOperations", userRoutes);
app.listen(PORT, "0.0.0.0",() => console.log(`Server running on port http://127.0.0.1:${PORT}`))