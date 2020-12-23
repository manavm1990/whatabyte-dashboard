import { NextFunction, Request, Response } from "express";

export default (request: Request, response: Response, next: NextFunction) => {
  response.status(404).send("💩 not found! 🙅🏾‍♂️");
};
