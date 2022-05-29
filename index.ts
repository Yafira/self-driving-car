import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
  isRunning?: boolean;
  respond: (events: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean
  steeringControl: Steering;
}

interface Events {
  [i: string]: boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`)
  }

  turn(direction: string) {
    this.execute(`Turn ${direction}`);
  }
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;

  constructor(props: AutonomousCarProps){
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  respond(events: Events) {
    if (!this.isRunning) {
        return console.log("The car is off.")
    }
  }
}


const steering = new SteeringControl();
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });

steering.turn('right');
// console.log(autonomousCar.respond(getObstacleEvents()))