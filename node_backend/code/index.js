import express from 'express';
import bodyParser from 'body-parser';
import dbRoutes from './routes/operations.js'

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/dbOperations", dbRoutes);

app.listen(PORT, () => console.log(`Server running on port http://127.0.0.1:${PORT}`))