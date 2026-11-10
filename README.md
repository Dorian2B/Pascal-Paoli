# ⚔ Pascal Paoli

### Héros national corse · Chef d'État de la République corse (1725–1807)

[![Language](https://img.shields.io/badge/language-HTML+CSS+JS-c8a24a)](#)
[![License](https://img.shields.io/badge/license-CC%20BY%20NC%20SA-blue)](#)
[![Status](https://img.shields.io/badge/status-projet-%238a2b1f)](#)

> Ce site présente, en plusieurs pages complémentaires, la vie et l'œuvre de **Pascal Paoli**, figure majeure de l'histoire de Corse au XVIIIᵉ siècle. Visionnaire politique, il porta haut la cause de l'autonomie corse et inventa l'une des premières constitutions démocratiques d'Europe.

---

## 📑 Sommaire

- [📖 Contenu du site](#-contenu-du-site)
- [🎹 Fonctionnalités](#-fonctionnalit%C3%A9s)
- [🎨 Caractéristiques techniques](#-caract%C3%A9ristiques-techniques)
- [📁 Structure des fichiers](#-structure-des-fichiers)
- [🚀 Lancer le site localement](#-lancer-le-site-localement)
- [🛠 Développer](#-d%C3%A9velopper)
- [📝 À propos & sources](#-à-propos--sources)
- [🤗 Contribuer](#-contribuer)

---

## 📖 Contenu du site

Le site est structuré en six pages qui explochent chacune un aspect de la vie et de l'œuvre de Paoli :

| Page | Contenu |
|------|---------|
| [Accueil](index.html) | Présentation générale et aperçu de la vie de Paoli |
| [Biographie](biographie.html) | De sa naissance à Morosaglia à son exil et sa mort à Toulon |
| [La République](republique.html) | Les institutions, la constitution de 1755 et l'État corse |
| [Carrière](carriere.html) | Généraux, alliances, ruptures et exils |
| [Héritage](heritage.html) | La postérité de Paoli, père fondateur de la Corse moderne |
| [Chronologie](chronologie.html) | Les grandes dates de sa vie, sous forme de timeline |

---

## 🎹 Fonctionnalités

- **Navigation fluide** entre les pages via une barre de menu sticky.
- **Menu hamburger** et navigation adaptée aux mobiles.
- **Animations d'apparition** au défilement (grâce à `IntersectionObserver`).
- **Timeline interactive** des grandes dates de la vie de Paoli.
- **Design responsive** : s'adapte aux ordinateurs, tablettes et mobiles.

---

## 🎨 Caractéristiques techniques

- **Multi-fichiers** : navigation fluide entre les pages via une barre de menu.
- **Design responsive** : le site s'adapte aux ordinateurs, tablettes et mobiles.
- **Animations subtiles** : apparition des éléments au défilement, menu hamburger sur mobile.
- **Thème inspiré du drapeau corse** (la « Mona di Picella ») : noir, blanc et or.
- **Aucune dépendance externe** : HTML, CSS et JavaScript purs, aucun framework nécessaire.

---

## 📁 Structure des fichiers

```
Pascal-Paoli/
├── README.md           # Ce document
├── index.html          # Page d'accueil
├── biographie.html     # Biographie complète
├── republique.html     # La République corse
├── carriere.html       # La carrière de Paoli
├── heritage.html       # L'héritage de Paoli
├── chronologie.html    # Chronologie / timeline
├── css/
│   └── style.css       # Feuille de style complète
└── js/
    └── script.js       # Scripts interactifs (menu, animations)
```

---

## 🚀 Lancer le site localement

Rien de plus simple : ouvrez simplement le fichier `index.html` dans votre navigateur.

Pour une expérience optimale (et éviter d'éventuelles restrictions locales), vous pouvez lancer un serveur local :

```bash
# Option 1 : Python 3
python -m http.server 8000

# Option 2 : Node.js (si disponible)
npx serve .
```

Puis ouvrez <http://localhost:8000> dans votre navigateur.

Aucune installation requise, le site est entièrement autonome.

---

## 🛠 Développer

Le项目 repose sur des technologies web standards :

| Technologie | Usage |
|-------------|-------|
| **HTML5** | Structure et contenu des pages |
| **CSS3** | Thème, responsive design, animations |
| **JavaScript (vanilla)** | Menu mobile, animation d'apparition, navigation active |

Pour modifier le thème ou ajouter une page, commencez par explorer `css/style.css` et `js/script.js`.

---

## 📝 À propos & sources

Ce projet a une vocation **historique et pédagogique**. Son contenu s'appuie sur
l'historiographie connue de la vie de Pascal Paoli. Certaines citations sont attribuées
de façon traditionnelle ; il peut exister des variations selon les sources.

> « Instruisez-vous », disait Paoli, convaincu qu'un peuple libre ne pouvait vivre que
> par les lois et l'instruction.

**Sources recommandées pour approfondir :**

- [Pascal Paoli — Wikipédia](https://fr.wikipedia.org/wiki/Pascal_Paoli)
- [Musée de la Corse (Corte)](https://www.museedlacorse.fr/)
- [Archives de la République corse](https://www.archivedelarepubliquecorse.fr/)

---

## 🤗 Contribuer

Vous remarquez une erreur, une coquille ou vous souhaitez ajouter du contenu ? Les contributions sont les bienvenues !

1. Forkez le dépôt
2. Créez une branche (`git checkout -b feature/ma-fonctionnalité`)
3. Commitez vos changements (`git commit -m 'Ajout de...'`)
4. Poussez vers la branche (`git push origin feature/ma-fonctionnalité`)
5. Ouvrez une Pull Request

---

*Site créé à des fins éducatives — 2026 · Dorian2B*
