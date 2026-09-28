/* =========================================================
   Récit — Sainte-Croix
   Chargé sans « defer » : la classe est posée avant le premier
   rendu, donc le cadre ne clignote pas. Si ce fichier ne se charge
   pas, la classe n'existe pas et la page reste dans son état
   « sans mouvement ». Aucun état cassé n'est possible.
   ========================================================= */

(function () {
  'use strict';

  var siObservateur = 'IntersectionObserver' in window;

  var mouvementReduit = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------- 1. Repère de lecture --------
     Ce n'est pas un effet : c'est de l'orientation. Il fonctionne
     donc aussi quand les mouvements sont réduits. */

  if (siObservateur) {
    document.addEventListener('DOMContentLoaded', function () {

      var liens = {};
      Array.prototype.forEach.call(
        document.querySelectorAll('.nav__liste a[href^="#"]'),
        function (a) { liens[a.getAttribute('href').slice(1)] = a; }
      );

      var repere = new IntersectionObserver(function (entrees) {
        entrees.forEach(function (e) {
          var lien = liens[e.target.id];
          if (!lien) return;
          if (e.isIntersecting) lien.setAttribute('aria-current', 'true');
          else lien.removeAttribute('aria-current');
        });
      }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

      Array.prototype.forEach.call(
        document.querySelectorAll('.chapitre'),
        function (s) { repere.observe(s); }
      );
    });
  }

  /* -------- 2. Chapitre 2 : le film --------
     Storyboard : la boîte joue quand on la regarde et s'arrête quand on la quitte.
     Rien n'est téléchargé d'avance : preload="none", et la vidéo n'est demandée
     qu'à la première lecture.

     Avec « mouvement réduit » ou « économie de données », rien ne part tout seul :
     l'image fixe reste, et le bouton propose la vidéo. C'est pour cela que ce bloc
     est placé AVANT la sortie du mouvement réduit : le bouton existe pour tout le monde.
     Sans JavaScript, le bouton reste caché et l'image fixe raconte le chapitre. */

  var economie = !!(navigator.connection && navigator.connection.saveData);

  document.addEventListener('DOMContentLoaded', function () {

    var scene  = document.querySelector('[data-film]');
    var film   = scene && scene.querySelector('video');
    var bouton = document.querySelector('[data-film-bouton]');
    if (!film || !bouton || !film.play) return;

    // Sans lecture automatique, c'est au lecteur de lancer la vidéo.
    var pauseVoulue = mouvementReduit || economie || !siObservateur;

    function etiquette() {
      bouton.textContent = film.paused ? 'Lire la vidéo' : 'Pause';
    }

    function lire() {
      var promesse = film.play();
      // Lecture refusée (mode économie d'énergie d'un iPhone, par exemple) :
      // l'image fixe reste et le bouton dit « Lire la vidéo ».
      if (promesse && promesse.catch) promesse.catch(etiquette);
    }

    film.addEventListener('playing', function () {
      scene.classList.add('est-lu');
      etiquette();
    });
    film.addEventListener('pause', etiquette);

    // WCAG 2.2.2 : ce qui bouge plus de 5 secondes doit pouvoir être arrêté.
    bouton.addEventListener('click', function () {
      pauseVoulue = !film.paused;
      if (pauseVoulue) film.pause(); else lire();
    });

    etiquette();
    bouton.hidden = false;

    if (!siObservateur) return;

    new IntersectionObserver(function (entrees) {
      if (entrees[0].isIntersecting) {
        if (!pauseVoulue) lire();            // on revient : la boîte reprend, sauf si on l'a arrêtée
      } else if (!film.paused) {
        film.pause();                        // on la quitte : elle s'arrête, rien ne tourne hors de vue
      }
    }, {
      // Même déclencheur que le chapitre 1 : le haut de la section franchit le milieu de la fenêtre.
      rootMargin: '0px 0px -50% 0px',
      threshold: 0
    }).observe(scene.closest('.chapitre') || scene);
  });

  /* -------- 2 bis. Écouter une boîte à musique --------
     Un moment à part, pas la bande son de la vidéo. Le son ne part JAMAIS seul :
     les navigateurs bloquent le son automatique, le storyboard le refuse, et
     WCAG 1.4.2 demande de pouvoir l'arrêter. Un clic pour lancer, un clic pour
     arrêter — et il s'arrête aussi tout seul au bout de 26 s.

     Ce bloc est, lui aussi, placé AVANT la sortie du mouvement réduit : un son
     n'est pas un mouvement, et rien ne justifie de le refuser à quelqu'un qui
     a demandé moins d'animation.

     Sans JavaScript, le lecteur audio natif reste affiché et fait le travail. */

  document.addEventListener('DOMContentLoaded', function () {

    var bouton = document.querySelector('[data-ecoute-bouton]');
    var son    = document.querySelector('[data-ecoute-audio]');
    if (!bouton || !son || !son.play) return;

    // Le bouton remplace le lecteur natif seulement si on peut vraiment le piloter.
    document.documentElement.classList.add('js-ecoute');
    son.removeAttribute('controls');
    bouton.hidden = false;

    function etiquette() {
      bouton.textContent = son.paused ? 'Écouter une boîte à musique' : 'Arrêter le son';
    }

    bouton.addEventListener('click', function () {
      if (!son.paused) { son.pause(); son.currentTime = 0; return; }
      var promesse = son.play();
      // Lecture refusée : on rend la main au lecteur natif plutôt que de laisser
      // un bouton qui ne fait rien.
      if (promesse && promesse.catch) promesse.catch(function () {
        document.documentElement.classList.remove('js-ecoute');
        son.setAttribute('controls', '');
        bouton.hidden = true;
      });
    });

    son.addEventListener('play', etiquette);
    son.addEventListener('pause', etiquette);
    son.addEventListener('ended', function () { son.currentTime = 0; etiquette(); });

    etiquette();
  });

  /* -------- 3. Les cadres qui bougent : chapitres 1 et 5 --------
     Storyboard : au chapitre 1 le cadre se ferme par le bas, de 100 % à 62 %
     de la fenêtre ; au chapitre 5 le même cadre se rouvre, de 62 % à 100 %.
     Un seul observateur pour les deux : il pose « est-actif » sur tout
     [data-mouvement], et c est le CSS qui dit dans quel sens la hauteur va.
     Le chapitre 5 n a donc coûté aucune ligne de script. */

  if (mouvementReduit || !siObservateur) return;

  document.documentElement.classList.add('js-mouvement');

  document.addEventListener('DOMContentLoaded', function () {

    var cadres = document.querySelectorAll('[data-mouvement]');
    if (!cadres.length) return;

    var observateur = new IntersectionObserver(function (entrees, obs) {
      entrees.forEach(function (entree) {
        if (!entree.isIntersecting) return;

        var cadre = entree.target.querySelector('[data-mouvement]');
        if (cadre) {
          cadre.classList.add('est-actif');
          // La fermeture raccourcit la page de 38 % de fenêtre. Si la vitrine du
          // chapitre 3 est déjà montée, ses positions de défilement doivent se recaler.
          // refresh(true) : attendre que le lecteur ait fini de défiler.
          cadre.addEventListener('transitionend', function () {
            if (window.ScrollTrigger) ScrollTrigger.refresh(true);
          }, { once: true });
        }

        obs.unobserve(entree.target);   // une seule fois : ni l’hiver ne se rouvre,
                                        // ni l’atelier ne se referme.
      });
    }, {
      // Déclenchement quand le haut de la section franchit le milieu
      // de la fenêtre, quelle que soit la hauteur de la section.
      rootMargin: '0px 0px -50% 0px',
      threshold: 0
    });

    Array.prototype.forEach.call(cadres, function (cadre) {
      observateur.observe(cadre.closest('.chapitre') || cadre);
    });
  });

  /* -------- 4. Chapitre 3 : la vitrine --------
     Quatre objets se remplacent dans un cadre immobile, liés au défilement.
     Lier les fondus au scroll et ordonner quatre étapes : c’est ce que le CSS
     ne fait pas encore partout, et la seule raison de charger GSAP.
     Le cadre, lui, n’est PAS épinglé par GSAP : le CSS le garde en place
     (position: sticky). L’épinglage de ScrollTrigger mesurait ses positions
     trop tôt et faisait sauter la vitrine au début et à la fin du chapitre.

     GSAP n’est PAS dans le <head>. Il pèse 117 192 octets et ne sert qu’à ce
     chapitre, situé trois écrans plus bas : le charger au départ le ferait
     payer à tout le monde, y compris à qui ne descend jamais jusque-là.
     Il est donc téléchargé quand le chapitre approche.

     Si le téléchargement échoue, la classe n’est jamais posée et la
     planche-contact reste affichée : le chapitre se lit quand même. */

  document.addEventListener("DOMContentLoaded", function () {

    var section = document.getElementById("chapitre-3");
    if (!section || !document.querySelector("[data-vitrine]")) return;

    var demande = false;

    var guetteur = new IntersectionObserver(function (entrees, obs) {
      if (!entrees[0].isIntersecting || demande) return;
      demande = true;
      obs.disconnect();

      charger("js/vendor/gsap.min.js")
        .then(function () { return charger("js/vendor/ScrollTrigger.min.js"); })
        .then(monterVitrine)
        .catch(function () { /* planche-contact conservée */ });

    }, { rootMargin: "150% 0px 150% 0px", threshold: 0 });

    guetteur.observe(section);
  });

  function charger(src) {
    return new Promise(function (ok, non) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = ok;
      s.onerror = function () { non(new Error(src)); };
      document.head.appendChild(s);
    });
  }

  function monterVitrine() {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Le défilement doux du CSS (html { scroll-behavior: smooth }) fausse les
    // recalculs de ScrollTrigger. Mesuré : avec « smooth », refresh() plaçait le
    // début du chapitre 3 à 1 086 px au lieu de 2 558. Il est donc suspendu le
    // temps de chaque recalcul ; les liens du menu gardent leur défilement doux.
    // La relecture du style n'est pas décorative : sans elle, le navigateur applique
    // encore l'ancien « smooth » au saut que fait ScrollTrigger (mesuré aussi).
    var racine = document.documentElement;
    ScrollTrigger.addEventListener("refreshInit", function () {
      racine.style.scrollBehavior = "auto";
      void getComputedStyle(racine).scrollBehavior;
    });
    ScrollTrigger.addEventListener("refresh", function () { racine.style.scrollBehavior = ""; });

    racine.classList.add("js-vitrine");

    // La légende de chaque objet se cale juste sous le titre du chapitre. La hauteur
    // du titre dépend de la largeur (il passe de deux à trois lignes) : on la mesure,
    // à l'arrivée puis à chaque recalcul — ScrollTrigger en déclenche un au redimensionnement.
    var cadreVitrine = document.querySelector(".vitrine__cadre");
    var titreVitrine = cadreVitrine && cadreVitrine.querySelector(".chapitre__texte");
    if (titreVitrine) {
      var mesurerTitre = function () {
        cadreVitrine.style.setProperty("--haut-titre", titreVitrine.offsetHeight + "px");
      };
      mesurerTitre();
      ScrollTrigger.addEventListener("refreshInit", mesurerTitre);
    }

    var objets = gsap.utils.toArray("[data-objet]");
    gsap.set(objets, { autoAlpha: 0 });
    gsap.set(objets[0], { autoAlpha: 1 });

    var section = document.getElementById("chapitre-3");
    var cadre = section.querySelector(".vitrine__cadre");

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        // Exactement la distance pendant laquelle le CSS garde le cadre collé :
        // la hauteur de la section moins celle du cadre, soit trois hauteurs de fenêtre.
        end: function () { return "+=" + (section.offsetHeight - cadre.offsetHeight); },
        invalidateOnRefresh: true,
        scrub: 0.5         // le lecteur avance et recule ; rien ne se joue tout seul
      }
    });

    // Le fondu occupe le tiers central de chaque unité :
    // un objet reste net et seul le reste du temps.
    for (var i = 1; i < objets.length; i++) {
      var t = (i - 1) + 0.33;
      tl.to(objets[i - 1], { autoAlpha: 0, duration: 0.34, ease: "none" }, t);
      tl.to(objets[i],     { autoAlpha: 1, duration: 0.34, ease: "none" }, t);
    }

    tl.set({}, {}, 3);   // le dernier objet tient jusqu’à ce que le cadre se décolle

    // true : si le lecteur défile encore, attendre qu'il s'arrête. Un recalcul
    // immédiat ramène la page en haut puis la replace, et coupe net un défilement
    // en cours — mesuré : un clic sur « 03 » depuis la couverture s'arrêtait à 963 px.
    ScrollTrigger.refresh(true);
  }
})();
