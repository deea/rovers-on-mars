import readlineSync from 'readline-sync';
import Rover from '../Rover';


const argsArray = (answer) => (
  answer.toUpperCase().trim().split(' ').map((x) => (Number.isInteger(parseInt(x, 10)) ? (parseInt(x, 10)) : x))
);

const createRover = (answer, platform) => {
  const [x, y, direction] = argsArray(answer);

  const directionArr = ['N', 'E', 'S', 'W'];
  const checkDirection = () => directionArr.includes(direction);

  if (Number.isInteger(x) && Number.isInteger(y) && checkDirection()) {
    if (platform.isOutside(x, y)) {
      console.log('Your rover coordinates are outside the platform');
      return undefined;
    }
    return new Rover(x, y, direction);
  }
  return undefined;
};

const createInstructions = (answer) => {
  const instrArray = ['L', 'R', 'M'];
  const instructions = answer.toUpperCase().trim().split('');
  const checkInstructions = instructions.filter((x) => !instrArray.includes(x));

  if (checkInstructions.length <= 0) {
    return instructions;
  }
  return undefined;
};


const roverCreation = (platform) => {
  let rover = createRover(readlineSync.question('Please enter the rover coordinates and orientation (N, E, S, W) e.g. 1 3 N: '), platform);

  while (rover === undefined) {
    rover = createRover(readlineSync.question('Please enter two numbers and the letter of orientation (either N, E, S, W) separated by a space: '), platform);
  }

  let roverInstructions = createInstructions(readlineSync.question('Thank you, please enter the instructions for the rover e.g. MLMRMM: '));

  while (roverInstructions === undefined) {
    roverInstructions = createInstructions(readlineSync.question('Please enter the instructions as L for left, R for right, M for moving forward: '));
  }

  rover.setInstructions(roverInstructions);
  platform.addRover(rover);
};

export default roverCreation;
