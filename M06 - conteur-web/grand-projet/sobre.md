# Vérification sobre

| Chapitre | Idée à conserver | Mesure avant | Coupe | Mesure après | État sans mouvement |
| --- | --- | ---: | --- | ---: | --- |
| 1 | L'hiver enferme le village | 161 967 o chargés à 390 px | Servir l'image à la taille réellement affichée (`srcset` + `sizes`) au lieu d'une seule image de 1600 px | **66 531 o** | Cadre à 62 %, image, crédit, titre et deux lignes lisibles dans l'ordre. |
| 2 | Le village vend du son | 2 824 811 o : les 9,6 s du film en 1080p | Servir la vidéo à la taille affichée : 1280 × 720, et au téléphone la seule bande verticale qu’il montre (406 × 720). Rien avant le chapitre, rien sans clic en mouvement réduit. | **303 872 o** à 390 px (573 291 o à 1440 px) | Image fixe du gros plan, qui est la première image de la vidéo ; texte, crédit, bouton « Lire la vidéo ». |
| 3 | La précision survit au produit | 194 230 o au chargement, à 390 px | Ne plus charger GSAP dans le `<head>` : le télécharger à l’approche du chapitre | **78 103 o** | Planche-contact : les quatre objets côte à côte, dans l’ordre, avec leurs légendes. |
| 4 | Un savoir-faire meurt d’être devenu inutile | 431 377 o : le rendu téléchargé de la puce | Servir l’image à la taille affichée, et n’ajouter **aucun mouvement, aucun script** : le chapitre immobile ne coûte que son image | **49 123 o** à 390 px | Le même écran, exactement : ce chapitre n’a pas de version « avec mouvement ». |
| 5 | Le geste a survécu en changeant de camp | 410 114 o : l’image entière aux réglages des autres chapitres | Recadrer à ce que la scène montre vraiment — deux recadrages, large et vertical — et descendre la qualité WebP de 80 à 70 | **160 524 o** à 390 px | Cadre déjà ouvert à 100 % : on voit **plus** d’image que dans la version animée. |

## Chapitre 1 — la coupe

### Ce que j'ai mesuré

Le poids réellement téléchargé par un téléphone, relevé dans l'API `Performance`
du navigateur à 390 px de large et DPR 2 — pas le poids des fichiers sur le disque.

| Ressource | Avant | Après |
| --- | ---: | ---: |
| `index.html` | 4 337 o | 4 577 o |
| `style.css` | 6 419 o | 6 419 o |
| `recit.js` | 2 265 o | 2 265 o |
| Image du chapitre 1 | 148 946 o | **53 270 o** |
| **Total** | **161 967 o** | **66 531 o** |

### Le constat

L'image faisait 1600 px de large pour un affichage de 350 px. À DPR 2, le téléphone a
besoin de 700 px réels. On en téléchargeait **plus du double du nécessaire**, et l'image
représentait 92 % du poids de la page.

### La coupe décidée

Trois largeurs au lieu d'une, et un `sizes` qui décrit la place réelle de l'image :

    sizes="(min-width: 1328px) 1072px, 90vw"

| Fichier | Largeur | Poids |
| --- | ---: | ---: |
| `ch1-sainte-croix-neige-800.webp` | 800 px | 52 970 o |
| `ch1-sainte-croix-neige-1200.webp` | 1200 px | 99 606 o |
| `ch1-sainte-croix-neige-1600.webp` | 1600 px | 148 646 o |

### Le résultat

**−95 436 octets, soit −58,9 % du poids de la page à 390 px.**
L'image seule passe de 148 946 à 53 270 octets : **−64,2 %**.

Contrôle à 1440 px et DPR 1,75 : le navigateur choisit bien le fichier de 1600 px,
total 162 207 o, aucun débordement horizontal. **La coupe n'a rien retiré au grand écran** ;
elle a seulement cessé d'envoyer aux petits écrans une image qu'ils ne peuvent pas afficher.

C'est le point important : ce n'est pas une baisse de qualité, c'est la fin d'un gaspillage.

## Chapitre 2 — la coupe

Le chapitre 2 a d’abord été un schéma SVG de 4 348 octets. Il est devenu une vidéo, par décision
(voir storyboard.md). Cette section mesure la vidéo ; l’ancienne coupe du schéma n’a plus d’objet.

### Ce que j’ai mesuré

Le point de départ n’est pas une estimation. Le film du musée existe en 1080p sur Commons :
les 9,6 s retenues y occupent **2 824 811 octets** de vidéo (somme des paquets entre 27,2 et 36,8 s,
relevée par ffprobe). Le fichier complet pèse 12 245 242 octets. L’intégrer tel quel, c’était envoyer
45 s de 1080p pour en montrer 9,6 s, y compris sur un écran de 390 px.

### Les coupes décidées

1. **Couper le film** : 9,6 s au lieu de 45.
2. **Servir la taille affichée** : 1280 × 720 pour les écrans larges. Sur un téléphone tenu droit,
   la vidéo large ne montre que 26 % de sa largeur : le téléphone reçoit donc **la bande verticale qu’il
   affiche**, 406 × 720, recadrée sur le sujet (détail dans assets.md).
3. **Compresser jusqu’où l’œil ne voit plus rien** : CRF 42 plutôt que 34, soit −38,3 %, contrôlé à l’échelle 1:1.
4. **Aucune piste son** : celle de la source est muette.
5. **Ne rien télécharger d’avance** : `preload="none"`, et la vidéo n’est demandée qu’à la première lecture,
   quand le chapitre atteint le milieu de l’écran. En mouvement réduit ou en économie de données :
   jamais sans un clic.

