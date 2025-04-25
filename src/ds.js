let prime =true;
for (let i = 2; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++)
    if (i * j == n) {
      console.log("not prime");
      prime = false;
      break;
    } 
}
