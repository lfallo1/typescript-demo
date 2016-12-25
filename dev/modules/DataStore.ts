import {SpecialMove, Fighter, Type} from "./Models";

//DATA STORE - stores characters and special moves

export let laser = new SpecialMove(5, 20,
  (...p) => `${p[0]} raises his left hand.  The superhero fires a laser at ${p[1]}, delivering massive damage`,
  (...p) => `As the flash gives way, ${p[1]} is out for the count.  The superhero, ${p[0]}, is once again victorious`);
export let snakeTransformation = new SpecialMove(8, 70,
  (...p) => `Suddenly, ${p[0]} gives a wicked smirk, its eyes turning red as it transforms into a massive serpent.  its tail wraps around ${p[1]} squeezing the life out of the superhero`,
  (...p) => `The crowd watches in terror as ${p[0]}'s jaws open, and the mighty ${p[1]} can only squirm helplessly.  Consumed headfirst, the demonic beast swallows the superhero whole.  Guess that's game over...`);

export let CaptainJustice = new Fighter("Unknown",
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

export let Devil = new Fighter("The Shapeshifter", "ShapeShifter", "A bad guy who can turn into stuff.",
  Type.VILLAIN, 15, snakeTransformation,
  (...p)=>`${p[0]} snarls, as ${p[1]} lays face first on the ground.  Grabbing the crimefighter by the boots, drags the superhero away to be cooked and served for dinner. Poor ${p[1]}`,
  [
    (...p)=>`${p[0]} grabs ${p[1]} by the neck and slams the superhero into the ground`,
    (...p)=>`${p[0]} grabs ${p[1]} by the boots, lifting our spandex-clad warrior off the ground. ${p[0]} violently slams ${p[1]} into the ground, like a rag doll`
  ]
);
