import { NextFunction, Request, Response } from "express";
import HttpException from "lib";

export default (
  error: HttpException,
  _: Request,
  response: Response,
  // ⚠️ MUST specify 4th param for Express to id this as 'error handling' fxn.
  __: NextFunction
): void => {
  const statusCode = error.statusCode || error.status || 500;
  const message = error.message || "💩 clucked up! 😞";
  response.status(statusCode).send(message);
};
