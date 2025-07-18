const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addNote');
const noteContainer = document.getElementById('notesContainer');

// initialize an empty array to store notes
const notes = [];


window.addEventListener('DOMContentLoaded', loadData())


// loadData from local Storage
function loadData () {
    const savedData = JSON.parse(localStorage.getItem('notes')) || '[]';
    notes.push(...savedData);
    notes.forEach(note => displayNote(note))
    console.log(savedData)
}

// handle click event on 'addNote' button
addBtn.addEventListener('click', () =>{
    const note = noteInput.value.trim();
    if(!note) return;
    notes.push(note)
    displayNote(note)
    savedToLocalStorage()
    noteInput.value = '';

})

function displayNote(note){
    const li = document.createElement('li');
    li.textContent = note;
    const deleteNote = document.createElement('button');
    deleteNote.innerText = 'Delete';
    deleteNote.style.marginLeft = '10px';
    li.appendChild(deleteNote)
    noteContainer.appendChild(li)

    // delte notes
    deleteNote.addEventListener('click', () =>{
        li.remove()
        removeNotesLocalStorage(note)
    })
}


function savedToLocalStorage(){
    localStorage.setItem('notes', JSON.stringify(notes))
}

function removeNotesLocalStorage(note){
    const index = notes.indexOf(note)
    if(index > -1){
        notes.splice(index, 1);
        savedToLocalStorage()
    }
}