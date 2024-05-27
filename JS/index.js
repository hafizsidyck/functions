const nombre = 10;
multiplier(3, nombre); // 3 est un argument

//une function simple

function foisDeux() {
    console.log(nombre * 2);
    
}
//foisDeux();

// une function avec paramètre

function multiplier(a, n) {  // a est un paramètre de la function
    console.log(n * a);
    return a * n;
}