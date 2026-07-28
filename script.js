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

