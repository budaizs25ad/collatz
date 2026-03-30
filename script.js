function collatz() {
  const input = document.getElementById("szam");
  const resultEl = document.getElementById("result");
  const resultsEl = document.getElementById("results");

  let n = Number(input.value);

  // ellenőrzés
  if (!Number.isInteger(n) || n <= 0) {
    resultEl.textContent = "❌ Adj meg egy pozitív egész számot!";
    resultsEl.textContent = "";
    return;
  }

  let steps = 0;
  let sequence = [n]; // tömbbe gyűjtjük

  // számolás
  while (n !== 1) {
    n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
    sequence.push(n);
    steps++;
  }

  // kiírás
  resultEl.textContent = `✅ Lépések száma: ${steps}`;
  resultsEl.textContent = sequence.join(" → ");
}