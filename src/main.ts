import express from "express"
import routes from "./routes/route";
const app = express();
const PORT = 8000;
app.use('/api',routes)
app.listen(PORT,()=>console.log(`Listening on port: ${PORT}`))

export default app