// Create A Calculator

document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("btn1").addEventListener("click", btnCleared);

function btnClicked() {
  // Input

  let midterm = +document.getElementById("1").value;
  let mainProject = +document.getElementById("2").value;
  let final = +document.getElementById("3").value;

  // Process
  let finalGrade = (midterm + mainProject + final) / 3;

  // Output

  document.getElementById("output").innerHTML = Math.round(finalGrade);
}

function btnCleared() {
  document.getElementById("1").value = "";
  document.getElementById("2").value = "";
  document.getElementById("3").value = "";
  document.getElementById("output").innerHTML = "-----";
}
