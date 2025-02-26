



const heading = document.querySelector("#text");
const btn = document.querySelector("#btn");
const color = document.getElementById("color");
const parent = document.querySelector("#parent");
const undo = document.querySelector("#undo");


let deletedNotes = []; 
btn.addEventListener("click", () => {
    const not = heading.value.trim();
    const textColor = color.value;

    heading.classList.add("book");

    if (not === "") {
        alert("Please enter text");
        return;
    }

    const currentDate = new Date().toLocaleString();

    if (!currentDate) {
        alert("Please enter text");
        return;
    }

    const div = document.createElement("div");
    div.style.backgroundColor = textColor;

    const para = document.createElement("p");
    para.textContent = not;
    div.append(para);

    const para2 = document.createElement("p");
    para2.textContent = `${currentDate}`;
    div.append(para2);

    const span = document.createElement("span");
    span.classList.add("span");
    span.innerHTML = "&times";



    const edit = document.createElement("span");
    edit.classList.add("edit");
    edit.innerText = "✎";
    edit.style.cursor="pointer"



edit.addEventListener("click",(e)=>{
    const noteDiv=e.target.parentElement;
    const textPara = noteDiv.querySelector("p");
    const currentText = textPara.textContent;
    const input = document.createElement("input");
   input.type = "text";
    input.value = currentText;
    noteDiv.replaceChild(input, textPara);



    input.focus();
    input.addEventListener("blur", () => {
        const newText = input.value.trim();
        if (newText == "") {
            textPara.textContent = newText;
            noteDiv.replaceChild(textPara, input);
        } else {
            textPara.textContent = currentText;
            noteDiv.replaceChild(textPara, input);
        }
    }); 
})

    
    span.addEventListener("click", (e) => {
        const deletedNote = e.target.parentElement;
        const index = Array.from(parent.children).indexOf(deletedNote);  
        deletedNotes.push({ note: deletedNote, index: index });  
        deletedNote.remove();  
    });

    div.append(span,edit);
    parent.append(div);

    heading.value = "";  
});

undo.addEventListener("click", () => {
    if (deletedNotes.length > 0) {
       
        const lastDeleted = deletedNotes.pop();
        const note = lastDeleted.note;
        const index = lastDeleted.index;

    
        if (parent.children.length > index) {
            parent.insertBefore(note, parent.children[index]);  
        } else {
            parent.appendChild(note); 
        }
    } else {
        alert("No notes to undo");
    }
});



