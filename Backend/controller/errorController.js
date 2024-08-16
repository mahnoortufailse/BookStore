const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorPro = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went wrong, please try again later.",
    });
  }
};

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path} : ${err.value}`;
  return new AppError(message, 400);
};
const handleDuplicateFieldDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value.`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const message = Object.values(err.errors).map((val) => val.message);
  return new AppError(message.join(". "), 400);
};
const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV == "production") {
    let error = { ...err };
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 1100) error = handleDuplicateFieldDB(error);
    if (error.name === "validationError")
      error = handleValidationErrorDB(error);

    sendErrorPro(error, res);
  } else if (process.env.NODE_ENV == "development") {
    sendErrorDev(err, res);
  }
};

export default globalErrorHandler;

// 500 Internal Server Error for server errors  (like database down, network issues etc.)  // 400 Bad Request for client errors (like invalid request parameters)  // 200 OK for success  (like user created, item fetched etc.)  // 300 Redirect for redirection (like login required etc.)  // 403 Forbidden for access denied (like user not authenticated etc.)  // 404 Not Found for resource not found (like user not found etc.)  // 500 Internal Server Error for server errors  (like database down, network issues etc.)  // 400 Bad Request for client errors (like invalid request parameters)  // 200 OK
