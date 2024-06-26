!!! note "Travail à réaliser sur le notebook Capytale du lien suivant:"
	[T2.1_les_listes_exercices](https://capytale2.ac-paris.fr/web/c/75d4-800427){: target = "_blank"} 

{{initexo(0)}}
!!! example "{{ exercice() }}"
    === "Énoncé"
        ![image](data/sanglier.jpg){: .center width=60%}
        Résolvez le **Pydéfi** proposé à [cette adresse](https://pydefis.callicode.fr/defis/Herculito04Sanglier/txt)

        Vous pouvez vous créer un compte pour valider vos résultats, ce site (géré par l'Académie de Poitiers) est **remarquable**. 
		   

!!! example "{{ exercice() }}"
    === "Énoncé"
        On donne le tableau ```m``` suivant :
        ```python linenums='1'
        m = [[17, 71, 75, 89, 45, 10, 54, 26, 59, 47, 57, 64, 44], \
            [67, 25, 47, 49, 28, 40, 10, 17, 77, 35, 87, 15, 68], \
            [66, 89, 28, 43, 16, 14, 12, 21, 68, 22, 14, 18, 59], \
            [60, 35, 30, 23, 22, 37, 49, 89, 82, 80, 85, 28, 17], \
            [61, 42, 39, 46, 29, 38, 85, 72, 44, 60, 47, 35, 52], \
            [44, 28, 24, 40, 71, 71, 46, 25, 78, 54, 66, 84, 52], \
            [29, 71, 7, 38, 71, 60, 71, 60, 16, 82, 35, 39, 23], \
            [18, 61, 38, 7, 8, 32, 67, 43, 23, 28, 29, 16, 30], \
            [45, 30, 74, 9, 84, 78, 11, 80, 42, 64, 9, 39, 26], \
            [78, 57, 54, 66, 57, 63, 10, 42, 61, 19, 26, 25, 53], \
            [38, 87, 10, 64, 75, 26, 14, 68, 19, 33, 75, 50, 18], \
            [52, 81, 24, 67, 37, 78, 17, 19, 61, 82, 57, 24, 54]]

        ```
        Afficher successivement chaque ligne du tableau en respectant les règles suivantes :

        - si le nombre est divisible par 7, afficher ```*```, sinon afficher une espace ``` ```
        - sur une même ligne, on affichera tous les symboles côte à côte, en rajoutant le paramètre ```end = ''``` à la fonction ```print```. (*exemple :* ```print('*', end = '')``` )
        - on ira à la ligne à la fin de chaque ligne, par l'instruction ```print()```    


!!! example "{{ exercice() }}"
    === "Énoncé"
        Résolvez le pydéfi **Insaisissable matrice** proposé à [cette adresse](https://pydefis.callicode.fr/defis/AlgoMat/txt)        
    

!!! example "{{ exercice() }}"
    === "Énoncé"
        **Advent of code 2021, day02**

        - [énoncé](https://adventofcode.com/2021/day/2)

        - Input de test :

        ```python
        forward 5
        down 5
        forward 8
        up 3
        down 8
        forward 2
        ```

        - Exemple d'input réel :
        [input1.txt](https://raw.githubusercontent.com/glassus/aoc2021/main/day02/input1.txt)

        - Aide au parsing :
        ```python
        data_str = open('input1.txt').read().splitlines()
        ```
        permet de récupérer dans une liste ```data_str``` toutes les lignes de l'input. Attention tous les éléments de cette liste sont des chaines de caractères (type ```String``` ).

        Pour séparer une chaine de caractères en une **liste** de plusieurs chaines de caractères, grâce à un délimiteur : la fonction ```split``` :

        ```python
        >>> "12/02/2002".split("/")
        ['12', '02', '2002']
        ``` 
