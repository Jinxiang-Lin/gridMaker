let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
  //alert("Clicked Add Row");

  // let allCols = document.querySelectorAll("td");
  if (numCols === 0 && numRows === 0) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    document.getElementById("grid").appendChild(tr);
    numRows++;
    numCols++;
  } else {
    let tr = document.createElement("tr");
    for (let i = 0; i < numCols; i++) {
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

  //let allRow = document.querySelectorAll("tr");
  if (numRows === 0 && numCols === 0) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    document.getElementById("grid").appendChild(tr);
    numCols++;
    numRows++;
  } else {
    let allRow = document.querySelectorAll("tr");
    for (let i = 0; i < allRow.length; i++) {
      let td = document.createElement("td");
      allRow[i].append(td);
    }
    numCols++;
  }
}

//Remove a row
function removeR() {
  //alert("Clicked Remove Row");
  // let allRow = document.querySelectorAll("tr");
  // let allCol = document.querySelectorAll("td");
  // if (!allRow || !allCol) {
  //   numRows = 0;
  //   numCols = 0;
  // }
  if (numRows == 0) {
    alert("no rows can be removed");
  } else {
    let table = document.querySelector("table");
    let lastElement = table.lastElementChild;
    table.removeChild(lastElement);
    numRows--;
    if (numRows == 0) {
      const table = document.getElementById("grid");
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
      numCols = 0;
    }
  }
}
//Remove a column
function removeC() {
  // let allCol = document.querySelectorAll("td");
  // let allRow = document.querySelectorAll("tr");
  // if (!allRow || !allCol) {
  //   numCols = 0;
  //   numRows = 0;
  // }
  if (numCols == 0) {
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
    if (numCols == 0) {
      const table = document.getElementById("grid");
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
      numRows = 0;
    }
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
    allTr[i].style.backgroundColor = "";
  }
}

function fillU() {
  //alert("Clicked Fill All Uncolored");
  colorSelected = selected();
  let allTr = document.querySelectorAll("td");

  for (let i = 0; i < allTr.length; i++) {
    if (!allTr[i].style.backgroundColor) {
      allTr[i].style.backgroundColor = colorSelected;
    }
  }
}
