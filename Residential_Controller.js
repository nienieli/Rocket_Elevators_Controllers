function init() {
    let floorNumber = 10;
    class Battery {
        constructor() {
            this.status = on;
            this.numbersOfColumn = 1;
            this.numbersOfCallButton = (floorNumber * 2) - 2;
            this.column = 1;
            this.callButtons = [];
            for (let i = 0; i < this.numbersOfCallButton; i++) {
                this.callButtons.push(new CallButton);
            }
            this.column = [];
            for (let i = 0; i < this.column; i++) {
                this.column.push(new Column);
            }
        }
    }

    class Column {
        constructor() {
            this.numbersOfElevators = 2;
            this.elevator = [];
            for (let i = 0; i < this.elevator; i++) {
                this.elevator.push(new Elevator);
            }
        }
    }

    class CallButton {
        constructor() {
            this.UserFloors;
            this.direction;
            this.light = off;
        }
    };

    class Elevator {
        constructor() {
            this.floorNumber = floorNumber;
            this.status = "idle";
            this.direction;
            this.doorStatus = "closed";
            this.positionNow = 1;
            this.requestList = empty;
            this.numbersOfFloorRequestButton = NumbersOfFloor;
            this.originPosition1 = 7;
            this.originPosition2 = 1;
            this.floorRequestButton = {
                this.light = off;
                this.floor;
            }
        }
    }
}

// let elevator = new Elevator()
// elevator.moving

function moveToOrigin1(elevator) {
    while (elevator.positionNow = elevator.originPosition1)
        do {
            if (elevator.positionNow > elevator.originPosition1) {
                elevator.positionNow -= 1;
                elevator.status = "moveDown";
            } else {
                elevator.positionNow += 1;
                elevator.status = "moveUP";
            }
            elevator.status = "stop" //pas certain que cest la que ca va
        }
};

function moveToOrigin2(elevator) {
    while (elevator.positionNow = elevator.originPosition2)
        do {
            if (elevator.positionNow > elevator.originPosition1) {
                elevator.positionNow -= 1;
                elevator.status = "moveDown";
            } else {
                elevator.positionNow += 1;
                elevator.status = "moveUP";
            }
            elevator.status = "stop";
        }
};

function move(elevator) {
    if (elevator.requestList.floor[0] > elevator.positionNow) {
        while (elevator.requestList.floor[0] = elevator.positionNow)
            do {
                elevator.positionNow += 1;
                elevator.status = "moveUp";
            }
        elevator.status = "stop"
    } else if (elevator.requestList.floor[0] = elevator.positionNow) {
        elevator.status = "stop";
    } else {
        while (elevator.requestList.floor[0] = elevator.positionNow)
            do {
                elevator.positionNow -= 1;
                elevator.status = "moveDown"
            }
        elevator.status = "stop"
    }
    return elevator.status
}

function sortRequestList(elevator) {
    if (elevator.status = "moveUp") {
        // A FAIRE 
    } else if (elevator.status = "moveDown") {
        //A FAIRE 
    }
}

function elevatorStatus(elevator) {
    if (elevator.requestList.floor[0] || elevator.requestList.userFloor[0] > elevator.positionNow) {
        elevator.status = "moveUp"
    } else if (elevator.requestList.floor[0] || elevator.requestList.userFloor = elevator.positionNow) { // A VERIFIER 
        elevator.status = "stop"
    } else {
        elevator.status = "moveDown"
    }
}

function findElevator(CallButton && floorRequestButton) {
    best
    case = 1;
    selectedElevator = 1;
    this.elevator = [];
    for (let i = 0; i < this.elevator; i++) {
        this.elevator.push(new Elevator);
    }
    //  closestElevator = ABSOLUTE POSITION OF ???
    if (elevator.status = "idle") {
        new bestCase = NumbersOfFloor + 1 - closestElevator
    } else if (elevator.status = "moveDown") {
        CallButton.userFloor > elevator.positionNow
        new bestCase = 1
    } else if (CallButton < elevator.positionNow && CallButton.direction = elevatorStatus) {
        new bestCase = NumbersOfFloor + 2 - closestElevator
    } else if (CallButton < elevator.positionNow && CallButton.direction = elevatorStatus) {
        new bestCase = NumbersOfFloor + 1 - closestElevator
    };
    else if (elevator.status = "moveUp") {
        if (CallButton.userFloor < elevator.positionNow) {
            new bestCase = 1
        } else if (CallButton.userFloor > elevator.positionNow && CallButton.direction = elevator.status) {
            new bestCase = NumbersOfFloor + 2 - closestElevator
        } else if (allButton.userFloor > elevator.positionNow && CallButton.direction = elevator.status) {
            new bestCase = NumbersOfFloor + 1 - closestElevator
        }
    }
    if (new bestCase > bestCase) {
        selectedElevator = elevator;
        bestCase = new bestCase;
    }
    return selectedElevator.requestList(CallButton.floor)
}