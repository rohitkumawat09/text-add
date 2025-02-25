const heading = document.querySelector("#text");
const btn = document.querySelector("#btn");
const color = document.getElementById("color");
const parent = document.querySelector("#parent");
//const span =document.querySelector("span");

btn.addEventListener("click", () => {
    const not = heading.value.trim();
    const textcolor = color.value;
    

   const div = document.createElement("div");
    div.style.backgroundColor = textcolor;
    div.textContent = not;

    const span=document.createElement("span")
    span.classList.add("span");

    span.addEventListener("click" , (e)=>{
        e.target.parentElement.remove()
     })

    span.innerHTML="&times";

    parent.append(div);
    div.append(span);
   
    heading .value=""
});


