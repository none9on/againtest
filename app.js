const taskForm= document.getElementById("task-form");
const taskList= document.getElementById("task-list");

//counter var

let taskIndex = 1;

// console.log(taskForm, taskList);
taskForm.addEventListener("submit", function(event) {
event.preventDefault();

const taskInput = document.getElementById("task-input");
const taskText = taskInput.value.trim();

console.log(taskText);


if (taskText !== ""){
    //create a new task item


    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.textContent = `${taskIndex}-${taskText}`;


taskItem.addEventListener("click", function(){
    console.log("completed");
    this.classList.toggle("completed");
});


    //append the task item to the task list
    taskList.appendChild(taskItem);

    //inctement task index

    taskIndex++;
    taskInput.value = "";
}

});

