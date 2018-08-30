// -- Déclarer un tableau

const prenoms =[
'Layla', 'Jonathan', 'Arnaud', 'Jhordan', 'Elies'
];
console.log(prenoms[3]);
console.log(prenoms[0]);

for(let i = 0; i < prenoms.length; i++){
    console.log('-*_*-*_*-*_*-*_*'),
    console.log(prenoms[i] + '   =>');
};

var coordonnee = {
    nom : 'Dumontier',
    prenom : 'Jean-philippe',
    adresse : '43, rue du haut de la noue',
    tel : '01 02 03 04 05'
};
console.log(coordonnee);

console.log(coordonnee.nom + ' ' + coordonnee.prenom);

var coordonnees = [
    {
        nom: 'Joinvil',
        prenom: 'Luc Merlentz',
        adresse: '25,Place le Vau',
        tel: '01 02 03 04 05'
    },
    {
        nom: 'Layla',
        prenom: 'Paul',
        adresse: '53, x*x*x*x*x*x*',
        tel: '01 02 03 04 05'
    },
    {
        nom: 'Jhordan',
        prenom: 'Jean',
        adresse: '43, x*x*x*x*x*',
        tel: '01 02 03 04 05'
    },
    {
        nom: 'Hugo',
        prenom: 'Philippe',
        adresse: '43, x*x*x* *x*x*x',
        tel: '01 02 03 04 05'
    }
];


document.write('<ul>');
for(i = 0; i <coordonnees.length; i++){
    document.write(' <li> <strong>' + coordonnees[i].nom + ' ' + coordonnees[i].prenom + '</strong></li> ');

    
};

document.write('<ul>');


