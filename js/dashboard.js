const habits = JSON.parse(localStorage.getItem('habits')) || [];
const completed = habits.filter(h => h.completed).length;
const pending = habits.length - completed;

const ctx = document.getElementById('habitChart').getContext('2d');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Pending'],
        datasets: [{
            label: 'Habit Progress',
            data: [completed, pending],
            backgroundColor: ['#28a745', '#ffc107']
        }]
    }
});

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme'));
}

if (localStorage.getItem('theme') === 'true') {
  document.body.classList.add('dark-theme');
}
