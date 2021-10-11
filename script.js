let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
  //alert("Clicked Add Row");
  let tr = document.createElement("tr");
  if (numCols === 0) {
    let td = document.createElement("td");
    tr.appendChild(td);
    document.getElementById("grid").appendChild(tr);
    numRows++;
  } else {
    for (let i = 0; i < numCols + 1; i++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
    document.getElementById("grid").appendChild(tr);
    numRows++;
  }
}
//Add a column
function addC() {
  //alert("Clicked Add Col");

  let allRow = document.querySelectorAll("tr");
  for (let i = 0; i < allRow.length; i++) {
    let td = document.createElement("td");
    allRow[i].append(td);
  }
  numCols++;
}

//Remove a row
function removeR() {
  //alert("Clicked Remove Row");
  let table = document.querySelector("table");
  let lastElement = table.lastElementChild;
  table.removeChild(lastElement);
  numRows--;
}
//Remove a column
function removeC() {
  if (numCols < 0) {
    alert("no column can be removed");
  }
  //alert("Clicked Remove Col");
  else {
    let tr = document.querySelectorAll("tr");
    for (let i = 0; i < tr.length; i++) {
      let lastElement = tr[i].lastElementChild;
      tr[i].removeChild(lastElement);
    }
    numCols--;
  }
  //console.log(tr);
}
//sets global var for selected color
function selected() {
  colorSelected = document.getElementById("selectedID").value;
  console.log(colorSelected.toLowerCase());
  return colorSelected.toLowerCase();
}

function fill() {
  //alert("Clicked Fill All");
  colorSelected = selected();
  let allTr = document.querySelectorAll("td");

  for (let i = 0; i < allTr.length; i++) {
    allTr[i].style.backgroundColor = colorSelected;
  }
}

function clearAll() {
  //alert("Clicked Clear All");
  let allTr = document.querySelectorAll("td");

  for (let i = 0; i < allTr.length; i++) {
    allTr[i].style.backgroundColor = "white";
  }
}

function fillU() {
  alert("Clicked Fill All Uncolored");
}
