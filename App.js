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
    
    