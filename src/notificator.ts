export interface Notificator {
    send(message: string): void
}

export class Email implements Notificator {
    private receivers: string[];

    constructor(receivers: string[]) {
        this.receivers = receivers;
    }

    public send(message: string): void {
        this.receivers.forEach(receiver => {
            console.log(`Notifying Email message: ${message} to ${receiver}`);
        })
    }
}

export class SMS implements Notificator {
    private receivers: string[];

    constructor(receivers: string[]) {
        this.receivers = receivers;
    }

    public send(message: string): void {
        this.receivers.forEach(receiver => {
            console.log(`Notifying SMS message: ${message} to ${receiver}`);
        })
    }
}

export class Facebook implements Notificator {
    private receivers: string[];

    constructor(receivers: string[]) {
        this.receivers = receivers;
    }

    public send(message: string): void {
        this.receivers.forEach(receiver => {
            console.log(`Notifying Facebook message: ${message} to ${receiver}`);
        })
    }
}

export class BusinessMessaging implements Notificator {
    private receivers: string[];

    constructor(receivers: string[]) {
        this.receivers = receivers;
    }

    public send(message: string): void {
        this.receivers.forEach(receiver => {
            console.log(`Notifying BusinessMessaging message: ${message} to ${receiver}`);
        })
    }
}