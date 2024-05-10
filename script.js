const task_input = document.getElementById("task_input");
const add_btn = document.getElementById("add_btn");
const task_ul = document.getElementById("task_ul");
const doneOfAll = document.getElementById("doneOfAll");

let allTasks = 0;
let doneTasks = 0;
doneOfAll.innerHTML = doneTasks + ' / ' + allTasks;

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
});

function addTask() {
    if (task_input.value !== "") {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.innerHTML = task_input.value;
        li.onclick = function() {
            span.classList.toggle("crossed-out");
            if (span.classList.contains("crossed-out")) {
                doneTasks++;
            }
            else {
                doneTasks--;
            }
            doneOfAll.innerHTML = doneTasks + ' / ' + allTasks;
        };
        
        let del_btn = document.createElement("button");
        del_btn.className = 'delete_btn';
        del_btn.innerHTML = "Delete";
        del_btn.onclick = function() {
            li.remove();
            allTasks--;
            if (!span.classList.contains("crossed-out")) {
                doneTasks--;
            }
        };

        task_ul.appendChild(li);
        li.appendChild(span);
        li.appendChild(del_btn);
        task_input.value = "";
        
        allTasks++;
        doneOfAll.innerHTML = doneTasks + ' / ' + allTasks;
    }
}