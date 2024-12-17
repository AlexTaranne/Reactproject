import { useState } from "react";

interface CardsList {
  card: {
    id: number;
    categorie: string;
    nom: string;
    description: string;
    photo: string;
    favori: boolean;
  };
}

export default function Card({ card }: CardsList) {
  const [favorite, setFavorite] = useState(card.favori);
  const handleClickFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div className="cardClass">
      <h2>{card.nom}</h2>
      <img src={card.photo} alt={card.nom} />
      <p>Type : {card.categorie}</p>
      <p>{card.description}</p>
      <button type="button" onClick={handleClickFavorite}>
        <span>{favorite ? "TRUE ❤️" : "FALSE 🖤"}</span>
      </button>
    </div>
  );
}
