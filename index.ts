import express, {json} from "express";
import "express-async-errors";


import router from "./routers/index.js";
import { handleErrors } from "./middlewares/handleErrors.js";


const app = express();

app.use(json());
app.use(router);
app.use(handleErrors);

const port = 5000;



app.listen(port, () =>{
    console.log(`Server is running on port ${port}.`)
})