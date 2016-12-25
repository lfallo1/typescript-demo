export enum Type {
  SUPERHERO,
  VILLAIN
};

export class SpecialMove{
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

export class Fighter{
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
};
