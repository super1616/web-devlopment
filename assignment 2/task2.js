function checkNumber() {
  let num = prompt("Enter a number:");

  if (num === null || num.trim() === "") {
    alert("Please enter a valid number.");
    return;
  }

  num = Number(num);

  if (isNaN(num)) {
    alert("That is not a valid number!");
  } else if (num > 0) {
    alert("Positive number.");
  } else if (num < 0) {
    alert("Negative number.");
  } else {
    alert("Zero.");
  }
}
