import { useState } from 'react'
import UserProfile from '../composant/UserProfile'
import MovieCard from '../composant/MoviesList';

function OnePiece() {
  const [rang, setRang] = useState(null);
  const [animeCharacters] = useState([
    { firstName: "Monkey D.", lastName: "Luffy", country: "One Piece", birthDate: "5 mai" },
    { firstName: "Roronoa", lastName: "Zoro", country: "One Piece", birthDate: "11 novembre" },
    { firstName: "Vinsmoke", lastName: "Sanji", country: "One Piece", birthDate: "2 mars" },
  ]);

  const [secondaryCharacters] = useState([
    { firstName: "Nami", lastName: "—", country: "One Piece", birthDate: "3 juillet" },
    { firstName: "Boa", lastName: "Hancock", country: "One Piece", birthDate: "2 septembre" },
    { firstName: "Shanks", lastName: "Le Roux", country: "One Piece", birthDate: "9 mars" },
  ]);
  const [showSecondary, setShowSecondary] = useState(false);

  const rangs = ["Matelot", "Second", "Capitaine", "Corsaire", "Yonko"];

  const getRangAleatoire = () => {
    const index = Math.floor(Math.random() * rangs.length);
    setRang(rangs[index]);
  };

  const abilities = [
    {
      filmname: "Monkey D. Luffy",
      datedesortie: "One Piece",
      genre: "Pirate / Fruit du Démon",
      syno: "Luffy a mangé le Fruit Gomu Gomu (Hito Hito no Mi modèle Nika), faisant de son corps un caoutchouc. Il développe plusieurs Gears : le Gear 2 booste sa vitesse et sa force en accélérant son flux sanguin, le Gear 3 lui permet de gonfler ses os pour des coups dévastateurs, et le Gear 4 (Boundman, Snakeman, Tankman) combine élasticité et Haki pour des attaques surpuissantes. Son ultime forme, le Gear 5, lui donne une liberté totale en transformant son environnement comme dans un cartoon. Maîtrisant les trois types de Haki — dont le Haki des Rois conquérants à un niveau avancé — Luffy est l'un des pirates les plus redoutables de son époque."
    },
    {
      filmname: "Roronoa Zoro",
      datedesortie: "One Piece",
      genre: "Épéiste / Premier Officier",
      syno: "Zoro est le plus grand épéiste de l'équipage de Luffy et aspire à devenir le meilleur du monde. Il pratique le Santoryu, un style unique à trois sabres qu'il tient en bouche, en main droite et en main gauche. Il maîtrise des techniques dévastatrices comme l'Oni Giri, le Tora Gari et le Three Thousand Worlds. Grâce à son sabre légendaire Enma, il infuse son Haki armement dans ses attaques pour trancher même les adversaires les plus résistants. En mode Asura, il crée l'illusion d'avoir neuf lames et trois têtes, démultipliant sa puissance de façon terrifiante. Son endurance surhumaine et sa capacité à absorber les dommages font de lui un combattant d'une solidité exceptionnelle."
    },
    {
      filmname: "Vinsmoke Sanji",
      datedesortie: "One Piece",
      genre: "Cuisinier / Combattant",
      syno: "Sanji est un combattant hors pair qui n'utilise que ses jambes pour se battre, préservant ainsi ses mains pour la cuisine. Il maîtrise le Diable Jambe, une technique qui enflamme ses jambes par la friction pour des coups brûlants et dévastateurs. Grâce aux modifications génétiques Vinsmoke activées, il accède à l'Ifrit Jambe, combinant ses flammes et son exosquelette pour une puissance décuplée. Doté d'un Haki d'observation exceptionnel lui permettant d'anticiper les attaques, il excelle dans les combats rapides et acrobatiques. Sa vitesse est telle qu'il peut devenir invisible grâce au Stealth Black. Stratège et observateur, Sanji adapte constamment son style aux faiblesses de ses adversaires."
    },
  ];

  return (
    <div>
      <h1>One Piece</h1>

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

export default OnePiece;