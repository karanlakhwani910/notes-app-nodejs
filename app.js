const yargs = require('yargs')
const notes = require('./notes')

// customize yargs version
yargs.version('1.1.0')

// add, remove, read, list
// add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove the command",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Read note",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})
yargs.command({
    command: "list",
    describe: "List notes",
    handler: () => {
        notes.listNotes();
    }
})

yargs.parse();