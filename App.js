    // * * * * * *
    //   * * * *
    //    * * *
    //     * *
    //      *
    //      *
    //     * *
    //    * * *
    //   * * * *
    //  * * * * * 


    let n = 5; 


    for (let i = 0; i < n; i++) {
        let bosluk = " ".repeat(i);
        let yildiz = "* ".repeat(n - i);
        console.log(bosluk + yildiz);
    }
    
    
    for (let i = n; i >= 0; i--) {
        let bosluk = " ".repeat(i);
        let yildiz = "* ".repeat(n - i);
        console.log(bosluk + yildiz);
    }




    
//      *
//     * *
//    *   *
//   *     *
//  *********

let shape = '';
for(let i=1;i<=height;i++){
    let line = ' '.repeat(height - i)
    if(i===1 || i===height){
        line += '*'.repeat(2 * i - 1)
    }
    else{
        line += '*' + ' '.repeat(2 * i - 3) + '*'
    }
    shape += line + '\n'
}
document.getElementById('shape').textContent = shape;

function yildizDeseni(boyut) {
    for (let i = 0; i < boyut * 2 - 1; i++) {
      let satir = '';
      for (let j = 0; j < boyut * 2 - 1; j++) {
        if (j >= i && j < boyut * 2 - 1 - i) {
          satir += '* ';
        } else {
          satir += '  ';
        }
      }
      console.log(satir);
    }
  }
  
 // yildizDeseni(5); // 5 satır ve 5 sütunlu bir yıldız deseni

  function yildizDeseni(boyut) {
    for (let i = 0; i < boyut; i++) {
      let bosluklar = ' '.repeat(i);
      let yildizler = '*'.repeat(boyut - i);
      console.log(bosluklar + yildizler);
    }
  }
  
 yildizDeseni(5); // Bu örnekte 5 satırlık bir yıldız deseni oluşturuyoruz.
  
const n = 5; // İstediğiniz satır sayısı

  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }
    console.log(row);
  }


// Kullanıcıdan bir ürünün adını ve fiyatını alın, ardından bu ürünün KDV'li fiyatını hesaplayın ve gösterin.

  var urunAdi = prompt("Ürün adını girin:"); 
  var urunFiyati = parseFloat(prompt("Ürün fiyatını girin:"));
  var kdvOrani = 0.18; // %18 KDV
  var kdvliFiyat = urunFiyati * (1 + kdvOrani);
  console.log(urunAdi + " adlı ürünün KDV'li fiyatı: " + kdvliFiyat); 


   //   1
  //   212
  //  32123
 //  4321234


 function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = '';

    for (let j = 1; j <= rows - i; j++) {
      pattern += ' ';
    }

    for (let k = i; k >= 1; k--) {
      pattern += k;
    }

    for (let l = 2; l <= i; l++) {
      pattern += l;
    }

    console.log(pattern);
  }
}

printPattern(4);



function drawPattern() {
  const patternSize = 5; // Desenin boyutunu ayarlayabilirsiniz

  for (let i = 0; i < patternSize; i++) {
    let row = '';
    
    for (let j = 0; j < patternSize; j++) {
      if (i === 0 || i === patternSize - 1 || j === 0 || j === patternSize - 1) {
        row += '*';
      } else {
        row += ' ';
      }
    }
    
    console.log(row);
  }
}

drawPattern();


//     1
//    212
//   32123
//  4321234
//   32123
//    212
//     1

function numbers(height){
  for(let i=1; i<=height; i++){
    let row = '' ;

    for(let j = 1;j <= height - i;j++){
      row += ' ';
    }
    // Artan sayılar

    for(let k = i; k >=1 ;k--){
      row += k;
    }
    for(let l = 2;l<=i; l++){
      row += l;
    }
    console.log(row)
  }
}

function numbersPattern(height){
  numbers(height);
  numbersReverse(height - 1)
}

function numbersReverse(height) {
  for (let i = height; i >= 1; i--) {
    let row = '';

    // Sol boşlukları ekleyin
    for (let j = 1; j <= height - i; j++) {
      row += ' ';
    }

    // Artan sayıları ekleyin
    for (let k = i; k >= 1; k--) {
      row += k;
    }

    // Azalan sayıları ekleyin
    for (let l = 2; l <= i; l++) {
      row += l;
    }

    console.log(row);
  }
}

numbersPattern(4);

    //      *
    //     * *
    //    * * *
    //   * * * *
    //  * * * * *
    //   * * * *
    //    * * *
    //     * *
    //      *

    function desen(height) {
      for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= height - i; j++) {
          row += ' ';
        }
        for (let k = 1; k <= i; k++) {
          row += '* ';
        }
        console.log(row);
      }
    
      for (let i = height - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= height - i; j++) {
          row += ' ';
        }
        for (let k = 1; k <= i; k++) {
          row += '* ';
        }
        console.log(row);
      }
    }
    
    const height = 5; 
    desen(height);

// Kullanıcının girdiği iki sayının en büyük ortak bölenini (EBOB) hesaplayan JavaScript kodu:

let num1 = parseInt(prompt("Birinci sayıyı girin:"));
let num2 = parseInt(prompt("İkinci sayıyı girin:"));

// EBOB hesaplama işlemi
function ebobHesapla(a, b) {
    while (b !== 0) {
        let gecici = b;
        b = a % b;
        a = gecici;
    }
    return a;
}

// Sonucu ekrana yazdırın
let ebob = ebobHesapla(num1, num2);
console.log(`EBOB(${num1}, ${num2}) = ${ebob}`);


// Asal sayıları bulma
for(let i=1;i<=25;i++){
  let prime = i > 1
  for(let j=2;j<=Math.sqrt(i);j++){
      if(i%j==0){
          prime = false
          break
      }
  }
  if(prime){
      console.log(i,"sayınız asal")
  }
}   


 // Bir dizi içindeki çift sayıları bulan ve bu sayıları yeni bir diziye ekleyen bir fonksiyon
 function ciftSayilarBulma(dizi) {
  return ciftSayilar;
}
var sayilar = [3, 8, 12, 5, 10, 7, 22, 15];
var ciftSayilarSonuc = ciftSayilariBulma(sayilar);

console.log("Orjinal Sayılar: " + sayilar);
console.log("Çift Sayılar: " + ciftSayilarSonuc);