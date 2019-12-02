# Mars Rover

A project about moving rovers on a platform on Mars - created with Node.js, Babel and Mocha

## General information about the design and assumptions

For this programme I have created two main classes, the Platform and the Rover class with a one to many relation (a platform can have many rovers). 

When the application is launched in the CLI, the user is prompted to enter the dimensions of the platform. The platform is created based on the input of the 2 integers. 

The next part is the creation and the movement of a rover by capturing the coordinates for the initial position and orientation of the rover along with the string of movement instructions.

The rover is then added to the Platform through an addRover(rover) function. Once all the rovers have been added they will all move sequentially using a moveRovers() function.

Inside the Rover class, I have utilised switch cases for each possible instruction (L, R, M) and called the methods inside the moves(platform) method.

As the platform is limited to a certain area, the movesForward(platform) method will move the rover up to the border of the platform only, without allowing it to go over the given limits. 

The user can add as many rovers as they like before they move.

## Getting started

To run this project, save it locally and open a CLI to install npm. Once installation completes, you will be able to interact with the application:

1. to install npm using the CLI `npm install`
2. to run the application `npm run start`
3. once the application has started running, the CLI will prompt the user to enter the required information step by step in order to move the rovers accordingly
	
## Technologies

Project created with:

* Node.js: 8.16.2
* Babel: 7.6.4
* Mocha: 6.2.2

## Running tests

You can run tests with the following command: `npm run test`
