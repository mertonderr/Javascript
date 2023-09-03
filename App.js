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
  
  yildizDeseni(5); // 5 satır ve 5 sütunlu bir yıldız deseni

  function yildizDeseni(boyut) {
    for (let i = 0; i < boyut; i++) {
      let bosluklar = ' '.repeat(i);
      let yildizler = '*'.repeat(boyut - i);
      console.log(bosluklar + yildizler);
    }
  }
  
  yildizDeseni(5); // Bu örnekte 5 satırlık bir yıldız deseni oluşturuyoruz.
  
    
    