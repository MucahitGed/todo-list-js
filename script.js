const add_btn = document.querySelector(".add-btn");
const main_card = document.querySelector(".main-card");
const input = document.querySelector(".input");

let idx= 0;
add_btn.addEventListener("click" , contentDiv)

add_btn.addEventListener('mouseover' , ()=>{
    input.classList.add('hovered') 
})
add_btn.addEventListener('mouseout' , ()=>{
    input.classList.remove('hovered') 
})

function contentDiv(){
       
    if(input.value == ""){
         alert("Write Something")
    }else{
    idx++;
    let content = 
    `<div class="content" id="${idx}">
    <div class="name">${input.value}</div>
    <div class="buttons">
    <button onclick="doneTask()" class="done done-btn">
        <i class="fa-solid fa-check"></i>
      </button>
      <button onclick="deleteTask()"  class="delete delete-btn">
        <i class="fa-solid fa-trash"></i>
      </button>
      
  </div>`
    
  main_card.insertAdjacentHTML("beforeend" , content);

  input.value   = "";
    doneTask();
    deleteTask();
    }
    
}

function deleteTask(){
    const delete_btn = document.querySelectorAll(".delete-btn");
    for(var i=0; i<delete_btn.length; i++){
        delete_btn[i].onclick = function(){
            this.parentNode.parentNode.remove();
        }
    }
}

function doneTask(){
    const done_btn = document.querySelectorAll(".done-btn")
    for(var i=0; i<done_btn.length; i++){
        done_btn[i].onclick = function(){
            this.classList.add("active");
            this.parentNode.parentNode.style.textDecoration = "line-through"
            console.log("tamam")
        }
    }

}