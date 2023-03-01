import cors from "cors"
import express from "express"

const app = express();
const port = process.env.PORT || 3001

app.listen(port , function() {
    console.log("Server started at port ", port );
    
})