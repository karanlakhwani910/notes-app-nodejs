const fs = require('fs')
const chalk = require('chalk')

const getNotes =  () => {
    return 'Your notes...';
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })
    if(duplicateNotes.length === 0){
        notes.push ({
            title: title,
            body : body
        })
        console.log("New note added!");
        saveNotes(notes);
    }else{
        console.log("Note title taken!");
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
}