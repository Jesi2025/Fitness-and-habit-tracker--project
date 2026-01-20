function exportData() {
  const data = {
    habits: JSON.parse(localStorage.getItem('habits') || '[]'),
    workouts: JSON.parse(localStorage.getItem('workouts') || '[]')
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'fitness-data.json';
  a.click();
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = JSON.parse(e.target.result);
    localStorage.setItem('habits', JSON.stringify(data.habits || []));
    localStorage.setItem('workouts', JSON.stringify(data.workouts || []));
    location.reload();
  };
  reader.readAsText(file);
}
