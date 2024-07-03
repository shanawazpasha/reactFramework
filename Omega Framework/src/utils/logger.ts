class Logger {
    private isNewRelicAvailable(): boolean {
        return typeof window.newrelic !== 'undefined';
    }

    log(message: string, ...optionalParams: any[]) {
        console.log(message, ...optionalParams);
        if (this.isNewRelicAvailable()) {
            window.newrelic.addPageAction('log', { message, optionalParams });
        }
    }

    info(message: string, ...optionalParams: any[]) {
        console.info(message, ...optionalParams);
        if (this.isNewRelicAvailable()) {
            window.newrelic.addPageAction('info', { message, optionalParams });
        }
    }

    warn(message: string, ...optionalParams: any[]) {
        console.warn(message, ...optionalParams);
        if (this.isNewRelicAvailable()) {
            window.newrelic.addPageAction('warn', { message, optionalParams });
        }
    }

    error(message: string, ...optionalParams: any[]) {
        console.error(message, ...optionalParams);
        if (this.isNewRelicAvailable()) {
            window.newrelic.noticeError(new Error(message), optionalParams);
        }
    }
}

export default new Logger();