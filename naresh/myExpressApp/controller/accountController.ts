// controllers/accountController.ts

import { Request, Response, NextFunction } from "express";
import { createAccount, getAllAccounts, activateAccount } from "../service/accountService";

export const header = (req: Request, res: Response, next: NextFunction) => {
   // const header = req.headers["authorization"];
   const header={Authorization:"naresh"}

    if (!header) {
        return res.status(403).send("Access denied");
    }
    next();
};

export const createAccountHandler = (req: Request, res: Response) => {
    const { holder, type, balance } = req.body;
    const result = createAccount(holder, type, balance);

    if (typeof result === "string") {
        return res.status(400).json(result);
    }

    //res.json(result);
    console.log(result)
};

export const getAllAccountsHandler = (req: Request, res: Response) => {
    const accounts = getAllAccounts();
    res.json(accounts);
};

export const activateAccountHandler = (req: Request, res: Response) => {
    const accountNumber = parseInt(req.params.accno);
    const result = activateAccount(accountNumber);
    res.json(result);
};
