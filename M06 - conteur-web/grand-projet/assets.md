# Assets

Budget décidé avant compression : **moins de 180 Ko** pour l'image pleine largeur d'un chapitre,
et **moins de 900 Ko** pour la vidéo du chapitre 2, en comptant le fichier le plus lourd servi.
Budget ajouté pour le son du chapitre 2 : **moins de 300 Ko**.

| Chapitre | Fichier | Largeur | Poids avant | Poids après | Crédit | Rôle dans le récit |
| --- | --- | ---: | ---: | ---: | --- | --- |
| 1 | `ch1-sainte-croix-neige-1600.webp` | 1600 px | 1 562 573 o | 148 646 o | Pmau — CC BY-SA 4.0 — Wikimedia Commons | Montrer que le village est une clairière cernée : la contrainte est dans le paysage avant d'être dans le métier. |
| 2 | `ch2-picots-peigne-1280x720.webm` | 1280 px | 2 824 811 o (les 9,6 s en 1080p) | **573 040 o** | Max van der Pol, Kijk en Luistermuseum — CC BY-SA 4.0 — Wikimedia Commons | Montrer où le son est rangé : les picots d’un cylindre qui défilent contre les dents d’un peigne. Le village vend désormais du son. |
| 2 · tél. | `ch2-picots-peigne-406x720.webm` | 406 px | 2 824 811 o (les 9,6 s en 1080p) | **303 621 o** | idem | La même chose, réduite à la bande verticale qu’un téléphone affiche vraiment. |
| 2 · son | `ch2-berceuse.webm` | — | 1 336 394 o | **224 651 o** | stephan — domaine public — via Wikimedia Commons | Faire entendre ce que la phrase « un air entier tient là-dedans » veut dire. **Ce n’est pas la boîte filmée** : le crédit le dit. |
| 3.1 | `ch3-1-cylindre-1600.webp` | 1600 px | 1 232 321 o | 106 202 o | Rama — CC BY-SA 2.0 fr — musée CIMA | Le cylindre picoté et le peigne : l’objet de départ, celui que tout le monde associe au village. |
| 3.2 | `ch3-2-disque-1600.webp` | 1600 px | 1 279 787 o | 106 634 o | Rama — CC BY-SA 2.0 fr — musée CIMA | La vitrine Thorens · Ste-Croix : la preuve visible que le son est passé au disque, et qu’il est fabriqué ici. |
| 3.3 | `ch3-3-pellicule-1600.webp` | 1600 px | 1 068 284 o | 53 578 o | Rama — CC BY-SA 2.0 fr — musée CIMA | Le projecteur : la précision quitte le son pour l’image. |
| 3.4 | `ch3-4-chariot-1600.webp` | 1600 px | 1 404 170 o | 86 638 o | Manuel Schmalstieg — CC BY 4.0 — Museum für Gestaltung, Zurich | La Hermes Baby de Paillard SA : le dernier objet, celui qui n’a plus rien à voir avec la musique. |
| 4 | `ch4-puce-1600.webp` | 1600 px | 2 602 577 o | **162 206 o** | Zephyris — CC BY-SA 3.0 — Wikimedia Commons | Montrer ce qui a remplacé trois cents pièces : une puce de 5 mm sur 4, immobile et muette. |
| 5 | `ch5-automate-1280.webp` | 1280 px | 938 772 o | **173 584 o** | Mario Del Curto (photo) et François Junod (automate) — CC BY-SA 4.0 — Wikimedia Commons | Montrer que le mécanisme n’a pas disparu : il est passé dans une œuvre, faite à l’unité, à Sainte-Croix. |
| 5 · tél. | `ch5-automate-telephone-560.webp` | 560 px | 938 772 o | **160 324 o** | idem | La même chose, recadrée sur la figure entière : c’est tout ce qu’un téléphone montre. |

## Chapitre 1 — la fiche complète

**Fichiers servis** : `images/ch1-sainte-croix-neige-800.webp`, `-1200.webp`, `-1600.webp` (voir la coupe dans sobre.md)
**Repli** : `images/ch1-sainte-croix-neige.jpg` (pour la balise `<picture>`)
**Preuve du poids avant** : `images/ch1-sainte-croix-neige-source.jpg`, conservé tel quel.

### Origine

