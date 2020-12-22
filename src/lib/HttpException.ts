export default class HttpException extends Error {
  statusCode: number;

  // Auth0 uses 'status' 😕
  status: number | undefined;

  message: string;

  error: string | null;

  constructor(statusCode: number, message: string, error?: string) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.error = error || null;
  }
}
