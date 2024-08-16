// taking user input
var table = prompt("Write a number to print the table:");  
if (table === null || table.trim() === "") { 
    table = 5;   
}  

// Print the table
document.write(`Table Of ${table} <br/>`);  
document.write(`${table} X 1 = ${table * 1} <br/>`);  
document.write(`${table} X 2 = ${table * 2} <br/>`);  
document.write(`${table} X 3 = ${table * 3} <br/>`);  
document.write(`${table} X 4 = ${table * 4} <br/>`);  
document.write(`${table} X 5 = ${table * 5} <br/>`);  
document.write(`${table} X 6 = ${table * 6} <br/>`);  
document.write(`${table} X 7 = ${table * 7} <br/>`);  
document.write(`${table} X 8 = ${table * 8} <br/>`);  
document.write(`${table} X 9 = ${table * 9} <br/>`);  
document.write(`${table} X 10 = ${table * 10} <br/>`);

