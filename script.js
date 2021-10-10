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
  } else {
    for (let i = 0; i < numCols + 1; i++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
    document.getElementById("grid").appendChild(tr);
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
  alert("Clicked Remove Row");
}
//Remove a column
function removeC() {
  alert("Clicked Remove Col");
}
//sets global var for selected color
function selected() {
  colorSelected = document.getElementById("selectedID").value;
  console.log(colorSelected);
}

function fill() {
  alert("Clicked Fill All");
}

function clearAll() {
  alert("Clicked Clear All");
}

function fillU() {
  alert("Clicked Fill All Uncolored");
}
