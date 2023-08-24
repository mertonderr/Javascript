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
    
    
    