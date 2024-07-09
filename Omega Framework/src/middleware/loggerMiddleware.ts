import { AnyAction, Dispatch, MiddlewareAPI } from 'redux';
import Logger from '../utils/logger';

type Middleware = (
  api: MiddlewareAPI<Dispatch<AnyAction>, any>
) => (next: Dispatch<AnyAction>) => (action: any) => any;

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
    Logger.info('Dispatching action:', action);

    const result = next(action);

    Logger.info('Next state:', store.getState());

    return result;
};

export default loggerMiddleware;