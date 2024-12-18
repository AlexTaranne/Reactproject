import { useState } from "react";
import Card from "./Card";

const CardsList = [
  // Langages
  {
    id: 1,
    categorie: "language",
    nom: "JavaScript",
    description:
      "Langage de programmation pour le web, côté client et serveur.",
    photo:
      "https://img.freepik.com/vecteurs-libre/programmeurs-utilisant-langage-programmation-javascript-ordinateur-personnes-minuscules-langage-javascript-moteur-javascript-concept-developpement-web-js_335657-2412.jpg?t=st=1734433545~exp=1734437145~hmac=0c35182c1309fd5a01a15346868f8fc8436460bed60b402c6de39fbfc6ef230c&w=740",
    favori: true,
  },
  {
    id: 2,
    categorie: "language",
    nom: "Python",
    description:
      "Langage polyvalent, souvent utilisé en data science et backend.",
    photo:
      "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
    favori: false,
  },
  {
    id: 3,
    categorie: "language",
    nom: "Ruby",
    description: "Langage dynamique connu pour sa simplicité et Rails.",
    photo:
      "https://i0.wp.com/blog.lewagon.com/wp-content/uploads/2023/04/yagyzb1ak40mrqoj1sr6dc2iaen0-2.jpeg?fit=800%2C447&ssl=1",
    favori: false,
  },
  {
    id: 4,
    categorie: "language",
    nom: "PHP",
    description: "Langage serveur utilisé pour créer des sites dynamiques.",
    photo:
      "https://kinsta.com/fr/wp-content/uploads/sites/4/2023/09/PHP_Feature-Image-1024x536.jpg",
    favori: false,
  },
  // Frameworks
  {
    id: 5,
    categorie: "framework",
    nom: "Next JS",
    description: "Framework basé sur React pour le rendu côté serveur.",
    photo:
      "https://miro.medium.com/v2/resize:fit:1000/1*PJ87QhnDB4G5r6GynPSEVw.png",
    favori: true,
  },
  {
    id: 6,
    categorie: "framework",
    nom: "Angular",
    description: "Framework robuste pour le développement frontend.",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8-Qk05l9VitybprvC0UpwBU5kozjQnfgZw&s",
    favori: false,
  },
  {
    id: 7,
    categorie: "framework",
    nom: "Express",
    description: "Framework minimaliste pour Node.js pour le backend.",
    photo:
      "https://cdn.prod.website-files.com/6320125ace536b6ad148eca3/66502d746f57d299fe0e0c31_Image%201-Express.js.webp",
    favori: false,
  },
  {
    id: 8,
    categorie: "framework",
    nom: "Laravel",
    description:
      "Framework PHP pour le développement rapide d'applications web.",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D12AQGwqdLDiBZKtA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678276593453?e=2147483647&v=beta&t=6U96p2twmtL5Vjz-cS_1n8ZLUqksYpsG6RuzDOaihdA",
    favori: false,
  },
  {
    id: 9,
    categorie: "framework",
    nom: "Symfony",
    description: "Framework PHP robuste pour des applications complexes.",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTap5YEo1qiTIXXJbbzt0JtDGpSj5SAXOsTEQ&s",
    favori: false,
  },
  {
    id: 10,
    categorie: "framework",
    nom: "Vue JS",
    description: "Framework frontend progressif et intuitif.",
    photo:
      "https://media.licdn.com/dms/image/D4E12AQGigU1OA-xF8w/article-cover_image-shrink_720_1280/0/1718456594366?e=2147483647&v=beta&t=owy6bK9GDSrN3L5lBXkz69Nxd6rKofiqfuozWpNQ-JY",
    favori: false,
  },
  {
    id: 11,
    categorie: "framework",
    nom: "Flask",
    description: "Framework Python léger pour le développement web.",
    photo:
      "https://nordicapis.com/wp-content/uploads/How-to-Create-an-API-Using-The-Flask-Framework.png",
    favori: false,
  },
  // Bibliothèques
  {
    id: 12,
    categorie: "bibliothèque",
    nom: "React",
    description:
      "Bibliothèque JavaScript pour créer des interfaces utilisateur.",
    photo:
      "https://images.squarespace-cdn.com/content/v1/638f10c47f505a72c6c86073/742d280c-683c-41b0-ac08-c70ee193dbe9/reactJS.jpg",
    favori: false,
  },
  {
    id: 13,
    categorie: "bibliothèque",
    nom: "jQuery",
    description: "Ancienne bibliothèque JS pour manipuler le DOM facilement.",
    photo:
      "https://play-lh.googleusercontent.com/LpgnH_rHqhJzlJ-uWhfMj3w87cu6iWV5m1hr6eos1wmdlqRiF0RsNE1RBmgtsPvyyBI",
    favori: false,
  },
  {
    id: 14,
    categorie: "bibliothèque",
    nom: "GSAP",
    description: "Bibliothèque pour créer des animations complexes.",
    photo:
      "https://i.vimeocdn.com/video/1040210146-81079d347158f2d17a26d39f9e2c39d04a04e61a85d58e274c8d02366b5d1283-d?f=webp",
    favori: true,
  },
  {
    id: 15,
    categorie: "bibliothèque",
    nom: "Three JS",
    description: "Bibliothèque pour le rendu 3D avec WebGL.",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D12AQGydTNHpz5xxQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1671303346598?e=2147483647&v=beta&t=9EetMuzug_cjjc2DP4PTmqGDn9gLEpJyALKo07N_DsE",
    favori: false,
  },
  // Outils de versioning
  {
    id: 16,
    categorie: "outil de versioning",
    nom: "Git",
    description: "Outil pour le contrôle de version des projets.",
    photo: "https://lesjoiesducode.fr/content/046/git-logo.png",
    favori: false,
  },
  {
    id: 17,
    categorie: "outil de versioning",
    nom: "GitHub",
    description: "Plateforme pour héberger et collaborer sur du code.",
    photo:
      "https://beecrowd.com/wp-content/uploads/2024/04/2022-08-18-GitHub.jpg",
    favori: false,
  },
];

