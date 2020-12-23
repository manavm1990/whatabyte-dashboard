import { Handler } from "express";
import jwtAuthz from "express-jwt-authz";

export default (permissions: string): Handler =>
  jwtAuthz([permissions], {
    customScopeKey: "permissions",
    checkAllScopes: true,
    failWithError: true,
  });
