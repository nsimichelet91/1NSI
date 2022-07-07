# Exercices sur la boucle `for`

!!! note "Travail à réaliser sur le notebook Capytale du lien suivant:"

[T1.2 Exos Boucle for](https://capytale2.ac-paris.fr/basthon/notebook/?id=627891){: target = "_blank"} 

Les énoncés sont donnés sur cette page à titre indicatif.

{{ initexo(0) }}

!!! example "{{ exercice() }}"
    === "Énoncé"
        On donne une liste d'acteurs : 
        ```python
        liste_acteurs = ['Tahar', 'Omar', 'Guillaume', 'Swann', 'Alex', 'Roschdy']
        ```

        Utilisez cette liste pour produire la sortie suivante:
        ```python
        Tahar a eu le César du meilleur acteur
        Omar a eu le César du meilleur acteur
        Guillaume a eu le César du meilleur acteur
        Swann a eu le César du meilleur acteur
        Alex a eu le César du meilleur acteur
        Roschdy a eu le César du meilleur acteur
        ```

!!! example "{{ exercice() }}"
    === "Énoncé"
        1. Fabriquer la chaîne de caractères suivante (qui comporte 80 caractères) :
        ```python
        IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
        ```
        2. Fabriquer la chaîne de caractères suivante :
        ```python
        IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
        NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
        FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
        OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        ```

!!! example "{{ exercice() }}"
    === "Énoncé"
        Dans l'extrait de code suivant:

        - `chaine` est une variable initialisée avec un `str` vide : `""`;
        - on veut qu'en sortie de programme cette variable contienne la valeur `'bravo'`.

        L'idée est d'ajouter une par une les lettres à la variable `chaine`.

        Compléter le code.


        ```python linenums='1'
        chaine = ""
        for ... in ['b', 'r', 'a', 'v', 'o']:
            ...
        ```

        Cette variable `chaine` est appelée un **accumulateur**.



!!! example "{{ exercice() }}"
    === "Énoncé"
        En Python, la fonction `ord` renvoie le code Unicode d'un caractère et la fonction `chr` le contraire: elle renvoie le caractère correspondant à un code Unicode.

        Par exemple:
        ```python 
        >>> ord('a')
        97
        >>> chr(97)
        'a'
        ```

        Voici une liste contenant les codes Unicode des lettres d'un mot secret...
        À vous d'écrire un programme où en sortie, la variable `mot_secret` contiendra la chaîne de caractères de ce mot.   


        ```python linenums='1'
        mystere = [111, 107, 44, 32, 98, 105, 101, 110, 32, 106, 111, 117, 233]
        mot_secret = ""
        ```

      
!!! example "{{ exercice() }}"
    === "Énoncé"
        On souhaite calculer la somme des 1000 premiers nombres entiers naturels, c'est-à-dire:

        $1+2+3+4+5+\dots+999+1000$

        Écrire un programme avec une variable `somme` **accumulateur** (comme à l'exercice 3) qui contiendra la valeur souhaitée en fin de programme.


!!! example "{{ exercice() }}"
    === "Énoncé"
        Calculer $1\times2\times3\times\dots\times99\times100$.


      
!!! example "{{ exercice() }}"
	=== "Énoncé"
		Proposer un code qui écrit la **table de multiplication** de 7, de 8 et de 9.

		La sortie doit ressembler à :
		```
		7*1 = 7

		7*2 = 14

		...    
		...

		9*9 = 81    
		```
!!! example "{{ exercice() }}"
	=== "Énoncé"
		Sur un jeu d'échecs, les cases sont repérées par une lettre (de A jusqu'à H) et par un chiffre (de 1 jusqu'à 8).

		Les cases sont donc A1, A2, A3, ..., H7, H8.

		Proposer un code qui écrit **toutes** les cases possibles.

  
