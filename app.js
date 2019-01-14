const firstname = document.querySelector('#name');
const adressform = document.querySelector('#adress');
const kommunform = document.querySelector('#kommun');
const persnumform = document.querySelector('#pernum');
const arbetsform = document.querySelector('#arbets');
const salaryform = document.querySelector('#salary');
const billsform = document.querySelector('#bills');
const dateform = document.querySelector('#date');
const time = document.querySelector('#salary3');
const salarytim = document.querySelector('#salary2');


const calcbtn = document.querySelector('#Calc');
const tooglesalarybtn = document.querySelector('#toogle-lön');

const footernone =  document.querySelector('footer');
const inputsnone = document.querySelector('.inputs');
const navbarnone = document.querySelector('.navbar');
const pspecdisplay = document.querySelector('.p-spec');
const pspecdisplay2 = document.querySelector('.p-spec2');
const borderdisplay = document.querySelector('.border');



var namnp = document.querySelector('#namn-p');
var adressp = document.querySelector('#adress-p');
var kommunp = document.querySelector('#kommun-p');
var persnump = document.querySelector('#persnum-p');
var arbetsp = document.querySelector('#arbetsgiv-p');
var salaryp = document.querySelector('#salary-p');
var billsp = document.querySelector('#bills-p');
var datep = document.querySelector('#date-p');
var summap =document.querySelector('#summa-p');
var tidp = document.querySelector('#tid-p');
var salaryp2 = document.querySelector('#salary2-p');

function tooglefunction() {
    var x = document.querySelector("#salary");
    var x2 = document.querySelector("#salary2");
    var x3 = document.querySelector('#salary3');
   
    

    if (x.style.display !== "none") {
      x2.style.display = "block";
      x3.style.display = "block";
      x.style.display = "none";
      
     
      
      
    } else {
       
        x2.style.display = "none";
        x3.style.display = "none";
        x.style.display = "block";
        
    }
       
    
       
    
  }

function calcfunction() {

    firstname;
    adressform;
    kommunform;
    persnumform;
    arbetsform;
    salaryform;
    billsform;
    dateform;
    var skatt = 0.77
    let summa = salaryform.value - billsform.value * skatt;
    
    console.log(summa);  

    footernone.style.display ="none";
    inputsnone.style.display = "none";
    navbarnone.style.display = "none";
    pspecdisplay.style.display = "block";
    pspecdisplay2.style.display = "block";
    borderdisplay.style.display = "block";
   

    namnp.innerHTML = "Namn: "+firstname.value;
    adressp.innerHTML = "Adress: "+adressform.value;
    kommunp.innerHTML = "Kommun: "+kommunform.value;
    persnump.innerHTML = "Person Nummer: "+persnumform.value;
    arbetsp.innerHTML = "Arbetsgivare: "+arbetsform.value;
    salaryp.innerHTML = "Lön: "+salaryform.value;
    salaryp2.innerHTML = "Timlön: "+salarytim.value;
    
    billsp.innerHTML = "Räkningar: "+billsform.value;
    datep.innerHTML = "Datum: "+dateform.value;
    tidp.innerHTML = "Tid: " +time.value;
    summap.innerHTML ="Summa: "+summa;
    

    
    
}

tooglesalarybtn.addEventListener('click',tooglefunction);
calcbtn.addEventListener('click',calcfunction);






