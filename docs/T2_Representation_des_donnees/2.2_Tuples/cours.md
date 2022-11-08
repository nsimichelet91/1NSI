# 2.2 Tuples

![image](data/BO.png){: .center}

![image](data/meme.jpg){: .center width=30%}


## 1.Définition des tuples
Les tuples (appelés *p-uplets* dans le programme officiel de NSI) sont une collection d'objets **ordonnée** mais **NON MODIFIABLE**.  
Pour rappel :

- **chaine de caractères** : ordonnée et non modifiable
- **liste** : ordonnée et modifiable
- **tuple** : ordonnée et non modifiable 


Quel peut être l'intérêt d'un tuple par rapport à une liste ?

- Justement son caractère protégé : jamais une portion de code ne pourra venir modifier les informations contenues dans le tuple. 
- L'utilisation des tuples est économe en ressources-système par rapport à une liste (en particulier, parce que sa taille est fixe).



```python
>>> monPremierTuple = (3, 5, 6)
```

Un tuple se différencie d'une liste par l'utilisation des parenthèses au lieu des crochets.


```python
>>> type(monPremierTuple)
tuple
```


À noter qu'un tuple peut être déclaré sans parenthèses. C'est toutefois à éviter.

```python
>>> taille = 600, 800
>>> type(taille)
tuple
```

## 2. Accès aux éléments d'un tuple
Comme pour une liste ou une chaîne de caractère, l'accès se fait par un indice entre **crochets**.


```python
>>> a = (12, 25, 6)
>>> a[0]
12
```
## 3. Tentative de modification d'un tuple


```python
>>> a[0] = 4
    ---------------------------------------------------------------------------
    TypeError                                 Traceback (most recent call last)

    <ipython-input-7-5fe525706b2b> in <module>()
    ----> 1 a[0] = 4
    

    TypeError: 'tuple' object does not support item assignment
```





## 4. Parcours d'un tuple
On retrouve bien évidemment les deux méthodes utilisables pour les listes :

### 4.1 Parcours par indice
```python
>>> for k in range(len(a)):
        print(a[k])
12
25
6
```


### 4.1 Parcours par élément


```python
>>> for k in a :
        print(k)
12
25
6
```


## 5. Construction d'une fonction renvoyant un tuple


```python linenums='1'

def division(a, b):
    # fonction renvoyant le tuple (quotient, reste) de la division euclidienne de a par b.
    q = a // b
    r = a % b
    return (q, r)
```


```python
>>> division(49,12)
(4,1)
```

### 6. Exercices 

!!! note "Voici le lien du notebook sur lequel vous devez faire les exercices"
	[T2.2_Les_tuples_exercices](https://capytale2.ac-paris.fr/web/c/c3d3-914041){: target = "_blank"}

### 7. Questions et exercices sur listes et tuples

!!! note "Voici le lien du notebook sur lequel vous devez faire les exercices"
	[Exercices listes et tuples](https://capytale2.ac-paris.fr/web/c/aa82-902594){: target = "_blank"}

