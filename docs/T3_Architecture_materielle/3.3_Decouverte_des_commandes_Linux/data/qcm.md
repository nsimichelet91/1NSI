### QCM pratique Linux – Évaluation (20 points)

#### Consignes

Vous travaillez dans votre dossier personnel, voici son contenu :  

```text
~
└── evaluation
    ├── docs
    │   ├── notes.txt
    │   └── brouillon.txt
    ├── images
    │   └── logo.png
    ├── scripts
    │   └── test.py
    └── archive
```

---

#### Question 1 (1 pt)

Vous êtes dans le dossier `evaluation`.  

Quelle commande permet de vérifier votre position ?

**A** `ls`
**B** `pwd`
**C** `cd`
**D** `top`

---

#### Question 2 (1 pt)

Depuis `evaluation`, créez un dossier `travail`.  

Quelle commande utiliser ?

**A** `touch travail`
**B** `mkdir travail`
**C** `mv travail`
**D** `cp travail`

---

#### Question 3 (1 pt)

Depuis le dossier `evaluation`, déplacez `notes.txt` dans `travail`.  

Quelle commande convient ?

**A** `cp docs/notes.txt travail`
**B** `mv docs/notes.txt travail`
**C** `rm docs/notes.txt travail`
**D** `cd docs/notes.txt travail`

---

#### Question 4 (1 pt)

Depuis le dossier `evaluation` vous êtes allez dans le dossier `travail`.  
Quelle commande utilisez-vous pour revenir dans le dossier `evaluation`?

**A** `cd ~`
**B** `cd /`
**C** `cd ..`
**D** `pwd`

---

#### Question 5 (1 pt)

Depuis le dossier `docs`, dupliquez `brouillon.txt` en `copie.txt`.

**A** `mv brouillon.txt copie.txt`
**B** `cp brouillon.txt copie.txt`
**C** `touch copie.txt`
**D** `rm brouillon.txt`

---

#### Question 6 (1 pt)

Renommez `copie.txt` en `version_finale.txt`.

**A** `mv copie.txt version_finale.txt`
**B** `cp copie.txt version_finale.txt`
**C** `touch version_finale.txt`
**D** `chmod copie.txt version_finale.txt`

---

#### Question 7 (1 pt)

Affichez les droits détaillés de tous les fichiers présents dans `docs`.

**A** `ls docs`
**B** `ls -l docs`
**C** `pwd docs`
**D** `cat docs`

---

#### Question 8 (1 pt)

Modifiez les droits de `version_finale.txt` pour que :

* le propriétaire puisse lire et écrire ;
* le groupe puisse lire ;
* les autres puissent lire.

Quel nombre utiliser ?

**A** `777`
**B** `644`
**C** `755`
**D** `600`

---

#### Question 9 (1 pt)

Ajoutez du texte à la fin de `version_finale.txt` sans effacer son contenu.

**A** `cat > version_finale.txt`
**B** `cat >> version_finale.txt`
**C** `nano > version_finale.txt`
**D** `touch version_finale.txt`

---

#### Question 10 (1 pt)

Ouvrez `version_finale.txt` dans l’éditeur étudié dans le TP.

**A** `cat version_finale.txt`
**B** `nano version_finale.txt`
**C** `top version_finale.txt`
**D** `python version_finale.txt`

---

#### Question 11 (1 pt)

Exécutez le script Python `test.py`.

**A** `run test.py`
**B** `python test.py`
**C** `cat test.py`
**D** `./test.py`

---

#### Question 12 (1 pt)

Affichez les processus actifs.

**A** `ls`
**B** `top`
**C** `psd`
**D** `cat`

---

#### Question 13 (1 pt)

Supprimez le dossier vide `archive`.

**A** `rm archive`
**B** `rmdir archive`
**C** `rm -r archive`
**D** `mv archive`

---

#### Question 14 (1 pt)

Supprimez entièrement le dossier `images` contenant `logo.png`.

**A** `rm images`
**B** `rmdir images`
**C** `rm -r images`
**D** `rm logo.png`

---

#### Question 15 (1 pt)

Créez dans le dossier `scripts` un fichier vide nommé `test2.py`.

Quelle commande utiliser ?

**A** `mkdir test2.py`
**B** `nano test2.py`
**C** `touch test2.py`
**D** `cp test.py test2.py`


---

#### Question 16 (1 pt)

Vous souhaitez donner à un fichier les droits :

```text
rwxr-x--x
```

Quelle commande faut-il utiliser ?

**A** `chmod 751 fichier.txt`
**B** `chmod 761 fichier.txt`
**C** `chmod 755 fichier.txt`
**D** `chmod 741 fichier.txt`

---

#### Question 17 (1 pt)

Depuis le dossier :

```text
~/evaluation/docs
```

Quel chemin relatif permet d’accéder à `test.py` situé dans `scripts` ?

**A** `/scripts/test.py`
**B** `../scripts/test.py`
**C** `scripts/test.py`
**D** `../../scripts/test.py`

---

#### Question 18 (1 pt)

Parmi les propositions suivantes, lequel est un **chemin absolu** ?

**A** `../docs/notes.txt`
**B** `docs/notes.txt`
**C** `/home/user/evaluation/docs/notes.txt`
**D** `~/../notes.txt`


---

#### Question 19 (1 pt)

Depuis le dossier `scripts`, quelle commande permet de revenir directement au dossier personnel ?

**A** `cd ..`
**B** `cd /`
**C** `cd ~`
**D** `cd scripts`


---

#### Question 20 (1 pt)

Quelle commande affiche le contenu de `version_finale.txt` directement dans le terminal ?

**A** `cat version_finale.txt`
**B** `nano version_finale.txt`
**C** `touch version_finale.txt`
**D** `pwd version_finale.txt`


---

#### Corrigé

1. B
2. B
3. B
4. C
5. B
6. A
7. B
8. B
9. B
10. B
11. B
12. B
13. B
14. C
15. C
16. A
17. B
18. C
19. C
20. A
---

