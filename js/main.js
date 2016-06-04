



function createTask(taskTitle) {
    
    var newTaskElement = document.createElement("li"); // now we have '<li></li>'
    var textElement = document.createTextNode(taskTitle); // 'go buy coffee' or whatever is inside the taskTitle
    newTaskElement.appendChild(textElement);
    var list= document.getElementById("task-list");
    list.appendChild(newTaskElement);
    
     // now we have '<li>go buy coffee</li>'    
    //add the newTaskElement to the ul on the page that contains the tasks
    //1- get the ul that contains the lis
    //2- add the newTaskElement as its chidren
    //3- commit and push. bye bye ok
}


var taskInput= document.getElementById("new-task-input");
taskInput.addEventListener("keydown", handleKeyPress, true);

function handleKeyPress(e) {
    if (e.keyCode == "13") {

       var taskTitle = taskInput.value;  
       createTask(taskTitle); 
    }
};