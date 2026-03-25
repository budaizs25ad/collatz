function collatz() {

  
  var n = Math.abs(parseInt(document.getElementById("szam").value));
  let k = ""; 
  
  if (isNaN(n) || n == 0) {
    document.getElementById("result").innerHTML = "Adjon meg egy nem-nulla értéket!";
    return;
  }

  
  var i = 0;

  
  while (n != 1) {
    if ((n % 2) == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }

  

    if (n != 1) {
    k = k + n.toString() + ", ";
    } else {
    k = k + n.toString();
    }
  
    i++;
  }

  document.getElementById("result").innerHTML = i + " eséllyel futódott le, értékek:";
  document.getElementById("results").innerHTML = k;
}