| | |
| --- | --- |
| Titre d'origine | `Sainte-Croix et l'Auberson - img 00064.jpg` |
| Page source | https://commons.wikimedia.org/wiki/File:Sainte-Croix_et_l%27Auberson_-_img_00064.jpg |
| Auteur | **Pmau** (travail personnel) |
| Licence | **CC BY-SA 4.0** — https://creativecommons.org/licenses/by-sa/4.0 |
| Date de prise de vue | 28 janvier 2006, 12 h 59 |
| Légende d'origine | « Sainte-Croix et l'Auberson vus du Praisot. » |

### Mesures

| Étape | Dimensions | Octets | Ko |
| --- | --- | ---: | ---: |
| Source Commons (JPEG) | 2496 × 1664 | 1 562 573 | 1 525,9 |
| Servi — WebP q80, 800 px | 800 × 533 | **52 970** | **51,7** |
| Servi — WebP q80, 1200 px | 1200 × 800 | **99 606** | **97,3** |
| Servi — WebP q80, 1600 px | 1600 × 1066 | **148 646** | **145,2** |
| Repli (JPEG) | 1600 × 1066 | 177 808 | 173,6 |

Les trois largeurs sont le résultat de la coupe sobre de l'étape 5 : le navigateur choisit
la plus petite qui suffit. Détail des mesures avant/après dans sobre.md.

**Gain source → WebP : −90,5 %**, soit 10,5 fois plus léger. Budget de 180 Ko tenu avec 35 Ko de marge.

Commande utilisée :

    ffmpeg -i source.jpg -vf "scale=1600:-2:flags=lanczos" \
           -c:v libwebp -quality 80 -compression_level 6 -preset picture sortie.webp

Qualité 85 montait à 189 024 o : au-dessus du budget, refusée. Qualité 80 retenue après
contrôle visuel du dégradé du ciel et des ombres dans la neige, là où le WebP fait des aplats.

### Rôle dans le récit

Le chapitre 1 dit que la mécanique de Sainte-Croix naît d'une contrainte, pas d'un goût.
L'image doit donc montrer **l'enfermement, pas le joli**. Le village est un liseré sombre
écrasé entre la forêt et le blanc ; on voit d'abord la neige, le village ensuite.
C'est ce qui justifie le mouvement de la planche : le cadre se resserre parce que le paysage serre déjà.

### Obligations de licence

CC BY-SA 4.0 impose l'attribution et le partage à l'identique. Le redimensionnement et la
recompression produisent une œuvre dérivée. Conséquence sur la page : le crédit
**« Photo : Pmau, CC BY-SA 4.0 »** avec lien vers la licence apparaît sous l'image,
visible sans interaction. Ce n'est pas une note de bas de page facultative.


## Chapitre 3 — les quatre objets

Les quatre images occupent **le même cadre**, l’une après l’autre. Elles sont donc toutes
recadrées au format **3:2** par `scale=…:force_original_aspect_ratio=increase,crop=…` :
un recadrage, jamais une déformation.

### Origine

| Objet | Fichier d’origine | Auteur | Licence | Lieu |
| --- | --- | --- | --- | --- |
| Cylindre | `CIMA mg 8298.jpg` | Rama | CC BY-SA 2.0 fr | Musée CIMA, Sainte-Croix |
| Disque | `CIMA mg 8375.jpg` | Rama | CC BY-SA 2.0 fr | Musée CIMA, Sainte-Croix |
| Pellicule | `CIMA mg 8376.jpg` | Rama | CC BY-SA 2.0 fr | Musée CIMA, Sainte-Croix |
| Chariot | `Hermes Baby Typewriter Werkentwurf.jpg` | Manuel Schmalstieg | CC BY 4.0 | Museum für Gestaltung, Zurich |

Les trois premières viennent du **musée de Sainte-Croix même**, photographié le 30 septembre 2007.
La quatrième vient d’ailleurs, faute de machine à écrire au CIMA : la rupture de lumière se voit,
elle est assumée. Sa fiche Commons indique « Produced by Paillard SA », le fabricant de Sainte-Croix,
et « entered production in 1963 » — c’est la source de la date affichée sous l’image.

### Mesures

| Fichier | 800 px | 1200 px | 1600 px |
| --- | ---: | ---: | ---: |
| `ch3-1-cylindre` | 41 046 o | 74 258 o | 106 202 o |
| `ch3-2-disque` | 42 708 o | 71 144 o | 106 634 o |
| `ch3-3-pellicule` | 20 830 o | 35 218 o | 53 578 o |
| `ch3-4-chariot` | 32 344 o | 56 386 o | 86 638 o |
| **Somme** | **136 928 o** | **237 006 o** | **353 052 o** |

Le chapitre affiche quatre images en même temps : c’est la somme, pas une seule image, qui compte.
Sur téléphone, un lecteur télécharge donc **136 928 octets** pour ce chapitre — mesuré à 138 128 o
en conditions réelles, en-têtes HTTP compris.

### Ce que je n’ai pas téléchargé

Les originaux Commons pèsent entre 2,2 et 5,1 Mo pièce, soit environ 17 Mo. J ai récupéré
le **rendu 2000 px que Commons génère lui-même** — 4 984 562 octets au total — et je travaille
à partir de là. Les poids d’origine restent inscrits ci-dessus pour mémoire.


## Chapitre 2 — la vidéo

Le schéma SVG du premier assemblage (4 348 octets, « Schéma : Flavio Giannattasio, 2026 ») a été retiré.
Il est remplacé par un extrait du film d’une boîte à musique en marche, tourné pour le musée qui la conserve.

**Fichiers servis**, dont le navigateur ne télécharge qu’un seul :
- téléphone (fenêtre au rapport ≤ 5/8) : `ch2-picots-peigne-406x720.webm`, repli `ch2-picots-peigne-406x720.mp4`
- autres écrans : `ch2-picots-peigne-1280x720.webm`, repli `ch2-picots-peigne-1280x720.mp4`

**Image fixe** (la première image de la vidéo) : `ch2-picots-peigne-800.webp`, `-1200.webp`, `-1600.webp`,
sur téléphone `ch2-picots-peigne-telephone-406.webp` et `-608.webp`, repli `ch2-picots-peigne.jpg`.

**Preuve du poids avant** : non conservée. Le fichier de 12 Mo a été supprimé après l’extraction,
comme annoncé avant le téléchargement ; ses mesures sont inscrites ci-dessous.

### Origine

| | |
| --- | --- |
| Titre d’origine | `Cilinderspeeldoos Nicole Frères uit 1864, Kijk- en Luistermuseum, 800030.webm` |
| Page source | https://commons.wikimedia.org/wiki/File:Cilinderspeeldoos_Nicole_Fr%C3%A8res_uit_1864,_Kijk-_en_Luistermuseum,_800030.webm |
| Auteur du film | **Max van der Pol**, « the person who made this film » selon la fiche Commons |
| Attribution demandée | **Kijk en Luistermuseum**, inscrite dans le modèle de licence de la fiche |
| Licence | **CC BY-SA 4.0** — https://creativecommons.org/licenses/by-sa/4.0 (la fiche propose aussi 3.0, 2.5, 2.0 et 1.0) |
| Objet filmé | Boîte à musique à cylindre, **Nicole Frères**, **Genève**, 1864. Cylindre de 33,5 cm, n° de série 39358 |
| Collection | Kijk en Luistermuseum, n° d’inventaire 800030 (Collectie Gelderland) |
| Autorisation | Enregistrée sur Commons, ticket n° 2019060310001858 |

Métadonnées relues dans l’API de Commons **et** dans le texte source de la fiche. L’API seule donnait
« Artist : Nicole Frères », c’est-à-dire le fabricant de la boîte, pas l’auteur du film.
C’est le texte de la fiche qui nomme Max van der Pol.

### Ce que j’ai téléchargé

| | Octets |
| --- | ---: |
| Original déposé sur Commons (non téléchargé) | 36 573 240 |
| Version 1080p générée par Commons, **téléchargée une fois** | **12 245 242** |
| Durée | 45,0 s, 25 images par seconde |
| Piste son | présente mais **muette** : niveau maximal 0, mesuré sur les 45 s |

Première tentative : lire seulement 10 secondes du fichier à distance. Le serveur l’a bloquée
(HTTP 429, « trop de requêtes ») : le fichier entier a été téléchargé une seule fois, coupé en local,
puis supprimé.

### L’extrait

De **27,2 à 36,8 s** : 9,6 s, 240 images. D’abord le gros plan des picots contre le peigne,
puis le fondu d’origine du film vers la boîte ouverte. Les bords ont été choisis au dixième de seconde,
sur des planches d’images, pour ne commencer ni finir au milieu d’un fondu : la boucle repart sur une coupe franche.

### Mesures

| Version | Dimensions | Octets | SSIM |
| --- | --- | ---: | ---: |
| Source : les 9,6 s dans la version 1080p | 1920 × 1080 | 2 824 811 | référence |
| Essai VP9, CRF 34 | 1280 × 720 | 929 031 | 0,9699 |
| Essai VP9, CRF 38 | 1280 × 720 | 722 097 | 0,9687 |
| **Servi — VP9, CRF 42** | 1280 × 720 | **573 040** | 0,9672 |
| **Repli — H.264, CRF 28** | 1280 × 720 | **732 660** | 0,9651 |
| **Servi téléphone — VP9, CRF 42** | 406 × 720 | **303 621** | 0,9465 |
| **Repli téléphone — H.264, CRF 28** | 406 × 720 | **353 462** | 0,9427 |
| Image fixe, WebP q80 | 800 / 1200 / 1600 px | 28 524 / 46 084 / 64 090 | — |
| Image fixe téléphone, WebP q80 | 406 / 608 px | 25 036 / 39 168 | — |
| Repli de l’image fixe, JPEG | 1200 px | 62 260 | — |

Le SSIM compare chaque version à la même zone de la source, ramenée à la même taille : 1 serait identique.

**Budget de 900 Ko tenu.** Le fichier le plus lourd servi, le repli H.264 de 1280 px, pèse 732 660 o.

**Le choix du CRF.** Entre CRF 34 et CRF 42, le poids baisse de **38,3 %** et le SSIM ne perd que 0,003.
Les deux versions, comparées à l’échelle 1:1 sur la zone la plus fine, les picots et les dents,
ne montrent aucune différence visible. CRF 42 est retenu. Même contrôle pour le H.264 du téléphone,
agrandi deux fois à côté du VP9 : CRF 26 et CRF 28 se valent à l’œil, CRF 28 est retenu (353 462 o contre 447 512).

**Pourquoi un repli H.264.** Tous les navigateurs ne lisent pas le WebM VP9, en particulier les
anciens Safari sur iPhone. Le navigateur prend le premier format qu’il sait lire, et un seul fichier part.
Les replis H.264 sont plafonnés aux niveaux High 4.0 et 3.1 : laissé libre, l’encodeur montait au
niveau 5.0 pour la version large, que de vieux décodeurs refusent.

### Le cadrage téléphone

Sur un téléphone de 390 × 844 tenu droit, la vidéo large couvre l’écran en hauteur et déborde des deux
côtés : on n’en voit que **26 %** de la largeur. Servir les 1280 px, c’était envoyer trois quarts de pixels invisibles.

La version téléphone est cette bande-là, à la même densité : 608 × 1080 px pris dans la source,
réduits à 406 × 720. Le cadre suit le sujet : pendant le gros plan, il est centré sur la limite entre picots
et dents (x = 496 sur 1920) ; pendant le fondu d’origine, il glisse vers la gauche (x = 300) pour que la boîte ouverte
montre à la fois le peigne et le cylindre.

Un premier essai en 3:4 (540 × 720) pesait 356 290 o : **17 % de plus**, pour une largeur qu’aucun
téléphone tenu droit n’affiche.

Commandes utilisées (extrait, deux passes VP9) :

    ffmpeg -ss 27.2 -i source.webm -t 9.6 -an -vf "scale=1280:720:flags=lanczos" \
           -c:v libvpx-vp9 -crf 42 -b:v 0 -row-mt 1 -g 240 -pass 1 -f null -
    ffmpeg -ss 27.2 -i source.webm -t 9.6 -an -vf "scale=1280:720:flags=lanczos" \
           -c:v libvpx-vp9 -crf 42 -b:v 0 -row-mt 1 -g 240 -pass 2 ch2-picots-peigne-1280x720.webm

    # bande téléphone : même commande, avec ce filtre
    -vf "crop=w=608:h=1080:x='if(lt(t,4.15),496,if(gt(t,4.85),300,496-196*(t-4.15)/0.7))':y=0,scale=406:720"

### Rôle dans le récit

Le chapitre dit que le village cesse de vendre des heures de travail pour vendre du son.
La vidéo montre où ce son est rangé : dans les picots d’un cylindre, qui défilent contre un peigne.
Sans elle, la phrase reste une affirmation.

### Obligations de licence

CC BY-SA 4.0 impose l’attribution, l’indication des modifications et le partage à l’identique.
Couper, recadrer et réencoder produit une œuvre dérivée. Conséquences sur la page : le crédit
**« Vidéo : Max van der Pol, Kijk en Luistermuseum, CC BY-SA 4.0, extrait recadré »**, avec un lien vers
la fiche et vers la licence, est visible sous le texte du chapitre, sans interaction. Les vidéos et images fixes
dérivées, dans `images/`, sont placées sous la même licence CC BY-SA 4.0.

## Chapitre 4 — la puce

**Fichiers servis** : `images/ch4-puce-800.webp`, `-1200.webp`, `-1600.webp`
**Repli** : `images/ch4-puce.jpg` (pour la balise `<picture>`)
**Preuve du poids avant** : `images/ch4-puce-source.jpg`, conservé tel quel — c'est le rendu 1920 px
téléchargé, pas l'original de Commons.

### Origine

| | |
| --- | --- |
| Titre d'origine | `EPROM Microchip SuperMacro.jpg` |
| Page source | https://commons.wikimedia.org/wiki/File:EPROM_Microchip_SuperMacro.jpg |
| Auteur | **Zephyris** (travail personnel) |
| Licence | **CC BY-SA 3.0** — https://creativecommons.org/licenses/by-sa/3.0 |
| Date | 27 octobre 2011 |
| Description d'origine | Le circuit gravé d'une puce mémoire EPROM et les fils d'argent qui le relient aux pattes du boîtier. **La zone montrée couvre environ 5 mm sur 4.** |

L'échelle vient de la fiche Commons, pas de moi : c'est elle qui est reprise dans le crédit sur la page.

### Mesures

| Étape | Dimensions | Octets | Ko |
| --- | --- | ---: | ---: |
| Original sur Commons (non téléchargé) | 4290 × 2856 | 2 602 577 | 2 541,6 |
| Rendu 1920 px généré par Commons, téléchargé | 1920 × 1278 | **431 377** | 421,3 |
| Servi — WebP q80, 800 px | 800 × 532 | **48 924** | **47,8** |
| Servi — WebP q80, 1200 px | 1200 × 798 | **98 262** | **95,9** |
| Servi — WebP q80, 1600 px | 1600 × 1066 | **162 206** | **158,4** |
| Repli (JPEG) | 1200 × 798 | 101 014 | 98,6 |

**Budget de 180 Ko tenu** : le fichier le plus lourd servi pèse 158,4 Ko.
Mêmes réglages que les chapitres 1 et 3, pour que les poids restent comparables :

    ffmpeg -i ch4-puce-source.jpg -vf "scale=1600:-2:flags=lanczos"            -c:v libwebp -quality 80 -compression_level 6 -preset picture ch4-puce-1600.webp

### Rôle dans le récit

Le chapitre dit qu'une puce fait pour presque rien ce que trois cents pièces faisaient. L'image ne
montre pas le village, elle montre **l'échelle** : cinq millimètres sur quatre, un circuit gravé, des
fils d'argent, et plus une seule pièce qui bouge. C'est le seul chapitre immobile du récit ; son image
devait donc être, elle aussi, sans aucun mouvement possible.

### Ce qu'elle n'est pas

Une puce mémoire EPROM, pas le composant d'une boîte à musique, et pas une photo prise à Sainte-Croix.
Le crédit sur la page le dit en toutes lettres. Je n'ai pas trouvé de photo libre d'usine fermée à
Sainte-Croix ; une image vraie et annoncée comme générique vaut mieux qu'une image approximative
présentée comme locale.

### Obligations de licence

CC BY-SA 3.0 impose l'attribution et le partage à l'identique. Le redimensionnement et la recompression
produisent une œuvre dérivée. Conséquence sur la page : le crédit **« Photo : Zephyris, CC BY-SA 3.0 »**,
avec lien vers la fiche et vers la licence, est visible sous le texte du chapitre, sans interaction.
Les fichiers dérivés, dans `images/`, sont sous la même licence.
## Chapitre 5 — l'automate

**Fichiers servis** — deux recadrages, pas un seul fichier redimensionné :
`images/ch5-automate-960.webp`, `-1280.webp` (recadrage large, écrans posés)
`images/ch5-automate-telephone-400.webp`, `-560.webp` (recadrage vertical, téléphones)
**Repli** : `images/ch5-automate.jpg` (pour la balise `<picture>`)
**Preuve du poids avant** : `images/ch5-automate-source.jpg`, conservé tel quel — c'est le rendu
1280 px téléchargé depuis Commons, pas l'original.

### Origine

| | |
| --- | --- |
| Titre d'origine | `Androide Pouchkine.jpg` |
| Page source | https://commons.wikimedia.org/wiki/File:Androide_Pouchkine.jpg |
| Photographe | **Mario Del Curto** |
| Auteur de l'automate | **François Junod**, Sainte-Croix |
| Licence | **CC BY-SA 4.0** — https://creativecommons.org/licenses/by-sa/4.0 |
| Autorisation | Ticket VRTS Wikimedia **2018100410006005** : l'ayant droit a donné son accord par écrit, vérifié par un bénévole de Commons. |
| Date de prise de vue | 14 septembre 2010, 14 h 44 |
| Légende d'origine | « Réalisation François Junod, Sainte-Croix, Suisse. » |

C'est la première image du récit qui vient vraiment de Sainte-Croix : la boîte du chapitre 2 est
genevoise, la puce du chapitre 4 est générique, les objets du chapitre 3 sont photographiés au musée
du village mais pas tous fabriqués là. Celle-ci a été prise dans l'atelier, et sa fiche le dit.

### Un désaccord de nom, laissé visible

Le fichier s'appelle `Androide Pouchkine.jpg` sur Commons, il est rangé dans la catégorie
« François Junod automata » et sa source est la page « Pouchkine » du site de l'atelier. Mais **la
plaque gravée sur le mécanisme, lisible sur la photo, porte « Androïde N° … François Junod 2006 »**,
alors que l'autre photo de Commons décrit l'androïde Pouchkine comme « achevé en 2010 ».

Je n'ai pas de quoi trancher : soit la plaque date le mécanisme et la figure a été terminée plus tard,
soit ce n'est pas le même androïde. Conséquence sur la page : **le crédit ne dit pas « Pouchkine »**.
Il dit ce qui est vérifiable — un androïde de François Junod, à Sainte-Croix — et il cite la plaque,
que le lecteur peut lire lui-même sur l'image. Nommer l'œuvre d'après un titre de fichier aurait été
inventer un crédit.

### Mesures

| Étape | Dimensions | Octets | Ko |
| --- | --- | ---: | ---: |
| Original sur Commons (non téléchargé) | 1776 × 2573 | 938 772 | 916,8 |
| Rendu 1280 px généré par Commons, téléchargé | 1280 × 1854 | **644 705** | 629,6 |
| Servi — large, WebP q70, 960 px | 960 × 788 | **106 220** | **103,7** |
| Servi — large, WebP q70, 1280 px | 1280 × 1050 | **173 584** | **169,5** |
| Servi — téléphone, WebP q70, 400 px | 400 × 928 | **90 068** | **88,0** |
| Servi — téléphone, WebP q70, 560 px | 560 × 1298 | **160 324** | **156,6** |
| Repli (JPEG) | 960 × 788 | 136 848 | 133,6 |

**Budget de 180 Ko tenu** : le fichier le plus lourd servi pèse 169,5 Ko, avec 10,5 Ko de marge.

### Pourquoi cette photo a coûté deux décisions de plus que les autres

C'est l'image la plus difficile à comprimer du récit : des centaines de pièces de laiton, chacune
avec son arête et son reflet. Un dégradé de ciel se comprime ; un mécanisme, non. Deux mesures l'ont
montré, et deux décisions en sont sorties.

**1. Le recadrage n'est pas une astuce de poids, c'est la mise en page.** La photo est en portrait
(1280 × 1854) et la scène est un bandeau. Servir la photo entière revenait à envoyer des pixels que
le navigateur allait jeter au rognage. Deux recadrages sont donc découpés à la source :

    # écrans posés — la tête et le torse ouvert
    ffmpeg -i ch5-automate-source.jpg -vf "crop=1280:1050:0:0,scale=1280:-2:flags=lanczos" \
           -c:v libwebp -quality 70 -compression_level 6 -preset picture ch5-automate-1280.webp

    # téléphones — la figure entière, sans l'atelier sur les côtés
    ffmpeg -i ch5-automate-source.jpg -vf "crop=800:1854:240:0,scale=560:-2:flags=lanczos" \
           -c:v libwebp -quality 70 -compression_level 6 -preset picture ch5-automate-telephone-560.webp

Le recadrage vertical a une seconde raison, mesurée dans sobre.md : sa proportion (0,431) est plus
étroite que celle d'un téléphone (0,462 à 390 × 844), ce qui garantit que la largeur commande le
cadrage — donc que l'image ne change jamais d'échelle pendant que le cadre s'ouvre.

**2. La qualité descend de 80 à 70, pour ce chapitre seulement.** Mesuré, à 1280 px :

| Réglage | Octets | Verdict |
| --- | ---: | --- |
| Image entière, q80 (comme les chapitres 1, 3 et 4) | 410 114 | 400,5 Ko — **2,3 fois le budget** |
| Recadrée, q80 | 216 254 | 211,2 Ko — encore au-dessus |
| Recadrée, q76 | 189 178 | 184,7 Ko — dépasse de 4,7 Ko |
| **Recadrée, q70** | **173 584** | **169,5 Ko — retenu** |

Le SSIM par rapport au recadrage non compressé reste à **0,962** à q70, contre 0,967 à q76 : la
différence se voit sur un graphique, pas sur l'écran. Le réglage est le même pour les deux recadrages,
pour que les quatre fichiers restent comparables entre eux.

### Rôle dans le récit

Le chapitre dit que le geste a survécu en quittant l'industrie pour la création. L'image doit donc
montrer **le mécanisme, et qu'il est encore fabriqué** : un torse ouvert sur des centaines de pièces
de laiton, et l'atelier derrière. C'est le même laiton qu'au chapitre 2 — cames, leviers, disques —
mais il n'est plus dans une boîte produite en série : il est dans une figure faite à l'unité.

Le cadrage large s'arrête volontairement sur la **tête et le torse**. C'est ce qui rend le chapitre
lisible d'un coup : une tête d'homme au-dessus d'une poitrine qui est une machine.

### Ce qu'elle n'est pas

Ce n'est pas une photo d'atelier « en train de travailler » : personne n'y tient un outil. C'est un
androïde photographié debout, torse ouvert, dans le lieu où il a été fait. Et ce n'est pas une boîte
à musique : c'est une pièce unique, commandée et payée comme une œuvre — ce qui est exactement le
propos du chapitre. Enfin, le mécanisme y est **à l'arrêt** : la photo montre qu'il existe et qu'il
est fabriqué, elle ne montre pas qu'il tourne.

### Obligations de licence

CC BY-SA 4.0 impose l'attribution et le partage à l'identique, et il y a ici **deux droits** : celui du
photographe sur la photo, celui de François Junod sur l'androïde, qui est une sculpture. Les deux sont
nommés dans le crédit visible sous le texte du chapitre, sans interaction, avec un lien vers la fiche
Commons et vers la licence. Le recadrage et la recompression produisent une œuvre dérivée : les
fichiers de `images/` sont sous la même licence CC BY-SA 4.0.

La photo d'une sculpture récente est une œuvre dérivée : il fallait donc l'accord des **deux** ayants
droit, pas seulement du photographe. C'est le cas ici, et c'est vérifiable : le ticket VRTS
**2018100410006005** est enregistré sur la fiche Commons, et la fiche de l'autre photo du même
androïde porte explicitement `{{CC-BY-SA-4.0|François Junod}}` pour l'objet et
`{{CC-BY-SA-4.0|Mario Del Curto}}` pour la prise de vue. C'est cette double autorisation qui a fait
préférer cette image à une photo d'atelier trouvée ailleurs.
## Chapitre 2 — le son, et pourquoi ce n'est pas celui de la vidéo

**Fichiers servis** : `images/ch2-berceuse.webm` (Opus) et `images/ch2-berceuse.m4a` (AAC, repli Safari)
**Preuve du poids avant** : `images/ch2-berceuse-source.ogg`, conservé tel quel.

### Le problème, d'abord

La boîte du chapitre 2 est filmée, pas enregistrée : **la piste son du film ne contient que du
silence** (niveau maximal 0 sur les 44,98 s, mesuré au tout début du projet). Et aucun enregistrement
libre de cette boîte-là n'existe : le musée a mis en ligne trois autres boîtes à cylindre, toutes
muettes de la même façon.

Donc tout son ajouté est **celui d'un autre instrument**. C'est la seule chose qui compte ici, et
c'est ce que le crédit dit en gras sur la page : « Ce n'est pas la boîte filmée ci-dessus ».

Un candidat a été écarté pour cette raison : `God Save the Tsar! and Hail, Pennsylvania! music box.ogg`
(1,1 Mo) est tiré de **YouTube**, son auteur est **inconnu**, et ses bandeaux de licence ne couvrent
que les mélodies — pas l'enregistrement. Un crédit qu'on ne peut pas écrire est un fichier qu'on ne
prend pas.

### Origine

| | |
| --- | --- |
| Titre d'origine | `Lullaby wound up clock guten abend gute nacht.ogg` |
| Page source | https://commons.wikimedia.org/wiki/File:Lullaby_wound_up_clock_guten_abend_gute_nacht.ogg |
| Auteur de l'enregistrement | **stephan**, 12 novembre 2007 |
| Licence de l'enregistrement | **Domaine public** (`PD-author`), déposé sur pdsounds.org, fiche n° 368 |
| Mélodie | **Johannes Brahms**, *Wiegenlied*, op. 49 n° 4, 1868 — domaine public |
| Instrument | Mouvement à picots et lames d'acier (« wound up clock ») |
| Original déclaré | MP3 192 kbps stéréo, 0:46 |

Deux droits, deux vérifications : l'enregistrement est dans le domaine public par la volonté de son
auteur, et la mélodie y est par son âge. C'est la fiche la plus propre des candidats trouvés.

### Pourquoi celui-là et pas le Polyphon

L'autre candidat sérieux était `Polyphon carmen habanera.ogg` (CC BY-SA 4.0, 8,4 Mo, Habanera de
Bizet). Il est très bien documenté, mais un Polyphon est une boîte **à disque** : on aurait entendu
le mécanisme du chapitre 3 en regardant celui du chapitre 2. Le mouvement à picots et lames retenu
est exactement celui que le chapitre explique.

### Mesures

| Étape | Format | Durée | Octets | Ko |
| --- | --- | ---: | ---: | ---: |
| Source Commons | Vorbis 44,1 kHz stéréo | 46,45 s | 1 336 394 | 1 305,1 |
| Servi — Opus 48 kbps mono | WebM, 48 kHz | 26,01 s | **224 651** | **219,4** |
| Servi — AAC 56 kbps mono | M4A, 44,1 kHz | 26,00 s | **190 689** | **186,2** |
| Réellement transféré au clic (Chrome, 390 px) | Opus | — | **224 902** | 219,6 |

**Budget décidé avant compression : moins de 300 Ko.** Tenu avec 80 Ko de marge.
**Gain source → Opus : −83,2 %.**

### La coupe et le traitement

    ffmpeg -ss 0 -t 26 -i ch2-berceuse-source.ogg -map 0:a:0 \
           -af "volume=-3dB,afade=t=out:st=24.5:d=1.5,aresample=48000" \
           -c:a libopus -b:a 48k -ac 1 -ar 48000 -application audio ch2-berceuse.webm

**26 s et pas 46** : le relevé du niveau par fenêtres de 2 s montre des fins de phrase vers 8, 26, 34
et 40 s. La coupe tombe sur celle de 26 s, avec un fondu de sortie de 1,5 s pour que la fin ne soit
pas tranchée.

**48 kbps et pas plus** : la fiche Commons indique que l'original est un **MP3 192 kbps** transcodé
ensuite en Vorbis. Le fichier est donc déjà deux fois compressé ; mettre plus de débit sur une source
lossy n'achète rien. *À dire honnêtement* : j'ai essayé de chiffrer l'erreur de codage en soustrayant
l'encodé de la référence, et le résultat était identique à tous les débits (7,3 à 7,5 dB) — la
soustraction n'était pas alignée à l'échantillon près, Opus et AAC ajoutant un retard d'encodeur.
**Cette mesure ne valait rien et n'est donc pas publiée.** Le choix repose sur l'argument ci-dessus,
pas sur un chiffre.

**−3 dB et aucune normalisation** : la source culmine déjà à **−0,02 dBTP**. Une normalisation de
volume (`loudnorm`, cible −20 LUFS) n'a pas tenu la contrainte de crête et faisait écrêter le
résultat. Même à −1 dB, le fichier Opus **décodé** culminait à **+0,23 dB**, au-dessus du plein
niveau : c'est l'excursion inter-échantillon du codec. À −3 dB, crête mesurée **−1,68 dB** (Opus) et
**−1,84 dB** (AAC), *flat factor* 0 — aucun palier d'écrêtage. Le son est donc discret : c'est le
niveau réel de l'enregistrement, moins 3 dB de sécurité. Aucun limiteur, aucune compression de
dynamique : une boîte à musique qu'on « remonte » au limiteur ne sonne plus comme une boîte à musique.

### Rôle dans le récit

Le chapitre dit « Un air entier tient là-dedans ». C'est une phrase qu'on croit sur parole ou qu'on
entend. Le bouton permet de l'entendre — sans jamais prétendre que c'est la boîte à l'écran.

### Obligations de licence

Le domaine public n'impose rien. Le crédit est quand même là, avec le nom de l'auteur, la date et le
lien vers la fiche : un récit qui cite ses sources ne les cite pas seulement quand la loi l'y oblige.
