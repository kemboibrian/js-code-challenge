//Student Grade Generator

//student grade generator
function studentGrade(score) {
    if (score > 100 || score < 0) {
        console.log('Invalid score');
        return 'Invalid score'
    }
    

//studentGrade(-1)
//studentGrade(101)
let grade=''
    if(score > 79) {
        grade = 'A'
    } else if (score >= 60 && score <=79) {
        grade = 'B'
    } else if (score >49 && score <= 59) {
        grade = 'C'
        
    }else if (score >= 40 && score <=49) {
        grade = 'D'
    }
    else{
        grade ='E'
    }
    return grade
}
studentGrade()
console.log(studentGrade('score')); // checks grade

let prompt= ("Enter student marks") // prompt to input students marks
    
        
    
    
        
    
    
