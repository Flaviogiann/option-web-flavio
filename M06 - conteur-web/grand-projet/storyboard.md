# Storyboard

Un chapitre à la fois. Les cinq chapitres sont complétés et assemblés.

| Chapitre | Écran | Mouvement | Durée | Déclencheur | Sans mouvement |
| --- | --- | --- | --- | --- | --- |
| 1 — L’hiver ferme le village | Photo pleine largeur de fenêtre. Le texte est posé **sur** l’image : en colonne **sur le côté gauche** dès 52 rem de large, en bande **en bas** sur téléphone. « 01 », le titre, deux lignes, le crédit. | Le cadre se ferme **par le bas** : la hauteur passe de 100 % à 62 % de la fenêtre — **78 % sur téléphone**, pour laisser de la photo sous le texte. La largeur ne change pas. | 900 ms, `ease-out` | Une seule fois, quand le haut de la section franchit le milieu de la fenêtre. Pas de retour au défilement inverse. | Le cadre est déjà fermé, à 62 % (78 % sur téléphone). Image, texte et crédit lisibles. |
| 2 — Une boîte qui joue toute seule | Vidéo pleine fenêtre, sans son, qui reste en place. Le texte monte **par-dessus** : « 02 » et le bouton Pause, le titre, deux lignes, le crédit. | Le cylindre tourne : ses picots défilent contre les dents du peigne (gros plan), puis la boîte ouverte. Rien d’autre ne bouge : ni zoom, ni fondu ajouté. | 9,6 s en boucle, à vitesse réelle | Lecture quand le haut de la section franchit le milieu de la fenêtre. Pause dès qu’elle quitte la moitié haute. Reprise au retour, sauf après un clic sur Pause. | L’image fixe du gros plan — la première image de la vidéo —, texte et crédit lisibles, bouton « Lire la vidéo ». |
| 3 — Les mêmes mains, d’autres objets | Le numéro et le titre **dans la colonne de gauche**, posés sur l’image, dès 52 rem ; dans une bande de page au-dessus du cadre sur téléphone. Le cadre occupe toute la fenêtre. Dans le cadre, un objet à la fois, son nom et son lieu posés **sur** l’image : sur le côté gauche dès 52 rem, en bas sur téléphone. | Aucun déplacement. Les quatre objets se remplacent **dans le même cadre**, par fondu sur place. Le cadre ne bouge jamais. | Défilement, pas horloge : section épinglée sur 300 % de la hauteur de fenêtre, scrub 0,5 | L'épinglage commence quand le haut de la section atteint le haut de la fenêtre, et se relâche après les 300 %. | Les quatre objets côte à côte, en grille, dans l'ordre, avec leurs légendes. |
| 4 — Le silence de l’électronique | Une puce photographiée au microscope, plein écran, **en négatif** : voile sombre, texte clair. Le texte en colonne à gauche dès 52 rem, en bande en bas sur téléphone : « 04 », le titre, trois lignes, le crédit. | **Aucun.** C’est le seul chapitre qui ne bouge pas. | — | — | Identique : l’écran avec mouvement et l’écran sans mouvement sont le même. |
| 5 — Un atelier tourne encore | Photo pleine largeur : un androïde de François Junod, le torse ouvert sur son mécanisme, dans l’atelier. Le texte sur l’image, en colonne à gauche dès 52 rem, en bande en bas sur téléphone : « 05 », le titre, trois lignes, le crédit. | Le cadre se **rouvre** par le bas : la hauteur passe de 62 % à 100 % de la fenêtre — de 78 % à 100 % sur téléphone. L’exact inverse du chapitre 1. L’image, elle, ne bouge pas : elle est figée à la hauteur ouverte et le cadre la découvre. | 900 ms, `ease-out` | Une seule fois, quand le haut de la section franchit le milieu de la fenêtre. Pas de retour au défilement inverse. | Le cadre est déjà ouvert, à 100 %. Image, texte et crédit lisibles. |

## Chapitre 1 — la planche

**Case 1 · Écran**
Une seule image : le village de Sainte-Croix sous la neige, prise de loin, cadrage large.
Elle occupe **toute la largeur de la fenêtre**. Le texte est posé **sur** l’image, dans une colonne
à gauche, centrée dans la hauteur — et en bande en bas sur téléphone, faute de place pour une colonne :
le numéro « 01 », le titre « L’hiver ferme le village », deux lignes, puis le crédit :
« Six mois par an, la neige ferme le village. Dehors, il n’y a plus rien à faire. / Alors le paysan
pose la fourche et prend la lime. C’est l’hiver qui décide, pas le goût. »

