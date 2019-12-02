import roverCreation from './src/cli/roverCreation';
import platformCreation from './src/cli/platformCreation';
import askForAnotherRover from './src/cli/additionalRoverCreation';

const platform = platformCreation();

roverCreation(platform);

askForAnotherRover(platform);
