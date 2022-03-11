export class UsersService {
    activeUsers: string [] = ['Max', 'Anna'];
    inactiveUsers: string [] = ['Chris', 'Manu'];
    processesNumber = 0;

    constructor() {}

    switchToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id])
        this.activeUsers.splice(id, 1)
    }

    switchToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id])
        this.inactiveUsers.splice(id, 1)
    }

    processLogger() {
        console.log('Number of processes: ', ++this.processesNumber);
    }
}
