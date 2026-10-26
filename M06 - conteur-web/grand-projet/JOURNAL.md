# Journal des étapes

Ce que j'ai demandé, ce qui a été décidé, et ce que la mesure a dit.
Les chiffres viennent tous de relevés dans Chrome — octets réellement transférés,
pixels réellement peints — jamais d'une estimation.

**Comment lire l'historique git.** Les quarante-neuf médias n'ont pas changé depuis
leur création : leurs commits portent leur vraie date, et l'ordre correspond aux
étapes ci-dessous. En revanche `index.html`, `recit.js`, `style.css` et les documents
d'atelier ont été repris à presque chaque étape : leur commit porte leur **dernière**
date avec leur contenu **final**. L'historique ne montre donc pas les états
intermédiaires — ils n'existent nulle part. Ce journal les raconte à sa place.

---

## 7 septembre — le départ

**Le récit avant la page.** `recit.md` fixe le lieu — Sainte-Croix, Jura vaudois — et
cinq chapitres, chacun avec ce qu'il doit faire comprendre. Deux décisions y sont
prises avant toute ligne de code : cinq chapitres et non quatre, pour que la chute
(4) existe séparément de la survie (5) ; et **le chapitre 4 sera le chapitre immobile**,
parce que celui qui raconte l'arrêt des mécanismes est celui qui ne bouge pas.

**Chapitre 1 — le cadre se ferme.** 100 % → 62 % de la hauteur de fenêtre, 900 ms.
Coupe sobre : servir l'image à la taille réellement affichée.
**161 967 → 66 531 octets** à 390 px, soit **−58,9 %**.

**Chapitre 3 — la vitrine.** Quatre objets se remplacent dans un cadre immobile,
liés au défilement. GSAP sorti du `<head>` et chargé à l'approche du chapitre :
**194 230 → 78 103 octets** au chargement.

---

## 14 septembre — la vidéo et la puce

**Le schéma du chapitre 2 devient une vidéo.** Le schéma *affirmait* que les picots
font sonner les dents ; la vidéo le *montre*, sur une vraie boîte. Prix assumé et
mesuré : sur téléphone, la vidéo pèse 70 fois le schéma — mais seuls ceux qui
arrivent au chapitre la paient.

> **Ce que la mesure a appris :** la piste son du film est **muette**. Niveau maximal
> relevé : 0 sur 45 s. L'idée d'un bouton « Écouter » est abandonnée sur le coup, et
> la vidéo encodée sans piste audio.

Un crédit a failli être faux : l'API de Commons donnait « Nicole Frères » comme auteur
— c'est le fabricant de la boîte, pas le vidéaste. Le vrai auteur, **Max van der Pol**,
ne figurait que dans le texte source de la page.

**2 824 811 → 303 872 octets** à 390 px.

**Chapitre 4 — la puce.** Le die d'une EPROM au microscope, 5 mm sur 4, en négatif et
strictement immobile. **431 377 → 49 123 octets**, **0 élément animé**, **0 octet de script**.

---

## 28 septembre — l'à-coup, la mise en page, le dernier chapitre

**« Le chapitre 3 saccade au début et à la fin. »** Mesuré avant de toucher au code :
ScrollTrigger calculait son point d'épinglage pendant que le cadre du chapitre 1 se
fermait encore, se trompait de **276 px**, et la vitrine sautait de **138 px en une
seule image**. Trois causes trouvées l'une après l'autre.

La correction la plus instructive : **l'épinglage a été rendu au CSS** (`position: sticky`).
Le navigateur tient le cadre sans calcul d'avance — il ne peut plus sauter. La planche
ne change pas, seul l'outil change. Résultat : **0 à-coup, 0 px d'écart**.

Deux pièges de banc de test découverts au passage, notés dans `sobre.md` : `scroll-behavior:
smooth` faussait les recalculs (début placé à 1 086 px au lieu de 2 558), et une sonde
qui lisait `scrollY` rendait les résultats corrects par accident.

**« Mets les textes sur le côté. »** Sur grand écran, la bande de texte du bas écrasait
la photo. Le texte passe en colonne à gauche et **le voile tourne d'un quart de tour
avec lui**. Contrastes remesurés sur les pixels réels des cinq photos.

**« Le titre du chapitre 3 à gauche, et la légende juste dessous. »** La hauteur du titre
change avec la largeur — deux ou trois lignes — donc `recit.js` la mesure et la donne au
CSS. Écart titre-légende stable de 840 à 1920 px.

**Chapitre 5 — le cadre se rouvre.** L'exact inverse du chapitre 1 : mêmes 900 ms,
mêmes 62 % et 100 %, sens opposé. **Aucune ligne de JavaScript ajoutée** — l'observateur
du chapitre 1 servait déjà.

