import { NextFunction, Request, Response } from "express";

export const testFunction = async (req: Request, res: Response) => {
    res.send({
      msg: "It works!",
    });
  };
  