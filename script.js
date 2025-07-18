const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addNote');
const noteContainer = document.getElementById('notesContainer');

// initialize an empty array to store notes
const notes = [];

// handle click event on 'addNote' button
addBtn.addEventListener('click', () =>{
    const note = noteInput.value.trim();
    if(!note) return;
    notes.push(note)
    displayNote(note)
    noteInput.value = '';

})

function displayNote(note){
    const li = document.createElement('li');
    li.textContent = note;
    const deleteNote = document.createElement('button');
    deleteNote.innerText = 'Delete';
    deleteNote.style.marginLeft = '10px';
    noteContainer.appendChild(li)
}