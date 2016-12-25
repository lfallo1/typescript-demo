import { FightService } from "./FightService";
import { CaptainJustice, Devil, laser, snakeTransformation} from "./DataStore";

const fightService = new FightService(CaptainJustice, Devil);
fightService.fight();