**Case 2 · Mouvement**
- *Élément* : le `figure` qui contient la photo du chapitre 1. Rien d'autre ne bouge.
- *Direction* : le **bord bas** remonte vers le haut. Aucun déplacement horizontal.
- *Mesure* : hauteur `100vh` → `62vh`, et `100vh` → `78vh` sur téléphone (voir les décisions
  d’assemblage). La largeur ne change jamais : l’image occupe toujours toute la fenêtre.

**Case 3 · Durée**
900 ms, courbe `ease-out`. Départ franc, fin lente : la fermeture s'installe et ne rebondit pas.

**Case 4 · Déclencheur**
Le mouvement part une seule fois, quand le **haut de la section `#chapitre-1` franchit le milieu
de la fenêtre**. Il ne se rejoue pas si l'on remonte : l'hiver ne se rouvre pas.

**Sans mouvement**
Sans mouvement, on voit un village enseveli dans un cadre trop étroit pour lui,
et on comprend que l'hiver enferme avant que quiconque ait choisi quoi que ce soit.

## Chapitre 2 — la planche

**Case 1 · Écran**
Une vidéo occupe **toute la fenêtre**, en largeur et en hauteur, et reste en place.
Le texte monte **par-dessus** en défilant, sur un voile clair : le numéro « 02 » avec, sur la même ligne,
le bouton **Pause** ; le titre « Une boîte qui joue toute seule » ; les deux lignes du chapitre ; le crédit.
Sur téléphone, la vidéo est une bande verticale recadrée sur le sujet, pas la vidéo large rognée au hasard.

**Case 2 · Mouvement**
- *Élément* : la vidéo, et rien d’autre. Le texte ne s’anime pas : c’est le défilement du lecteur qui le fait monter.
- *Ce qui bouge* : le cylindre **tourne**, ses picots défilent contre les dents d’acier du peigne,
  pendant que la caméra glisse lentement. Puis, par le fondu d’origine du film, la boîte ouverte.
- *Mesure* : un extrait de **9,6 s** du film du musée (de 27,2 à 36,8 s), en boucle, 25 images par seconde.
  Vérifié image par image : entre deux images, les picots se déplacent dans une autre direction que le peigne.
  C’est donc bien le cylindre qui tourne, et pas seulement la caméra qui passe.

**Case 3 · Durée**
9,6 s en boucle, **sans ralenti ni accéléré**. Le tempo est celui du mécanisme : une boîte à musique
tourne à vitesse constante. Changer la vitesse du film mentirait sur l’objet.

**Case 4 · Déclencheur**
La lecture part quand le **haut de la section franchit le milieu de la fenêtre**, le même déclencheur
qu’au chapitre 1. Elle s’arrête dès que la section quitte la moitié haute de la fenêtre et reprend
si l’on revient. Après un clic sur **Pause**, elle ne reprend plus d’elle-même.
Avec « mouvement réduit » ou « économie de données », elle ne part jamais seule : le bouton dit « Lire la vidéo ».

**Sans mouvement**
L’image fixe est **la première image de la vidéo** : le gros plan, le texte par-dessus, le crédit,
le bouton « Lire la vidéo ». Quand la vidéo démarre, elle prend sa place sans que le relais se voie.
Sans mouvement, on voit des centaines de picots de laiton tout contre les dents d’un peigne d’acier,
et on comprend que chaque picot fera sonner une dent.

## Le moment d'écoute — chapitre 2

**Ce que c'est.** Sous le crédit de la vidéo, un bouton : « Écouter une boîte à musique ». Un clic
lance 26 s d'un enregistrement de boîte à musique ; un deuxième clic l'arrête, et il s'arrête aussi
tout seul à la fin. Le bouton fait 44 px de haut, comme celui de la vidéo.

**Ce que ce n'est pas — et c'est l'essentiel.** Ce n'est **pas la bande son de la vidéo**, et le
crédit le dit en gras juste dessous. La piste son du film est muette, et aucun enregistrement libre
de la boîte Nicole Frères n'existe. On entend un autre mouvement à picots et lames, qui joue la
berceuse de Brahms. Deux mécanismes différents, donc deux boutons différents et deux crédits
différents : jamais un seul geste qui laisserait croire que l'un est le son de l'autre.

**Pourquoi un bouton et jamais un départ automatique.** Trois raisons qui vont dans le même sens :
le storyboard refusait déjà le son automatique ; les navigateurs le bloquent ; et WCAG 1.4.2 exige
qu'un son de plus de 3 s puisse être arrêté. Rien ne part sans un clic, et `preload="none"` garantit
que le fichier n'est même pas demandé avant — **0 octet mesuré** tant qu'on ne clique pas.

