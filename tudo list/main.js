function getLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }
  
  function addToLocalStorage(task) {
    let tasks = getLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function clearLocalStorage() {
    localStorage.removeItem("tasks");
  }
  
  document.querySelector("#push").onclick = function(){
    const taskInput = document.querySelector("#taskInput");
    if(taskInput.value.length == 0) {
      alert("Please Enter a task");
    } else {
      const task = document.createElement("div");
      task.classList.add("task");
      task.innerHTML = `<span id="taskname">${taskInput.value}</span><button class="delete">X</button>`;
      document.querySelector("#tasks").appendChild(task);
      taskInput.value = "";
      addToLocalStorage(task.innerHTML);
      task.querySelector(".delete").onclick = function() {
        task.remove();
        let tasks = getLocalStorage();
        tasks = tasks.filter(t => t!== task.innerHTML);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      };
    }
  };
  
  let tasks = getLocalStorage();
  for (let i = 0; i < tasks.length; i++) {
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<span id="taskname">${tasks[i]}</span><button class="delete">X</button>`;
    document.querySelector("#tasks").appendChild(task);
    task.querySelector(".delete").onclick = function() {
      task.remove();
      let tasks = getLocalStorage();
      tasks = tasks.filter(t => t!== task.innerHTML);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  }
  
  document.querySelector("#clear").onclick = function() {
    clearLocalStorage();
    document.querySelector("#tasks").innerHTML = "";
  };
  
  
  
  
  
  