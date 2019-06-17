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
            this.statut = "idle";
            this.direction;
            this.doorStatus = "closed";
            this.positionNow = 1;
            this.requestList = empty;
            this.numbersOfFloorRequestButton = NumbersOfFloor;
            this.originPosition1 = 7;
            this.originPosition2 = 1;
            this.floorRequestButton = {
                this.light = off;
                floor;
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
                elevator.floor -= 1 ;
                elevator.status = "moveDown";
            } else {
                elevator.floor += 1 ;
                elevator.status = "moveUP";
            }
            elevator.status = "stop"                        //pas certain que cest la que ca va
        }
};

function moveToOrigin2(elevator) {
    while (elevator.positionNow = elevator.originPosition2)
        do {
            if (elevator.positionNow > elevator.originPosition1) {
                elevator.floor -= 1 ;
                elevator.status = "moveDown";
            } else {
                elevator.floor += 1 ;
                elevator.status = "moveUP";
            }
            elevator.status = "stop"
        }
};

function move (elevator){
    if (elevator.requestList.floor[0] > elevator.positionNow) {
        while 
    }
}
