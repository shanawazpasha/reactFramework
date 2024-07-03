import Logger from './logger';

const setupGlobalErrorHandler = () => {
    window.onerror = (message, source, lineno, colno, error) => {
        Logger.error('Global error:', message, source, lineno, colno, error);
        return false;
    };

    window.onunhandledrejection = (event) => {
        Logger.error('Unhandled rejection:', event.reason);
    };
};

export default setupGlobalErrorHandler;