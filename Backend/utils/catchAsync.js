export const catchAsync = fn => {
    return (req, res, next) => {
      fn(req, res, next).catch(next); // Ensures errors are passed to the error handler
    };
  };