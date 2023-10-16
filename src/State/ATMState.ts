export abstract class ATMState {

    insertCard: () => void;
    ejectCard: () => void;
    insertPin: (pinEntered: number) => void;
    requestCash: (cashToWithdraw: number) => void;
}