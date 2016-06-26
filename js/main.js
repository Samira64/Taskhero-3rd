var App = {
    assignHandlers: function(){
        document.getElementById("new-task-input").addEventListener("keydown", this.handleKeyPress);
        document.getElementById('remove-done').addEventListener('click', this.handleRemoveButtonClick);
        document.getElementById("remove-all").addEventListener('click', this.handleRemoveAllButtonClick);
        document.querySelector('#task-list').addEventListener('click', this.handleRemoveItemClick);
    },
    handleKeyPress: function (e) {
        if (e.keyCode == "13") {
            var taskInput = document.getElementById("new-task-input");
            var taskTitle = taskInput.value;  
            App.createTask(taskTitle);  
            taskInput.value = "";
        }
    },
    isCheckboxChecked: function(checkbox){
        return checkbox.checked;
    },
    handleRemoveButtonClick: function() {
        var lists = document.querySelectorAll("li");
        for (var i = 0; i < lists.length; i++) {
            var checkboxDiv = lists[i].querySelector(".check-box");
            var checkbox = checkboxDiv.querySelector("input");
            checkedStatus = App.isCheckboxChecked(checkbox);
            if (checkedStatus){
                lists[i].parentNode.removeChild(lists[i]);

            }
        }  
    },

    handleRemoveAllButtonClick: function(){
        var allLists = document.querySelectorAll("#task-list li");

        myfunc = function(el){
            el.remove();
        }

        allLists.forEach(myfunc)
    },  
    handleRemoveItemClick: function(event) {    
        if(event.target.className == 'fa fa-trash' ) {
            event.target.parentNode.parentNode.remove();
        }
    },
    createTask: function(taskTitle) {        
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
    }
};


App.assignHandlers();