class Platform {
  constructor(x, y) {
    if (x <= 0 || y <= 0) {
      throw new Error('Coordinates need to be greater than 0');
    }

    this.x = x;
    this.y = y;
    this.rovers = [];
  }

  addRover(rover) {
    this.rovers.push(rover);
  }

  moveRovers() {
    this.rovers.forEach((rover) => {
      rover.moves(this);
    });
  }

  isOutside(x, y) {
    return ((x > this.x || y > this.y) || (x < 0 || y < 0));
  }
}

export default Platform;
