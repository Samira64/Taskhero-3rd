
var taskInput= document.getElementById("new-task-input");
taskInput.addEventListener("keydown", checkKeyPressed, true);
 function checkKeyPressed(e) {
    if (e.keyCode == "13") {
        var taskValue = taskInput.value;
        alert("Adding the task" + " " + taskValue);
    }
};