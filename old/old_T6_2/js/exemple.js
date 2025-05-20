// Accès aux élément par l'arborescence du DOM
document.title = "Le JavaScript";
document.body.style.color = 'purple';

// Sélection de l'élément ayant pour identifiant "bloc_page" et modification de sa largeur
// Par définition id ne correspond qu'à un seul élément.
document.getElementById('bloc_page').style.width = '250px';

// Sélection de tous les éléments ayant un attribut class="imagesflottantes"
let imagesflottantes = document.getElementsByClassName("imagesflottantes");

// Les éléments sont référencés dans un tableau : on y accède avec une boucle for
for (image of imagesflottantes) { image.style.float = 'right'; }

// Accès aux éléments par le nom de balise
let paragraphes = document.getElementsByTagName('p');
// Les éléments sont référencés dans un tableau : on y accède avec une boucle for
for (paragraphe of paragraphes) { paragraphe.textContent = 'Je suis un paragraphe'; }

// Accès aux éléments à l'aide des sélecteurs CSS
// `querySelector` sélectionne un seul élément (le 1er si il y en a plusieurs)
document.querySelector("#bloc_page").style.backgroundColor = 'lightgrey';
// `querySelectorAll` sélectionne plusieurs éléments : le résultat est dans un tableau
document.querySelectorAll("p.important")[0].style.backgroundColor = 'gold';

