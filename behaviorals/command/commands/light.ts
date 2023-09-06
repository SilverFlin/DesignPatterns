import { Command } from "./";
import { Light } from "../light";
class TurnOnLightsCommand implements Command {

    constructor(private light: Light) { }

    execute(): void {
        this.light.turnOn();
    }

    undo(): void {
        this.light.turnOff();
    }
}

class TurnOffLightsCommand implements Command {

    constructor(private light: Light) { }

    execute(): void {
        this.light.turnOff();
    }

    undo(): void {
        this.light.turnOn();
    }

}

export {
    TurnOnLightsCommand,
    TurnOffLightsCommand
}