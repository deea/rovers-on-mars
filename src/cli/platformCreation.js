import readlineSync from 'readline-sync';
import Platform from '../Platform';

const argsArray = (answer) => (
  answer.trim().split(' ').map((x) => parseInt(x, 10))
);

const createPlatform = (answer) => {
  const [x, y] = argsArray(answer);

  if (Number.isInteger(x) && Number.isInteger(y)) {
    try {
      return new Platform(x, y);
    } catch (e) {
      console.log(e.message);
    }
  }
  return undefined;
};

const platformCreation = () => {
  let platform = createPlatform(readlineSync.question('Enter the platform coordinates e.g. 5 5: '));

  while (platform === undefined) {
    platform = createPlatform(readlineSync.question('Please enter two numbers separated by a space as per the example: '));
  }
  console.log(`Thank you, your platform is ${platform.x} wide and ${platform.y} tall`);
  return platform;
};

export default platformCreation;
