///Functions Returning Fucntions

function interviewQuestion(job){
    if (job === 'designer'){
        return function(name){
            console.log(name+ ', can you please explain what UX design is?');
        }
    } else if(job === 'techer'){
        return function(name){
            console.log('What subject do u teach,'+name+'?');
        }
    } else{
        return function(name){
            console.log('Hello '+name+', how are u?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Mike');
designerQuestion('Jane');

interviewQuestion('teacher')('Mark');