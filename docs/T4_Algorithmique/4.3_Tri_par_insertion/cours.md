# 4.3 Tri par insertion

![image](data/BO.png){: .center}

![image](data/color_bars.svg){: .center width=30%}

!!! note "Voici le lien du notebook associé."
	[T4.3_Tri_par_insertion](https://capytale2.ac-paris.fr/web/c/f5f5-1342560){: target = "_blank"}  
	
## 0. Préambule
Pourquoi étudier des algorithmes de tri ?  
Autant ne pas le cacher, ces algorithmes sont déjà implémentés (quelque soit le langage) dans des fonctions très performantes.  

En Python, on utilise la fonction `sort()` :



```python
>>> liste = [4, 8, 1, 2, 6]
>>> liste.sort()
>>> liste
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

!!! note "Tri par insertion :heart:"
    ```python
    def tri_insertion(liste) :
        '''trie sur place la liste liste donnée en paramètre'''
        for i in range(1, len(liste)):          # (1)
            cle = liste[i]                      # (2)
            j = i                               # (3)
            while j > 0 and liste[j-1] > cle :  # (4)
                liste[j] = liste[j-1]           # (5)
                j -= 1                          # (6)
            liste[j] = cle                      # (7)
    ```

    1. On démarre à la deuxième valeur.
    2. On stocke dans une variable ```cle``` notre valeur à insérer.
    3. On stoke la position initiale de la clé dans la variable ```j```.
    4. Tant que la valeur située à gauche est supérieure à la valeur à insérer et qu'on n'a pas atteint la première valeur de la liste.
    5. On décale cette valeur d'un rang vers la droite.
    6. On décrémente ```j``` afin de se positionner sur la valeur à gauche de notre valeur actuelle.
    7. On est sorti de la boucle ```while``` quand la valeur n'était plus supérieure ou que ```j``` a atteint la valeur zéro (on ne peut plus se décaler): on **insère** ```cle```(notre valeur à insérer) à la position d'indice ```j```.


*Application :*

<iframe width="800" height="500" frameborder="0"
        src="https://pythontutor.com/visualize.html#code=from%20tutor%20import%20tutor%0A%0Adef%20tri_insertion%28liste%29%20%3A%0A%20%20%20%20'''trie%20sur%20place%20la%20liste%20liste%20donn%C3%A9e%20en%20param%C3%A8tre'''%0A%20%20%20%20%0A%20%20%20%20for%20i%20in%20range%281,%20len%28liste%29%29%3A%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20cle%20%3D%20liste%5Bi%5D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20j%20%3D%20i%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20while%20j%20%3E%200%20and%20liste%5Bj-1%5D%20%3E%20cle%20%3A%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20liste%5Bj%5D%20%3D%20liste%5Bj-1%5D%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20j%20-%3D%201%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20liste%5Bj%5D%20%3D%20cle%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%0Ama_liste%20%3D%20%5B7,%205,%202,%208,%201,%204%5D%0Atri_insertion%28ma_liste%29%0A%0Atutor%28%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
</iframe>

```python
>>> ma_liste = [7, 5, 2, 8, 1, 4]
>>> tri_insertion(ma_liste)
>>> ma_liste
[1, 2, 4, 5, 7, 8]
```

## 2. Complexité de l'algorithme

### 2.1  Étude expérimentale

A l'aide du [cours sur la complexité](../../4.2_Complexite/cours/) proposer sur le notebook associé, des mesures expérimentales pour déterminer la complexité du tri par insertion.


### 2.2 Démonstration
Dénombrons le nombre d'opérations dans le pire des cas, pour une liste de taille $n$.

- boucle `for` : elle s'exécute $n-1$ fois.
- boucle `while` : dans le pire des cas, elle exécute d'abord 1 opération, puis 2, puis 3... jusqu'à $n-1$.

On a donc : 
$1+2+3+\dots+n-1=\dfrac{n \times (n-1)}{2}$

Le terme de plus haut degré de l'expression $\dfrac{n \times (n-1)}{2}$ est de degré 2 : le nombre d'opérations effectuées est donc proportionnel au **carré** de la taille des données d'entrée.  
Ceci démontre que le tri par insertion est de complexité **quadratique**.

Dans le cas (rare, mais il faut l'envisager) où la liste est déjà triée, on ne rentre jamais dans la boucle `while` : le nombre d'opérations est dans ce cas égal à $n-1$, ce qui caractérise une complexité linéaire.

### 2.3 Résumé de la complexité 

- dans le meilleur des cas (liste déjà triée) : complexité **linéaire**
- dans le pire des cas (liste triée dans l'ordre décroissant) : complexité **quadratique**


## 3. Preuve de l'algorithme

!!! note "Qu’est ce qu’une preuve d’un algorithme ?"
	   
	Réaliser la preuve d’un algorithme, c’est :  
	- Prouver qu’il se termine : On parle de terminaison.  
	- Prouver qu’il fait bien ce que l’on attend de lui : On parle de correction.  
	
	**Terminaison :** Il s’agit de vérifier ici que les calculs effectués par l’algorithme s’arrêtent bien. Notamment, lorsqu’une boucle conditionnelle est effectuée par l’algorithme, il est primordial de vérifier que l’on sort bien de cette boucle. On parle aussi de **variants de boucle**.  
	
	**Correction :** Il s’agît ici de prouver que l’algorithme fait bien ce qu’on lui demande. Pour cela, on va chercher un **invariant de boucle**. C’est une propriété qui est vérifiée avant l’entrée dans la boucle, qui est vérifiée à chaque itération de la boucle et qui amène au résultat escompté à la sortie de la boucle.


### 3.1 Preuve de la terminaison de l'algorithme


Est-on sûr que notre algorithme va s'arrêter ?  
Le programme est constitué d'une boucle `while` imbriquée dans une boucle `for`. Seule la boucle `while` peut provoquer une non-terminaison de l'algorithme. Observons donc ses conditions de sortie : 

```python
 while  j > 0 and liste[j - 1] > cle :
```

La condition `liste[j - 1] > cle` ne peut pas être rendue fausse avec certitude. 
Par contre, la condition `j > 0` sera fausse dès que la variable `j` sera égale à zéro. Or la ligne `j = j - 1` nous assure que la variable `j` diminuera à chaque tour de boucle. La condition  `j > 0` deviendra alors forcément fausse au bout d'un certain temps.

Nous avonc donc prouvé la **terminaison** de l'algorithme.

!!! aide "Vocabulaire"
    On dit que la valeur `j` est un **variant de boucle**.  
    C'est une notion théorique (ici illustrée de manière simple par la valeur `j`) qui permet de prouver *la bonne sortie d'une boucle* et donc la terminaison d'un algorithme.


### 3.2 Preuve de la correction de l'algorithme

Nous verrons la correction de l'algorithme de tri par insertion dans un autre cours.


