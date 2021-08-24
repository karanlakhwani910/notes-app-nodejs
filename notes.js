const fs = require('fs')
const chalk = require('chalk')



const addNotes = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.filter((note)=> note.title === title)
    if(!duplicateNote){
        notes.push ({
            title: title,
            body : body
        })
        console.log(chalk.green("New note added!"));
        saveNotes(notes);
    }else{
        console.log(chalk.red("Note title taken!"));
    }
}
const removeNote = (title) =>{
    const notes  = loadNotes();
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title;
    })
    if(notes.length !== notesToKeep.length){
        console.log(chalk.green("Note removed successfully!"));
    }
    else{
        console.log(chalk.red("No note removed!"));
    }
    saveNotes(notesToKeep);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green("Your notes..."));
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    notes.forEach(note => {
        if(note.title === title){
            console.log(note.body);
        }
    });
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () =>{
    try{  
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e){
        return [];
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote : removeNote,
    listNotes :listNotes,
    readNote : readNote
}