import { Fighter, Type } from "./Models";

export class FightService {

  private superhero: Fighter;
  private villain: Fighter;

  constructor(superhero: Fighter, villain: Fighter){
    this.setFighters(superhero, villain);
  }

  setFighters(superhero: Fighter, villain: Fighter){
    if(superhero && villain && superhero.getType() === Type.SUPERHERO && villain.getType() === Type.VILLAIN){
      this.superhero = superhero;
      this.villain = villain;
    }
  };

  private canFight(){
    return this.superhero && this.villain;
  }

  fight(){
    if(!this.canFight()){
      console.log('please add two characters (superhero and villain) to begin a fight');
      return;
    }

    while(this.superhero.getLife() > 0 && this.villain.getLife() > 0){
      this.superhero.attack(this.villain);
      this.villain.attack(this.superhero);
      this.showSummary();
    }

  };

  showSummary(){
    const summary = `
    Round summary:
    ${this.superhero.getAlias()}: ${this.superhero.getLife()}
    ${this.villain.getAlias()}: ${this.villain.getLife()}

    `
    console.log(summary);
  }
}
