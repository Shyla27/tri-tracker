function checkTriangle() {
  var sideA = parseFloat(prompt("Enter sideA dimensions"));
  var sideB = parseFloat(prompt("Enter sideB dimensions"));
  var sideC = parseFloat(prompt("Enter sideC dimensions"));

  if (sideA + sideB) <=sideC || (sideB + sideC) <= sideA || (sideC + sideA) <= sideB) {
  alert("Cannot form a triangle");
  }
  if(sideA === sideB && sideB === sideC && sideC === sideA) {
  alert("Equilateral triangle");
  }
  else if(sideA === sideB && sideB!==sideC ||  sideC === sideA) {
  alert("Isosceles triangle");
  }
  else if(sideA !== sideB && sideB !== sideC && sideC !== sideA && sideA+sideB>sideC&&sideB+sideC>sideA&&sideA+sideC>sideB) {
   alert("Scalene triangle");
} else {
  alert("Cannot form a triangle")
}
}
