// a) Take three subjects name from user and store them in 3 different variables.  
var subject1 = prompt("Enter first subject name:");  
var subject2 = prompt("Enter second subject name:");  
var subject3 = prompt("Enter third subject name:");  

// b) Total marks for each subject is 100, store it in another variable.  
var totalMarksPerSubject = 100;  
var totalsubmarks = totalMarksPerSubject*3;

// c) Take obtained marks for first subject from user and store it in different variable.  
var marksSubject1 = parseFloat(prompt(`Enter marks for ${subject1}:`));  

// d) Take obtained marks for the remaining 2 subjects from user and store them in variables.  
var marksSubject2 = parseFloat(prompt(`Enter marks for ${subject2}:`));  
var marksSubject3 = parseFloat(prompt(`Enter marks for ${subject3}:`));  

// Function to calculate percentage  
function calculatePercentage(obtainedMarks, totalMarks) {  
    if (totalMarks !== 0) {  
        return (obtainedMarks / totalMarks) * 100;  
    } else {  
        console.error("Total marks cannot be zero.");  
        return 0;  
    }  
}  

// Calculate percentage for each subject  
var percentageSub1 = calculatePercentage(marksSubject1, totalMarksPerSubject);  
var percentageSub2 = calculatePercentage(marksSubject2, totalMarksPerSubject);  
var percentageSub3 = calculatePercentage(marksSubject3, totalMarksPerSubject);  


// e) Now calculate total marks and percentage and show the result in browser  
var totalMarks = marksSubject1 + marksSubject2 + marksSubject3;  
var percentage = (totalMarks / (totalMarksPerSubject * 3)) * 100;  

// Create a table to display the results  
var table = `  
  <table>  
    <tr>  
      <th>Subject</th>  
      <th>Total Marks</th>  
      <th>Obtained Marks</th>  
      <th>Percentage</th>  
    </tr>  
    <tr>  
      <td>${subject1}</td>  
      <td>${totalMarksPerSubject}</td>  
      <td>${marksSubject1}</td>  
      <td>${percentageSub1.toFixed(2)}%</td>  
    </tr>  
    <tr>  
      <td>${subject2}</td>  
      <td>${totalMarksPerSubject}</td>  
      <td>${marksSubject2}</td>  
      <td>${percentageSub2.toFixed(2)}%</td>  
    </tr>  
    <tr>  
      <td>${subject3}</td>  
      <td>${totalMarksPerSubject}</td>  
      <td>${marksSubject3}</td>  
      <td>${percentageSub3.toFixed(2)}%</td>  
    </tr>  
    <tr>  
      <td></td>  
      <td><strong>${totalsubmarks}</strong></td>  
      <td><strong>${totalMarks}</strong></td>  
      <td><strong>${percentage.toFixed(2)}%</strong></td>  

    </tr>  
  </table>  
`;  

// Display the table in the browser  
document.write(table);





