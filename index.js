let task = "";

let completedTaskCount = 0;

function showTask() {
    if (task.length == 0) {
        console.log("Задача отсутствует");
        return;
    } else {
        console.log(task);
    }
}

function setTask(taskDescription) {
    if (task.length > 0) {
        console.log("Не могу добавить задачу, завершите или удалите предыдущую");
        return;
    }
    task = taskDescription;
}

function completeTask() {
    if (task.length == 0) {
        console.log("Задача отсутствует");
    }
    task = "";
    completedTaskCount++;
}

function deleteTask() {
    if (task.length == 0) {
        console.log("Задача отсутствует");
    }
    task = "";
}
