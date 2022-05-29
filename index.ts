import { getObstacleEvents } from './computer-vision';

interface AutonomousCarProps {
  isRunning?: boolean

}

class Car {
  isRunning = true;

  constructor(props: AutonomousCarProps){
    this.isRunning = props.isRunning;

  }
}

const autonomousCar = new Car({ isRunning: true });
console.log(autonomousCar.isRunning)

interface AutonomousCar implements Car {
  isRunning?: boolean;
}