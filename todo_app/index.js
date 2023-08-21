const title = document.getElementById("title");
const description = document.getElementById("description");
const container = document.querySelector(".container");
const form = document.querySelector("form")

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

showAllTaks();

function showAllTaks () {
    tasks.forEach((value, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");
        
        const p = document.createElement("p");
        p.innerText = value.title;

        const span = document.createElement("span");
        span.innerText = value.description;

        innerDiv.append(p);
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("id", "deleteBtn");
        btn.innerText = "-";

        div.append(innerDiv);
        div.append(btn);

        btn.addEventListener("click", () => {
            removeTask();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showAllTaks();
        })

        container.append(div);
    });
};

function removeTask () {
    tasks.forEach(() => {
        const div = document.querySelector(".task");
        div.remove();
    });
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    removeTask();

    tasks.push({
        title: title.value,
        description: description.value,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log(tasks);
    showAllTaks();
});