### Le résultat

Mesuré dans Chrome : octets réellement reçus, en-têtes compris, taille de fenêtre réglée **avant** le chargement.

| | 390 px, DPR 2 | 1440 px, DPR 1 |
| --- | ---: | ---: |
| Source équivalente (les 9,6 s en 1080p) | 2 824 811 o | 2 824 811 o |
| Fichier choisi par le navigateur | `406x720.webm` | `1280x720.webm` |
| **Vidéo téléchargée** | **303 872 o** | **573 291 o** |
| Vidéo téléchargée avant d’atteindre le chapitre | **0 o** | **0 o** |
| Image fixe du chapitre | 39 367 o | 64 289 o |

**Sur téléphone : −89,2 % par rapport à la source.** Et −47,0 % par rapport à la vidéo large
qu’on aurait pu envoyer à tout le monde. Sur grand écran : −79,7 %.

### Ce que ça coûte, honnêtement

Le schéma pesait 4 348 octets. Sur téléphone, la vidéo en pèse 303 872 : **70 fois plus**.
C’est le prix du choix de montrer l’objet réel plutôt que de le dessiner.
Deux choses rendent ce prix acceptable. Seuls les lecteurs qui arrivent au chapitre 2 le paient.
Et qui a demandé moins de mouvement ou moins de données ne le paie que s’il clique.

### Vérifié dans le navigateur, état par état

| Situation (390 px et 1440 px) | Résultat |
| --- | --- |
| Haut du chapitre à 55 % de la fenêtre | en pause, **0 requête vidéo** |
| Haut du chapitre à 45 % : il a franchi le milieu | lecture |
| 250 px plus bas | la vidéo reste en place, le texte monte, la lecture continue |
| Chapitre quitté | pause |
| Retour sur le chapitre | reprise |
| Remontée, haut du chapitre à 55 % | pause |
| Clic sur Pause, départ, retour | reste en pause |
| Mouvement réduit | aucune lecture, 0 o de vidéo ; lecture seulement au clic |
| Économie de données | aucune lecture, 0 o de vidéo ; lecture seulement au clic |
| JavaScript coupé | bouton caché, image fixe affichée, 0 o de vidéo, aucun débordement |

### Un piège de banc de test, encore

Les premiers essais de lecture ont tous échoué, et ce n’était pas la page. Le panneau de
prévisualisation était **masqué** : la page y est déclarée « hidden », Chrome n’y dessine rien
et refuse de lire une vidéo sans son, « pour économiser l’énergie ». Tous les états ci-dessus ont
été refaits dans Chrome sans interface, où la page est réellement visible.

Deuxième piège, déjà rencontré : changer la taille de fenêtre sur une page déjà chargée lui fait
relire ses `srcset`, et un bilan à 1440 px montrait l’image du chapitre 1 téléchargée deux fois.
Mesure refaite en partant d’une page vide : un seul téléchargement.

### Une observation, mise à jour

La première image du chapitre 3 partait dès le chargement, malgré `loading="lazy"`. Dans la mesure
actuelle, ce n’est plus le cas : à l’arrivée, aucune image du chapitre 3 n’est demandée.
C’est désormais **l’image fixe du chapitre 2** qui part au chargement (39 367 o à 390 px) : elle
commence 844 px sous le bas de l’écran (523 px en mouvement réduit, où le chapitre 1 est déjà fermé),
dans la marge où Chrome charge d’avance les images « lazy ». La vidéo, elle, ne part pas.
À vérifier sur l’adresse publique, avec une vraie connexion mobile.

## Chapitre 4 — la coupe

### Ce que j’ai mesuré

L’original de la puce sur Commons pèse **2 602 577 octets** (4290 × 2856). Je ne l’ai pas téléchargé :
j’ai pris le **rendu 1920 px que Commons génère lui-même**, 431 377 octets, et j’ai travaillé à partir de là.

### Les coupes décidées

1. **Servir la taille affichée** : trois largeurs en WebP q80 (800, 1200, 1600 px) et un `sizes="100vw"`.
2. **Ne rien charger avant d’y arriver** : `loading="lazy"`, comme les images du chapitre 3.
3. **N’ajouter aucun mouvement** : pas de transition, pas de fondu, pas de défilement lié, pas une ligne
   de JavaScript de plus. Ce n’est pas une coupe faite après coup, c’est la décision du récit —
   et c’est la seule qui ne coûte rien à personne.

### Le résultat

Mesuré dans Chrome, octets réellement reçus, en-têtes compris :

| | 390 px, DPR 2 | 1440 px, DPR 1 |
| --- | ---: | ---: |
| Rendu téléchargé (point de départ) | 431 377 o | 431 377 o |
| Fichier choisi par le navigateur | `ch4-puce-800.webp` | `ch4-puce-1600.webp` |
| **Image téléchargée** | **49 123 o** | **162 406 o** |
| Téléchargée avant d’arriver au chapitre | **0 o** | **0 o** |
| JavaScript ajouté par le chapitre | **0 o** | **0 o** |
| Éléments animés dans la section | **0** | **0** |

**Sur téléphone : −88,6 %** par rapport au rendu téléchargé, et **−98,1 %** par rapport à l’original de Commons.

### Ce que la page pèse maintenant à l'arrivée

*Chiffres de l'étape du chapitre 4. Le total à cinq chapitres est plus bas, dans « Chapitre 5 — la coupe ».*

Avec quatre chapitres en place : **134 317 octets** à 390 px et **254 916 octets** à 1440 px —
index.html, style.css, recit.js, l'image du chapitre 1 et l'image fixe du chapitre 2.
Ni la vidéo, ni les images du chapitre 3, ni la puce du chapitre 4 n'en font partie :
elles ne partent que lorsqu'on descend jusqu'à elles.

