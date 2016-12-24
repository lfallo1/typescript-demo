(function(){
/*
type StringFormatter = (...p)=>void;

//CLASSES & ENUMS

enum Type {
  SUPERHERO,
  VILLAIN
};

class SpecialMove{
  private chargeNeeded: number;
  private currentCharge: number;
  private strength: number;
  private description: StringFormatter;
  private didKillDescription: StringFormatter;

  constructor(chargeNeeded: number = 3, strength: number = 25, description: StringFormatter, didKillDescription: StringFormatter){
    this.chargeNeeded = chargeNeeded > 0 ? chargeNeeded : 3;
    this.strength = strength > 0 && strength < 100 ? strength : 25;
    this.description = description;
    this.didKillDescription = didKillDescription;
    this.currentCharge = 0;
  }

  private isAvailable(){
    return this.currentCharge >= this.chargeNeeded;
  };

  addCharge(): void {
    if (this.currentCharge < this.chargeNeeded){
      this.currentCharge += 1;
    }
  };

  trySpecial(): [number, StringFormatter, StringFormatter] | boolean{
    if(this.isAvailable()){
      this.currentCharge = 0;
      return [this.strength, this.description, this.didKillDescription]
    }
    return false;
  };
}

class Fighter{
  private name: string;
  private alias: string;
  private description: string;
  private type: Type;
  private life: number;
  private attackPower: number;
  private special: SpecialMove;
  private attackDescriptions: StringFormatter[];
  private killDescription: StringFormatter;

  constructor(name, alias, description, type: Type, attackPower: number = 5, special: SpecialMove, killDescription: StringFormatter, attackDescriptions: StringFormatter[]){
    this.name = name;
    this.alias = alias;
    this.description = description;
    this.type = type;
    this.life = 100;
    this.attackPower = attackPower > 0 && attackPower < 25 ? attackPower : 5;
    this.special = special;
    this.attackDescriptions = attackDescriptions;
    this.killDescription = killDescription;
  };

  getAlias(){return this.alias; };

  getType(){return this.type; };

  getLife(){ return this.life; };

  decrementLife(amount: number){
    this.life -= amount;
  };

  attack(opponent: Fighter){
    if(this.life <= 0){ return; }

    const special = this.special.trySpecial();
    if(special){
      opponent.decrementLife(special[0]);
      if(opponent.getLife() <= 0){
        console.log(special[1](this.getAlias(), opponent.getAlias()));
        console.log(special[2](this.getAlias(), opponent.getAlias()));
        return;
      }
      console.log(special[1](this.getAlias(), opponent.getAlias()));
      return;
    }

    const damage = Math.floor(Math.random()*this.attackPower) + 1;
    opponent.decrementLife(damage);
    if(opponent.getLife() <= 0){
      console.log(this.killDescription(this.getAlias(), opponent.getAlias()));
      return;
    }
    const attackDescription = this.attackDescriptions[Math.floor(Math.random() * this.attackDescriptions.length)];
    console.log(`${attackDescription(this.getAlias(), opponent.getAlias())} - ${damage}`);
    this.special.addCharge();
  }
}

//GENERAL FUNCTIONS

function fight(superhero: Fighter, villain: Fighter){
  if(superhero && villain && superhero.getType() === Type.SUPERHERO && villain.getType() === Type.VILLAIN){

    while(superhero.getLife() > 0 && villain.getLife() > 0){
      superhero.attack(villain);
      villain.attack(superhero);
      showSummary(superhero, villain);
    }

  }
};

function showSummary(fighterOne, fighterTwo){
  const summary = `
  Round summary:
  ${fighterOne.getAlias()}: ${fighterOne.getLife()}
  ${fighterTwo.getAlias()}: ${fighterTwo.getLife()}

  `
  console.log(summary);
}

//DATA STORE
let laser = new SpecialMove(5, 20,
  (...p) => `${p[0]} raises his left hand.  The superhero fires a laser at ${p[1]}, delivering massive damage`,
  (...p) => `As the flash gives way, ${p[1]} is out for the count.  The superhero, ${p[0]}, is once again victorious`);
let snakeTransformation = new SpecialMove(8, 70,
  (...p) => `Suddenly, ${p[0]} gives a wicked smirk, its eyes turning red as it transforms into a massive serpent.  its tail wraps around ${p[1]} squeezing the life out of the superhero`,
  (...p) => `The crowd watches in terror as ${p[0]}'s jaws open, and the mighty ${p[1]} can only squirm helplessly.  Consumed headfirst, the demonic beast swallows the superhero whole.  Guess that's game over...`);

let CaptainJustice = new Fighter("Unknown",
  "Captain Justice",
  "A made up superhero",
  Type.SUPERHERO, 12, laser,
  (...p)=>`${p[0]} stands hands on hips, over ${p[1]}.  The champion of justice once again victorious`,
  [
    (...p)=>`${p[0]} delivers an upper cut to his ${p[1]}'s jaw`,
    (...p)=>`${p[0]} delivers a combo punch, finishing it off with a spinning kick to ${p[1]}'s mid-section.`,
    (...p)=>`${p[0]} walks confidently toward ${p[1]}, before exploding into ${p[1]} with unbelievable force.`
  ]
);

let Devil = new Fighter("The Shapeshifter", "ShapeShifter", "A bad guy who can turn into stuff.",
  Type.VILLAIN, 15, snakeTransformation,
  (...p)=>`${p[0]} snarls, as ${p[1]} lays face first on the ground.  Grabbing the crimefighter by the boots, drags the superhero away to be cooked and served for dinner. Poor ${p[1]}`,
  [
    (...p)=>`${p[0]} grabs ${p[1]} by the neck and slams the superhero into the ground`,
    (...p)=>`${p[0]} grabs ${p[1]} by the boots, lifting our spandex-clad warrior off the ground. ${p[0]} violently slams ${p[1]} into the ground, like a rag doll`
  ]
);


//DRIVER

fight(CaptainJustice, Devil);
*/
})();
