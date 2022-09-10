
let todos = document.querySelector(".todos")
    input =  document.querySelector(".the-input input"),
    listContainer = document.querySelector(".items-container"),
    todo = document.querySelectorAll(".todo-item"),
    completeIt = document.querySelectorAll(".bullet"),
    removeTodo = document.querySelectorAll(".cross"),
    itemsLeft = document.querySelector(".items-left span"),
    incomplete = document.querySelectorAll(".incomplete"),
    SelectItems = document.querySelectorAll(".selection span");




itemsLeft.innerHTML = document.querySelectorAll(".incomplete").length;


input.addEventListener('keypress', function (e){

    if(e.keyCode === 13){
        if(input.value == ""){ 

            input.placeholder = "Digite uma tarefa aqui";
        }else{
            listContainer.innerHTML += `<div class="todo-item incomplete">
                                            <div class="bullet"> <img src="images/icon-check.svg" alt=""></div>
                                            <span>${input.value}</span>
                                            <img class="cross" src="images/icon-cross.svg" alt="">
                                        </div>`;
            input.value = "";

            
            itemsLeft.innerHTML = document.querySelectorAll(".incomplete").length;
        }
    } 
});



todos.addEventListener('click', function(e){
    
    if (e.target.parentNode.parentNode.classList.contains("todo-item")){
        
       
        if(e.target.parentNode.parentNode.classList.contains("completed")){

            e.target.parentNode.parentNode.classList.remove("completed");
            e.target.parentNode.parentNode.classList.add("incomplete");
            
            itemsLeft.innerHTML = document.querySelectorAll(".incomplete").length;
        }else{
            
            e.target.parentNode.parentNode.classList.add("completed");
            e.target.parentNode.parentNode.classList.remove("incomplete");
          
            itemsLeft.innerHTML = document.querySelectorAll(".incomplete").length;
        }
    }

    
    if(e.target.classList.contains("cross")){
        e.target.parentNode.remove();
        
        itemsLeft.innerHTML = document.querySelectorAll(".incomplete").length;
    }



 
    SelectItems[0].onclick = function (){

        this.classList.add("active");
        SelectItems[1].classList.remove("active");
        SelectItems[2].classList.remove("active");

       
        document.querySelectorAll(".todo-item").forEach(element => {
            //show all
            element.style.display = "flex";
        });
    }

   
    SelectItems[1].onclick = function (){

       
        this.classList.add("active");
        SelectItems[0].classList.remove("active");
        SelectItems[2].classList.remove("active");

       
        document.querySelectorAll(".todo-item").forEach(element => {
            if(element.classList.contains("incomplete")){

               
                element.style.display = "flex";
            }
            if(element.classList.contains("completed")){

           
                element.style.display = "none";
            }
        });
    }

  
    SelectItems[2].onclick = function (){

       
        this.classList.add("active");
        SelectItems[1].classList.remove("active");
        SelectItems[0].classList.remove("active");

        document.querySelectorAll(".todo-item").forEach(element => {
            if(element.classList.contains("incomplete")){

               
                element.style.display = "none";
            }
            if(element.classList.contains("completed")){

                
                element.style.display = "flex";// flex or block depends on what you set on your style
            }
        });
    }



    document.querySelector(".clear-complete").onclick = function () {
        
        document.querySelectorAll(".completed").forEach(ele => {
            
            ele.remove();
        });
    }


});



document.querySelector(".vision").onclick = function(){

   
    if(this.src == (location.protocol+ "//" +location.host+"/images/icon-sun.svg")){
        console.log(this)
        this.src = "images/icon-moon.svg";
        document.querySelector(".styler").href = "css/light.css";
    }else{

        this.src = "images/icon-sun.svg";
        document.querySelector(".styler").href = "css/dark.css";
    }
}



Sortable.create(listContainer, { 
    animation: 150
 });