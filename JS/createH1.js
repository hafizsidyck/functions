const body = document.querySelector("body");
function createH1(Titre) { // titre est un paramètre de la function
    const h1 = document.createElement("h1");
    h1.textContent = Titre;
    return h1;
}
body.appendChild(createH1("titre")); // ici "titre" est un argument passé à la function 
//body.appendChild(createH1("titre2"));
//body.appendChild(createH1("titre3"));
//body.appendChild(createH1("titre4"));
//body.appendChild(createH1("titre5"));

function mySection(titre, texte) {
    const h1 = document.createElement("section");
    h1.textContent = titre;
    const p = document.createElement("p")
    p.textContent = texte;
    const section = document.createElement("section");
    section.appendChild(h1);
    section.appendChild(p);
    return section;
    
}

const uneSection = mySection("un titre", "un paragraphe...");
body.appendChild(uneSection);
console.log(uneSection);