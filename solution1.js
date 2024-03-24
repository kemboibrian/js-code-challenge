//Student Grade Generator

function studentGrade(studentMarks) {
    // Check if input is between 0 and 100
    if (studentMarks <0 || studentMarks >100) {   
        return "Invalid,student marks should be between 0 and 100"
    }
    }
    // Determine the studentGrade based on the input marks
        let Studentgrade;
        let studentMarks;
        if (studentMarks > 79) {
            Studentgrade = 'A';
        } 
        else if (studentMarks >= 60 && studentMarks <= 79) {
            Studentgrade = 'B';
        } 
        else if (studentMarks >= 49 && studentMarks <= 59) {
            Studentgrade = 'C';
        } 
        else if (studentMarks >= 40 && studentMarks <= 49) {
            Studentgrade = 'D';
        } 
        else {
            Studentgrade = 'E';
        }
// function studentGrade() {  
         let prompt= ("Enter student marks") // prompt to input students marks
    
        studentGrade(studentMarks) // checks grade
    
    
        
    
    