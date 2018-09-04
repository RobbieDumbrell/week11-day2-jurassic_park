const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dino1;
  let dino2;
  let dino3;
  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    dino1 = new Dinosaur('t-rex', 'carnivore', 10)
    dino2 = new Dinosaur('diplodocus', 'omnivore', 20)
    dino3 = new Dinosaur('velociraptor', 'omnivore', 25)
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 10);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino1);
    assert.deepStrictEqual(park.dinosaurs, [dino1]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dino1);
    assert.deepStrictEqual(park.dinosaurs, [dino1]);
    park.removeDinosaur(dino1);
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    const actual = park.getMostPopularDinosaur();
    assert.strictEqual(actual, dino3);
  });

  it('should not be able to find most popular if has none', function(){
    const actual = park.getMostPopularDinosaur();
    assert.strictEqual(actual, null);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    const actual = park.getDinosaursOfSpecies('omnivore');
    assert.strictEqual(actual, [dino2, dino3]);
  });

  it('should be able to remove all dinosaurs of a particular species');

});
