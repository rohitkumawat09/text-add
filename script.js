const heading = document.querySelector("#text");
const btn = document.querySelector("#btn");
const color = document.getElementById("color");
const parent = document.querySelector("#parent");
//const span =document.querySelector("span");

btn.addEventListener("click", () => {
    const not = heading.value.trim();
    const textcolor = color.value;
    heading.classList.add("book")

   const div = document.createElement("div");
    div.style.backgroundColor = textcolor;
    div.textContent = not;


    const currentDate = new Date().toLocaleString();
    // const date = currentDate.toLocaleString();
    // const time =currenTime.toLocaleString()

    const para=document.createElement("p")
    // para.textContent=not;
    div.append(para);


    const para2 = document.createElement("p");
    para2.textContent= `${currentDate}`;
    div.append(para2)



    const span=document.createElement("span")
    span.classList.add("span");
    span.innerHTML="&times";

    span.addEventListener("click" , (e)=>{
        e.target.parentElement.remove()
     })

    

     div.append(span);
    parent.append(div);
   
    heading.value=""
});



// const currentDate = new Date();
// console.log(currentDate.toLocaleString());  

// console.log(currentDate);
