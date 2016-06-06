

var taskInput= document.getElementById("new-task-input");
taskInput.addEventListener("keydown", handleKeyPress, true);

function createTask(taskTitle) {
    var newTaskElement = document.createElement("li");
    var textElement = document.createTextNode(taskTitle);
    var div1 = document.createElement("div");
    div1.className += "check-box";
    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    div1.appendChild(input);
    var div2= document.createElement("div");
    div2.className += "task-name";
    div2.appendChild(textElement);
    var div3 = document.createElement("div");
    div3.className += "remove-circle";
    var i = document.createElement("i");
    i.className += "fa fa-trash";
    div3.appendChild(i);
    newTaskElement.appendChild(div1);
    newTaskElement.appendChild(div2);  
    newTaskElement.appendChild(div3);
    var lists = document.getElementsByClassName("mamal");
    lists[0].appendChild(newTaskElement);   

    taskInput.value = "  ";
}


function handleKeyPress(e) {
    if (e.keyCode == "13") {
     var taskTitle = taskInput.value;  
     createTask(taskTitle);  
        
 }


};





