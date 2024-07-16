document.addEventListener('DOMContentLoaded', function() {
    var student_details = [
      { 
        name: "Jyothi", rollNo: 1208, branch: "IT" 
      },
      { 
        name: "Priya", rollNo: 1260, branch: "IT" 
      },
      { 
        name: "Amrutha", rollNo: 1214, branch: "IT" 
      },
      { 
        name: "Srujana", rollNo: 1219, branch: "IT" 
      },
    ];
    var addTable = document.getElementById("addTable");
    var studentTable = document.getElementById("studentTable");
    var tableBody = studentTable.querySelector("tbody");
    var addButton = document.getElementById("addButton");
    addTable.onclick = function() {
      tableBody.innerHTML = '';
      student_details.forEach(function(student) {
        createStudentRow(student);
      });
      studentTable.style.display = "block";
    };
    addButton.onclick = function() {
      var name = prompt("Enter the new student's name:");
      var rollNo = parseInt(prompt("Enter the new student's roll number:"));
      var branch = prompt("Enter the new student's branch:");
      if (!name || isNaN(rollNo) || !branch) {
        alert("Invalid input. Please enter valid details.");
        return;
      }
      var newStudent = {
        name: name,
        rollNo: rollNo,
        branch: branch
      };
      student_details.push(newStudent);
      createStudentRow(newStudent);
    };
    function createStudentRow(student) {
      var tr = document.createElement("tr");    
      var nameCell = document.createElement("td");
      nameCell.textContent = student.name;    
      var rollNoCell = document.createElement("td");
      rollNoCell.textContent = student.rollNo; 
      var branchCell = document.createElement("td");
      branchCell.textContent = student.branch;     
      var updateCell = document.createElement("td");
      var updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.onclick = function() {
        updateStudent(student, tr);
      };
      updateCell.appendChild(updateButton);     
      var deleteCell = document.createElement("td");
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        deleteStudent(student, tr);
      };
      deleteCell.appendChild(deleteButton);     
      tr.appendChild(nameCell);
      tr.appendChild(rollNoCell);
      tr.appendChild(branchCell);
      tr.appendChild(updateCell);
      tr.appendChild(deleteCell);
      tableBody.appendChild(tr);
    }
    function updateStudent(student, tr) {
      var newName = prompt("Enter new name:", student.name);
      var newRollNo = parseInt(prompt("Enter new roll number:", student.rollNo));
      var newBranch = prompt("Enter new branch:", student.branch);
      if (!newName || isNaN(newRollNo) || !newBranch) {
        alert("Invalid input. Update canceled.");
        return;
      }
      student.name = newName;
      student.rollNo = newRollNo;
      student.branch = newBranch;
      tr.cells[0].textContent = newName;
      tr.cells[1].textContent = newRollNo;
      tr.cells[2].textContent = newBranch;
    }
    function deleteStudent(student, tr) {
      var index = student_details.indexOf(student);
      if (index !== -1) {
        student_details.splice(index, 1);
        tr.remove();
      }
    }
  });
//   document.addEventListener('DOMContentLoaded', () => {
//     const Students = [
//         {

//     ];

//     const studentTable = document.getElementById("my_table");
//     const click_button = document.getElementById("add_button");

//     function loadTable() {
//         studentTable.innerHTML = "";
//         const hrow = studentTable.insertRow();
//         hrow.insertCell().innerText = "Name";
//         hrow.style.fontSize = "20px";
//         hrow.style.fontFamily = "arial";
//         hrow.style.backgroundColor = "#f07167";
//         hrow.style.fontWeight = "Bold";

//         hrow.insertCell().innerText = "Age";
//         hrow.insertCell().innerText = "RollNumber";
//         hrow.insertCell().innerText = "Gender";
//         hrow.insertCell().innerText = "Branch";
//         hrow.insertCell().innerText = "Update";
//         hrow.insertCell().innerText = "Delete";



//         Students.forEach((student, index) => {
//             const row = studentTable.insertRow();
//             row.style.backgroundColor = "#fed9b7";


//             row.insertCell().innerText = student.Name;
//             row.insertCell().innerText = student.Age;
//             row.insertCell().innerText = student.RollNumber;
//             row.insertCell().innerText = student.Gender;
//             row.insertCell().innerText = student.Branch;
//             const updateCell = row.insertCell();
//             const updateButton = document.createElement("button");
//             updateButton.innerText = "Update";
//             updateButton.onclick = () => updateStudent(index);
//             updateCell.appendChild(updateButton);
//             const deleteCell = row.insertCell();
//             const deleteButton = document.createElement("button");
//             deleteButton.innerText = "Delete";
//             deleteButton.onclick = () => deleteStudent(index);
//             deleteCell.appendChild(deleteButton);
//             const cells = document.querySelectorAll('td');


//         });
//     }

//     function updateStudent(index) {
//         const newName = prompt("Enter new Name:", Students[index].Name);
//         const newAge = prompt("Enter new Age:", Students[index].Age);
//         const newRoll = prompt("Enter new RollNumber:", Students[index].RollNumber);
//         const newGender = prompt("Enter new Gender:", Students[index].Gender);
//         const newBranch = prompt("Enter  new  Branch:", Students[index].Branch);
//         if (newName !== null && newAge !== null && newGender !== null && newBranch != null && newRoll != null) {
//             Students[index] = { Name: newName, Age: parseInt(newAge), RollNumber: newRoll, Gender: newGender, Branch: newBranch };
//             loadTable();

//         }
//     }
//     function deleteStudent(index) {
//         Students.splice(index, 1);
//         loadTable();
//     }
//     click_button.addEventListener('click', () => {
//         click_button.addEventListener('dblclick', addNewStudent);
//         loadTable();
//     });
//     function addNewStudent() {
//         const Name = prompt("Enter name:");
//         const Age = prompt("Enter age:");
//         const RollNumber = prompt("Enter RollNumber:");
//         const Gender = prompt("Enter gender:");
//         const Branch = prompt("Enter branch:");
//         if (Name !== null && Age !== null && Gender !== null && Branch != null && RollNumber != null) {
//             Students.push({ Name, Age: parseInt(Age), RollNumber, Gender, Branch });
//             loadTable();
//         }
//     }
//     click_button.addEventListener('click', () => {
//         loadTable();
//         click_button.addEventListener('dblclick', addNewStudent);
//     });
// });