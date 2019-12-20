//Closures


function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age)+a)
    }
}


var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
//Application
retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//Without Closures
function interviewQuestion(job){
    if (job === 'designer'){
        return function(name){
            console.log(name+ ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log('What subject do u teach,'+name+'?');
        }
    } else{
        return function(name){
            console.log('Hello '+name+', how are u?');
        }
    }
}

//With Closures
function interviewQuestionClosure(job){
    return function(name){
        if(job === 'designer'){
            console.log(name+ ', can you please explain what UX design is?');
        }else if(job === 'teacher'){
            console.log('What subject do u teach,'+name+'?');
        }
        else{
            console.log('Hello '+name+', how are u?');
        }
    }
}
//Application
var designerMike = interviewQuestionClosure('designer')('Mike');
var teacherOlya = interviewQuestionClosure('teacher')('Olya');
interviewQuestionClosure('sad')('man')