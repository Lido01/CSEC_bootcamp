const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const clearAllBtn = document.getElementById("clearAllBtn");
const emptyMessage = document.getElementById("emptyMessage");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Enable/disable add button
todoInput.addEventListener("input", () => {
    addTodoBtn.disabled = todoInput.value.trim() === "";
});

// Add Todo
addTodoBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();

    if (text === "") {
        alert("Todo cannot be empty!");
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);
    saveAndRender();
    todoInput.value = "";
    addTodoBtn.disabled = true;
});

// Render Todos
function renderTodos() {
    todoList.innerHTML = "";

    if (todos.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    todos.forEach(todo => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo.text;
        if (todo.completed) span.classList.add("completed");

        const btnDiv = document.createElement("div");
        btnDiv.className = "todo-buttons";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener("click", () => {
            todo.completed = !todo.completed;
            saveAndRender();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            todos = todos.filter(t => t.id !== todo.id);
            saveAndRender();
        });

        btnDiv.appendChild(completeBtn);
        btnDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnDiv);

        todoList.appendChild(li);
    });

    updateStats();
}

// Update Counts
function updateStats() {
    totalCount.textContent = todos.length;
    completedCount.textContent = todos.filter(todo => todo.completed).length;
}

// Clear All
clearAllBtn.addEventListener("click", () => {
    todos = [];
    saveAndRender();
});

// Save to localStorage
function saveAndRender() {
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

// Initial Load
renderTodos();
