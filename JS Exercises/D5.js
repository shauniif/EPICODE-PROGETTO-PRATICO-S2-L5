/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

   for (let i = 0; i < pets.length; i++) {
            let animali = pets[i];
              console.log(animali);
        };
  
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
       let animali_inordine = pets.slice();
          animali_inordine.sort();
            console.log(animali_inordine)



  
  
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
    let animali_reverse = pets.slice();
        animali_reverse.reverse();
          console.log(animali_reverse)



/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
     let animali1 = pets.slice();
         let animali_cane = animali1.shift();
           console.log(animali1)
              animali1.push(animali_cane);
                console.log(animali1)



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];        
         function ftargacasuale() {
          return Math.random().toString(36).substring(2,9);
          };
              const targacasuale = ftargacasuale();
      
              
              cars.forEach((macchine) => {
                  macchine = cars.slice();
                    macchine.licensePlate = ftargacasuale();
                        console.log(macchine);
                    }); 



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/      
          var macchina = cars.slice();
          macchina.push(
            {
              brand: 'Toyota',
              model: 'Corolla',
              color: 'Argento',
              trims: ['Urbana','Ibrida' , 'Cromo'],
            }
          )
          var elementiel = [];
            for (i = 0; i < cars.length; i++) {
              let trims = macchina[i].trims.slice();
                let elementoel = trims.pop();
                  elementiel.push(elementoel);
                    console.log(elementiel);
          }

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
        var macchina1 = cars.slice();    

        for (i = 0; i < cars.length; i++) {
          let trims = macchina1[i].trims;
            let primotrims = trims[0];
              justTrims.push(primotrims);
                console.log(justTrims);
        }


   
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

       for (i = 0; i < cars.length; i++) {
          let macchine = cars[i].color;
          let primalettera = macchine.charAt(0);
              if ( primalettera === "b") {
                    console.log("Fizz");
                  } else {
                    console.log("Buzz");
                }
      } 
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
  const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
  ]
      var i = 0;
        while (i < numericArray.length && numericArray[i] !== 32) {
          console.log(numericArray[i]);  
          i++;
          } 
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
    
*/ 

  const charactersArray = ['g', 'n', 'u', 'z', 'd',]
          var numArray = []
          for (i = 0; i < charactersArray.length; i++) {
            switch(charactersArray[i]) {
                  case "d": numArray.push(4);
                  break;
                  case  "g": numArray.push(7);
                  break;
                  case "n": numArray.push(14);
                  break;
                  case "u": numArray.push(21);
                  break;
                  case "z": numArray.push(26);
                  break;
            }
          }console.log(numArray); 