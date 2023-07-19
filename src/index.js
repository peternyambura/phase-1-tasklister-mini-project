document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskDescription = document.getElementById("new-task-description").value;
    createTask(taskDescription);
    form.reset();
  });

  function createTask(description) {
    const task = document.createElement("li");
    task.innerText = description;
    taskList.appendChild(task);
  }
});
