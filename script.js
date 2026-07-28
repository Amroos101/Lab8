let student = {
    name: "Omar",
    age: 25,
    enrolled: true,
    courses: ["web development", "database concepts and design", "operating systems"],
    
    displayInfo: function() {
        console.log(`Student Name: ${this.name}, Age: ${this.age}`);
    },

    addCourse: function(newCourse) {
        this.courses.push(newCourse);
    },

    getTotalCourses: function() {
        return this.courses.length;
    }
};

console.log(student.name);
console.log(student.age);
student.displayInfo();

let studentJSON = JSON.stringify(student);
console.log(studentJSON);

let parsedStudent = JSON.parse(studentJSON);
console.log(parsedStudent);

let { name, courses } = student;
console.log(name);
console.log(courses);

let scores = [85, 92, 78, 90];
let [firstScore, secondScore] = scores;
console.log(firstScore);
console.log(secondScore);

let clonedStudent = { ...student, graduationYear: 2028 };
console.log(clonedStudent);

let newCourses = ["full stack development", "python"];
let mergedCourses = [...student.courses, ...newCourses];
console.log(mergedCourses);

student.addCourse("machine learning");
console.log(student.courses);
console.log(student.getTotalCourses());

