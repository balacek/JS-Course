var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'Teacher'
}

class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        console.log(2019 - this.yearOfBirth);
    }
}
/*
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}
*/

var mark = new Person('mark', 1847, 'Popelar');