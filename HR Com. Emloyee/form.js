
'use strict';
let emplForm = document.getElementById("employeeForm");
let tablebody = document.getElementById("bodyTa");
// let name=document.getElementById('emplName');
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
    showdataontable(parsekeyy);

    // let keyy = arr[arr.length-1].name ;
    // let localstoargeitem = localStorage.getItem(keyy);
    
    // let toObject = JSON.parse(localstoargeitem);
    // if(toObject !== null)
    // {
    //     arr = toObject;
    // }
  
    // return toObject;
}
fromlocalstoarge();


function sale(fname , salary)
{
    this.fname = fname ; 
    this.salary = salary;
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

 new sale(fname,salary);
 
}

getdatafrominput();

function showdataontable()
{
    // let  getfromlocalstoarge = fromlocalstoarge();
    // console.log(getfromlocalstoarge);

    let tablerow = document.createElement("tr");
    tablebody.appendChild(tablerow);

    let tabledt1 = document.createElement("td");
    tabledt1.innerText = arr[0].fname;
    console.log(tabledt1);

    let tabledt2 = document.createElement("td");
    tabledt2.innerText = arr[0].salary;
    console.log(tabledt2);
    
    tablerow.append(tabledt1,tabledt2)
}