### Le chapitre devient collant, et ne coûte toujours rien

Ajouté après coup : la section mesure maintenant **200 % de la hauteur de fenêtre** et la scène s'y
colle (`position: sticky; top: 0`). But : qu'on reste un moment dans le chapitre de l'arrêt au lieu
de le traverser d'un coup de pouce.

Mesuré, en descendant par paliers de 130 px :

| | 1440 × 900 | 390 × 844 |
| --- | ---: | ---: |
| Hauteur de la section | 1 800 px (200 %) | 1 688 px (200 %) |
| Hauteur de la scène | 900 px | 844 px |
| Défilement pendant lequel le haut de la scène reste à **0 px** | **780 px** | **780 px** |
| Animations en cours pendant cette phase | **0** | **0** |
| JavaScript ajouté | **0 o** | **0 o** |
| Écouteurs de molette non passifs | **aucun** | **aucun** |
| Débordement horizontal | 0 px | 0 px |

La dernière ligne est la plus importante : **aucun écouteur n'intercepte le défilement.** Le lecteur
garde la main à chaque instant — il peut remonter, filer au clavier, ou sauter au chapitre 5 par le
menu. On reste dans le chapitre parce qu'il est long à traverser, pas parce qu'on y est retenu.

Contraste remesuré après le changement, sur les pixels réels : **9,19:1** à 1440 px et **9,58:1** à
390 px — identiques au relevé précédent, ce qui est attendu puisque la géométrie interne de la scène
n'a pas bougé.

### Le chapitre qui ne coûte pas de comportement

Les chapitres 1, 2 et 3 ajoutent chacun quelque chose au navigateur : une transition, une vidéo à
piloter, une bibliothèque à charger. Le chapitre 4 n’ajoute qu’un fichier image. C’est mesurable :
zéro élément animé dans la section, zéro octet de script, zéro requête tant qu’on n’y est pas.
Le chapitre qui raconte l’arrêt est aussi celui qui demande le moins à la machine.

## Chapitre 3 — la coupe

### Ce que j’ai mesuré

Le chapitre 3 charge GSAP et ScrollTrigger. Placés dans le `<head>` avec `defer`,
ils étaient téléchargés **à chaque ouverture de la page**, alors que le chapitre 3
se trouve trois écrans plus bas et que rien ne garantit qu’on y arrive.

| | Octets | Ko |
| --- | ---: | ---: |
| `gsap.min.js` | 72 735 | 71,0 |
| `ScrollTrigger.min.js` | 44 457 | 43,4 |
| **Ensemble** | **117 192** | **114,4** |

Chargement initial de la page à 390 px, avant coupe : **194 230 octets**.
La page pesait 68 725 octets avant ce chapitre. GSAP l’avait donc **presque triplée**,
et pour tout le monde.

### La coupe décidée

GSAP sort du `<head>`. Un `IntersectionObserver` surveille `#chapitre-3` avec
`rootMargin: 150%` : les deux fichiers sont créés et injectés quand le chapitre
arrive à une fenêtre et demie, puis la vitrine se monte.

### Le résultat

| | Avant | Après |
| --- | ---: | ---: |
| Chargement initial à 390 px | 194 230 o | **78 103 o** |
| Ressources demandées au départ | 6 | **4** |

**−116 127 octets, soit −59,8 % du chargement initial.**

Vérifié après coupe : en descendant vers le chapitre, `typeof gsap` passe à `object`
et la classe `js-vitrine` est bien posée. Le chapitre fonctionne, il ne se paie plus d’avance.

Page complète, une fois le chapitre 3 visité : 333 423 octets, dont 138 128 pour les
quatre images de la vitrine. C est le prix assumé d’une séquence de quatre objets.

### Deux effets de bord, tous les deux bons

**Qui ne descend pas ne paie pas.** Un lecteur qui lit la couverture et le chapitre 1
puis ferme la page télécharge 78 103 octets, pas 194 230.

**Le mouvement réduit ne télécharge jamais GSAP.** Le script sort avant même de poser
le guetteur quand `prefers-reduced-motion: reduce` est actif. Les 117 192 octets ne
sont pas seulement inutilisés : ils ne sont pas demandés. La planche-contact s’affiche,
et elle raconte la même chose.

## Chapitre 3 — l’à-coup du début et de la fin

Signalé au test : « au début et à la fin, ça saccade, c’est brusque ». Mesuré avant de corriger.

### Ce que j’ai mesuré

Chrome sans interface, défilement fluide à la molette depuis la couverture jusqu’après le chapitre 3,
**chaque image rendue filmée**. Un repère est posé en haut de la vitrine : entre deux images, il doit
soit suivre le défilement, soit rester figé. Tout autre mouvement est un à-coup.

| Avant correction | 1440 px | 390 px |
| --- | ---: | ---: |
| Début du chapitre calculé par ScrollTrigger | 2 834 px | 2 743 px |
| Début réel du chapitre | 2 558 px | 2 510 px |
| **Erreur** | **276 px** | **233 px** |
| **Pire à-coup, au début** | **138 px vers le bas, en une image** | **139 px** |

À la fin, la même erreur jouait dans l’autre sens : la vitrine restait épinglée 276 px de trop,
puis sautait d’un coup vers le haut.

### Trois causes, trouvées l’une après l’autre

1. **Des positions mesurées trop tôt.** GSAP se charge à l’approche du chapitre 3. À ce moment,
   le cadre du chapitre 1 est encore en train de se fermer (820 px au lieu de 558 à 1440 px) :
   ScrollTrigger mesure la page, puis la page raccourcit de 38 % de fenêtre.
