

document.getElementById("new-task-input").addEventListener("keydown", handleKeyPress, true);
document.getElementById('remove-done').addEventListener('click', handleRemoveButtonClick);

function createTask(taskTitle) {
    var newTaskElement = document.createElement("li");
    var textElement = document.createTextNode(taskTitle);
    var inputDiv = document.createElement("div");
    inputDiv.className += "check-box";
    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    inputDiv.appendChild(input);
    var titleDiv= document.createElement("div");
    titleDiv.className += "task-name";
    titleDiv.appendChild(textElement);
    var trashDiv = document.createElement("div");
    trashDiv.className += "remove-circle";
    var i = document.createElement("i");
    i.className += "fa fa-trash";
    trashDiv.appendChild(i);
    newTaskElement.appendChild(inputDiv);
    newTaskElement.appendChild(titleDiv);  
    newTaskElement.appendChild(trashDiv);
    var lists = document.getElementById("task-list");
    lists.appendChild(newTaskElement);   
};


function handleKeyPress(e) {
    if (e.keyCode == "13") {
        var taskInput = document.getElementById("new-task-input");
        var taskTitle = taskInput.value;  
        createTask(taskTitle);  
        taskInput.value = "";
    }
};


function isCheckboxChecked(checkbox){
     //shorten the next four lines. you can write it in one line 
     return(checkbox.checked);
 };


 function handleRemoveButtonClick() {
    var lists = document.querySelectorAll("li");
    for (var i = 0; i < lists.length; i++) {
        var checkboxDiv = lists[i].querySelector(".check-box");
        var checkbox = checkboxDiv.querySelector("input");
        checkedStatus = isCheckboxChecked(checkbox);
        if (checkedStatus){
            lists[i].parentNode.removeChild(lists[i]);
        }
    }  
};




