**Sans mouvement.** Le son n'est pas un mouvement : le bouton existe aussi quand « mouvement réduit »
est actif, vérifié. **Sans JavaScript**, c'est le lecteur audio du navigateur qui s'affiche à la place
du bouton — il fonctionne, et lui non plus ne télécharge rien d'avance.

## Pourquoi une vidéo, et plus le schéma

Le premier assemblage montrait un **schéma** : le cylindre déroulé à plat, une pointe par dent,
une tête de lecture qui descend. Il était juste, lisible et léger (4 348 octets).
Il a été remplacé pendant l’assemblage, par décision : le schéma **affirme** que les picots font
sonner les dents, la vidéo le **montre**, sur une vraie boîte. Le chapitre dit « le village commence à
vendre du son » ; c’est l’objet réel, en marche, qui porte cette phrase.

Le prix est mesuré dans sobre.md : sur téléphone, la vidéo pèse **70 fois** le schéma.
Seuls les lecteurs qui arrivent au chapitre 2 le paient, jamais au chargement de la page.

Une limite, assumée : la boîte filmée est une Nicole Frères de **Genève**, 1864, pas une boîte de
Sainte-Croix. Elle montre le mécanisme, cylindre picoté et peigne d’acier ; elle ne montre pas le village.
Le crédit, sur la page, le dit.

## Pourquoi une durée ici, et un scrub au chapitre 3

Deux chapitres, deux rapports au temps, et ce n’est pas un caprice.

Au chapitre 2, **la boîte joue toute seule** une fois remontée : le lecteur ne tourne pas le cylindre.
Le mouvement a donc sa propre durée, que le lecteur ne pilote pas. Il peut seulement l’arrêter.

Au chapitre 3, **c’est le lecteur qui fait passer les époques**. Le mouvement est donc lié à son
défilement : il avance, il recule, rien ne se joue sans lui.

## Effets refusés — chapitre 2

| Effet | Pourquoi il est refusé |
| --- | --- |
| Notes de musique ou ondes sonores par-dessus la vidéo | Illustration littérale. Dessiner une croche dit « musique » ; ça ne montre pas comment le son est fabriqué. La vidéo le montre déjà. |
| Lecture liée au défilement (scrub) | Le lecteur ne tourne pas le cylindre : une boîte remontée joue seule, à sa vitesse. |
| Ralenti ou accéléré | Une boîte à musique tourne à vitesse constante. Changer la vitesse mentirait sur le mécanisme. |
| Zoom lent ajouté sur la vidéo | La caméra du musée glisse déjà. Deux mouvements superposés, et plus aucun ne se lit. |
| Lecture automatique sans bouton Pause | Ce qui bouge plus de 5 secondes doit pouvoir être arrêté (WCAG 2.2.2). |
| Lecteur YouTube intégré | Les scripts et les cookies d’un tiers, avant la première image, pour 9,6 s de film. |
| Son joué automatiquement à l’arrivée | Toujours refusé. Les navigateurs le bloquent de toute façon, et WCAG 1.4.2 demande de pouvoir l’arrêter. Il y a maintenant du son dans ce chapitre, mais **au clic uniquement** — voir « Le moment d’écoute » ci-dessous. |
| Mettre un enregistrement sous la vidéo comme si c’était sa bande son | La piste son du film est muette (niveau maximal mesuré : 0 sur 45 s) et aucun enregistrement libre de cette boîte n’existe. Coller un autre instrument sous ces picots-là ferait croire que c’est le son de cette boîte. Le son est donc un **bouton à part**, avec son propre crédit. |

## Chapitre 3 — la planche

**Case 1 · Écran**
Un cadre unique, plein écran. « 03 », le titre « Les mêmes mains, d’autres objets » et une ligne
d’annonce sont posés **sur l’image**,
en haut de la colonne de gauche — au-dessus du cadre, sur fond de page, tant que la fenêtre est étroite.
Dans le cadre, **un seul objet à la fois**, avec son nom et son lieu posés sur l’image, juste sous le
titre, dans la même colonne de gauche qu’au chapitre 1 — en bas de l’image sur téléphone.
Le cadre garde exactement la même position et la même taille du début à la fin du chapitre.

**Case 2 · Mouvement**
- *Élément* : le contenu du cadre. Quatre images empilées au même endroit. Le cadre lui-même ne bouge pas.
- *Direction* : **aucun déplacement**. Chaque objet remplace le précédent sur place, par fondu.
- *Mesure* : quatre états — cylindre, disque, pellicule, chariot — répartis sur une section
  épinglée de 300 % de la hauteur de fenêtre. Trois transitions, une par 100 %.
  Le fondu occupe le tiers central de chaque transition ; le reste du temps, un objet est net et seul.

