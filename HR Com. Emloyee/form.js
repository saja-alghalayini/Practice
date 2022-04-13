
// 'use strict';
let emplForm = document.getElementById("employeeForm");
let email = document.getElementById("email");
let emaDep = document.getElementById("emaDep");
let tableHed = document.getElementById("tableHed");
let tablebody = document.getElementById("tableBody");

let arr = [];



function storeinlocalstorage()  //to save the array//
{
    let strng = JSON.stringify(arr)
    localStorage.setItem( 'data',strng )
}

function fromlocalstoarge ()
{
    let keyy=localStorage.getItem('data');
    let parsekeyy=JSON.parse(keyy);
    // showdataontable();
    console.log(parsekeyy);

    // let parsekeyy = arr[arr.length-1].name; //Ibrahim-z method
    let localstoargeitem = localStorage.getItem(parsekeyy);
    
    let toObject = JSON.parse(localstoargeitem);
    if(toObject !== null)
    {
        arr = toObject;
    }
  
    return toObject;
    showtable();
}
fromlocalstoarge();
// console.log(localstoargeitem);

function sale(fname , salary, email , emaDep)
{
    this.fname = fname ; 
    this.salary = salary;
    this.email = email;
    this.emaDep = emaDep;
    arr.push(this);
    storeinlocalstorage()
}

emplForm.addEventListener("submit", getdatafrominput)
function getdatafrominput(event)
{
 event.preventDefault();

 let fname = event.target.fname.value; 
 console.log(fname);

 let salary = Math.ceil(Math.random() * (500 - 100)+100);
 console.log(salary);

 let email = event.target.email.value; 
 console.log(email);

 let emaDep = event.target.emaDep.value; 
 console.log(emaDep);

 new sale(fname,salary,email,emaDep);
//  document.getElementById('name').innerHTML=localstoargeitem[0];
//  document.getElementById('salary').innerHTML=localstoargeitem[1];
//  document.getElementById('email').innerHTML=localstoargeitem[2];
//  document.getElementById('emaDep').innerHTML=localstoargeitem[3];
 
}

getdatafrominput();


function showtable(){
for (let i =0; i< arr.length; i++){
// let row=document.createElement("tr");
// let d1=document.createElement("td");
// let d2=document.createElement("td");
// let d3=document.createElement("td");
// let d4=document.createElement("td");

// tablebody.appendChild(row);
// row.appendChild(d1);
// row.appendChild(d2);
// row.appendChild(d3);
// row.appendChild(d4);

let d1=document.getElementById("d1");
let d2=document.getElementById("d2");
let d3=document.getElementById("d3");
let d4=document.getElementById("d4");


d1.textContent=arr[0].fname;
d2.textContent=arr[0].salary;
d3.textContent=arr[0].email;
d4.textContent=arr[0].emaDep;

}
}








// function showdataontable()
// {
//     let  getfromlocalstoarge = fromlocalstoarge();
//     console.log(getfromlocalstoarge());

//     let tablerow = document.createElement("tr");
//     tablebody.appendChild("td");

//     let tabledt1 = document.createElement("td");
//     tabledt1.innerText = arr[0].fname;
//     console.log(tabledt1);

//     let tabledt2 = document.createElement("td");
//     tabledt2.innerText = arr[0].salary;
//     console.log(tabledt2);
    
//     tablerow.append(tabledt1,tabledt2)
let