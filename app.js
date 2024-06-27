const courseDetails = {
  hs1001: {
    courseCode: "HS1001",
    courseName: "Communicative English",
    courseCategory: "SMASH",
    courseCredits: 3,
  },
  ma1001: {
    courseCode: "MA1001",
    courseName: "Algebra and Calculus",
    courseCategory: "SMASH",
    courseCredits: 3,
  },
  ch1002: {
    courseCode: "CH1002",
    courseName: "Engineering Chemistry-II",
    courseCategory: "SMASH",
    courseCredits: 4,
  },
  ee1001: {
    courseCode: "EE1001",
    courseName: "Basics of Electrical and Electronics Engineering",
    courseCategory: "SMASH",
    courseCredits: 3,
  },
  cs1101: {
    courseCode: "CS1101",
    courseName: "Programming Fundamentals",
    courseCategory: "MAJOR",
    courseCredits: 3,
  },
  cs1102: {
    courseCode: "CS1102",
    courseName: "Digital Computer Fundamentals",
    courseCategory: "MAJOR",
    courseCredits: 2,
  },
  cs1103: {
    courseCode: "CS1103",
    courseName: "Programming Fundamentals Lab",
    courseCategory: "MAJOR",
    courseCredits: 2,
  },
  ph1001: {
    courseCode: "PH1001",
    courseName: "Engineering Physics-I",
    courseCategory: "SMASH",
    courseCredits: 4,
  },
  me1002: {
    courseCode: "ME1002",
    courseName: "Engineering Graphics",
    courseCategory: "SMASH",
    courseCredits: 3,
  },
  cs1104: {
    courseCode: "CS1104",
    courseName: "Data Structures",
    courseCategory: "MAJOR",
    courseCredits: 3,
  },
  cs1105: {
    courseCode: "CS1105",
    courseName: "Object Oriented Programming using Java",
    courseCategory: "MAJOR",
    courseCredits: 3,
  },
  cs1106: {
    courseCode: "CS1106",
    courseName: "Computer Organization and Architecture",
    courseCategory: "MAJOR",
    courseCredits: 3,
  },
  cs1107: {
    courseCode: "CS1107",
    courseName: "Data Structures Lab",
    courseCategory: "MAJOR",
    courseCredits: 2,
  },
  cs1108: {
    courseCode: "CS1108",
    courseName: "Object Oriented Programming Lab",
    courseCategory: "MAJOR",
    courseCredits: 2,
  },
};

const gradesDetails = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 4,
  F: 0,
  U: 0,
  P: 0,
};

var totalCourses;

document.getElementById("submit-btn").addEventListener("click", createInputs);

function createInputs() {
  totalCourses = document.getElementById("credits-input").value;
  const cgpaContentContainer = document.querySelector(".cgpa-content");

  cgpaContentContainer.innerHTML = "";

  for (let i = 0; i < totalCourses; i++) {
    const label = document.createElement("label");
    label.innerText = `Enter details of course ${i + 1}: `;
    label.setAttribute("class", "labels");

    const input = document.createElement("input");
    input.placeholder = "Enter Course Code";
    input.required = true;
    input.type = "text";
    input.classList.add("inputs");
    input.id = `courseCode${i + 1}`;

    const br = document.createElement("br");

    const input1 = document.createElement("input");
    input1.placeholder = "Enter Grade";
    input1.required = true;
    input1.type = "text";
    input1.classList.add("inputs");
    input1.id = `courseGrade${i + 1}`;

    cgpaContentContainer.append(label);
    cgpaContentContainer.append(input);
    cgpaContentContainer.append(input1);
    cgpaContentContainer.append(br);
  }

  const btn = document.createElement("button");
  btn.innerText = "Calculate GPA";
  btn.id = "calculateBtn";
  btn.classList.add("btn");
  btn.style.marginLeft = "5vw";
  cgpaContentContainer.append(btn);

  const resetBtn = document.createElement("button");
  resetBtn.innerText = "Reset";
  resetBtn.id = "resetBtn";
  resetBtn.classList.add("btn");
  resetBtn.style.marginLeft = "5vw";
  cgpaContentContainer.append(resetBtn);

  document
    .getElementById("calculateBtn")
    .addEventListener("click", calculateGPA);
  document.getElementById("resetBtn").addEventListener("click", resetForm);
}

function calculateGPA() {
  let totalCredits = 0;
  let currentCourseCode = null;
  let currentCourseCredits = null;
  let gradePoints = 0;

  for (let i = 0; i < totalCourses; i++) {
    currentCourseCode = document
      .getElementById(`courseCode${i + 1}`)
      .value.toLowerCase();
    currentCourseCredits = document
      .getElementById(`courseGrade${i + 1}`)
      .value.toUpperCase();

    totalCredits += courseDetails[`${currentCourseCode}`].courseCredits;
    gradePoints +=
      courseDetails[`${currentCourseCode}`].courseCredits *
      gradesDetails[currentCourseCredits];
  }

  let gpa = gradePoints / totalCredits;

  const gpaText = document.createElement("h3");
  gpaText.innerText = `Your GPA is ${gpa}`;
  alert(`Your GPA is ${gpa}`);
  document.querySelector(".cgpa-content").append(gpaText);
}

function resetForm() {
  location.reload();
}
