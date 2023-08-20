
document.addEventListener("DOMContentLoaded", function() {


const newData = document.getElementById("inputbox");
const button = document.getElementById("btn");
const list = document.getElementById("listcontent");
const a = document.getElementById("colorchange");
const body = document.body;
const b = document.getElementById("heading");

a.addEventListener("click", function(){
body.classList.toggle("darkmode");
a.classList.toggle("mode");
a.classList.toggle("whendark");
b.classList.toggle("companyname");
b.classList.toggle("whendarkall");

})
// const liitems = document.querySelectorAll("#listcontent li");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
for (const task of tasks) {
    const li = document.createElement("li");
    const tasktext = document.createElement("span");
    const delbtn = document.createElement("button");

    tasktext.innerHTML = task;
    delbtn.innerHTML = "Delete";
    delbtn.className = "delete";

    li.appendChild(tasktext);
    li.appendChild(delbtn);

    list.insertBefore(li, list.firstChild);
} 



function addTask(){
    if(newData.value === ""){
        alert("You must Add your Work.")
    }
    else{
        let li = document.createElement("li");
        let tasktext = document.createElement("span");
        let delbtn = document.createElement("button");

        tasktext.innerHTML = newData.value;
        delbtn.innerHTML = "Delete";
        delbtn.className = "delete";

        li.appendChild(tasktext);
        li.appendChild(delbtn);

        list.insertBefore(li,list.firstChild);
        
          
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(newData.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  
        newData.value="";

    }  
}


button.addEventListener("click", addTask);

newData.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      console.log("clicked");
       e.target.classList.toggle("done");
    }
  });


  list.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON" && e.target.className === "delete")
    {
      e.target.parentElement.remove()}});
      list.addEventListener("click", function(e) {
        if (e.target.tagName === "BUTTON" && e.target.className === "delete") {
            e.target.parentElement.remove();
    
            // Remove task from localStorage
            const taskText = e.target.previousElementSibling.textContent;
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const updatedTasks = tasks.filter(task => task !== taskText);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        }
    });
    
    newData.value="";

});



//   let li = document.createElement("li");
//   let delbtn = document.createElement("button");
//   let delspan = document.createElement("span");
//   li.innerHTML = newData.value;
//   list.insertBefore(li, list.firstChild);
//   newData.value=""    ;
 
//   button.innerHTML = "Delete";
//   delbtn.className = "delete";
//   list.insertBefore(span, list.firstChild);