// interface CardsList {
//   card: {
//     id: number;
//     categorie: string;
//     nom: string;
//     description: string;
//     photo: string;
//     favori: boolean;
//   };
// }

export default function ArrayCards() {
  const [nom, setNom] = useState("");
  const [categorie, setCategorie] = useState("");
  const [favoriteShow, setFavoriteShow] = useState(false);

  // const [favorite, setFavorite] = useState(card.favori);
  // const handleClickFavorite = () => {
  //   setFavorite(!favorite);
  // };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNom(event.currentTarget.value.toLowerCase());
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategorie(event.currentTarget.value);
  };

  const handleClickFavori = () => {
    setFavoriteShow(!favoriteShow);
  };

  const filteredCards = CardsList.filter((card) =>
    categorie === "" ? card : card.categorie === categorie,
  )
    .filter((card) => card.nom.toLowerCase().includes(nom))
    .filter((card) =>
      favoriteShow === false ? card : card.favori === favoriteShow,
    );

  return (
    <>
      <section className="filter">
        <input
          type="text"
          placeholder="Cherchez un outil"
          onChange={handleChangeName}
        />
        <select onChange={handleChangeType}>
          <option value="">All</option>
          <option value="language">language</option>
          <option value="framework">framework</option>
          <option value="bibliothèque">bibliothèque</option>
          <option value="outil de versioning">outil de versioning</option>
          <option value="favori">favoris</option>
        </select>
        <p>Il y a {filteredCards.length} résultats</p>
        {filteredCards.length === 0 ? (
          <p>Aucun outil correspond à ta recherche</p>
        ) : (
          ""
        )}
        <input type="checkbox" onClick={handleClickFavori} /> <p> favoris </p>
      </section>

      <section className="containerCard">
        {filteredCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </section>
    </>
  );
}
