# 4.3 Tri par insertion

![image](data/BO.png){: .center}

![image](data/color_bars.svg){: .center width=30%}

!!! note "Voici le lien du notebook associé."
	[T4.3_Tri_par_insertion](https://capytale2.ac-paris.fr/web/c/c7d9-1332504){: target = "_blank"}  
	
## 0. Préambule
Pourquoi étudier des algorithmes de tri ?  
Autant ne pas le cacher, ces algorithmes sont déjà implémentés (quelque soit le langage) dans des fonctions très performantes.  

En Python, on utilise la fonction `sort()` :



```python
>>> tab = [4, 8, 1, 2, 6]
>>> tab.sort()
>>> tab
[1, 2, 4, 6, 8]

```

![image](data/meme.png){: .center width=30%}


Le meilleur de nos futurs algorithmes de tri sera moins efficace que celui de cette fonction `sort()`...  
Malgré cela, il est essentiel de se confronter à l'élaboration manuelle d'un algorithme de tri.  
Le tri par insertion est le premier des deux algorithmes de tri que nous allons étudier (nous étudierons aussi le tri par sélection).  
Ces deux algorithmes ont pour particularité de :

- ne pas nécessiter la création d'une nouvelle liste. Ils modifient la liste à trier sur place.
- ne pas faire intervenir de fonctions complexes (comme la recherche d'un minimum par exemple)

## 1. Tri par insertion

### 1.1 Principe et algorithme
Observez l'animation ci-dessous et comparer avec la version initiale.  
![image](data/insertion2.gif){: .center width=40%}

- On traite successivement toutes les valeurs à trier, en commençant par celle en deuxième position.
- On va décaler vers la droite toutes les valeurs situées à gauche et supérieures à notre valeur de travail.
- On **insère** ensuite directement à sa position «la plus à gauche possible» notre valeur de travail. 

### 1.2 Codage de l'algorithme

!!! note "Tri par insertion (version optimisée) :heart:"
    ```python
    def tri_insertion2(lst) :
        '''trie en place la liste lst donnée en paramètre'''
        
		for i in range(1, len(lst)):                  # (1)
            a_inserer = lst[i]                        # (2)
                                                      
            while i > 0 and lst[i-1] > a_inserer  :   # (3)
                lst[i] = lst[i-1]                     # (4)
                i -= 1                                # (5)
            lst[i] = a_inserer                        # (6)
    ```

    1. On démarre à la deuxième valeur.
    2. On stocke dans une variable ```a_inserer ``` notre valeur de travail
    3. Tant qu'on trouve une valeur supérieure à notre valeur de travail et qu'on n'est pas revenu au début de la liste.
    4. On décale cette valeur de un rang vers la droite.
    5. On décrémente l'indice pour passer à la valeur de gauche suivante.
    6. On s'est arrêté quand la valeur n'était pas supérieure ou que l'on ne peut plus se décaler sur la gauche: on **insère** notre valeur de travail juste à droite de notre position d'arrêt.


*Application :*


```python
>>> ma_liste = [7, 5, 2, 8, 1, 4]
>>> tri_insertion2(maliste)
>>> ma_liste
[1, 2, 4, 5, 7, 8]
```

## 3. Complexité de l'algorithme

### 3.1  Étude expérimentale

A l'aide du [cours sur la complexité](../../4.2_Complexite/cours/) et proposer sur le notebook, des mesures expérimentales pour déterminer la complexité du tri par insertion.


### 3.2 Démonstration
Dénombrons le nombre d'opérations dans le pire des cas, pour une liste de taille $n$.

- boucle `for` : elle s'exécute $n-1$ fois.
- boucle `while` : dans le pire des cas, elle exécute d'abord 1 opération, puis 2, puis 3... jusqu'à $n-1$. Or 

$$1+2+3+\dots+n-1=\dfrac{n \times (n-1)}{2}$$

Le terme de plus haut degré de l'expression $\dfrac{n \times (n-1)}{2}$ est de degré 2 : le nombre d'opérations effectuées est donc proportionnel au **carré** de la taille des données d'entrée.  
Ceci démontre que le tri par insertion est de complexité **quadratique**.

Dans le cas (rare, mais il faut l'envisager) où la liste est déjà triée, on ne rentre jamais dans la boucle `while` : le nombre d'opérations est dans ce cas égal à $n-1$, ce qui caractérise une complexité linéaire.

### 3.3 Résumé de la complexité 

- dans le meilleur des cas (liste déjà triée) : complexité **linéaire**
- dans le pire des cas (liste triée dans l'ordre décroissant) : complexité **quadratique**

### 3.4 Preuve de la terminaison de l'algorithme



Est-on sûr que notre algorithme va s'arrêter ?  
Le programme est constitué d'une boucle `while` imbriquée dans une boucle `for`. Seule la boucle `while` peut provoquer une non-terminaison de l'algorithme. Observons donc ses conditions de sortie : 

```python
 while  i > 0 and lst[i-1] > a_inserer :
```

La condition `lst[i-1] > a_inserer` ne peut pas être rendue fausse avec certitude. 
Par contre, la condition `i > 0` sera fausse dès que la variable `i` deviendra égale à 0. Or la ligne 
`i -= 1` nous assure que la variable `i` diminuera à chaque tour de boucle. La condition  `i > 0` deviendra alors forcément fausse au bout d'un certain temps.

Nous avonc donc prouvé la **terminaison** de l'algorithme.

!!! aide "Vocabulaire"
    On dit que la valeur `i` est un **variant de boucle**.  
    C'est une notion théorique (ici illustrée de manière simple par la valeur `i`) qui permet de prouver *la bonne sortie d'une boucle* et donc la terminaison d'un algorithme.


### 3.5 Preuve de la correction de l'algorithme
Les preuves de correction sont des preuves théoriques. La preuve ici s'appuie sur le concept mathématique de **récurrence**. 
Principe du raisonnement par récurrence : 
une propriété $P(n)$ est vraie si :

- $P(0)$ (par exemple) est vraie
- Pour tout entier naturel $n$, si $P(n)$ est vraie alors $P(n+1)$ est vraie.

Ici, la propriété serait : « Quand $i$ varie entre 1 et `longueur(liste) - 1`, la sous-liste de longueur $i$ est triée dans l'ordre croissant.»

!!! aide "Vocabulaire"
    On appelle cette propriété un **invariant de boucle**.  
    *Invariant* siginifie qu'elle reste vraie pour chaque boucle.

- Quand $i$ vaut 1, on place le minimum de la liste en lst[0], la sous-liste lst[0] est donc triée.
- Si la sous-liste de $i$ éléments est triée, l'algorithme rajoute en dernière position de la liste le minimum de la sous-liste restante, dont tous les éléments sont supérieurs au maximum de la sous-liste de $i$ éléments. La sous-liste de $i+1$ éléments est donc aussi triée.



---
## Bibliographie
- Wikipedia, https://en.wikipedia.org/wiki/Sorting_algorithm
---