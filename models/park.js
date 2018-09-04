const Park = function(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    if(this.dinosaurs.includes(dinosaur)){
        const dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
        this.dinosaurs.splice(dinosaurIndex, 1);
    }
}

Park.prototype.getMostPopularDinosaur = function(){
    if(this.dinosaurs.length > 0){
        let mostPopularDinosaur = this.dinosaurs[0];
    for (const dinosaur of this.dinosaurs){
        if(dinosaur.guestsAttractedPerDay > mostPopularDinosaur.guestsAttractedPerDay){
            mostPopularDinosaur = dinosaur;
        }
    }
    return mostPopularDinosaur;
    } else {
        return null;
    }
}

Park.prototype.getDinosaursOfSpecies = function(givenSpecies){
    let dinosaursOfGivenSpecies = [];

    for (const dinosaur of this.dinosaurs){
        if (dinosaur.species === givenSpecies){
         dinosaursOfGivenSpecies.push(dinosaur);
        }
    }
    return dinosaursOfGivenSpecies;
}

Park.prototype.removeDinosaursOfSpecies = function(givenSpecies){
    let remainingDinosaurs = [];
    for (const dinosaur of this.dinosaurs){
        if (dinosaur.species !== givenSpecies){
            remainingDinosaurs.push(dinosaur);
        }
    }
    this.dinosaurs = remainingDinosaurs;
}

module.exports = Park;