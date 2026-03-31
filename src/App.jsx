import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './App.css'
import UserProfile from './composant/UserProfile'
import MoviesList from './composant/MoviesList'

function App() {
  const [counter, setCounter] = useState(0)
  const users = [
    { firstName: "Mahamane",   lastName: "Maiga",  birthdate: "24/05" },
    { firstName: "Alhouseyni",   lastName: "Maiga",  birthdate: "13/04" },
    { firstName: "Mamadou",   lastName: "Cisse",  birthdate: "03/07" },
    { firstName: "Amadou", lastName: "Konate", birthdate: "12/08" },
  ];

  const [showUsers, setShowUsers]=useState(true)

  const films = [
    { filmname: "Le Roi Lion", datedesortie: "1994", genre: "Animation / Aventure", syno: "Simba, un jeune lion, doit reprendre sa place de roi après la mort de son père." },
    { filmname: "Titanic",     datedesortie: "1997", genre: "Drame / Romance",       syno: "Jack et Rose tombent amoureux sur le Titanic, un paquebot voué à couler." },
    { filmname: "Spiderman",   datedesortie: "2002", genre: "Super-héros / Action",  syno: "Peter Parker est mordu par une araignée et devient Spider-Man pour sauver New York." },
  ];

  return (
    <div className='test'>
      <h1>Test section</h1>
      <button className='buttoni' onClick={() => {
        setCounter(counter - 1)
        }}>
          Click to substract
          </button>
           <button className='buttoni' onClick={() => {
        setCounter(counter + 1)
        }}>
          Click to add
          </button>
      <h2>Count : {counter}</h2>
      <h1>DohiLand</h1>
      <button className='buttoni'
          onClick={() => {
            setShowUsers(!showUsers)
          }}
        >
          {showUsers ? 'Hide Users' : 'Show Users'}
          </button>
      <h1>Users list</h1>
        {
        showUsers && users.map((user, id) => (
        <UserProfile
          key={id}
          firstName={user.firstName}
          lastName={user.lastName}
          birthdate={user.birthdate}
        />
      ))}

      <h1>Les films</h1>
      {films.map((film, id) => (
        <MoviesList
          key={id}
          filmname={film.filmname}
          datedesortie={film.datedesortie}
          genre={film.genre}
          syno={film.syno}
        />
      ))}
    </div>
  );
}

export default App