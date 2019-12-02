class Rover {
  constructor(x, y, o, instructions = []) {
    this.x = x;
    this.y = y;
    this.o = o;
    this.setInstructions(instructions);
  }

  setInstructions(instructions) {
    this.commands = instructions;
  }

  moves(platform) {
    this.commands.forEach((command) => {
      switch (command) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'M':
          this.moveForward(platform)
          break;
      }
    });
  }

  turnLeft() {
    switch(this.o) {
      case 'N':
        this.o = 'W'
        break;
      case 'E':
        this.o = 'N'
        break;
      case 'S':
        this.o = 'E'
        break; 
      case 'W':
        this.o = 'S'
        break; 
    }
  }

  turnRight() {
    switch(this.o) {
      case 'N':
        this.o = 'E'
        break;
      case 'E':
        this.o = 'S'
        break;
      case 'S':
        this.o = 'W'
        break; 
      case 'W':
        this.o = 'N'
        break;
    }
  }

  moveForward(platform) {
    switch(this.o) {
      case 'N':
        this.y = Math.min(this.y + 1, platform.y)
        break;
      case 'E':
        this.x = Math.min(this.x + 1, platform.x)
        break;
      case 'S':
        this.y = Math.max(this.y - 1, 0)
        break; 
      case 'W':
        this.x = Math.max(this.x -1, 0)
        break;
    }
  }
}

export default Rover;
