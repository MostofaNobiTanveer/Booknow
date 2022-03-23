import catchAsyncErrors from './catchAsyncErrors';
import ErrorHandler from '../utils/errorHandler';
import { getSession } from 'next-auth/react';

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const session = await getSession({ req });
  if (!session) {
    next(new ErrorHandler('Login required to access this resource', 401));
  }
  req.user = session.user;
  next();
});

export { isAuthenticatedUser };