2. **Le défilement doux du CSS.** Pour recalculer, ScrollTrigger ramène la page en haut et la replace.
   Avec `html { scroll-behavior: smooth }`, ce saut devient une animation et la mesure tombe à côté :
   début calculé à 1 086 px au lieu de 2 558.
3. **Un recalcul immédiat coupe le défilement en cours.** Trouvé en cherchant les deux autres, et déjà
   présent avant : un clic sur « 03 » depuis la couverture s’arrêtait à 963 px, en plein chapitre 1.

### Les corrections

- **Le cadre est collé par le CSS** (`position: sticky`), comme la vidéo du chapitre 2, et non plus épinglé
  par ScrollTrigger. Le navigateur le tient en place sans aucune position calculée d’avance : il ne peut plus sauter.
  GSAP ne fait plus que ce que le CSS ne fait pas encore partout, lier les fondus au défilement.
- **Un recalcul quand le chapitre 1 a fini de se fermer** (`transitionend`), avec `ScrollTrigger.refresh(true)` :
  il attend que le lecteur ait cessé de défiler.
- **Le défilement doux est suspendu pendant chaque recalcul**, puis rétabli. Les liens du menu le gardent.

### Le résultat

| Après correction | 1440 px | 390 px |
| --- | ---: | ---: |
| Erreur sur le début du chapitre | **0 px** | **0 px** |
| À-coups filmés | **0** | **0** |
| Objet visible à 5, 33, 67 et 97 % du chapitre | 1, 2, 3, 4 | 1, 2, 3, 4 |
| Cadre 200 px après la fin | se décolle (−200 px) | se décolle (−200 px) |
| Débordement horizontal | 0 | 0 |

Clic sur « 03 » depuis la couverture : le défilement va jusqu’au chapitre. Mouvement réduit et JavaScript
coupé : planche-contact identique, quatre objets de 523 px, GSAP jamais demandé.

Le coût est faible et mesuré : **+2 484 octets** au chargement (HTML +206, CSS +253, JavaScript +2 025,
surtout des commentaires qui expliquent les trois causes), soit 128 478 o à 390 px et 249 077 o à 1440 px.
GSAP et ScrollTrigger restent nécessaires pour les fondus, et toujours chargés à l’approche du chapitre.
La règle CSS qui rattrapait le débordement du « pin-spacer » de ScrollTrigger a disparu avec l’épinglage.

**Un reste, noté et non corrigé** : ce clic sur « 03 » arrive 320 px dans le chapitre, parce que le
chapitre 1 se ferme pendant le trajet et raccourcit la page. On y voit le titre et le premier objet.

### Un piège de banc de test, le troisième

Après correction, les mesures se contredisaient : justes quand ma sonde lisait `scrollY` pendant le
recalcul, fausses sans elle. En lisant cette valeur, la sonde forçait le navigateur à appliquer le
changement de style, et c’est exactement ce qui manquait à la page. Le script relit donc le style
lui-même avant que ScrollTrigger mesure. Toutes les mesures du tableau ont été refaites sans sonde.

## Chapitre 5 — la coupe

### Ce que j'ai mesuré

La photo de l'androïde est **l'image la plus lourde à comprimer du récit**. Rien à voir avec sa taille :
c'est son contenu. Des centaines de pièces de laiton, chacune avec son arête et son reflet, ne se
compriment pas comme un ciel ou une neige. Aux réglages des chapitres 1, 3 et 4 — WebP qualité 80,
image entière, 1280 px — elle pesait **410 114 octets**, soit **2,3 fois le budget** de 180 Ko.

### Les coupes décidées

1. **Deux recadrages, découpés à la source.** La photo est en portrait (1280 × 1854) et la scène est
   un bandeau : servir l'image entière revenait à envoyer des pixels que le navigateur allait jeter au
   rognage. Un recadrage large (1280 × 1050, la tête et le torse) pour les écrans posés, un recadrage
   vertical (800 × 1854, la figure entière) pour les téléphones.
2. **La qualité passe de 80 à 70**, pour ce chapitre seulement, parce que le recadrage seul ne
   suffisait pas :

   | Réglage, à 1280 px | Octets | Verdict |
   | --- | ---: | --- |
   | Image entière, q80 | 410 114 | **2,3 fois le budget** |
   | Recadrée, q80 | 216 254 | encore au-dessus |
   | Recadrée, q76 | 189 178 | dépasse de 4,7 Ko |
   | **Recadrée, q70** | **173 584** | **retenu** |

   Le SSIM par rapport au recadrage non compressé reste à **0,962** (contre 0,967 à q76) : la
   différence se lit sur un graphique, pas sur l'écran.
3. **Ne rien charger avant d'y arriver** : `loading="lazy"`, comme aux chapitres 3 et 4.
4. **Aucun JavaScript en plus.** Le mouvement réutilise l'observateur du chapitre 1, qui regarde déjà
   tous les `[data-mouvement]`. Le chapitre 5 est du CSS et une image.

### Le résultat

Mesuré dans Chrome, octets réellement reçus, en-têtes compris :

| | 390 px, DPR 2 | 1440 px, DPR 1 |
| --- | ---: | ---: |
| Rendu téléchargé (point de départ) | 644 705 o | 644 705 o |
| Fichier choisi par le navigateur | `ch5-automate-telephone-560.webp` | `ch5-automate-1280.webp` |
| **Image téléchargée** | **160 524 o** | **173 784 o** |
| Téléchargée avant d'arriver au chapitre | **0 o** | **0 o** |
| JavaScript ajouté par le chapitre | **0 o** | **0 o** |
| Propriétés animées dans la section | **1** (`height`) | **1** (`height`) |

