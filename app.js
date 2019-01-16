// Här hämtar jag alla forms med id.
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

// Här är alla mina knappar. 
const sendsupport = document.querySelector('#send');
const calcbtn = document.querySelector('#Calc');
const tooglesalarybtn = document.querySelector('#toogle-lön');

// Här är mina none display element dom här blir none när du klickar på calcbtn 
const footernone =  document.querySelector('footer');
const inputsnone = document.querySelector('.inputs');
const navbarnone = document.querySelector('.navbar');
const pspecdisplay = document.querySelector('.p-spec');
const pspecdisplay2 = document.querySelector('.p-spec2');
const borderdisplay = document.querySelector('.border');


// här hämtar jag mina P element för att kunna skriva ut dom och displaya senare med en funktion.
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
var skattp2 = document.querySelector('#skatt-p2');

// skatten är 33%
var skatt = 0.33;

// den här funktionen körs när du klickar på calcbtn då displayar den "none" på alla element som var för på hemsidan
// så att jag kan skriva ut mina P som jag hämtade in ovanför.
function displaystart () {

   footernone.style.display ="none";
    inputsnone.style.display = "none";
    navbarnone.style.display = "none";
    pspecdisplay.style.display = "block";
    pspecdisplay2.style.display = "block";
    borderdisplay.style.display = "block";
    console.log(20);
}

// Här kollar den vilken av formen för tooglen månad/timlön som är displayad och bytter plats på dom.
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
// När du klickar på skicka knappen så får du en alert.
  function sendsupportfunction () {
    alert('Ditt Meddelande har skickats!');
  }
// funkar exakt som form toogle fast du tooglar mellan olika p tex. Om du väljer månadslön så vissas inte P för timlön.
// om inget av det stämmer så får du en alert.
  function tooglefunctiontext () {

    if (salarytim.style.display === "block") {
      
        tidp.style.display = "block";
        salarytim.style.display = "block";
         salaryp.style.display = "none";
         summap.style.display = "none";
         summap2.style.display = "block";
         skattp2.style.display = "block";
         skattp.style.display = "none";
         console.log(5);
        
      } else if (salarytim.style.display !== "block") {
         
        tidp.style.display = "none";
        salaryp2.style.display ="none";
        salarytim.style.display = "none";
        salaryp.style.display = "block";
        summap2.style.display = "none";
        skattp.style.display = "block";
        skattp2.style.display = "none";
        console.log(50);

       
          
      }  else {
          
        alert("Något gick fel! Kontrollera info du skrev in.");  
      }       
}

// Räknar i omgångar så det blir säkert och inga fel. Här ligger månadslön räkningen och timlön.
// Med toFixed(2) så det inte blir med en 2 decimaler
function skrivutpochcalc () {
 
  let summabeforeskattm = salaryform.value * skatt;

  let fixskattm = summabeforeskattm.toFixed(2);

  let summaefterskattm = salaryform.value - summabeforeskattm;
  
  let summaefterskattm2 = summaefterskattm - billsform.value;

  let fixskattm2 = summaefterskattm2.toFixed(2);

  let summabeforeskatttim = salarytim.value * time.value;

  let summaafterskatttim = summabeforeskatttim * skatt; // redan skattat det man tar bort.

  let timskattfix = summaafterskatttim.toFixed(2);

  let summaafterskatttim2 = summabeforeskatttim - summaafterskatttim;

  let summatim = summaafterskatttim2 - billsform.value;  

  summatimstring = summatim.toFixed(2);
  
// Här skriver den ut allt på lönespec några av P skrivs inte ut pga toggle.
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
  skattp.innerHTML = "Skatt: "+fixskattm;
  skattp2.innerHTML = "Skatt: "+timskattfix;
  summap.innerHTML = "Summa: "+fixskattm2;
  summap2.innerHTML = "Summa: "+summatimstring;
 
  

}


// Här är alla eventlisteners och den väntar på click och vilka funktioner ska användas.

calcbtn.addEventListener('click',displaystart);
calcbtn.addEventListener('click',tooglefunctiontext);
tooglesalarybtn.addEventListener('click',tooglefunction);
calcbtn.addEventListener('click',skrivutpochcalc);
sendsupport.addEventListener('click',sendsupportfunction);








