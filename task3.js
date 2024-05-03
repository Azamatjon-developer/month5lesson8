function brackets(e) {
  e.preventDefault();
  let input = e.target[0].value.split("");
  let total = 0;
  let total2 = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      total++;
    } else if (input[i] === ")") {
      total2++;
    }
}
if (total === total2) {
  alert("Yes");
}else{
  alert("No");
}
}