import { useState } from 'react'
import UserProfile from '../composant/UserProfile'
import MovieCard from '../composant/MoviesList';

function DBZ() {
  const [rang, setRang] = useState(null);
  const [animeCharacters] = useState([
    { firstName: "Son", lastName: "Goku", country: "Dragon Ball Z / Super", birthDate: "737 (calendrier Saiyan)" },
    { firstName: "Vegeta", lastName: "—", country: "Dragon Ball Z / Super", birthDate: "732 (calendrier Saiyan)" },
    { firstName: "Son", lastName: "Gohan", country: "Dragon Ball Z / Super", birthDate: "757" },
  ]);

  const [secondaryCharacters] = useState([
    { firstName: "Piccolo", lastName: "—", country: "Dragon Ball Z / Super", birthDate: "753" },
    { firstName: "Trunks", lastName: "Briefs", country: "Dragon Ball Z / Super", birthDate: "766" },
    { firstName: "Bulma", lastName: "Briefs", country: "Dragon Ball Z / Super", birthDate: "733" },
  ]);
  const [showSecondary, setShowSecondary] = useState(false);

  const rangs = ["Humain", "Namek", "Saiyan", "Hakaishin", "Ange"];

  const getRangAleatoire = () => {
    const index = Math.floor(Math.random() * rangs.length);
    setRang(rangs[index]);
  };

  const abilities = [
    {
      filmname: "Son Goku",
      datedesortie: "Dragon Ball Z / Super",
      genre: "Saiyan / Guerrier Z",
      syno: "Goku est le guerrier le plus puissant de l'Univers 7, originaire de la planète Vegeta. Sa technique signature est le Kamehameha, une onde d'énergie concentrée d'une puissance dévastatrice. Il maîtrise toutes les formes Super Saiyan jusqu'au Super Saiyan Blue, qui combine la transformation légendaire avec le Haki divin. Son ultime transformation, l'Ultra Instinct, lui permet d'agir et de réagir de façon instinctive sans réfléchir, atteignant une vitesse et une précision quasi divines. Grâce au Kaioken, il peut encore multiplier sa puissance au prix de son corps. Formé par les maîtres les plus grands, Goku est un combattant né, toujours en quête d'adversaires plus forts pour repousser ses propres limites."
    },
    {
      filmname: "Vegeta",
      datedesortie: "Dragon Ball Z / Super",
      genre: "Prince des Saiyans",
      syno: "Vegeta est le Prince des Saiyans, fier et déterminé à surpasser Goku à tout prix. Sa technique emblématique est le Galick Gun, une onde d'énergie violette capable de rivaliser avec le Kamehameha. Il développe le Final Flash, son attaque la plus puissante, et maîtrise toutes les formes Super Saiyan jusqu'au Super Saiyan Blue Évolution. Sa transformation Ultra Ego lui permet d'absorber les dommages pour en tirer de la puissance, reflétant son état d'esprit combatif. Avec le Big Bang Attack et ses variantes, il peut anéantir des adversaires en un seul coup. Stratège hors pair, Vegeta analyse ses ennemis avec précision et s'adapte rapidement, ce qui fait de lui l'un des guerriers les plus complets et redoutables de l'univers."
    },
    {
      filmname: "Son Gohan",
      datedesortie: "Dragon Ball Z / Super",
      genre: "Demi-Saiyan",
      syno: "Gohan est le fils de Goku et possède un potentiel qui dépasse celui de son père selon de nombreux experts. Il fut le premier à atteindre le Super Saiyan 2, lors de son combat légendaire contre Cell, libérant une puissance colossale alimentée par la colère. Sa forme Ultimate, débloquée par le Grand Vieux Kaïoshin, lui permet d'accéder à tout son potentiel sans transformation. Dans Dragon Ball Super : Super Hero, il atteint le Beast Mode, une transformation inédite d'une puissance phénoménale aux yeux rouges caractéristiques. Maîtrisant le Masenko et le Kamehameha, il excelle autant au corps-à-corps qu'à distance. Bien qu'il ait longtemps négligé son entraînement pour ses études, Gohan reste l'un des guerriers les plus puissants de son univers."
    },
  ];

  return (
    <div>
      <h1>Dragon Ball Z</h1>

      <div>
        <h1>Quel est votre rang ?</h1>
        <button onClick={getRangAleatoire}>Découvrez votre rang</button>
        {rang && <h2>Votre rang : {rang}</h2>}

        <h1>Personnages</h1>
        {animeCharacters.map((character, id) => (
          <UserProfile
            key={id}
            firstName={character.firstName}
            lastName={character.lastName}
            country={character.country}
            birthDate={character.birthDate}
          />
        ))}

        <h1>Capacités de combat</h1>
        {abilities.map((ability, id) => (
          <MovieCard
            key={id}
            name={ability.filmname}
            year={ability.datedesortie}
            genre={ability.genre}
            synopsis={ability.syno}
          />
        ))}

        <h1>Personnages secondaires</h1>
        <button onClick={() => setShowSecondary(!showSecondary)}>
          {showSecondary ? 'Hide Characters' : 'Show Characters'}
        </button>
        {showSecondary && secondaryCharacters.map((character, id) => (
          <UserProfile
            key={id}
            firstName={character.firstName}
            lastName={character.lastName}
            country={character.country}
            birthDate={character.birthDate}
          />
        ))}
      </div>
    </div>
  );
}

export default DBZ;