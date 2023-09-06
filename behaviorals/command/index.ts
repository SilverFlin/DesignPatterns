import { Light } from "./light";
import { TurnLightsOffCommand, TurnLightsOnCommand } from "./commands/light";
import { MacroCommand } from "./commands";

const light = new Light();

const turnOnLightsCommand = new TurnLightsOnCommand(light);
const turnOffLightsCommand = new TurnLightsOffCommand(light);

const macroCommand = new MacroCommand([turnOnLightsCommand, turnOffLightsCommand]);

macroCommand.execute();
macroCommand.undo();









