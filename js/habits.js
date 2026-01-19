let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function addHabit() {
  const input = document.getElementById("habitInput");
  if (input.value === "") return;

  habits.push({
    id: Date.now(),
    name: input.value,
    completed: false
  });

  input.value = "";
  saveHabits();
  renderHabits();
}

function toggleHabit(id) {
  habits = habits.map(h =>
    h.id === id ? { ...h, completed: !h.completed } : h
  );
  saveHabits();
  renderHabits();
}

function deleteHabit(id) {
  habits = habits.filter(h => h.id !== id);
  saveHabits();
  renderHabits();
}

function renderHabits() {
  const list = document.getElementById("habitList");
  list.innerHTML = "";

  habits.forEach(habit => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      <span style="text-decoration:${habit.completed ? "line-through" : "none"}">
        ${habit.name}
      </span>
      <div>
        <button class="btn btn-sm btn-success me-2" onclick="toggleHabit(${habit.id})">✔</button>
        <button class="btn btn-sm btn-danger" onclick="deleteHabit(${habit.id})">✖</button>
      </div>
    `;

    list.appendChild(li);
  });
}

renderHabits();