**Case 3 · Durée**
Il n’y a pas de durée en millisecondes : le mouvement est **lié au défilement** (scrub 0,5).
C’est le lecteur qui avance et qui recule. Un objet ne passe que si la personne le fait passer.

**Case 4 · Déclencheur**
L’épinglage commence quand le haut de la section atteint le haut de la fenêtre.
Il se relâche après 300 % de hauteur de fenêtre défilés. Le chapitre est entièrement réversible :
on remonte, les objets reviennent en arrière dans l’ordre inverse.

**Sans mouvement**
Les quatre objets sont affichés **côte à côte, en grille**, dans l’ordre, chacun avec sa légende.
Sans mouvement, on voit quatre objets différents photographiés dans le même musée,
et on comprend que le village a changé de produit sans changer de métier.

Ce n’est pas une version dégradée : c’est une planche-contact. Elle dit exactement la même chose.

## Effets refusés — chapitre 3

| Effet | Pourquoi il est refusé |
| --- | --- |
| Rotation ou bascule 3D des objets | Spectaculaire et muet. La rotation ne dit pas « on a changé de produit ». |
| Zoom sur chaque objet à son arrivée | Le chapitre parle de **substitution**, pas de détail. Un zoom déplacerait l’attention vers l’objet au lieu du remplacement. |
| Défilement horizontal des quatre objets | Il dirait « ces objets sont côte à côte ». Or le sens est qu’ils occupent **la même place**, l’un après l’autre. |
| Fond qui bouge en parallaxe | Le fond doit rester immobile : c’est lui qui prouve que seule la chose fabriquée a changé. |

## Pourquoi GSAP ici, et pas au chapitre 1

Le chapitre 1 est un déclenchement discret, une fois, non réversible : le CSS le fait pour zéro octet.
Le chapitre 3 demandait trois choses : **épingler** une section, **lier** l’avancement au défilement,
et **ordonner** quatre étapes. L’épinglage a finalement été rendu au CSS (`position: sticky`),
plus fiable ici que ScrollTrigger (voir « Décisions prises pendant l’assemblage »).
Les deux autres, le CSS ne les fait pas encore partout : GSAP et ScrollTrigger restent chargés
pour ce chapitre seulement, servis depuis `js/vendor/`, et leur coût est mesuré dans sobre.md.

## Effets refusés — chapitre 1

| Effet | Pourquoi il est refusé |
| --- | --- |
| Fondu d'apparition sur le titre | Un fondu dit « voici du contenu ». Il ne dit pas « le village se ferme ». Durée ajoutée, sens nul. |
| Parallaxe sur la photo | La parallaxe fabrique de la profondeur. Ce chapitre parle d'enfermement, pas d'espace. |
| Chute de neige animée | Illustration littérale du mot « neige ». Le récit dit que l'hiver **contraint**, pas qu'il **neige**. |
| Apparition des lettres une à une | Réflexe de preset. Le texte n'est pas ce qui change dans ce chapitre. |
| `will-change` sur le cadre | Réflexe de preset. Une transition unique de 900 ms sur un seul élément n'a pas besoin d'être promue en couche. |

## Chapitre 4 — la planche

**Case 1 · Écran**
Une seule image, plein écran : **une puce photographiée au microscope**, son circuit gravé et les
fils d’argent qui le relient au boîtier. Elle occupe toute la fenêtre. Le chapitre est en **négatif** :
voile sombre, texte clair, alors que les trois premiers sont clairs. Le texte est dans la colonne de
gauche — en bande en bas sur téléphone — : « 04 », le titre « Une puce remplace trois cents pièces »,
trois lignes, puis le crédit.

**Case 2 · Mouvement**
**Aucun.** Pas de transition, pas de fondu, pas de défilement lié, pas une ligne de JavaScript.
Le récit l’a décidé avant la page : « le chapitre qui raconte l’arrêt des mécanismes est celui qui
ne bouge pas ». Les quatre autres chapitres bougent ; celui-ci s’arrête, et c’est ce contraste qui
le rend audible.

**Case 3 · Durée**
Rien ne se déclenche, donc rien ne dure en millisecondes. Mais le chapitre **occupe deux hauteurs
de fenêtre** : la section mesure 200 % et la scène se colle en haut de la première (`position: sticky`).
On défile donc un écran entier sans quitter le chapitre — mesuré : **780 px à 1440 × 900 avec le haut
de la scène immobile à 0 px**, et autant à 390 × 844.