**Sur téléphone : −75,1 %** par rapport au rendu téléchargé, et **−82,9 %** par rapport à l'original
de Commons (938 772 o). C'est le chapitre le plus lourd du récit en image fixe, et c'est assumé : il
est le dernier, personne ne le paie sans être allé jusqu'au bout.

### Le mouvement qui ne coûte pas de script

| | Mesure |
| --- | ---: |
| Cadre au départ (1440 × 900) | 558 px, soit 62 % |
| Cadre à l'arrivée | 900 px, soit 100 % |
| Transition | `height` / `0.9s` / `ease-out` |
| Boîte de l'image, pendant toute l'ouverture | **1440 × 900, inchangée** |
| Animations encore en cours après la fin | **0** |
| Débordement horizontal | **0 px** |
| Lignes de JavaScript ajoutées | **0** |

L'image ne change jamais d'échelle : c'est une décision, pas un hasard, et elle est mesurée dans
storyboard.md (sans elle, facteur **1,61** sur une fenêtre en portrait).

### Mouvement réduit et sans JavaScript

Vérifié dans les quatre combinaisons, en descendant tout le récit :

| | Cadre | Transition | Classe sur `<html>` | Animations |
| --- | ---: | ---: | --- | ---: |
| Mouvement réduit, 1440 px | 900 px = **100 %** | `0s` | aucune | 0 |
| Mouvement réduit, 390 px | 844 px = **100 %** | `0s` | aucune | 0 |
| Sans JavaScript, 1440 px | 900 px = **100 %** | `0s` | aucune | 0 |
| Sans JavaScript, 390 px | 844 px = **100 %** | `0s` | aucune | 0 |

C'est l'état d'arrivée, et c'est aussi l'état par défaut du CSS : le cadre ouvert. Le chapitre 5 est
donc le seul du récit dont l'état « sans mouvement » est le **plus** généreux — on voit toute l'image
tout de suite. Le mouvement ne retire rien à personne ; il ajoute seulement une réponse au chapitre 1.

### Ce que la page pèse maintenant à l'arrivée

Avec les cinq chapitres en place : **145 607 octets** à 390 px (DPR 2) et **266 206 octets** à
1440 px (DPR 1) — `index.html`, `style.css`, `recit.js`, l'image du chapitre 1, l'image fixe du
chapitre 2 et le favicon. Ni la vidéo, ni les images du chapitre 3, ni la puce du chapitre 4, ni
l'androïde du chapitre 5 n'en font partie : ils ne partent que lorsqu'on descend jusqu'à eux.

Le chapitre 5 a ajouté **4 884 octets** au chargement initial, la réécriture des textes et le voile
ancré sur le bas **2 054** de plus, et le bouton d'écoute plus le collage du chapitre 4 encore
**4 352** : au total du HTML, du CSS et 1,9 Ko de script. Aucune image, aucun son — le fichier audio
ne part qu'au clic.

## Chapitre 2 — le son ajouté

### Ce que j'ai mesuré

La source, sur Commons, pèse **1 336 394 octets** pour 46,45 s (Vorbis 44,1 kHz stéréo). Le chapitre
n'a besoin ni des 46 s, ni de la stéréo, ni de ce débit.

### Les coupes décidées

1. **26 s au lieu de 46.** Le niveau relevé par fenêtres de 2 s montre des fins de phrase vers 8, 26,
   34 et 40 s. La coupe tombe sur celle de 26 s, avec 1,5 s de fondu de sortie.
2. **Mono, 48 kbps en Opus.** La fiche Commons dit que l'original est un MP3 192 kbps transcodé en
   Vorbis : le fichier est déjà deux fois compressé, monter le débit ne rattraperait rien.
3. **Rien avant le clic.** `preload="none"`, et une lecture qui ne part qu'au clic.

### Le résultat

| | Mesure |
| --- | ---: |
| Source Commons | 1 336 394 o |
| Servi — Opus 48 kbps mono, 26 s | **224 651 o** |
| Repli AAC 56 kbps mono | 190 689 o |
| Réellement transféré au clic (Chrome, 390 px) | **224 902 o** |
| **Téléchargé tant qu'on ne clique pas** | **0 o** |
| Budget décidé d'avance | moins de 300 Ko |

**−83,2 %** par rapport à la source, et 80 Ko de marge sous le budget. Le poids de la page à
l'arrivée ne change pas : le son ne part jamais tout seul.

### Le parcours, vérifié état par état

À 390 × 844, en descendant jusqu'au chapitre 2 :

| Étape | Constaté |
| --- | --- |
| Avant le clic | 0 octet de son chargé, bouton « Écouter une boîte à musique », hauteur 44 px |
| Clic 1 | Lecture partie, fichier Opus choisi, étiquette passée à « Arrêter le son » |
| Clic 2 | Lecture arrêtée, position remise à 0, étiquette revenue |
| Fin des 26 s | S'arrête seul, position remise à 0 |
| Sans JavaScript | Bouton caché, **lecteur audio du navigateur affiché**, `preload="none"`, 0 octet chargé |
| Mouvement réduit | Bouton présent et fonctionnel — un son n'est pas un mouvement |
| Débordement horizontal | 0 px |

### Ce que le son a coûté au contraste : rien

Le bloc de texte du chapitre 2 a gagné un bouton et cinq lignes de crédit. Le voile de ce chapitre
est accroché au **début** du texte ; tout ce qui a été ajouté se trouve plus bas, là où le voile est
déjà à son maximum. Remesuré sur les pixels réels : **7,76:1** à 390 px comme à 1440 px, exactement
la valeur d'avant.