> **Ce que la mesure a évité :** écrit naïvement, `object-fit: cover` recalculait l'échelle
> de l'image pendant l'ouverture. Sur une fenêtre en portrait, la photo **grossissait de
> 1,61 fois** au lieu de rester immobile. L'image est donc figée à la hauteur ouverte et
> le cadre la découpe.

> **Un crédit corrigé :** en agrandissant la photo, la plaque gravée se lit —
> « Androïde N° … François Junod 2006 ». Or Commons nomme le fichier « Pouchkine » et date
> cet androïde-là de 2010. Impossible de trancher : **le crédit ne dit donc pas « Pouchkine »**.
> Il dit ce qui est vérifiable et cite la plaque, que le lecteur voit sur l'image.

**644 705 → 160 524 octets** à 390 px.

**« Il y a un gros problème de storytelling : les textes sont incompréhensibles. »**
Juste. Les lignes énonçaient la conclusion de chaque chapitre sans jamais raconter la
scène — « L'hiver oblige », « La même main change d'objet » : il fallait déjà connaître
l'histoire pour les comprendre. Cinq titres et toutes les lignes réécrits, les cinq
intentions de `recit.md` inchangées.

> **Ce que la mesure a cassé, puis réparé :** des textes plus longs, ce sont des bandes
> plus hautes. À 390 px, le chapitre 1 est tombé à **1,9:1** — numéro invisible.
> Corrigé en deux temps : d'abord **les mots** (lisible ne veut pas dire bavard : les
> chapitres 4 et 5 sont remontés seuls en coupant), ensuite **le voile**, ancré sur le bas
> pour toutes les scènes. Chapitre 1 : **1,9 → 8,09:1**.
>
> Un troisième défaut n'apparaissait sur aucun chiffre : le contraste était excellent et
> **on ne voyait plus le village**, mangé par le voile. Il a fallu regarder la capture.
> Le cadre fermé passe à 78 % sur téléphone : 174 px de photo lisible au lieu de 39.

**« Retrouve une mélodie de boîte à musique pour la vidéo. »** Impossible telle quelle :
la piste du film est muette et aucun enregistrement libre de cette boîte n'existe. Tout
son serait celui d'un **autre** instrument. Retenu : un bouton séparé, « Écouter une boîte
à musique », avec un crédit qui dit en gras que ce n'est pas la boîte filmée.
**0 octet tant qu'on ne clique pas**, **224 651 octets** au clic.

> **Deux mesures ratées, et assumées :** le chiffrage de l'erreur de codage donnait le même
> résultat à tous les débits — impossible : mes signaux n'étaient pas alignés à l'échantillon
> près. **Ce chiffre n'est pas publié.** Et la normalisation de volume faisait écrêter : la
> source culmine déjà à −0,02 dBTP. Abandonnée au profit d'un simple −3 dB.

---

## 26 octobre — le silence qui dure

**« On pourrait rester un instant sur la section 4, même si on scrolle ? »** Oui, mais pas
avec un vrai verrou : intercepter la molette casse le clavier, piège les lecteurs d'écran,
et contredit la règle du chapitre — *le lecteur doit pouvoir rester aussi longtemps qu'il
veut*. L'effet est obtenu autrement : la section mesure deux écrans et la scène s'y colle.

On ne bloque pas le défilement, **on donne au chapitre plus de distance à parcourir**.
Mesuré : **780 px** avec le haut de la scène immobile à 0 px, **0 animation**, **0 écouteur**
interceptant le défilement, **0 octet de script**.

---

## Où en est la page

| | 390 px, DPR 2 | 1440 px, DPR 1 |
| --- | ---: | ---: |
| Poids à l'arrivée | **145 607 o** | **266 206 o** |
| Débordement horizontal | 0 px | 0 px |

Ni la vidéo, ni le son, ni les images des chapitres 3 à 5 n'en font partie : ils ne
partent que lorsqu'on descend jusqu'à eux.

**Contraste** — tout passe AA **et** AAA sur les photos, aux deux largeurs : chapitre 1
à 7,98 / 8,09, chapitre 2 à 7,76, chapitre 3 entre 8,05 et 8,59, chapitre 4 à 9,19 / 9,58,
chapitre 5 à 7,83 / 7,91. Le seul texte sous 7:1 est le numéro « 03 » posé sur le fond de
page clair, à 5,93:1.

**États dégradés** — sans JavaScript, en mouvement réduit et en économie de données : la
page reste lisible et complète. Le CSS décrit toujours l'état d'**arrivée** ; le script ne
fait qu'ajouter un point de **départ**. Si quoi que ce soit échoue, rien n'est cassé.

---

## Ce qui reste à faire

L'étape 7 : faire lire le récit à quelqu'un sur un téléphone, noter ce qu'il raconte et
quel chapitre il a mal compris. Le trou est en place à la fin de `sobre.md`.
