import config from "config";
import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";

const {
  AUTH: { issuer, audience },
} = config;

// Will have implicit access to 'req', 'res' and 'next()'
export default jwt({
  // Verify validity of JWT in any request payload
  // Obtain the 'secret' using Auth0 endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuer}.well-known/jwks.json`,
  }),

  // Validate audience and issuer
  audience,
  issuer,

  // Signing algorithm
  algorithms: ["RS256"],
});
