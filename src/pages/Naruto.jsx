import { useState } from 'react'
import UserProfile from '../composant/UserProfile'
import MovieCard from '../composant/MoviesList';

function Naruto() {
  const [rang, setRang] = useState(null);
  const [animeCharacters] = useState([
    { firstName: "Naruto", lastName: "Uzumaki", country: "Naruto / Naruto Shippuden", birthDate: "10 octobre" },
    { firstName: "Sasuke", lastName: "Uchiha", country: "Naruto / Naruto Shippuden", birthDate: "23 juillet" },
    { firstName: "Sakura", lastName: "Haruno", country: "Naruto / Naruto Shippuden", birthDate: "28 mars" },
  ]);

  const [secondaryCharacters] = useState([
    { firstName: "Kakashi", lastName: "Hatake", country: "Naruto / Naruto Shippuden", birthDate: "15 septembre" },
    { firstName: "Itachi", lastName: "Uchiha", country: "Naruto / Naruto Shippuden", birthDate: "9 juin" },
    { firstName: "Tsunade", lastName: "Senju", country: "Naruto / Naruto Shippuden", birthDate: "2 août" },
  ]);
  const [showSecondary, setShowSecondary] = useState(false);

  const rangs = ["Genin", "Chunin", "Jonin", "Sannin", "Kage"];

  const getRangAleatoire = () => {
    const index = Math.floor(Math.random() * rangs.length);
    setRang(rangs[index]);
  };

  const abilities = [
    {
      filmname: "Naruto Uzumaki",
      datedesortie: "Naruto / Naruto Shippuden",
      genre: "Ninja / Jinchūriki",
      syno: "Naruto Uzumaki possède des capacités de combat extrêmement variées et puissantes : il dispose d'une immense réserve de chakra grâce à Kurama, ce qui lui permet d'utiliser des techniques comme le Multi Clonage pour submerger ses adversaires et le Rasengan, une attaque concentrée très destructrice. Il renforce encore ses capacités avec le mode ermite, qui améliore sa perception et sa force, ainsi que le mode Kurama, qui augmente considérablement sa vitesse et sa puissance. Doté d'une régénération rapide, d'une grande endurance et d'un style de combat imprévisible, il excelle autant au corps-à-corps qu'à distance, pouvant lancer des attaques de grande ampleur. Grâce à son intelligence tactique et à l'utilisation stratégique de ses clones, il parvient à s'adapter à ses ennemis, ce qui fait de lui l'un des ninjas les plus redoutables de son univers."
    },
    {
      filmname: "Sasuke Uchiha",
      datedesortie: "Naruto / Naruto Shippuden",
      genre: "Ninja / Uchiha",
      syno: "Sasuke Uchiha est un combattant d'élite doté de capacités redoutables : il maîtrise le Sharingan, qui lui permet d'anticiper les mouvements ennemis et de copier des techniques, puis évolue vers le Mangekyō Sharingan lui donnant accès à des pouvoirs comme l'Amaterasu (flammes noires) et le Susanoo, une défense et attaque colossale. Il excelle également dans les techniques de foudre comme le Chidori, qu'il utilise avec une grande précision et rapidité. Grâce au Rinnegan, il obtient des capacités encore plus avancées comme la téléportation et le contrôle de l'espace. Très rapide, intelligent et stratégique, Sasuke est aussi un expert du combat au sabre et du corps-à-corps, combinant puissance, technique et sang-froid, ce qui fait de lui l'un des ninjas les plus dangereux et complets."
    },
    {
      filmname: "Sakura Haruno",
      datedesortie: "Naruto / Naruto Shippuden",
      genre: "Kunoichi / Médecin",
      syno: "Sakura Haruno est une kunoichi spécialisée dans le combat de précision et le soutien médical : formée par Tsunade, elle possède une force surhumaine capable de détruire le sol d'un simple coup de poing grâce à un contrôle parfait de son chakra. Elle excelle également en ninjutsu médical, pouvant soigner rapidement ses alliés et elle-même en plein combat. Grâce au sceau de Byakugō, elle augmente considérablement sa puissance et bénéficie d'une régénération quasi instantanée. Intelligente et dotée d'une excellente analyse, elle sait lire les mouvements ennemis et frapper au moment idéal. Bien qu'elle combatte principalement au corps-à-corps, sa résistance, sa précision et son endurance font d'elle une combattante redoutable et indispensable sur le champ de bataille."
    },
  ];

  return (
    <div>
      <h1>Naruto</h1>

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

export default Naruto;