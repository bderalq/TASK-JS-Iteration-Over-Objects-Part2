const students = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];

function getStudentName(student) {
  return student.name;
}

function getCourse(student, courseIndex) {
  return student.courses[courseIndex];
}
function addCourseToStudent(student, course) {
  student.courses.push(course);
  return student;
}
function countCourses(student) {
  return student.courses.length;
}

function removeCourseFromStudent(student, course) {
  student.courses = student.courses.filter(y => y !== course);
  return student;
}
function findStudentById(students, studentId) {
  return students.find(student => student.id == studentId)
}

// 🌶️🌶️
// 7) Write a `getStudentsByCourse` function that accepts a `course` string and an array of student objects `students`,
// then returns an array of student objects who are enrolled in the specified course
function getStudentsByCourse(students, course) {
  // write your code here...
}
// console.log(getStudentsByCourse(students, "Music"));

// 🌶️🌶️🌶️
// 8) Write a `listAllCourses` function that accepts an array of `students`
// then returns an array of all unique courses names across all students
function listAllCourses(students) {
  // write your code here...
}
// console.log(listAllCourses(students));

module.exports = {
  getStudentName,
  getCourse,
  addCourseToStudent,
  countCourses,
  listAllCourses,
  removeCourseFromStudent,
  findStudentById,
  getStudentsByCourse,
};
