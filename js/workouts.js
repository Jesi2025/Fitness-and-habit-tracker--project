let workouts = [];
let editIndex = -1;
function addWorkout() {
  const name = document.getElementById("workoutName").value;
  const duration = document.getElementById("workoutDuration").value;

  if (!name || !duration) {
    alert("Please fill all fields");
    return;
  }

  if (editIndex === -1) {
    // ADD
    workouts.push({ name, duration });
  } else {
    // UPDATE
    workouts[editIndex] = { name, duration };
    editIndex = -1;
    document.querySelector("button.btn-success").innerText = "Add Workout";
  }

  renderWorkouts();

  document.getElementById("workoutName").value = "";
  document.getElementById("workoutDuration").value = "";
}


function renderWorkouts() {
  const list = document.getElementById("workoutList");
  list.innerHTML = "";

  workouts.forEach((workout, index) => {
    list.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>${workout.name}</strong>
          <span class="text-muted">(${workout.duration} min)</span>
        </div>

        <div>
          <button class="btn btn-sm btn-outline-primary me-2" onclick="editWorkout(${index})">
            <i class="bi bi-pencil"></i>
          </button>

          <button class="btn btn-sm btn-outline-danger" onclick="deleteWorkout(${index})">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </li>
    `;
  });
}

function deleteWorkout(index) {
  workouts.splice(index, 1);
  renderWorkouts();
}

function editWorkout(index) {
  document.getElementById("workoutName").value = workouts[index].name;
  document.getElementById("workoutDuration").value = workouts[index].duration;

   editIndex = index;

   document.querySelector("button.btn-success").innerText = "Updated Workout";
   
  
}
