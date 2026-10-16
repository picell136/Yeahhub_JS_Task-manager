let task = "";

let completedTaskCount = 0;

function showTask() {
    if (task.length == 0) {
        console.log("Задача отсутствует");
    } else {
        console.log(task);
    }
}

function setTask(taskDescription) {
    if (task.length > 0) {
        console.log("Не могу добавить задачу, завершите или удалите предыдущую");
    }
    task = taskDescription;
}

function completeTask() {
    if (task.length == 0) {
        console.log("Задача отсутствует");
    }
    task = "";
    completeTask++;
}

function deleteTask() {
    if (task.length == 0) {
        console.log("Задача отсутствует");
    }
    task = "";
}
