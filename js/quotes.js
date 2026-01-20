async function loadQuote() {
  const spinner = document.getElementById('loadingSpinner');
  spinner.style.display = 'inline-block';

  try {
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json();
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('dailyQuote').innerText = `"${random.text}" — ${random.author || 'Unknown'}`;
  } catch (err) {
    document.getElementById('dailyQuote').innerText = 'Failed to load quote';
  } finally {
    spinner.style.display = 'none';
  }
}

loadQuote();
