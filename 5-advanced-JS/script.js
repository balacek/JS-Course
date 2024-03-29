/*var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'Teacher'
}*/

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

// Object.create

var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
};

var jane = Object.create(personProto);
jane.name = 'jane';
jane.yearOfBirth = 1884;
jane.job = 'teacher';

var tom = Object.create(personProto, {
    name: { value: 'tom' },
    yearOfBirth: { value: 1847 },
    job: { value: 'designer' }
});

function interViewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please ...')
        }
    }
}

var question = interViewQuestion('designer');

question('john');

interViewQuestion('designer')('mark');

// IIFE function
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})()

var john = {
    name: 'John',
    age: 26,
    job: 'Teacher',
    presentation: function (style, timeOfDay) {
        if (style == 'formal') {
            console.log('goood ' + timeOfDay + ', ladies and gentleman. I am ' + this.name + ' ' + this.age + ' ' + this.job);
        } else if (style == 'friendly') {
            console.log('hey whats up ' + timeOfDay + ', ladies and gentleman. I am ' + this.name + ' ' + this.age + ' ' + this.job);
        }
    }
};

var emily = {
    name: 'emily',
    age: 30,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// Bind

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');