Ce n’est pas une contradiction avec « aucun mouvement » : rien n’est animé, aucune propriété ne
change, le compteur d’animations reste à **0** pendant toute la phase. La scène reste simplement en
place pendant qu’on défile. Le silence devient actif : on avance, et rien ne se passe.

**Case 4 · Déclencheur**
Sans objet. Le chapitre n’écoute rien : ni le défilement, ni la visibilité, ni un clic. Le collage
est un comportement de mise en page du navigateur, pas un déclencheur — et toujours pas une ligne
de JavaScript.

**Sans mouvement**
C’est déjà l’état sans mouvement. Les deux versions du chapitre sont le même écran, au pixel près :
c’est le seul du récit dont on peut l’écrire.
Sans mouvement, on voit une puce de cinq millimètres sur quatre, figée et muette,
et on comprend que ce qui a remplacé trois cents pièces ne fait plus aucun geste.

## Pourquoi cette image, et ce qu’elle n’est pas

La puce est un objet **générique**, et le crédit le dit : c’est une puce mémoire EPROM, pas le
composant d’une boîte à musique, et elle ne vient pas de Sainte-Croix. Elle n’illustre pas le village,
elle illustre la phrase du récit : « une puce fait pour presque rien ce que trois cents pièces faisaient ».
La fiche Commons donne l’échelle — la zone montrée mesure environ **5 mm sur 4** — et c’est cette
échelle qui fait le travail : on voit d’un coup ce que « presque rien » veut dire.

Une photo d’usine fermée à Sainte-Croix aurait été plus locale. Je n’en ai pas trouvé en licence libre,
et je préfère une image vraie et assumée comme générique à une image approximative présentée comme locale.

## Effets refusés — chapitre 4

| Effet | Pourquoi il est refusé |
| --- | --- |
| Fondu d’apparition du texte | Ce serait le seul mouvement du chapitre, et il dirait « regarde comme c’est soigné », pas « tout s’est arrêté ». |
| Zoom lent sur la puce | Le procédé standard pour « donner vie » à une image fixe. Or ce chapitre ne doit justement pas avoir de vie. |
| Parallaxe entre l’image et le texte | Même raison, et en plus elle fabrique de la profondeur là où le sujet est plat. |
| Grésillement, scanlines, bruit d’écran | Illustration littérale de « l’électronique », et un effet qui date la page. |
| Passage automatique au chapitre suivant | Le lecteur doit pouvoir rester dans ce chapitre aussi longtemps qu’il veut. C’est un silence, pas une transition. |
| Un vrai verrou de défilement (`preventDefault` sur la molette pendant une seconde) | L’idée de départ était bien celle-là : retenir le lecteur un instant sur le chapitre de l’arrêt. Mais prendre le contrôle du défilement casse la navigation au clavier, piège les lecteurs d’écran, et impose une limite de temps que WCAG 2.2.1 demande de pouvoir désactiver. C’est surtout la même faute que le passage automatique, dans l’autre sens : décider à la place du lecteur combien de temps il reste. **L’effet voulu est obtenu autrement** — la section mesure deux écrans et la scène s’y colle. On reste dans le chapitre parce qu’il est long à traverser, pas parce qu’on y est retenu : remonter, sauter au chapitre 5 par le menu ou filer au clavier restent possibles à chaque instant. |

## Chapitre 5 — la planche

**Case 1 · Écran**
Une seule image, plein écran : **un androïde de François Junod, le torse grand ouvert** sur un
mécanisme de laiton, photographié dans l'atelier de Sainte-Croix. Le texte est posé sur l'image,
dans la colonne de gauche dès 52 rem — en bande en bas sur téléphone : le numéro « 05 », le titre
« Un atelier tourne encore », trois lignes, puis le crédit.
Le cadrage large s'arrête sur la **tête et le torse** : une tête d'homme au-dessus d'une poitrine
qui est une machine. Sur téléphone, un recadrage vertical montre la figure entière.

**Case 2 · Mouvement**
- *Élément* : le cadre du chapitre 5, et rien d'autre. C'est **le même élément qu'au chapitre 1**.
- *Direction* : le **bord bas descend**. Aucun déplacement horizontal.
- *Mesure* : hauteur `62vh` → `100vh`, et `78vh` → `100vh` sur téléphone. Exactement l'inverse du
  chapitre 1, qui parcourt les mêmes valeurs dans l'autre sens.
