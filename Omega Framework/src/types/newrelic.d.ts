declare global {
    interface Window {
        newrelic: {
            noticeError: (error: Error, customAttributes?: Record<string, any>) => void;
            addPageAction: (name: string, attributes?: Record<string, any>) => void;
        };
        NREUM?: {
            info?: any;
            init?: any;
            loader_config?: any;
            [key: string]: any;
        };
    }
}

export { };