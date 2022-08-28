{{ initexo(0)}}

# Exercices sous Processing
!!! note "Travail à réaliser sur le notebook Capytale du lien suivant:"

	[T1.2 Exos Boucle for p5](https://capytale2.ac-paris.fr/web/c/1b98-627734/mln){: target = "_blank"} 

Les énoncés sont donnés sur cette page à titre indicatif.
## 1. Présentation de Processing

![](data/processing3-logo.png){align=right} 
Processing est un outil de création multimédia utilisant le code informatique. Simple de prise en main, il a été créé par des artistes pour des artistes. On peut utiliser le langage Python pour entrer les instructions.

Nous utiliserons la bibliothèque Python "p5" ("p5 est une bibliothèque Python qui fournit des fonctionnalités de dessin de haut niveau pour vous aider à créer rapidement des simulations et des illustrations interactives à l'aide de Python. Il combine les idées fondamentales de Processing - apprendre à coder dans un contexte visuel - avec la lisibilité de Python pour rendre la programmation plus accessible aux débutants, aux éducateurs et aux artistes.) sur Capytale.  

Nous l'utiliserons pour ajouter du graphisme à nos créations. Dans tous les exercices de cette page, les dessins réalisés seront statiques. Nous verrons plus tard comment Processing permet très facilement de faire des animations.

??? info "Documentation"
    - [Le site officiel (anglais)](https://processing.org/){:target="_blank"} 
    - [Un manuel d'utilisation (français)](https://fr.flossmanuals.net/processing/introduction/){:target="_blank"} 
	- [Documentation officielle de p5](https://p5.readthedocs.io/en/latest/tutorials/color.html){:target="_blank"} 


## 2. Les bases de Processing
### 2.1 Repère

À l'exécution de tout script Processing, une fenêtre s'affiche avec une zone de dessin. Sa taille se définit à l'aide de la fonction `size`. Par exemple, pour créer une zone de dessin de 300 pixels sur 200 pixels, on utilisera:

```python
size(300, 200)
```

Chaque pixel de cette zone est repérée par des coordonnées dans le repère suivant, dont l'origine se situe en haut à gauche et l'axe des ordonnées est **orienté vers le bas**.

![](data/repere.png){: .center} 

### 2.2 Tracés

!!! info "Tracés de base"
    - `point` : permet de dessiner un point (pixel). En paramètre, les coordonnées du point.
    - `line`: permet de tracer une ligne entre deux points. En paramètres, les coordonnées des deux points.
    - `rect`: permet de tracer un rectangle. En paramètres, les coordonnées du sommet haut-gauche, puis la largeur et la hauteur du rectangle.
    - `ellipse`: permet de tracer une ellipse. En paramètres, les coordonnées du centre, puis la largeur et la hauteur (mettre la même valeur pour un cercle).

??? note "Exemples"
    Copier-coller le code suivant et faire varier les paramètres pour bien les comprendre.

    ```python
	from p5 import *

	def setup():
		createCanvas(200, 200)
		noLoop()

	def draw():
		point(10, 60)
		line(10, 10, 100, 150)
		rect(80, 10, 20, 50)
		ellipse(150, 100, 80, 40)

	run()
    ```

### 2.3 Couleurs

!!! info "Pinceau"
    - `background`: permet de définir la couleur du fond de la zone de dessin. En paramètres, les trois composantes RGB de la couleur.
    - `stroke`: permet de définir la couleur du pinceau (noir par défaut) pour le contour de la forme. En paramètres, les trois composantes RGB de la couleur.
    - `noStroke`: permet de dessiner une forme sans coutour (pas de paramètre).
    - `strokeWeight`: permet de définir la largeur du pinceau. En paramètre, le nombre de pixel.
    - `fill`: permet de définir la couleur de remplissage de la forme. En paramètres, les trois composantes RGB de la couleur.
    
??? note "Exemples"
    Copier-coller le code suivant et faire varier les paramètres pour bien les comprendre.

    ```python
	from p5 import *

	def setup():
		createCanvas(200, 200)
		
		noLoop()

	def draw():
		background(255)
		stroke(255, 0, 0)
		point(10, 60)
		line(10, 10, 100, 150)
		stroke(0, 127, 255)
		strokeWeight(5)
		rect(80, 10, 20, 50)
		noStroke()
		fill(204, 153, 204)
		ellipse(150, 100, 80, 40)

	run()
    ```

## 3. Exercices sur la simple boucle
Tous les exercices sont à faire dans une fenêtre de 300 pixels sur 300 pixels.

!!! example "{{ exercice() }}"
    === "Énoncé"
        L'objectif est d'obtenir dix lignes aléatoires, de couleur aléatoire et d'épaisseur 10.

        ![](data/exo1.png){: .center} 

        *Aide*

        - la fonction ```random(a,b)``` permet d'obtenir un entier pseudo aléatoire entre ```a``` et ```b```.



!!! example "{{ exercice() }} :warning: *difficile*"
    === "Énoncé"
        Reprendre l'exercice précédent en faisant en sorte que chaque ligne commence là où une autre s'arrête (hormis la première)
        ![](data/exo2.png){: .center} 


!!! example "{{ exercice() }}"
    === "Énoncé"
        Tracer 50 disques de position, diamètre, couleur et transparence aléatoires.
        ![](data/exo3.png){: .center} 

        *Aide*

        - la transparence s'obtient en rajoutant un 4ème paramètre (entre 0 et 255) à la suite de RGB. On appelle ce paramètre le canal Alpha.
        Ex : (255,0,0,200) est un rouge très transparent.


!!! example "{{ exercice() }}"
    === "Énoncé"
        Proposer un code réalisant la figure suivante. Votre code devra obligatoirement comporter une boucle ```for```. 
        ![image](data/exo4.png){: .center width=30%}


## 4. Exercices sur la double boucle
La structure de double boucle va permettre (par exemple) de parcourir l'intégralité des pixels d'une image.


!!! example "{{ exercice() }}"
    === "Énoncé"
        Construire une image où tous les points ont une couleur aléatoire.
        ![](data/exo5.png){: .center} 


!!! example "{{ exercice() }}"
    === "Énoncé"
        Construire une image constituée de carrés de 20 pixels de coté, de couleur aléatoire. L'image est toujours un carré de côté 300 pixels.
        ![](data/exo6.png){: .center} 