### Un chiffre que je ne publie pas

J'ai voulu chiffrer l'erreur de codage en soustrayant le fichier encodé de la référence. Le résultat
était le même à tous les débits — 7,3 dB à 40 kbps comme 7,5 dB à 64 kbps — ce qui est impossible.
La cause : Opus et AAC ajoutent un retard d'encodeur, mes deux signaux n'étaient donc pas alignés à
l'échantillon près, et je mesurais le décalage, pas la perte. **Une mesure fausse ne vaut pas mieux
que pas de mesure.** Le choix du débit repose sur l'origine du fichier, pas sur ce chiffre.

Même méthode pour le niveau : la normalisation de volume visée a été **abandonnée** parce que la
source culmine déjà à −0,02 dBTP et qu'elle faisait écrêter le résultat. Même à −1 dB, le fichier
Opus décodé culminait à **+0,23 dB** — au-dessus du plein niveau. Retenu : −3 dB, crête **−1,68 dB**,
aucun palier d'écrêtage. Le son est discret, mais c'est le sien.

## Mouvement réduit

Réglage : `prefers-reduced-motion: reduce`.

**Deux garde-fous, vérifiés séparément.**

1. **Le JavaScript n'arme rien.** `recit.js` teste le réglage dès le départ et
   sort avant de poser la classe `js-mouvement`. Sans cette classe, le CSS laisse le cadre
   à sa hauteur fermée. Le film du chapitre 2 est préparé juste avant cette sortie, mais sans
   lecture automatique : seul le bouton « Lire la vidéo » est proposé.
2. **Le CSS rattrape.** Même si la classe était posée, le bloc
   `@media (prefers-reduced-motion: reduce)` force `transition: none` et la hauteur d'arrivée de
   chaque cadre : `--hauteur-fermee` au chapitre 1, `--hauteur-ouverte` au chapitre 5, qui va dans
   l'autre sens. Règles relues dans le CSSOM du navigateur, pas seulement dans le fichier.

**État obtenu**, remesuré après le passage à la verticale et l'arrivée de la vidéo, à 390 × 844,
en descendant tout le récit : cadre du chapitre 1 à **523 px sur 844**, soit **62,0 %**, avant comme
après le défilement, transition `0s`. Vidéo du chapitre 2 en pause, rien de chargé, bouton
« Lire la vidéo ». GSAP n'est jamais demandé : le seul script téléchargé est `recit.js`.
Le récit ne perd rien : le mouvement ne portait aucune information que l'écran fixe ne porte déjà.

