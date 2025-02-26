const heading = document.querySelector("#text");
const btn = document.querySelector("#btn");
const color = document.getElementById("color");
const parent = document.querySelector("#parent");
const undo = document.querySelector("#undo");
//const span =document.querySelector("span");
let deletnot=[]
btn.addEventListener("click", () => {
    const not = heading.value.trim();
    const textcolor = color.value;
    heading.classList.add("book")
    if( not=== ""){
        alert("plese enter text");
        return;
    }

    const currentDate = new Date().toLocaleString();
    // const date = currentDate.toLocaleString();
    // const time =currenTime.toLocaleString();
    if (!currentDate) {
        alert("plese enter text ");
        return;
    }
    const div = document.createElement("div");
    div.style.backgroundColor = textcolor;
    // div.textContent = not;


    const para=document.createElement("p")
    para.textContent=not;
    div.append(para);


    const para2 = document.createElement("p");
    para2.textContent= `${currentDate}`;
    div.append(para2)



    const span=document.createElement("span")
    span.classList.add("span");
    span.innerHTML="&times";


    span.addEventListener("click",(e)=>{
        const deletedHote = e.target.parentElement;
        deletnot.push(deletedHote);
        deletedHote.remove()
     })

    
     div.append(span);
    parent.append(div);
   
    heading.value=""
});
undo.addEventListener("click",()=>{
    if(deletnot.length>0){
        const  lastdelet=deletnot.pop();
        parent.appendChild(lastdelet);
    }
    else{
        alert("plese remove text")
    }
    console.log();
    
})


// const currentDate = new Date();
// console.log(currentDate.toLocaleString());  

// console.log(currentDate);
