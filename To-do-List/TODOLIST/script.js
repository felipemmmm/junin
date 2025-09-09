
function addTask(){
    const taskInput = document.getElementById("taskinput");
    const taskText = taskInput.value.trim();

    if (taskText === ""){
        alert("Por favor, digite uma tarefa...")
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement("li")
    li.textContent = taskText

    const removeButton = document.createElement('button')
    removeButton.classList.add("removeButton");

    removeButton.onclick = () => taskList.removeChild(li);

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = "";
}