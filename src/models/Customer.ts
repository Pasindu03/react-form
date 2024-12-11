export class Customer {
    name: string;
    email: string;
    passcode : string;
    phone: string;

    constructor(name: string, email: string, passcode: string, phone: string) {
        this.name = name;
        this.email = email;
        this.passcode = passcode;
        this.phone = phone;
    }
}