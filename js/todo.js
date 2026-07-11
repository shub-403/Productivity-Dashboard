const todoForm = document.querySelector(".todoForm");
const todoName = document.querySelector("#todoname");
const taskDescription = document.querySelector("#taskdescription");
const impBtn = document.querySelector("#important");
const displayTaskBox = document.querySelector(".display-task-box");
const impTag = document.querySelector(".impTag");

let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTask() {
  displayTaskBox.innerHTML = "";
  taskArr.forEach((task, index) => {
    displayTaskBox.innerHTML += `<div class="bg-[var(--secondary)] rounded-xl relative p-3 flex gap-3 items-center">
                        <div class="w-full">
                            <p class="">${task.todoname}<span
                                    class="text-xs bg-[var(--primary)] p-1 rounded-2xl text-[var(--bg)] impTag ${task.impbtn ? "" : "hidden"} ml-3">Imp</span></p>
                            <p class="mt-2 border-t">${task.taskdescription}</p>
                        </div>
                        <div class="w-10">
                            <button
                               onclick="deleteTask('${index}')" class="taskdel bg-[var(--primary)] p-3 rounded-xl hover:bg-[var(--primary-hover)] hover:scale-110 transition duration-300 cursor-pointer"><i
                                    class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>`;
  });
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let todoname = todoName.value.trim();
  let taskdescription = taskDescription.value.trim();
  let impbtn = impBtn.checked;
  if (todoname === "" || taskdescription === "") {
    alert("please Enter Fiels");
    return;
  }
  let taskObj = {
    todoname,
    taskdescription,
    impbtn,
  };

  taskArr.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(taskArr));

  if (taskObj.impbtn === true) {
    impTag.classList.remove("hidden");
  }
  displayTask();
  todoForm.reset();
});

let deleteTask = (index) => {
  taskArr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(taskArr));
  displayTask();
};

displayTask();
