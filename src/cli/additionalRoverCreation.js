import readlineSync from 'readline-sync';
import roverCreation from './roverCreation';

const askForAnotherRover = (platform) => {
  let answer = 'Y';
  while (answer.toUpperCase() !== 'N') {
    answer = readlineSync.question('Would you like to add another rover? Y/N: ');
    if (answer.toUpperCase() === 'Y') {
      roverCreation(platform);
    } else if (answer.toUpperCase() !== 'N') {
      answer = readlineSync.question('Please enter Y to create a new rover or N to see your rover(s) coordinates and exit: ');
    }
  }
  platform.moveRovers();
  console.log('Thank you!');
  platform.rovers.forEach((r, index) => {
    console.log(`Rover no.${index + 1} coordinates are: ${r.x} ${r.y} ${r.o}.`);
  });
  console.log('Goodbye!');
};

export default askForAnotherRover;
