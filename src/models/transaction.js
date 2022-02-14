export default class Transaction {
    constructor({
        amount,
        sender,
        recipient,
    }) {
        this.amount = amount;
        this.sender = sender;
        this.recipient = recipient;
    }
}