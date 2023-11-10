// services/accountService.ts

import { Request } from "express";

interface Account {
    accno: number;
    names: string;
    acctype: string;
    status: string;
    accbalance: number;
}

const acc: Account[] = [];

export function createAccount(holder: string, type: string, balance: number): Account | string {
    const accnum = Math.floor(Math.random() * 10000);
    const accountnew: Account = {
        accno: accnum,
        names: holder,
        acctype: type,
        status: "pending",
        accbalance: balance,
    };
    const existingAccounts = acc.filter((account) => account.names === holder && account.acctype === type);
    if (existingAccounts.length >= 2) {
        return "You already have two accounts of this type.";
    }

    acc.push(accountnew);
    return accountnew;
}

export function getAllAccounts(): Account[] {
    return acc;
}

export function activateAccount(accountNumber: number): string {
    const account = acc.find((account) => account.accno === accountNumber);

    if (!account) {
        return "Account not found";
    }

    if (account.status === "active") {
        return "Account is already in active status";
    }

    account.status = "active";
    return "Account activated successfully";
}
