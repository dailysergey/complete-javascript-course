//

/*var john ={
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

var Person = function(name,
    yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
       // this.calculateAge = function(){
       //     console.log(2016 - this.yearOfBirth);
       //}
    }

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = "smith";

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane',1969,'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


//Object create

// var personProto = {
//     calculateAge: function(){
//         console.log(2016 - this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,{
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1970},
//     job: {value: 'designer'}
// });


//Primitives vs objects


//Primitives
var a = 23;
var b = a;//copy value
a = 46;
console.log(a);
console.log(b);



//Objects

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;//new reference to exact same object in memory
obj2.age = 35;

console.log(obj1);
console.log(obj2);
 
//Functions

var age = 27;
var obj = {
    name:'Jonas',
    city: 'Lisbon'
}
function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city)