- *Ce qui ne bouge pas* : **l'image**. Elle est figée à la hauteur ouverte ; le cadre la découvre,
  il ne la redimensionne pas. Mesuré : sa boîte reste à 1440 × 900 pendant que le cadre passe
  de 558 à 900 px.

**Case 3 · Durée**
900 ms, courbe `ease-out`. Les mêmes chiffres qu'au chapitre 1, au mot près : c'est le même geste,
joué à l'envers. Une durée différente en ferait deux gestes qui se ressemblent, au lieu d'un geste
et de son contraire.

**Case 4 · Déclencheur**
Le haut de la section franchit le **milieu de la fenêtre**, une seule fois. Le même déclencheur que
partout ailleurs dans le récit. Il ne se rejoue pas si l'on remonte : l'atelier ne se referme pas,
comme l'hiver ne se rouvrait pas.

**Sans mouvement**
Le cadre est **déjà ouvert**, à 100 % de la fenêtre. Image, texte et crédit lisibles, dans l'ordre.
Sans mouvement, on voit une figure d'homme dont la poitrine est une horlogerie, dans un atelier,
et on comprend que quelqu'un fabrique encore ces mécanismes à la main.

## Pourquoi le dernier chapitre reprend le geste du premier

Le chapitre 1 ferme un cadre sur un village : l'hiver enferme. Le chapitre 5 rouvre le même cadre :
ce qui reste se remet à respirer. Même élément, même propriété, mêmes 900 ms, mêmes 62 % et 100 % —
seul le sens change.

Ce n'est pas une citation décorative, c'est la forme de l'argument. Le récit est une boucle : la
contrainte au début, ce qui en a survécu à la fin. Une personne qui arrive au chapitre 5 a vu le
premier cadre se fermer quatre écrans plus haut ; elle reçoit la réponse dans le même geste.

Et c'est le mouvement le moins cher du récit : **aucune ligne de JavaScript en plus**. L'observateur
du chapitre 1 regarde déjà tous les `[data-mouvement]` ; le CSS seul dit dans quel sens la hauteur va.

## Effets refusés — chapitre 5

| Effet | Pourquoi il est refusé |
| --- | --- |
| Zoom lent sur le mécanisme | Le procédé réflexe pour « finir en beauté ». Il ferait bouger l'objet, alors que le sens du chapitre est que c'est **le cadre** qui s'ouvre. Et il mentirait : sur cette photo, le mécanisme est à l'arrêt. |
| Faire scintiller ou tourner les pièces de laiton | Animer une machine immobile pour faire croire qu'elle tourne. « Un atelier tourne encore » parle de l'atelier, pas de cet objet à cet instant. |
| Une vidéo d'automate en marche | Il en existe en licence libre — celle du musée CIMA, par exemple. Mais elle dirait « regardez la machine bouger », pas « le geste a changé de camp ». Et le chapitre 2 a déjà dépensé le budget vidéo du récit. |
| Fondu depuis le noir du chapitre 4 | Le passage du chapitre inversé au chapitre clair est déjà une rupture. La souligner d'un fondu la transformerait en effet de transition, et lui ferait perdre sa brutalité. |
| Les trois lignes qui arrivent une à une | Refusé au chapitre 1 pour la même raison : le texte n'est pas ce qui change ici. |
| Défilement lié (scrub) sur l'ouverture | Le chapitre 3 l'utilise parce que c'est le lecteur qui fait passer les époques. Ici l'atelier ne dépend pas de lui : il continue, qu'on regarde ou non. Le mouvement a donc sa propre durée. |
| Un mot de conclusion ajouté après la troisième ligne | Le récit s'arrête sur « il a quitté l'industrie pour la création ». Ajouter une morale dirait au lecteur ce qu'il doit penser d'une phrase qui se suffit. |

## Le contraste, et pourquoi il commande la mise en page

Poser du texte sur une photo n’est pas une décision graphique, c’est une décision de lisibilité.
Le voile n’est pas décoratif : ses paliers sont **calés sur le bloc de texte**, et ils tournent avec lui.
Quand le texte est sur le côté, le voile va de gauche à droite : il couvre la colonne de texte,
puis s’éteint sur une demi-largeur d’image. Quand le texte repasse en bas, sur téléphone,
le voile redevient vertical et ses paliers se recalent sur la bande du bas.

Le titre du chapitre 3 a longtemps occupé une bande de page, au-dessus du cadre : posé en haut d’une
image, aucun voile ne garantissait son contraste sans masquer la photo. Le voile sur le côté a levé
cette contrainte — la colonne de gauche est couverte sur toute sa hauteur — et le titre a donc pu
revenir sur l’image, mesures à l’appui. Sur téléphone, où le voile est resté en bas, la bande de page
reste la seule solution. C’est toujours la lisibilité qui dicte la mise en page, pas l’inverse.

