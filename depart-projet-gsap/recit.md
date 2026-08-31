# L’image se déroule

Ce que le défilement raconte (une phrase) : on s’approche de la berge, l’eau
sort peu à peu de la pénombre, et une fois qu’on a vu le lieu on comprend qu’il
est devenu impraticable.

Ce que fait le `scale` / l’opacité de l’image : au départ l’image est trop
grande (`scale: 1.2`) et à peine visible (`opacity: 0.35`) — on est trop près,
on ne distingue rien. En descendant elle revient à sa taille réelle et à sa
pleine opacité : c’est le moment où on prend du recul et où on voit vraiment la
crue.

Ce que dit la légende, et pourquoi elle arrive **après** l’image : elle dit
« La crue a pris le chemin. On ne passe plus. » Elle arrive après parce qu’elle
n’est pas une description, c’est une conséquence : tant qu’on n’a pas vu l’eau
monter jusqu’aux troncs, la phrase ne veut rien dire. L’image donne le fait, la
légende donne ce qu’il implique.

`scrub` choisi : 0.5 — l’animation suit le scroll avec un petit retard, ce qui
donne l’impression que l’image « pèse » et qu’on avance dedans plutôt que de la
faire défiler. À 0.3 c’était trop rapide, à 1 le décalage devenait gênant et lent.

Sans mouvement, on comprend encore : en `prefers-reduced-motion: reduce` il n’y
a pas d’épingle et rien n’est animé — l’image et la légende sont visibles tout
de suite. On perd l’ordre (voir puis lire), mais pas l’information : le `alt`
décrit l’eau qui monte jusqu’aux troncs et la légende dit que le chemin est
coupé.