**Reste à faire par moi, sur la machine** : activer réellement le réglage
(Paramètres › Accessibilité › Effets visuels › Effets d'animation) et confirmer.
La vérification ci-dessus est structurelle et simulée, pas faite avec le réglage système actif.

## Ce que la page ne charge pas

Aucune police externe, aucun script tiers, aucun lecteur vidéo externe, aucun cookie.
Au départ, un seul JavaScript : `recit.js`, 10 342 octets transférés. GSAP et ScrollTrigger
(117 030 octets) ne partent qu'à l'approche du chapitre 3, et jamais en mouvement réduit.
Ce n'est pas une coupe — ce sont des choses qui n'ont jamais été ajoutées.

## Après le passage au thème clair

La refonte — fond blanc, images pleine largeur, texte posé dessus — a été mesurée à nouveau,
pour ne pas laisser le dossier sur des chiffres périmés.

| | Avant refonte | Après refonte |
| --- | ---: | ---: |
| Chargement initial à 390 px | 78 103 o | **85 755 o** |
| Requêtes au départ | 4 | 4 |

**+7 652 octets**, entièrement dus à la croissance de la feuille de style et du script.
Aucune image supplémentaire, aucune requête supplémentaire, GSAP toujours différé
jusqu'à l'approche du chapitre 3. Les trois coupes déjà faites tiennent.

### Un piège de banc de test, pas un défaut de la page

Une mesure intermédiaire a montré **deux** variantes de l'image du chapitre 1 téléchargées
(800 et 1600), soit 229 Ko. L'horodatage des requêtes a donné la réponse : à 11 ms le navigateur
prend le 800, à 19 ms il prend le 1600. Entre les deux, l'émulation de fenêtre à 390 px n'était pas
encore appliquée quand le préchargeur a lu le `srcset`. Rechargé à taille déjà fixée, comme sur
un vrai téléphone, seul le fichier de 800 px part.

À retenir : une mesure de poids ne vaut que si la fenêtre a la bonne taille **avant** le chargement.

## Après l'arrivée de la vidéo

Chargement initial, remesuré dans Chrome sans interface (octets reçus, en-têtes compris) :

| Ressource | 390 px, DPR 2 | 1440 px, DPR 1 |
| --- | ---: | ---: |
| `index.html` | 11 887 o | 11 887 o |
| `style.css` | 13 254 o | 13 254 o |
| `recit.js` | 8 317 o | 8 317 o |
| Image du chapitre 1 | 53 169 o | 148 846 o |
| Image fixe du chapitre 2 | 39 367 o | 64 289 o |
| Vidéo du chapitre 2 | **0 o** | **0 o** |
| **Total** | **125 994 o** | **246 593 o** |

Le dernier relevé à 390 px donnait 85 755 o, mesuré avec une autre méthode (l'API Performance).
L'écart vient presque entièrement de l'image fixe du chapitre 2, que Chrome charge d'avance
(voir « Une observation, mise à jour »). La vidéo, elle, ne pèse rien tant qu'on n'est pas arrivé au chapitre.

## Contraste — thème clair, texte sur les images

Le texte est posé sur les photos. Le contraste ne peut donc pas être supposé : il est **calculé**,
en composant les pixels réels de chaque image avec l’opacité exacte du voile à cette hauteur,
puis en comparant à la couleur du texte. Le pire pixel de chaque scène est retenu.

Seuils WCAG : **4,5:1** pour du texte normal (AA), **7:1** pour AAA.

### Sur le fond de page

| | Rapport |
| --- | ---: |
| Titres et texte courant | **16,23:1** |
| Texte secondaire | **5,93:1** |
| Chapitre 4, inversé | **16,36:1** |
| Chapitre 4, secondaire | **7,10:1** |

### Sur les photos — pire cas mesuré, dans les deux mises en page

Depuis que le texte des chapitres 1 et 3 passe sur le côté, chaque photo est mesurée **deux fois** :
à 1440 px, où le texte occupe une colonne à gauche sous un voile horizontal, et à 390 px,
où il reste en bande en bas sous un voile vertical. Le chiffre retenu est le pire de tous les textes
de la scène, c'est-à-dire le texte gris sur le pire pixel de la photo.

| Scène | Colonne à gauche, 1440 px | Bande en bas, 390 px |
| --- | ---: | ---: |
| Chapitre 1 — le village sous la neige | **7,98:1** | **8,09:1** |
| Chapitre 3 — cylindre | 8,12:1 | 8,29:1 |
| Chapitre 3 — disque | 8,05:1 | 8,27:1 |
| Chapitre 3 — pellicule | 8,36:1 | 8,20:1 |
| Chapitre 3 — chariot | 8,59:1 | 8,42:1 |
| Chapitre 4 — la puce, en négatif | **9,19:1** | **9,58:1** |
| Chapitre 5 — l’androïde, cadre ouvert **ou** fermé | **7,83:1** | **7,91:1** |

À 1440 px, le titre du chapitre 3 est compté dans ces chiffres : il est posé sur la photo, en haut de
la colonne, et tient entre **14,32:1** et **15,28:1** selon l'objet. À 390 px il n'y est pas : il reste
sur le fond de page, au-dessus du cadre.

Le chapitre 4 est **inversé** : texte clair sur voile sombre. Le pire pixel n'y est donc plus le noir
mais le **blanc**, et c'est lui que la mesure retient. Le titre et les trois lignes tiennent entre
**14,47:1** et **15,99:1** ; le chiffre du tableau, 9,20:1, est celui du gris clair du numéro et du crédit.

Le chapitre 5 est le seul dont le **cadre change de hauteur** pendant la lecture. Il est donc mesuré
deux fois de plus : cadre ouvert, et cadre ramené à 62 % avec la section entière à l'écran, c'est-à-dire
le pire moment de l'ouverture. Les deux donnent le même chiffre — **7,83:1** en colonne, **7,91:1** en
bande —, ce qui est la preuve que le voile suit bien le texte et non la hauteur de la scène.
Son titre et ses trois lignes tiennent entre **14,22:1** et **14,84:1**.

Les textes noirs — titres, lignes, noms d'objets — ne descendent jamais en dessous de **13,79:1**.
**Tout passe AA et tout passe AAA**, sur les photos, aux deux largeurs. Le seul texte du récit qui
reste sous 7:1 est le numéro « 03 » à 390 px, et il n'est pas sur une photo : il est sur le fond de
page clair, au-dessus du cadre, à **5,93:1** — la valeur du texte secondaire déjà mesurée plus haut.

### Remesuré après la réécriture des textes

Les titres et les lignes ont été réécrits pour que le récit se lise comme une histoire, pas comme une
suite de formules. Des textes plus longs, ce sont des bandes plus hautes, donc des voiles à refaire :
tous les chiffres du tableau ci-dessus datent d'**après** cette réécriture. Ils sont dans l'ensemble
meilleurs qu'avant, parce que le voile suit désormais le texte au lieu de suivre la hauteur de la
scène (chapitre 1 : 6,49 → **8,09:1** à 390 px ; chapitre 4 : 8,92 → **9,58:1**).

La méthode a aussi changé entre-temps. Le premier relevé composait les pixels de l'image avec
l'opacité calculée du voile ; celui-ci **photographie la page** avec le texte masqué et relit les
pixels réellement peints, voile compris. Les deux méthodes ont été comparées sur les chapitres 1 et 4
avant la réécriture : écart maximal **0,18**. C'est la seconde qui est utilisée maintenant, parce
qu'elle ne suppose rien du dégradé.

### Sur la vidéo du chapitre 2 — pire cas calculé

Une vidéo ne se vérifie pas pixel par pixel : son image change 25 fois par seconde. Le calcul suppose
donc le pire, un pixel **noir** sous chaque texte, composé avec l’opacité exacte du voile au
point le plus haut de ce texte, là où le voile est le plus faible. Aucune image du film ne peut faire moins bien.

| Texte | 390 px | 1440 px |
| --- | ---: | ---: |
| Numéro « 02 », gris | **7,46:1** | **7,46:1** |
| Bouton Pause | 16,01:1 | 16,01:1 |
| Titre | 13,75:1 | 13,80:1 |
| Première ligne | 13,99:1 | 14,08:1 |
| Crédit et ses liens, gris | 7,95:1 | 7,97:1 |

**Tout passe AAA, même dans le pire cas.** Contrôle complémentaire : au milieu du titre,
l’élément au premier plan est bien le titre, pas la vidéo.

### Défauts trouvés par la mesure

**Le voile ne couvrait pas le haut de la bande de texte.** Première mesure : la bande commence à
44 % de la hauteur de la scène, où le voile était encore à **0**. Contraste du texte noir sur un
pixel de forêt : **1,05:1**. Le numéro « 01 » était invisible. Les paliers du dégradé ont été
recalés sur la bande de texte réelle.

**Le titre du chapitre 3 était posé sur l’image.** Ma première vérification ne portait que sur la
bande du bas et l’avait manqué. À 15 % de hauteur, le voile est à 0,20 : le titre disparaissait.
Corrigé en le sortant de l’image plutôt qu’en épaississant le voile — épaissir aurait masqué la
photo pour sauver le texte, ce qui revient à perdre les deux.
*Suite* : depuis que le voile est passé sur le côté, la colonne de gauche est couverte sur toute sa
hauteur. Le titre est donc revenu sur l’image, mesuré cette fois : **14,32 à 15,28:1** selon l’objet,
et le numéro « 03 », passé au gris foncé, **7,98 à 8,40:1** (il tombait à 5,32:1 en gris de page).

**Le gris du texte secondaire a été assombri** de `#565e68` à `#3d444d` lorsqu’il est posé sur
une photo : le gris de page ne tenait que 4,41:1 une fois composé, sous le seuil AA.

**Le numéro du chapitre était trop clair sur la photo.** En passant le texte du chapitre 1 sur le côté,
la mesure a été refaite élément par élément, et pas seulement par couleur : le numéro « 01 », en gris de
page, tombait à **4,33:1** sur la neige à 390 px — sous le seuil AA. Il prend maintenant le gris foncé
déjà utilisé pour les crédits posés sur une photo : **6,49:1** à 390 px et **7,99:1** en colonne.

**Le texte du chapitre 5 était invisible tant que son cadre n'était pas ouvert.** Le défaut le plus
net trouvé jusqu'ici, et invisible à l'œil parce qu'il ne dure que les 900 ms de l'ouverture — ou
indéfiniment si l'on remonte. Sur téléphone, la bande de texte du chapitre 5 fait **414 px** (trois
lignes et un crédit de trois phrases, contre 287 px au chapitre 1). Tant que le cadre est encore à
62 % — 523 px —, cette bande commence à **20,9 %** de la scène, dans la zone où le voile en
pourcentages vaut encore **0**. Mesure sur les pixels réels : le numéro « 05 » à **1:1** sur un pixel
de laiton sombre (69, 67, 65), le titre à **1:1** (46, 11, 7), la première ligne à **3,28:1**.
Trois textes sous le seuil AA, dont deux littéralement illisibles.

Corrigé en calant le voile de ce chapitre sur le **bas** de la scène, en rem, et non sur sa hauteur en
pourcentages : il couvre alors la même hauteur de texte quelle que soit la hauteur du cadre. Remesuré :
**7,91:1**, identique cadre ouvert et cadre fermé. La règle qui en sort vaut pour la suite —
*quand le texte est collé en bas, le voile doit l'être aussi* ; un voile en pourcentages ne tient que
si la scène ne change pas de hauteur.

Contrôle de non-régression après la correction, sur les pixels réels : chapitre 1 à **7,96:1** (1440)
et **6,53:1** (390), chapitre 4 à **9,19:1** et **9,10:1** — les valeurs déjà publiées plus haut, à
moins de 0,2 près. La correction est bien restée dans le chapitre 5.

**La réécriture du récit a cassé le voile de toutes les scènes, d'un coup.** Le même défaut que
ci-dessus, mais généralisé, et c'est celui qui a fait passer la correction du chapitre 5 en règle
commune. Les nouvelles lignes, plus longues, ont fait grandir chaque bande de texte : à 390 px, le
chapitre 1 est tombé à **1,9:1** (numéro invisible), le chapitre 4 à 6,64:1 et le chapitre 5 à
5,66:1 — contre 6,49, 8,92 et 7,91 juste avant.

Corrigé en deux temps, mesuré entre les deux.
**D'abord les mots** : les lignes de la première réécriture étaient deux fois trop longues. Resserrées,
les chapitres 4 et 5 sont remontés seuls à 9,09 et 7,90:1. Lisible ne veut pas dire bavard.
**Ensuite le voile** : ancré sur le bas pour **toutes** les scènes du téléphone, chacune déclarant la
hauteur de sa bande (chapitre 1 : 340 px ; chapitre 4 : 427 px ; chapitre 5 : 420 px ; légendes du
chapitre 3 : 124 à 172 px). Le chapitre 1 est passé de 1,9 à **8,09:1**.

Un troisième effet, visuel celui-là, n'apparaissait sur aucun chiffre de contraste : à 62 % de la
fenêtre, la bande de texte et son dégradé occupaient 484 px des 523 px du cadre. Le contraste était
excellent et **on ne voyait plus le village**. Le cadre fermé passe donc à **78 %** sur téléphone,
pour les deux chapitres qui bougent : 174 px de photo lisible au lieu de 39. Un bon chiffre de
contraste ne prouve pas qu'on voit encore l'image ; il a fallu regarder la capture.

**La barre de navigation passait sous le seuil au-dessus de la vidéo.** Son fond était opaque à 0,86 :
assez sur les photos claires, pas sur la vidéo sombre, qui défile longtemps sous elle. Pire cas calculé
pour les liens gris « 01 », « 03 », « 04 », « 05 » : **4,31:1**. Opacité portée à 0,92 : **4,96:1**,
remesuré. Le lien du chapitre en cours et « Sainte-Croix » passent à 13,59:1.

## Test à 390 pixels

À remplir après le test avec une vraie personne (étape 7).

La personne a raconté `/* à vous */`. Le chapitre mal compris était `/* à vous */`.
J'ai corrigé `/* à vous */`.
