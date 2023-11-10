import express from "express";
import { Request, Response } from "express";
import {
    createAccountHandler,
    getAllAccountsHandler,
    activateAccountHandler,
    header,
} from "./controller/accountController";

const app = express();
app.use(express.json());

app.post("/post", header, createAccountHandler);
app.get("/getallaccounts", getAllAccountsHandler);
app.put("/accounts/:accno/activate", activateAccountHandler);

app.listen(8000, () => {
    console.log("Server Running");
});
