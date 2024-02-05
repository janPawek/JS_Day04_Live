// Funktioniert, nur für simple Seiten.Seiten

// function greet (){
//     console.log('greetings!');
// }

// let btn = document.querySelector('.myBtn');
// btn.onclick = greetingsAgain;

// function greetingsAgain(){
//     console.log('greetings again!');
// }

// Nun die Profi-Variante: 'click' ist der 1. Parameter, 2. Parameter greet, mehrere weitere Parameter sind möglich und laufen am selben Button
// .value addEventListener um gleiches zu erhalten wie console.log(); 
bnt.addEventListener('click', ()=>{
    const myInput = document.querySelector('#myInput').value;
    // console.log(myInput.value);
    if (myInput != ''){
        myList.innerHTML =  `<li>${myInput}</li>`
    }
    // // else{
    //     alert('hey, your input is empty')
    }
   })