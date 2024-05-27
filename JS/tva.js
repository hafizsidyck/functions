console.log("tva");

//écrire une function qui calcule le prix TTC connaissant le prix HT
// le prix TTC = prix HT + HT*TVA
// ex:
//prix HT : 5£
// tva: 20% = 20/100 = 0.2
//TTC = HT + HT*TVA = 1.2*HT
//HT => HT*1.2

const prixHt = 10;
const tauxTva = 1.2;

console.log(ttc(prixHt, tauxTva));

function ttc(prix, tva) {
    return prix * tva;
  
}

console.log(ttc(20, 1.2));

function ttc2(prix) {
    return prix * 1.2;
    
}