Sur la vidéo du chapitre 2, l’image change 25 fois par seconde : impossible de vérifier ses pixels
un par un comme ceux d’une photo. Le voile y est donc **accroché au texte**, et non à la hauteur de
l’écran : il atteint 0,92 exactement là où le texte commence. Le contraste est calculé pour le pire
pixel possible sous chaque mot, le noir, et il tient donc quelle que soit l’image du film.

Les chiffres mesurés sont dans sobre.md.

## Décisions prises pendant l’assemblage

Cinq décisions de cette planche ont été revues au moment de construire la page. Elles sont
inscrites ici parce que la page doit traduire la planche mot pour mot, et pas l'inverse.

**Le resserrement passe de l’horizontale à la verticale.**
La planche disait d’abord : largeur 100 % → 62 %. Cette mesure supposait une image posée dans
une colonne. À partir du moment où l’image occupe toute la largeur de la fenêtre et porte le
texte, un resserrement horizontal n’a plus de sens : il n’y a plus de marge où se retirer.
La décision ne change pas — **le cadre se ferme** — et la mesure non plus : **62 %**.
Seul l’axe change. Le bord bas remonte, l’image se réduit à une bande, le texte suit.

**Le déclencheur n'est plus « 50 % de la section visible ».**
Cette formule casse dès qu'une section devient plus haute que la fenêtre : la moitié de sa surface
n'entre alors jamais à l'écran et le mouvement ne part pas. Les chapitres 2 à 5 auront des images
et deviendront plus hauts. Le déclencheur retenu — le haut de la section franchit le milieu de la
fenêtre — dit la même chose et tient à n'importe quelle hauteur.

**Le schéma du chapitre 2 devient une vidéo, et la vidéo tient l’écran.**
La planche prévoyait un schéma sous le titre ; il est remplacé par le film d’une vraie boîte en marche
(voir « Pourquoi une vidéo, et plus le schéma »). La mise en page change avec lui : posé en bande fixe
sur la vidéo, le texte en couvrait **65,6 %** sur un téléphone de 390 × 844, la vidéo aurait donc presque disparu.
La vidéo reste en place et le texte monte par-dessus : on voit d’abord le mécanisme en plein écran,
puis on lit. Le déclencheur, lui, ne change pas.

**Le cadre du chapitre 3 n’est plus épinglé par GSAP : c’est le CSS qui le tient.**
Au test, le début et la fin du chapitre « saccadaient ». Mesure faite avant de toucher au code :
ScrollTrigger calculait son point d’épinglage pendant que le cadre du chapitre 1 se fermait encore,
se trompait de 276 px, et la vitrine sautait de 138 px en une seule image (détail dans sobre.md).
Le cadre est maintenant collé par `position: sticky`, comme la vidéo du chapitre 2 : c’est le navigateur
qui le tient en place, il ne peut plus sauter. La planche ne change pas — un cadre immobile,
quatre objets, 300 % de hauteur de fenêtre, scrub 0,5. Seul l’outil qui tient le cadre change.

**Le texte des chapitres 1 et 3 passe sur le côté.**
La planche posait le texte en bas de l’image, sur toute sa largeur. Sur un grand écran, cette bande
écrasait la photo : le voile devait rester opaque jusqu’à 60 % de la hauteur pour tenir le contraste,
et il ne restait presque plus d’image à voir. Le texte occupe maintenant une **colonne à gauche**,
centrée dans la hauteur, et le voile tourne d’un quart de tour avec lui : la photo se dégage
entièrement sur sa droite.

Le titre du chapitre 3 rejoint cette colonne au lieu de rester au-dessus du cadre, et la légende de
l’objet se range **juste sous le titre** : un seul bloc de texte en haut à gauche, la photo libre à droite.
La hauteur du titre change avec la largeur — deux ou trois lignes —, donc recit.js la mesure et la donne
au CSS ; l’écart entre le titre et la légende reste de 28 px de 840 à 1920 px, vérifié.
Le cadre récupère la bande de page qu’occupait le titre et remplit toute la fenêtre.
Sur téléphone, la colonne n’a pas de place : la bande du bas est conservée, le titre repasse au-dessus
du cadre, et la bascule se fait à 52 rem. Rien d’autre ne change — ni le mouvement, ni le déclencheur, ni le texte.
Les contrastes ont été remesurés sur les pixels réels des cinq photos (sobre.md).

