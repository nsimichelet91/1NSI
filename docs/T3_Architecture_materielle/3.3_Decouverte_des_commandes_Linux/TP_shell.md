
# TP - Utilisation d’une console shell  

## 1. Mise en route

Avec le jeu **TERMINUS**, vous avez découvert un certain nombre de commandes UNIX/Linux de façon ludique.

Ce second TP va vous permettre :

- de réutiliser ce que vous avez appris dans un contexte plus réaliste ;
- de découvrir d’autres commandes et options.

Pour cela, nous allons utiliser un émulateur en ligne.

### Étapes

1. Connectez-vous sur :  
[https://bellard.org/jslinux](https://bellard.org/jslinux){target = "_blank"}

2. Cliquez sur **"click here"** sur la première ligne (Alpine Linux 3.23.2)  

![alt text](data/welcome_linux.png)

3. Connectez-vous sur :  
[https://vfsync.org/signup](https://vfsync.org/signup){target = "_blank"}  

![alt text](data/vfsync_log.png)

4. Créez un compte en choisissant :

- un **User name**
- un **Password**

5. Revenez sur le terminal.

6. Saisissez :

```bash
vflogin username
```

puis appuyez sur **Entrée**

7. Saisissez votre mot de passe.

!!! warning "Attention"
    Le mot de passe n’apparaît pas à l’écran. C’est normal.

![alt text](data/js_linux2.png)

## 2. Prise en main des commandes UNIX/Linux de base

## 2.1 Arborescence de fichiers - Les chemins de fichiers sous Linux

L’arborescence de fichiers représente l’organisation des dossiers et fichiers sur un ordinateur.  

Un **chemin de fichier** (path) indique l’emplacement d’un fichier ou d’un dossier dans l’arborescence du système.  

Exemple :  
!!! note
    Le repertoire NSI dans l'arboresence suivante correspond au répertoire du l'utilisateur NSI, 

```text
/
└── home
    └── username
        └── NSI
            ├── dossier1
            │   └── fichier1.txt
            │   └── fichier2.txt        
            ├── dossier2
            └── montexte.txt
```

Dans cet exemple :

- `montexte.txt` est situé dans `/home/username/NSI`
- `fichier1.txt` est situé dans `/home/username/NSI/dossier1`


### Commandes utiles

| Commande | Description |
|---------|-------------|
| `pwd` | Affiche le répertoire courant |
| `mkdir dossier` | Crée un dossier |
| `touch fichier.txt` | Crée un fichier vide |
| `mv fichier.txt dossier` | Déplace un fichier |
| `mv fichier1 fichier2` | Renomme un fichier |
| `cp fichier1 fichier2` | Copie un fichier |
| `ls` | Liste le contenu du dossier |
| `cd dossier` | Entre dans un dossier |
| `cd ..` | Revient au dossier parent |
| `cd ~` | Retourne au dossier personnel |
| `rm fichier.txt` | Supprime un fichier |
| `rmdir dossier` | Supprime un dossier vide |
| `rm -r dossier` | Supprime un dossier non vide |

!!! tip "Astuce"
    Utilisez fréquemment `pwd` pour vérifier votre position dans l’arborescence.

### 2.1.1 Structure des dossiers sous Linux

Sous Linux, tous les fichiers et dossiers sont organisés sous forme d’arbre à partir de la racine :

```bash
/
```

Le symbole `/` représente le dossier racine du système.

Exemple :

```bash
/home/etudiant/Documents/cours.txt
```

Ici :

* `/` → racine ;
* `home` → dossier ;
* `etudiant` → sous-dossier ;
* `Documents` → sous-dossier ;
* `cours.txt` → fichier.

---

### 2.1.2 Chemin absolu

Un **chemin absolu** commence toujours par `/`.

Il indique l’emplacement complet du fichier depuis la racine.

#### Exemple

```bash
/home/user/fichier.txt
```

Ce chemin fonctionne quel que soit le dossier courant.

#### Exemple d’utilisation

```bash
cat /home/user/fichier.txt
```

### 2.1.3 Chemin relatif

Un **chemin relatif** est défini par rapport au dossier actuel.

Il ne commence pas par `/`.

#### Exemple

```bash
Documents/cours.txt
```

Cela signifie :

> “aller dans le dossier `Documents` situé dans le dossier courant”.

#### Exemple

Si vous êtes dans :

```bash
/home/user
```

alors :

```bash
cat Documents/cours.txt
```

équivaut à :

```bash
cat /home/user/Documents/cours.txt
```

---

### 2.1.4 Le dossier courant : `.`

Le point `.` représente le dossier actuel.

#### Exemple

```bash
./script.sh
```

signifie :

> exécuter `script.sh` situé dans le dossier courant.

### 2.1.5 Le dossier parent : `..`

Les deux points `..` représentent le dossier parent.

#### Exemple

```bash
../fichier.txt
```

signifie :  

> remonter d’un dossier puis accéder à `fichier.txt`.

#### Exemple

Si vous êtes dans :  

```bash
/home/user/Documents
```

alors :

```bash
cat ../notes.txt
```

lit :

```bash
/home/user/notes.txt
```

### 2.1.6 Le dossier personnel : `~`

Le symbole `~` représente le dossier personnel de l’utilisateur.

#### Exemple

```bash
~/Documents/test.txt
```

équivaut à :

```bash
/home/user/Documents/test.txt
```

### 2.1.7 Commandes utiles

#### Afficher le dossier courant

```bash
pwd
```

Exemple :

```bash
/home/user/Documents
```

#### Changer de dossier

```bash
cd Documents
```

#### Revenir au dossier parent

```bash
cd ..
```

#### Aller dans le dossier personnel

```bash
cd ~
```

ou simplement :

```bash
cd
```

### 2.1.8 Résumé

| Symbole | Signification     |
| ------- | ----------------- |
| `/`     | racine du système |
| `.`     | dossier courant   |
| `..`    | dossier parent    |
| `~`     | dossier personnel |

#### Question 2.
À l’aide des commandes précédentes, recréez l’arborescence de l’exemple.

#### Question 3.

##### a)
Dans votre dossier personnel, créez :

- un fichier `test.txt`
- deux répertoires `livre1` et `livre2`

##### b)
Dupliquez `test.txt` en :

- `test1.txt`
- `test2.txt`

##### c)
Déplacez `test1.txt` dans `livre1`

##### d)
Vérifiez le contenu de chaque répertoire

##### e)
Effacez les deux répertoires `livre1` et `livre2`


### 2.2 Gérer les droits

#### Affichage détaillé

```bash
ls -l
```

Affiche le contenu du dossier de façon détaillée.

```bash
ls -al
```

Affiche également les fichiers cachés.


#### Lecture d’un affichage

Exemple :

![alt text](data/droit_linux.png)  

Dans l’ordre cela donne de gauche `a droite :
**droits - nombre de liens - nom du propriétaire - nom du groupe - taille en octet - date - heure - nom du fichier ou du répertoire**

Les systèmes de type UNIX sont des systèmes multi-utilisateurs.   Plusieurs utilisateurs peuvent donc partager un même ordinateur.  
Comme chaque utilisateur possède un environnement de travail qui lui est propre, chaque utilisateur possède certains droits lui permettant
d’effectuer certaines opérations et pas d’autres. Le système d’exploitation permet de gérer ces droits trés finement.  

Il faut cependant distinguer un utilisateur un peu particulier qui est autorisé à modifier tous les droits : ce "super utilisateur" est appelé "administrateur" ou "root".  

Au lieu de gérer les utilisateurs un par un, il est possible de créer des groupes d’utilisateurs. L’administrateur peut alors attribuer des droits à un groupe au lieu d’attribuer des droits particuliers à chaque utilisateur.  

Remarque : dans l’exemple donné ci-dessus, le nom du groupe est *user2* et celui du propriétaire *NSI*.  


Signification des droits :

- `-` → fichier
- `d` → dossier

Puis trois groupes de droits :

| Droit | Signification |
|------|---------------|
| `r` | lecture |
| `w` | écriture |
| `x` | exécution |
| `-` | droit absent |

#### Exemple

Pour le fichier `montexte.txt` on a les droits `-rw-r--r--` :  

- le premier caractère `-` indique que c’est un fichier (pour un répertoire on aurait eu d) ;
- le premier `rw-` indique que propriétaire peut lire et écrire sur ce fichier mais il ne peut pas l’exécuter ;
- le deuxième `r--` indique que tous les utilisateurs du groupe peuvent lire sur ce fichier, mais ni écrire dessus, ni l’exécuter ;
- enfin `r--` indique que tous les autres utilisateurs peuvent uniquement lire le fichier.

#### Modifier les droits

Pour changer les droits d’un fichier ou dossier, on utilise la commande `chmod` suivi d’un nombre composé de 3 chiffres puis du nom du fichier concerné.  
Pour savoir quel nombre on choisit il suffit de savoir compter en binaire.   
Par exemple :  
- `rwx` correspondra au nombre binaire `111` donc au nombre entier 7
- `rw-` correspondra au nombre binaire `110` donc au nombre entier 6
- `r--` correspondra au nombre binaire `100` donc au nombre entier 4

### Exercice 2.2

#### Question 1
Quel nombre choisir pour qu’un fichier soit :

- lisible par propriétaire et groupe
- exécutable par tous
- modifiable uniquement par le propriétaire

#### Question 2

Changez les droits de `dossier2` en :

```text
rwxrw-r--
```

#### Question 3
Tapez :

```bash
chown --help
```

À quoi sert cette commande ?

## 2.3 Éditer et écrire dans des fichiers

### Utilisation de `nano`

Ouvrir un fichier :

```bash
nano montexte.txt
```

Vous obtenez un éditeur de texte dans le terminal.

![alt text](data/edit_nano.png)

### Raccourcis utiles

| Raccourci | Action |
|----------|--------|
| `Ctrl + O` | Enregistrer |
| `Ctrl + X` | Quitter |

Le prompt affichant le nom de la machine disparaît ; vous avez à la place une page blanche où vous pouvez taper du texte. Le nom
du fichier que vous éditez et le nom de l’éditeur sont affichés en haut. La liste des commandes disponibles est écrite en bas.  

### Exercice 2.3

#### Question 1
Ouvrez :

```bash
nano montexte.txt
```

#### Question 2
Écrivez un texte puis quittez en enregistrant.

## 2.4 Commandes de fichiers

### 2.4.1 Commande `cat`

La commande `cat` (abréviation de **concatenate**) est utilisée sous Linux et Unix pour :

* afficher le contenu d’un fichier ;
* créer ou modifier un fichier ;
* concaténer plusieurs fichiers ;
* lire du texte directement depuis le terminal.


#### Saisie libre dans le terminal

```bash
cat
```

Lorsque la commande est exécutée sans argument, `cat` attend une saisie au clavier.
Tout ce que vous tapez est immédiatement réaffiché dans le terminal.

Pour arrêter la commande :

```bash
Ctrl + D
```

`Ctrl + D` envoie un signal de fin de fichier (**EOF : End Of File**).

#### Lire le contenu d’un fichier

```bash
cat fichier.txt
```

Cette commande affiche le contenu du fichier dans le terminal.

#### Exemple

Commande :

```bash
cat fichier.txt
```

Résultat :

```txt
Bonjour
Bienvenue sur Linux
```

### Lire plusieurs fichiers

```bash
cat fichier1.txt fichier2.txt
```

Les contenus seront affichés l’un à la suite de l’autre.

#### Écrire dans un fichier

```bash
cat > fichier.txt
```

Le symbole `>` redirige la sortie vers un fichier.  

Après avoir lancé la commande, vous pouvez taper du texte :  

```bash
cat > fichier.txt
Bonjour
Cours Linux
```

Pour enregistrer et quitter :

```bash
Ctrl + D
```

Le fichier `fichier.txt` contiendra alors :

```txt
Bonjour
Cours Linux
```

#### Attention

Si le fichier existe déjà, son contenu sera écrasé et remplacé.


#### Ajouter du texte à la fin d’un fichier

Pour ajouter du contenu sans supprimer l’existant :

```bash
cat >> fichier.txt
```

Le symbole `>>` ajoute le texte à la fin du fichier.

#### Exemple

Fichier avant :

```txt
Bonjour
```

Commande :

```bash
cat >> fichier.txt
Linux
```

Après `Ctrl + D`, le fichier devient :

```txt
Bonjour
Linux
```

#### Fusionner plusieurs fichiers

```bash
cat fichier1.txt fichier2.txt > fusion.txt
```

Cette commande :

1. lit `fichier1.txt` ;
2. lit `fichier2.txt` ;
3. écrit le tout dans `fusion.txt`.

### Résumé rapide

| Commande                 | Fonction                   |
| ------------------------ | -------------------------- |
| `cat`                    | Saisie libre               |
| `cat fichier.txt`        | Lire un fichier            |
| `cat > fichier.txt`      | Créer/remplacer un fichier |
| `cat >> fichier.txt`     | Ajouter dans un fichier    |
| `cat f1 f2 > fusion.txt` | Fusionner des fichiers     |


### Exercice 2.4

Tester chacune de ces commandes dans l’émulateur.

## 2.5 Commandes de processus

### Voir les processus actifs

```bash
top
```

Quitter avec :

```bash
q
```

### Exécuter un script Python

```bash
python essai.py
```

### Forcer l’arrêt d’un processus

```bash
kill -9 1234
```

!!! danger "Attention"
    `kill -9` détruit immédiatement le processus ciblé.


### Exercice 2.5

#### Question 1
Lancez :

```bash
top
```

#### Question 2
Créez le script suivant :

```python
for i in range(20):
    print(i)
```

#### Question 3
Exécutez-le.


## 3. Travail à rendre

Vous ne devez pas rendre tous les exercices précédents.

Seul l’exercice suivant est à rendre.

### Exercice 3.1 — À rendre

Arborescence :

```text
/
├── bin
│   ├── bash
│   └── cat
├── home
│   ├── alice
│   └── bob
│       ├── documents
|       |   ├── images
|       |   |   └── logo.png
│       │   ├── musique
│       │   |   ├── classique
│       │   |   └── rock
│       │   |       ├── track1.mp3
│       │   |       └── track2.mp3
│       │   ├── videos
│       │   └── mon_roman.docx
│       └── tmp
├── etc
└── usr
```

### Questions

1. Si je suis dans `documents`, qu’affiche `pwd` ?

2. Depuis `images`, quelle(s) commande(s) (vous pouvez donner plusieurs réponses) permet d’aller dans `musique` ?

3. Différence entre :

    ```bash
    cp test1.txt test2.txt
    ```
    
    et
    
    ```bash
    mv test1.txt test2.txt
    ```

4. Que se passe-t-il avec :

    ```bash
    rm videos
    ```
    depuis `documents` ?

5. Quelle commande pour supprimer `rock` ?

6. Quelle commande affiche les droits de `mon_roman.docx` ?

7. Quelle commande pour que seul le propriétaire puisse lire et modifier `mon_roman.docx` (sans exécution) ?

8. Quelle(s) commande(s) permettent d’éditer un fichier texte ?

9. Comment exécuter `prog.py` ?

10. Quelle commande affiche les processus en cours ?


!!! success "Objectif"
    À la fin de ce TP, vous devez être autonome pour :

    - naviguer dans l’arborescence
    - créer/modifier/supprimer fichiers et dossiers
    - gérer les droits
    - éditer des fichiers
    - exécuter des scripts
    - observer les processus

