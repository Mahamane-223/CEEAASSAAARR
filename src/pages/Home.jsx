import { useState } from 'react'
import UserProfile from './../composant/UserProfile'
import MovieCard from './../composant/MoviesList';

function Home() {
    const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([
    {firstName: "John", lastName: "Doe", country: "France"},
    {firstName: "Marie", lastName: "Blabla", country: "Germany"},
    {firstName: "Jimel", lastName: "Azerty", country: "UK"},
    {firstName: "Yahya", lastName: "Qwerty", country: "Spain"},
  ]);
  const [showUsers, setShowUsers] = useState(true);
 
  const movies = [
    { filmname: "Le Roi Lion", datedesortie: "1994 ", genre:"Animation/Drame musical", syno:"Simba, un lionceau, doit reprendre sa place de roi après que son oncle Scar a assassiné son père et usurpé le trône." },
    { filmname: "Dragon Ball Super : Super hero", datedesortie: "2022", genre:"Animation / Action / Aventure", syno:"Piccolo et Gohan affrontent les nouveaux androids de l'Armée du Ruban Rouge, pendant que Goku et Vegeta s'entraînent ailleurs dans l'univers." },
    { filmname: "Kpop Demon Hunter", datedesortie: "2025", genre:"Animation / Comédie musicale / Fantastique", syno:"Un trio de K-pop, Rumi, Mira et Zoey, mène une double vie : stars sur scène, chasseuses de démons dans l'ombre, utilisant leur musique pour protéger le monde des créatures qui se nourrissent des âmes humaines. " },
    { filmname: "Flash", datedesortie: "2023", genre:"Super-héros / Action / Science-fiction", syno:"Barry Allen voyage dans le temps pour empêcher la mort de sa mère, mais bouleverse la chronologie et doit affronter les conséquences de ses actes avec plusieurs versions de lui-même et de Batman." },
  ];

    return (
        <div>
            <h1>Home Page</h1>
            <p>This is home page</p>

            <div>
      <h1>Test Section</h1>
      <button
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
          Touch to reduice
      </button>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
          Touch to add
      </button>
      <h2>Count: {counter}</h2>

      <h1>Users list</h1>
      <button
          onClick={() => {
            setShowUsers(!showUsers);
          }}
        >
          {showUsers ? 'Hide Users' : 'Show Users'}
          </button>
      {
        showUsers && users.map((user, id) => (
          <UserProfile
            key={id}
            firstName={user.firstName}
            lastName={user.lastName}
            country={user.country} />
        ))
      }

      <h1>Movies list</h1>
      {
        movies.map((movie, id) => (
          <MovieCard
            key={id}
            name={movies.film}
            year={movies.year}
             />
        ))
      }
    </div>
        </div>
    );
}
export default Home;