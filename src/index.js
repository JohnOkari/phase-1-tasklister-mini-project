document.addEventListener("DOMContentLoaded", function () {
  //DOM elements
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = function (e) {
  e.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  e.target.reset();
};

const appendNewTask = (task) => {
  document.getElementById("tasks").appendChild(task);
};
