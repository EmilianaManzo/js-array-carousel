Title: Carosello Mono Array
===
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

## Svolgimento:
1. creo un array con i collegamenti delle immagini 
2. creo una costante per l'elemento image-box dove andranno inserite le immagini
3. creo un ciclo for per inserire le immagini all'interno dell'array.
4. creo nel css una classe (.hide) per nascondere le immagini e la inserisco ad ogni ciclo del for
5. tolgo la classe .hide alla prima immagine
6. collego i bottoni in javascript
7. ai click dei bottoni incremento e decremento il contatore che ho creato in precedenza.
8. BONUS 1:
  -creo dei cicli if all'interno dei bottoni dove come condizione dove uso il contatore e la lunghezza dell'array per creare il loop.
9. BONUS 2: 
  -