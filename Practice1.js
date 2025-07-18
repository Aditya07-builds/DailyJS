let n = prompt("Enter the numbers you want to see in an array : ");
let array=[1,2,3,4,5,6,7,8,9,10];

//first n elements
console.log("First n values are :- ")
console.log(array.slice(0,n));

//last n elements
console.log("Last n values are :- ")
console.log(array.slice(array.length-n));

//to check empty string or not
let st = prompt("Enter a string");
if(st=="")
{
    console.log("Empty string!");
}
else
{
    console.log("Not an empty string!");
    }


//to check lowercase or not
let str1l=prompt("Enter a string and include lowercase if you want to:-");
if(str1l[3]==str1l[3].toLowerCase())
{
    console.log("It is a small case character");
}
else{
    console.log("It is an uppercase character");
}


//trim whitespaces in a string

let str1=prompt("Enter a string and include whitespaces if you want to:-");
let str2=str1.trim();
console.log(str2);

//better approach to check whether a string is empty or not

let st4 = prompt("Enter a string");
if(st4.length=0)
{
    console.log("Empty string!");
}
else
{
    console.log("Not an empty string!");
    }