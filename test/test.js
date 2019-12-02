import assert from 'assert';
import Rover from '../src/Rover';
import Platform from '../src/Platform';
import chai from 'chai';


describe('Platform', function() {
  it('should create a Platform with the correct properties', function() {
    const platform = new Platform(5, 5);
    assert.deepEqual([platform.x, platform.y], [5, 5]);
  });
  it('should throw an error if Platform coordinate are <= to 0', function() {
    chai.expect(() => new Platform(-1, -1)).to.throw('Coordinates need to be greater than 0');
  })
  it('should create Rovers on Platfrom', function() {
    const rover1 = new Rover(1, 2, 'N');
    const rover2 = new Rover(3, 3, 'E');
    const platform = new Platform(5, 5);
    platform.addRover(rover1);
    platform.addRover(rover2);
    assert.deepEqual([platform.x, platform.y, platform.rovers], [5, 5, [rover1, rover2]]);
  });
  it('should return true if outside the Platform', function() {
    const platform = new Platform(1, 1);
    platform.isOutside(1, 2);
    assert.equal(true, platform.isOutside(1, 2));
  });
});

describe('Rover', function() {
  it('should create a Rover with the correct properties', function() {
    const rover1 = new Rover(1, 2, 'N', '');
    const rover2 = new Rover(3, 3, 'E', '');
    assert.deepEqual([rover1.x, rover1.y, rover1.o], [1, 2, 'N']);
    assert.deepEqual([rover2.x, rover2.y, rover2.o], [3, 3, 'E']);
  });
});

describe('Rover', function() {
  it('should move a Rover according to the instructions', function() {
    const rover1 = new Rover(1, 2, 'N', 'LMLMLMLMM'.split(''));
    const rover2 = new Rover(3, 3, 'E', 'MMRMMRMRRM'.split(''));
    const platform = new Platform(5, 5);
    platform.addRover(rover1);
    platform.addRover(rover2);
    platform.moveRovers();
    assert.deepEqual([rover1.x, rover1.y, rover1.o], [1, 3, 'N']);
    assert.deepEqual([rover2.x, rover2.y, rover2.o], [5, 1, 'E']);
  });
  it("should not be able to go over the 'N' Platform limits", function() {
    const rover = new Rover(1, 2, 'N', 'MMMMMMMM'.split(''))
    const platform = new Platform(3, 3);
    platform.addRover(rover);
    platform.moveRovers();
    assert.equal(rover.y, 3)
  });
  it("should not be able to go over the 'W' Platform limits", function() {
    const rover = new Rover(1, 2, 'N', 'LMMMMMMM'.split(''))
    const platform = new Platform(3, 3);
    platform.addRover(rover);
    platform.moveRovers();
    assert.equal(rover.x, 0)
  });
  it("should not be able to go over the 'S' Platform limits", function() {
    const rover = new Rover(1, 2, 'N', 'LLMMMMMM'.split(''))
    const platform = new Platform(3, 3);
    platform.addRover(rover);
    platform.moveRovers();
    assert.equal(rover.y, 0)
  });
  it("should not be able to go over the 'E' Platform limits", function() {
    const rover = new Rover(1, 2, 'N', 'RMMMMMMM'.split(''))
    const platform = new Platform(3, 3);
    platform.addRover(rover);
    platform.moveRovers();
    assert.equal(rover.x, 3)
  });
});
