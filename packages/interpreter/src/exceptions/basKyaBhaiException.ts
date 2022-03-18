export default class BasKyaBhaiException extends Error {
    constructor(errorMessage: string) {
        const errorName = "BasKyaBhaiException";
        errorMessage = errorName + ": " + errorMessage;
        super(errorMessage);
        this.name = errorName;
        this.message = errorMessage
    }
}