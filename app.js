function Personne(nom, prenom, age, sexe){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;

    this.getPersonne = function (){
        return "Ma personne s'appelle " + this.nom + " " + this.prenom + ", elle a " + this.age + " ans, et est de sexe " + this.sexe;
    }
}

let tableau = [];

let chloe = new Personne("Ardoise", "Chloé", 18, "féminin");
let peter = new Personne("Parker", "Peter", 17, "masculin");
let irko = new Personne("Toutou","Irko", 7,"masculin");
let bubulle = new Personne ("Orange", "Bubulle", 2, "féminin");
let kati = new Personne("Paillete", "Kati", 4, "féminin");

tableau = [chloe, peter, irko, bubulle, kati];

for (let i = 0; i < tableau.length; i++){
    let div1 = document.createElement("div");
    div1.innerHTML = tableau[i].getPersonne();
    document.body.appendChild(div1);
}