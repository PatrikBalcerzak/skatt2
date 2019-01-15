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
var summap2 =document.querySelector('#summa-p2');
var tidp = document.querySelector('#tid-p');
var salaryp2 = document.querySelector('#salary2-p');
var skattp = document.querySelector('#skatt-p');

var skatt = 0.33;

function displaystart () {

   footernone.style.display ="none";
    inputsnone.style.display = "none";
    navbarnone.style.display = "none";
    pspecdisplay.style.display = "block";
    pspecdisplay2.style.display = "block";
    borderdisplay.style.display = "block";

}


function tooglefunction() {

    if (salaryform.style.display !== "none") {
      salarytim.style.display = "block";
      time.style.display = "block";
      salaryform.style.display = "none";
      
     
      
      
    } else {
       
        salarytim.style.display = "none";
        time.style.display = "none";
        salaryform.style.display = "block";
        
    }    
  }

  function tooglefunctiontext () {

    if (salarytim.style.display === "block") {
      
        tidp.style.display = "block";
        salarytim.style.display = "block";
         salaryp.style.display = "none";
         summap.style.display = "none";
         summap2.style.display = "block";
         console.log(5);
        
      } else if (salarytim.style.display !== "block") {
         
        tidp.style.display = "none";
        salaryp2.style.display ="none";
        salarytim.style.display = "none";
        salaryp.style.display = "block";
        summap2.style.display = "none";
        skattp.style.display = "block";
        console.log(50);

       
          
      }  else {
          
        alert("Något gick fel! Kontrollera info du skrev in.");  
      }       
}

function calcfunctiondisplayskatt () {
  
  let skattm = salaryform.value * skatt;

}

function skrivutpochcalc () {
 
  let summabeforeskattm = salaryform.value - billsform.value;

  let summaefterskattm = summabeforeskattm * skatt;
  
  let summabeforeskatttim = salarytim.value * time.value;

  let summaafterskatttimbills = summabeforeskatttim - billsform.value;

  let summatim = summaafterskatttimbills * skatt;  
  

  namnp.innerHTML = "Namn: "+firstname.value;
  adressp.innerHTML = "Adress: "+adressform.value;
  kommunp.innerHTML = "Kommun: "+kommunform.value;
  persnump.innerHTML = "Person Nummer: "+persnumform.value;
  arbetsp.innerHTML = "Arbetsgivare: "+arbetsform.value;
  salaryp.innerHTML = "Månadslön: "+salaryform.value;
  salaryp2.innerHTML = "Timlön: "+salarytim.value;
  
  billsp.innerHTML = "Räkningar: "+billsform.value;
  datep.innerHTML = "Datum: "+dateform.value;
  tidp.innerHTML = "Tid: " +time.value;
  summap.innerHTML = "Summa: "+summaefterskattm;
  summap2.innerHTML = "Summa: "+summatim;

}


tooglesalarybtn.addEventListener('click',tooglefunction);
calcbtn.addEventListener('click',displaystart);
calcbtn.addEventListener('click',tooglefunctiontext);
calcbtn.addEventListener('click',skrivutpochcalc);








