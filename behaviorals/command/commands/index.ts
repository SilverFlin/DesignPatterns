interface Command {
    execute(): void
    undo(): void
}

class MacroCommand {
    constructor(private commands: Command[]) { }

    addCommand(command: Command) {
        this.commands.push(command);
    }

    execute() {
        this.commands.forEach(command => command.execute());
    }

    undo() {
        const reversedCommands = this.commands.reverse();
        reversedCommands.forEach(command => command.undo());
    }

}


export {
    Command,
    MacroCommand
}