**L'image du chapitre 5 est figée, et c'est le cadre seul qui s'ouvre.**
La planche dit « le cadre se rouvre ». Écrit naïvement, le CSS faisait autre chose : en agrandissant
le cadre, `object-fit: cover` recalculait l'échelle de l'image, qui **grossissait** pendant les 900 ms.
Mesuré sur une fenêtre en portrait de 768 × 1024 : facteur **1,61**. L'image est donc fixée à la
hauteur ouverte et le cadre la découpe — la boîte de l'image ne change plus jamais de taille
(vérifié à 1440 × 900, 768 × 1024 et 390 × 844 : facteur 1,00 partout). La planche ne change pas ;
c'est la façon de la tenir qui a changé.

Les deux recadrages y contribuent aussi, et ce n'est pas un hasard : le recadrage téléphone
(800 × 1854, proportion 0,431) est plus étroit qu'un téléphone (0,462 à 390 × 844), et le recadrage
large (1280 × 1050, proportion 1,219) est plus étroit qu'un écran posé (1,60 à 1440 × 900). Dans les
deux cas c'est la largeur qui commande le cadrage, donc l'échelle ne dépend pas de la hauteur.
La règle qui fige l'image protège ce qui reste au milieu : les tablettes et les fenêtres carrées.

**Le voile du chapitre 5 est calé sur le bas, pas sur la hauteur de la scène.**
Défaut trouvé à la mesure, pas à l'œil. Sur téléphone, la bande de texte du chapitre 5 fait
**414 px** — trois lignes et un crédit de trois phrases, contre 287 px au chapitre 1. Tant que le
cadre est encore à 62 % (523 px), cette bande commence à **20,9 %** de la scène, c'est-à-dire dans la
zone où le voile en pourcentages vaut encore **0**. Le numéro et le titre y tombaient à **1:1** :
invisibles. Le voile de ce chapitre part donc du **bas**, en rem, et couvre la même hauteur de texte
quelle que soit la hauteur du cadre. Après correction : **7,91:1** dans les deux états, à l'identique.

La règle générale qui en sort, et qui vaut pour la suite du projet : **quand le texte est collé en
bas, le voile doit l'être aussi.** Un voile en pourcentages ne tient que si la hauteur de la scène ne
change pas. Le chapitre 1 y échappait de justesse, parce que sa bande était plus courte (45,2 % de la
scène fermée, mesuré à 6,49:1) ; c'était une marge, pas une garantie — et la réécriture du récit l'a
fait sauter tout de suite. Voir la décision suivante.

**Les titres et les lignes sont réécrits, et la mise en page suit.**
Les premiers textes étaient des formules : « L'hiver oblige », « La même main change d'objet »,
« Le silence de l'électronique ». Chacune énonce la conclusion du chapitre sans raconter la scène —
il fallait déjà connaître l'histoire de Sainte-Croix pour les comprendre. Les nouveaux titres disent
ce qui se passe : « L'hiver ferme le village », « Une boîte qui joue toute seule », « Une puce remplace
trois cents pièces ». Les intentions de recit.md, elles, n'ont pas bougé.

Trois conséquences mesurées, dans l'ordre où elles sont apparues :

1. **Le voile en pourcentages a lâché partout.** Première réécriture, à 390 px : chapitre 1 à **1,9:1**,
   chapitre 4 à 6,64:1, chapitre 5 à 5,66:1 — contre 6,49, 8,92 et 7,91 avant. Les bandes de texte
   avaient grandi et remontaient dans la partie transparente du dégradé. Le voile ancré sur le bas,
   décidé pour le chapitre 5, est devenu la règle de **toutes** les scènes sur téléphone ; chacune
   déclare la hauteur de sa bande, mesurée.
2. **Les lignes ont été resserrées.** Ma première version doublait la longueur de chaque ligne.
   Lisible ne veut pas dire bavard : les phrases définitives sont courtes, et les chapitres 4 et 5
   sont remontés à 9,58:1 et 7,91:1 rien qu'en coupant des mots.
3. **Le cadre fermé passe à 78 % sur téléphone**, pour les deux cadres qui bougent. À 390 × 844, la
   bande du chapitre 1 fait 340 px et son voile en occupe 484 avec le dégradé : à 62 % — 523 px — il
   ne restait que **39 px** de photo lisible, le village avait disparu sous le blanc. À 78 % — 658 px —
   il en reste **174**. Sur écran posé, où le texte est en colonne à gauche et ne mange rien,
   **62 % est conservé**, comme dans la planche. Le geste et son inverse ne changent pas ; c'est la
   place donnée à l'image sur un petit écran qui change.
